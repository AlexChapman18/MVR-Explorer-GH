import ProgressSection from "./modal_components/ProgressSection.tsx";
import { useProgressStepsContext, StepName } from "../../contexts/ProgressContext.tsx";

function LoadingMVR() {
    const { isVisible, MVRName, progressSteps } = useProgressStepsContext();

    return isVisible ? (
        <div
            id="timeline-modal"
            tabIndex={-1}
            className="transition-all duration-100 ease-in-out overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Loading: </h3>
                        <h4 className="text-lg text-gray-900 dark:text-white">{MVRName}</h4>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <ol className="relative border-s border-gray-200 dark:border-gray-600 ms-3.5 mb-4 md:mb-5">
                            <ProgressSection
                                title={"Extracting MVR"}
                                status={progressSteps[StepName.EXTRACTING_MVR]?.status}
                                displayCurrentFileNum={progressSteps[StepName.EXTRACTING_MVR]?.numFilesProcessed}
                                displayTotalNumFiles={progressSteps[StepName.EXTRACTING_MVR]?.numFilesToProcess}
                            />
                            <ProgressSection
                                title={"Fetching Fixtures"}
                                status={progressSteps[StepName.FETCHING_FIXTURES]?.status}
                                displayCurrentFileNum={progressSteps[StepName.FETCHING_FIXTURES]?.numFilesProcessed}
                                displayTotalNumFiles={progressSteps[StepName.FETCHING_FIXTURES]?.numFilesToProcess}
                            />
                            <ProgressSection
                                title={"Loading Models"}
                                status={progressSteps[StepName.LOADING_MODELS]?.status}
                                displayCurrentFileNum={progressSteps[StepName.LOADING_MODELS]?.numFilesProcessed}
                                displayTotalNumFiles={progressSteps[StepName.LOADING_MODELS]?.numFilesToProcess}
                            />
                            <ProgressSection
                                title={"Drawing Models"}
                                status={progressSteps[StepName.DRAWING_MODELS]?.status}
                                displayCurrentFileNum={progressSteps[StepName.DRAWING_MODELS]?.numFilesProcessed}
                                displayTotalNumFiles={progressSteps[StepName.DRAWING_MODELS]?.numFilesToProcess}
                            />
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default LoadingMVR;
