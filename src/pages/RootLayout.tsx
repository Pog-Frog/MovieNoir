import { Outlet } from "react-router";
import Header from "../components/header";

const RootLayout = () => {
    
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-col"> {/* // md:pt-32 pt-36 */}
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default RootLayout;