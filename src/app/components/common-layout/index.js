import Header from "../header";
   

export default async function CommonLayout({children}){

    return(
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            <Header/>
            <main>{children}</main>
        </div>
    );
}
