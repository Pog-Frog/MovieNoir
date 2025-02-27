import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootLayout;