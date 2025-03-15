import { Outlet } from "react-router";
import Header from "../components/header";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootLayout;