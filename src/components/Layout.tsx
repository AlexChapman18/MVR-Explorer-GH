// ---- Imports ----

// Components
import Navigation from "./Navigation.tsx";
// import Footer from "../components/Footer";

function Layout({ children }: { children: JSX.Element[] }) {
    return (
        <>
            <Navigation />
            <main className="flex flex-col flex-grow min-h-0 min-w-0">{children}</main>
            {/* <Footer /> */}
        </>
    );
}

export default Layout;
