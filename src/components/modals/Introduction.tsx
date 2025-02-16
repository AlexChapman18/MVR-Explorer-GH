import { useState } from "react";

function Introduction() {
    const [introOpen, setIntroOpen] = useState(true);

    function closeIntro() {
        setIntroOpen(false);
    }

    return (
        <div
            id="timeline-modal"
            tabIndex={-1}
            className={
                "transition-all duration-100 ease-in-out overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black/50 " +
                (introOpen ? "" : "hidden")
            }
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Welcome to MVR Explorer!
                        </h3>
                        <button
                            type="button"
                            className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                            onClick={closeIntro}
                        >
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            This website that allows you to view <b>M</b>y <b>V</b>irtual <b>R</b>ig (MVR) files in 3D
                            without the need for dedicated software!
                            {/* "The <b>M</b>y <b>V</b>irtual <b>R</b>ig (MVR) format is a file format that is used to share
                            data for a scene between a lighting console, a visualizer, a CAD program or similar tools." */}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The site is currently in the early stages of development with very limited features:
                        </p>
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <b>Current features:</b>
                            <li>Load MVR File (Without Fixtures)</li>
                        </ul>
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <b>Features in development:</b>
                            <li>Load MVR File (With Fixtures)</li>
                            <li>Camera reset button functionality</li>
                            <li>Example MVR Files</li>
                            <li>Toggle visibility of MVR Layers</li>
                        </ul>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            If you have any questions, issues or recommendations, do not hesitate to contact me via the{" "}
                            <b>Contact</b> button on the navigation bar.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <b>Privacy and Data Security:</b> All files uploaded are processed locally in the browser
                            and not shared to any server.
                        </p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            data-modal-hide="default-modal"
                            type="button"
                            className="transition-colors duration-100 cursor-pointer mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={closeIntro}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
