import Header from "../header";
import { fetchaidssemesters,fetchaimlsemesters } from "@/actions";
   

export default async function CommonLayout({children}){

    const aidssemesters = await fetchaidssemesters();
    const aimlsemesters = await fetchaimlsemesters();

    return(
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            <Header aidssemesters={aidssemesters} aimlsemesters={aimlsemesters}/>
            <main>{children}</main>
        </div>
    );
}
