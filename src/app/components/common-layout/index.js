import Header from "../header";

async function fetchListOfAidsSems() {
  try {
    const apiResponse = await fetch("https://noterit.vercel.app/api/getaids-sem/route.js", {
      method: "GET",
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchListOfAimlSems() {
  try {
    const apiResponse = await fetch("https://noterit.vercel.app/api/getaiml-sem/route.js", {
      method: "GET",
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}



export default async function CommonLayout({children}){

    const aidssemesters = await fetchListOfAidsSems();
    const aimlsemesters = await fetchListOfAimlSems();

    return(
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            <Header aidssemesters={aidssemesters} aimlsemesters={aimlsemesters}/>
            <main>{children}</main>

        </div>
    );
}