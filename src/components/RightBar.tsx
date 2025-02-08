import { useState } from "react";

function RightBar() {
    const [selectedPage, setPage] = useState(EPage.DETAILS);

    return (
        <div className="bg-primary dark:text-white">
            <div className="border-b border-gray-200 dark:border-gray-700 mx-2">
                <ul className="flex text-center text-xl dark:text-gray-400">
                    <Page thisPage={EPage.DETAILS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                    <Page thisPage={EPage.SETTINGS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                    <Page thisPage={EPage.LAYERS} selectedPage={selectedPage} pageFunction={setPage}></Page>
                </ul>
            </div>
            <PageContent selectedPage={selectedPage}></PageContent>
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
                    "inline-flex items-center justify-center px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-white hover:border-gray-300 group " +
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
    return <div className="dark:text-white">Details</div>;
}

function SettingsPage() {
    return <div className="dark:text-white">Settings</div>;
}

function LayersPage() {
    return <div className="dark:text-white">Layers</div>;
}

export default RightBar;
