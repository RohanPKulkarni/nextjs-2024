'use client';

import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import 'chart.js/auto';

const Dashboard = () => {
  const [avgSgpaByBranch, setAvgSgpaByBranch] = useState({});
  const [avgSgpaBySemester, setAvgSgpaBySemester] = useState({});
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [topStudents, setTopStudents] = useState([]);
  const [meanGrades, setMeanGrades] = useState({});
  const [branchSemesterAvg, setBranchSemesterAvg] = useState({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function loadGeneral() {
      const branchData = await fetch('/preprocessed/average_sgpa_by_branch_overall.json').then(r => r.json());
      setAvgSgpaByBranch(branchData);

      const semesterData = await fetch('/preprocessed/average_sgpa_by_semester_all_branches.json').then(r => r.json());
      setAvgSgpaBySemester(semesterData);

      const top3Data = await fetch('/preprocessed/top3_students.json').then(r => r.json());
      const allBranches = Object.keys(top3Data).filter(b => b !== 'Unknown');
      setBranches(allBranches);

      if (allBranches.length > 0) {
        setSelectedBranch(allBranches[0]);
        const sems = Object.keys(top3Data[allBranches[0]]).map(Number).sort((a, b) => a - b);
        setSemesters(sems);
        if (sems.length > 0) {
          setSelectedSemester(sems[0]);
        }
      }
    }
    loadGeneral();
  }, []);

  useEffect(() => {
    async function loadBranchData() {
      if (!selectedBranch || !selectedSemester) return;

      const top3Data = await fetch('/preprocessed/top3_students.json').then(r => r.json());
      const meanGradesData = await fetch('/preprocessed/mean_grades_by_branch.json').then(r => r.json());
      const branchSemAvg = await fetch('/preprocessed/average_sgpa_by_branch_semester.json').then(r => r.json());

      setTopStudents(top3Data[selectedBranch]?.[selectedSemester] || []);
      setMeanGrades(meanGradesData[selectedBranch]?.[selectedSemester] || {});
      setBranchSemesterAvg(branchSemAvg[selectedBranch] || {});
    }
    loadBranchData();
  }, [selectedBranch, selectedSemester]);

  // Helper to truncate long course names
  function truncateText(text, maxLength = 15) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
  }

  const yAxisOptions = {
    min: 7,
    max: 10,
    title: {
      display: true,
      text: 'SGPA',
      font: { size: 16 }
    },
    ticks: { stepSize: 1 },
  };

  const avgSgpaBranchData = {
    labels: Object.keys(avgSgpaByBranch),
    datasets: [{
      label: 'Average SGPA',
      data: Object.values(avgSgpaByBranch).map(Number),
      backgroundColor: 'rgba(37,99,235,0.7)',
      borderRadius: 4,
      maxBarThickness: 30,
    }],
  };

  const branchBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'SGPA vs Branch',
        font: { size: 16 }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Branch', font: { size: 14 } }
      },
      y: yAxisOptions,
    },
  };

  const sortedSemesters = Object.keys(avgSgpaBySemester).sort((a, b) => Number(a) - Number(b));
  const avgSgpaSemesterData = {
    labels: sortedSemesters,
    datasets: [{
      label: 'Average SGPA',
      data: sortedSemesters.map(s => Number(avgSgpaBySemester[s])),
      fill: false,
      borderColor: 'rgba(234,179,8,0.9)',
      backgroundColor: 'rgba(234,179,8,0.3)',
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 7,
    }],
  };

  const semesterLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'SGPA vs Semester',
        font: { size: 16 }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Semester', font: { size: 14 } }
      },
      y: yAxisOptions,
    },
  };

  const branchSemestersSorted = Object.keys(branchSemesterAvg).map(Number).sort((a, b) => a - b);
  const branchSgpaSemesterData = {
    labels: branchSemestersSorted,
    datasets: [{
      label: `${selectedBranch} Avg SGPA`,
      data: branchSemestersSorted.map(s => Number(branchSemesterAvg[s])),
      fill: false,
      borderColor: 'rgba(16,185,129,0.8)',
      backgroundColor: 'rgba(16,185,129,0.3)',
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 7,
    }],
  };

  const branchLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
      title: {
        display: true,
        text: `SGPA vs Semester (${selectedBranch})`,
        font: { size: 16 }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Semester', font: { size: 14 } }
      },
      y: yAxisOptions,
    },
  };

  const maxCourses = windowWidth < 768 ? 9 : 11;

  const meanGradesArr = Object.entries(meanGrades)
    .map(([code, info]) => ({
      courseCode: code,
      courseName: info.courseName || code,
      averageNumeric: info.averageNumeric || 0,
      studentCount: info.studentCount || 0,
    }))
    .sort((a, b) => b.studentCount - a.studentCount)
    .slice(0, maxCourses);

  const courseGradeData = {
    labels: meanGradesArr.map(c => truncateText(c.courseName, 15)),
    datasets: [{
      label: 'Average Numeric Grade',
      data: meanGradesArr.map(c => c.averageNumeric),
      backgroundColor: 'rgba(245,158,11,0.85)',
      borderRadius: 4,
      maxBarThickness: 15,
      barPercentage: 0.5,
      categoryPercentage: 0.6,
    }],
  };

  const courseBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: windowWidth < 640 ? 'y' : 'x', // horizontal on small screens
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'Course vs Numeric Grade',
        font: { size: 16 }
      }
    },
    scales: {
      x: windowWidth < 640 ? {
        ...yAxisOptions,
        title: { display: true, text: 'Average Numeric Grade', font: { size: 14 } },
        grid: { display: true },
        min: 7,
        max: 10,
        ticks: { stepSize: 1 },
      } : {
        title: { display: true, text: 'Course', font: { size: 14 } },
        ticks: { maxRotation: 45, minRotation: 30, autoSkip: false },
        grid: { display: false },
      },
      y: windowWidth < 640 ? {
        title: { display: true, text: 'Course', font: { size: 14 } },
        ticks: { autoSkip: false },
        grid: { display: false },
      } : {
        ...yAxisOptions,
        title: { display: true, text: 'Average Numeric Grade', font: { size: 14 } },
        grid: { display: true }
      }
    },
  };

  return (
    <main className="max-w-7xl mx-auto p-2 md:p-6 space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-blue-900 mb-6 text-center break-words">
        Academic Dashboard
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="w-full h-52 md:h-64">
            <Bar data={avgSgpaBranchData} options={branchBarOptions} />
          </div>
        </Card>
        <Card className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="w-full h-52 md:h-64">
            <Line data={avgSgpaSemesterData} options={semesterLineOptions} />
          </div>
        </Card>
      </section>

      <Card className="p-4 rounded-xl shadow-lg bg-white">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Branch:</span>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-semibold" htmlFor="semester-select">Semester:</label>
            <Select
              id="semester-select"
              value={String(selectedSemester)}
              onValueChange={val => setSelectedSemester(Number(val))}
              className="w-28"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {branchSemestersSorted.map(sem => (
                  <SelectItem key={sem} value={String(sem)}>Semester {sem}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Top 3 Students stylish text list */}
          <div className="rounded-xl bg-green-50 p-6 flex flex-col justify-center shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-800 text-center">Top 3 Students</h3>
            {topStudents.length > 0 ? (
              <ol className="list-decimal list-inside space-y-3 text-gray-800">
                {topStudents.map(({ Name, USN, SGPA }) => (
                  <li
                    key={USN}
                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <span className="font-bold text-lg">{Name}</span>
                      <span className="text-sm text-gray-500 sm:ml-4">{USN}</span>
                    </div>
                    <div className="mt-1 text-green-700 font-semibold">SGPA: {SGPA}</div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-600 text-center">No student data available for this semester.</p>
            )}
          </div>

          {/* SGPA vs Semesters (branch line chart) */}
          <div className="rounded-xl bg-blue-50 p-4">
            <div className="w-full h-44 md:h-56">
              <Line data={branchSgpaSemesterData} options={branchLineOptions} />
            </div>
          </div>
        </section>

        {/* Courses bar chart responsive orientation */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-orange-800 text-center">
            Course Grade Distribution
          </h3>
          <div className="w-full min-w-[320px] overflow-auto h-64 md:h-72 px-1 md:px-0 pr-12">
            {meanGradesArr.length > 0 ? (
              <Bar
                data={courseGradeData}
                options={courseBarOptions}
                key={windowWidth < 640 ? 'horizontal' : 'vertical'}
              />
            ) : (
              <p className="text-gray-600">No course grade data available for this semester.</p>
            )}
          </div>
        </section>
      </Card>
    </main>
  );
};

export default Dashboard;
