import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer.tsx";

const RootLayout = () => {
    
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-col"> {/* // md:pt-32 pt-36 */}
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default RootLayout;