// ---- Imports ----

// Components
import Navigation from "./Navigation.tsx";
// import Footer from "../components/Footer";

function Layout({ children }) {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
