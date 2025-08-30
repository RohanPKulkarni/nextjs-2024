import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const gradeMap = {
  "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6,
  "C": 5, "P": 4, "Pass": 3, "F": 0
};

const numericToGrade = Object.entries(gradeMap).reduce((acc, [k, v]) => {
  acc[v] = k;
  return acc;
}, {});

const branches = ['AD', 'AI', 'CS', 'IS', 'CI', 'CY'];

function getBranch(usn) {
  for (const branch of branches) {
    if (usn.includes(branch)) return branch;
  }
  return 'Unknown';
}

function mean(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export async function preprocess() {
  const filePath = path.resolve('public', 'documents', 'results.json');
  const rawData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(rawData);
  const students = data.students;

  const topStudents = {};
  branches.forEach(branch => { topStudents[branch] = {}; });
  topStudents['Unknown'] = {};

  const coursesByBranch = {};
  branches.forEach(branch => { coursesByBranch[branch] = {}; });
  coursesByBranch['Unknown'] = {};

  const courseNamesByBranchSemester = {};
  branches.forEach(branch => { courseNamesByBranchSemester[branch] = {}; });
  courseNamesByBranchSemester['Unknown'] = {};

  // For SGPA averages per semester per branch
  const sgpaStats = {};
  branches.forEach(branch => { sgpaStats[branch] = {}; });
  sgpaStats['Unknown'] = {};

  // For overall average SGPA per branch (semesters 2 to 8)
  const overallSgpaStats = {};
  branches.forEach(branch => { overallSgpaStats[branch] = []; });
  overallSgpaStats['Unknown'] = [];

  // For average SGPA per semester across all branches combined
  const sgpaBySemesterAllBranches = {};

  students.forEach(student => {
    const branch = getBranch(student.USN);
    if (!topStudents[branch]) topStudents[branch] = {};
    if (!coursesByBranch[branch]) coursesByBranch[branch] = {};
    if (!courseNamesByBranchSemester[branch]) courseNamesByBranchSemester[branch] = {};
    if (!sgpaStats[branch]) sgpaStats[branch] = {};
    if (!overallSgpaStats[branch]) overallSgpaStats[branch] = [];

    if (!student.Semesters) return;

    student.Semesters.forEach(sem => {
      const semNum = Number(sem.Semester);
      if (semNum === 1) return; // Skip first semester

      if (sem.SGPA !== undefined && sem.SGPA !== null) {
        if (!sgpaBySemesterAllBranches[semNum]) sgpaBySemesterAllBranches[semNum] = [];
        sgpaBySemesterAllBranches[semNum].push(Number(sem.SGPA));
      }

      if (!topStudents[branch][semNum]) topStudents[branch][semNum] = [];
      if (!coursesByBranch[branch][semNum]) coursesByBranch[branch][semNum] = {};
      if (!courseNamesByBranchSemester[branch][semNum]) courseNamesByBranchSemester[branch][semNum] = {};
      if (!sgpaStats[branch][semNum]) sgpaStats[branch][semNum] = [];

      if (sem.SGPA !== undefined && sem.SGPA !== null) {
        const sgpaValue = Number(sem.SGPA);
        sgpaStats[branch][semNum].push(sgpaValue);
        if (semNum >= 2 && semNum <= 8) {
          overallSgpaStats[branch].push(sgpaValue);
        }
      }

      topStudents[branch][semNum].push({
        Name: student.Name,
        USN: student.USN,
        SGPA: sem.SGPA || 0,
      });

      if (sem.Courses) {
        sem.Courses.forEach(course => {
          if (!coursesByBranch[branch][semNum][course.Course_Code]) {
            coursesByBranch[branch][semNum][course.Course_Code] = [];
          }
          const gradeValue = gradeMap[course.Grade];
          if (gradeValue !== undefined) {
            coursesByBranch[branch][semNum][course.Course_Code].push(gradeValue);
          }

          if (!courseNamesByBranchSemester[branch][semNum][course.Course_Code]) {
            courseNamesByBranchSemester[branch][semNum][course.Course_Code] = course.Course_Name || null;
          }
        });
      }
    });
  });

  // Sort and keep top 3 by SGPA per branch per semester
  Object.entries(topStudents).forEach(([branch, semesters]) => {
    const normalizedSemesters = {};
    Object.entries(semesters).forEach(([semKey, studentsArr]) => {
      const semNum = Number(semKey);
      normalizedSemesters[semNum] = studentsArr.sort((a, b) => b.SGPA - a.SGPA).slice(0, 3);
    });
    topStudents[branch] = normalizedSemesters;
  });

  // Calculate mean grades per branch-semester-course with course name and student count included
  const meanGradesByBranch = {};
  Object.entries(coursesByBranch).forEach(([branch, semesters]) => {
    const normalizedSemesters = {};
    Object.entries(semesters).forEach(([semKey, courses]) => {
      const semNum = Number(semKey);
      const coursesArray = [];
      Object.entries(courses).forEach(([courseCode, grades]) => {
        const avg = mean(grades);
        coursesArray.push({
          courseCode,
          courseName: courseNamesByBranchSemester[branch]?.[semNum]?.[courseCode] || null,
          averageNumeric: avg === null ? null : Number(avg.toFixed(2)),
          averageGrade: avg === null
            ? null
            : numericToGrade[Math.round(avg)] || avg.toFixed(2),
          studentCount: grades.length,
        });
      });

      // Sort courses by studentCount descending
      coursesArray.sort((a, b) => b.studentCount - a.studentCount);

      // Convert back to object with courseCode keys in sorted order
      const sortedCoursesObj = {};
      coursesArray.forEach(course => {
        sortedCoursesObj[course.courseCode] = {
          courseName: course.courseName,
          averageNumeric: course.averageNumeric,
          averageGrade: course.averageGrade,
          studentCount: course.studentCount,
        };
      });
      normalizedSemesters[semNum] = sortedCoursesObj;
    });
    meanGradesByBranch[branch] = normalizedSemesters;
  });

  // Calculate average SGPA for every semester of every branch (ignore first semester)
  const averageSgpaByBranchSemester = {};
  Object.entries(sgpaStats).forEach(([branch, semesters]) => {
    averageSgpaByBranchSemester[branch] = {};
    Object.entries(semesters).forEach(([semNum, sgpaArr]) => {
      averageSgpaByBranchSemester[branch][semNum] = mean(sgpaArr)?.toFixed(2) ?? null;
    });
  });

  // Calculate average SGPA of every branch across semesters 2 to 8 (inclusive)
  const averageSgpaByBranchOverall = {};
  Object.entries(overallSgpaStats).forEach(([branch, sgpaArr]) => {
    averageSgpaByBranchOverall[branch] = mean(sgpaArr)?.toFixed(2) ?? null;
  });

  // Calculate average SGPA per semester across all branches combined
  const averageSgpaBySemesterAllBranches = {};
  Object.entries(sgpaBySemesterAllBranches).forEach(([semNum, sgpaArr]) => {
    averageSgpaBySemesterAllBranches[semNum] = mean(sgpaArr)?.toFixed(2) ?? null;
  });

  // Save outputs including overall branch averages and combined semester averages
  const outputDir = path.resolve('preprocessed');
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'top3_students.json'), JSON.stringify(topStudents, null, 2));
  await fs.writeFile(path.join(outputDir, 'mean_grades_by_branch.json'), JSON.stringify(meanGradesByBranch, null, 2));
  await fs.writeFile(path.join(outputDir, 'average_sgpa_by_branch_semester.json'), JSON.stringify(averageSgpaByBranchSemester, null, 2));
  await fs.writeFile(path.join(outputDir, 'average_sgpa_by_branch_overall.json'), JSON.stringify(averageSgpaByBranchOverall, null, 2));
  await fs.writeFile(path.join(outputDir, 'average_sgpa_by_semester_all_branches.json'), JSON.stringify(averageSgpaBySemesterAllBranches, null, 2));

  console.log(`Preprocessing complete. Files saved to ${outputDir}`);

  return {
    topStudents,
    meanGradesByBranch,
    averageSgpaByBranchSemester,
    averageSgpaByBranchOverall,
    averageSgpaBySemesterAllBranches,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  preprocess().catch(console.error);
}
