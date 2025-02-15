import { useState } from "react";

import Arrow from "../../icons/icon_arrow.tsx";

function RightBar() {
    const [selectedPage, setPage] = useState(EPage.DETAILS);
    const [sidebarOpen, setSideBarOpen] = useState(true);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div className="flex max-md:hidden">
            <button
                className="transition-colors duration-300 hover:bg-gray-700 my-auto h-20 bg-primary-dark cursor-pointer"
                onClick={handleViewSidebar}
            >
                <Arrow
                    classes={"transition-transform duration-300 fill-white " + (sidebarOpen ? "" : "rotate-180")}
                ></Arrow>
            </button>

            <div
                className={
                    "transition-all duration-300 overflow-hidden ease-in-out " + (sidebarOpen ? "max-w-xs" : "max-w-0")
                }
            >
                <div className="pe-5">
                    <div className="border-b border-gray-200 dark:border-primary-light">
                        <ul className="flex text-center text-xl dark:text-primary-light">
                            <Page thisPage={EPage.DETAILS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                            <Page thisPage={EPage.SETTINGS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                            <Page thisPage={EPage.LAYERS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                        </ul>
                    </div>
                </div>
                <PageContent selectedPage={selectedPage}></PageContent>
            </div>
        </div>
    );
}

export enum EPage {
    DETAILS = "Details",
    SETTINGS = "Settings",
    LAYERS = "Layers",
}

function Page({ thisPage = EPage.DETAILS, selectedPage = EPage.DETAILS, pageFunction = (_: EPage) => {} }) {
    function handleClick() {
        pageFunction(thisPage);
    }

    return (
        <li className="">
            <button
                className={
                    "inline-flex items-center justify-center px-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-white hover:border-gray-300 group " +
                    (thisPage == selectedPage ? "dark:text-white dark:border-gray-300" : "")
                }
                onClick={handleClick}
            >
                {thisPage}
            </button>
        </li>
    );
}

function PageContent({ selectedPage = EPage.DETAILS }) {
    switch (selectedPage) {
        case EPage.DETAILS:
            return <DetailsPage />;
        case EPage.SETTINGS:
            return <SettingsPage />;
        case EPage.LAYERS:
            return <LayersPage />;
        default:
            return <LayersPage />;
    }
}

function DetailsPage() {
    return <div className="dark:text-white">Details - WIP</div>;
}

function SettingsPage() {
    return <div className="dark:text-white">Settings - WIP</div>;
}

function LayersPage() {
    return <div className="dark:text-white">Layers - WIP</div>;
}

export default RightBar;
