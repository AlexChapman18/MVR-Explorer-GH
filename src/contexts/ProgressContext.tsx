import React, { useState } from "react";
import { StepName, StepStatus, ProgressStep, ProgressStepsContext } from "./ProgressContextUtils.ts";

export const ProgressStepsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
    const [MVRName, setMVRName] = useState("");
    const [progressSteps, setProgressSteps] = useState<ProgressStep[]>([
        { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
        { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
        { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
        { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
    ]);

    // Set the Status of the Progress Step
    function setProgressStatus(step: StepName, status: StepStatus) {
        setProgressSteps((prev) => {
            const newProgressSteps = [...prev];
            newProgressSteps[step]!.status = status;
            return newProgressSteps;
        });
    }

    // Set the number of files processed
    function setNumFilesProcessed(step: StepName, numFilesProcessed: number) {
        setProgressSteps((prev) => {
            const newProgressSteps = [...prev];
            newProgressSteps[step]!.numFilesProcessed = numFilesProcessed;
            return newProgressSteps;
        });
    }

    // Set the number of files to process
    function setNumFilesToProcess(step: StepName, numFilesToProcess: number) {
        setProgressSteps((prev) => {
            const newProgressSteps = [...prev]; // Create newProgress obj
            newProgressSteps[step]!.numFilesToProcess = numFilesToProcess; // Create set value of ...
            return newProgressSteps;
        });
    }

    function startProgressSteps() {
        setProgressSteps([
            { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
            { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
            { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
            { status: StepStatus.IDLE, numFilesProcessed: 0, numFilesToProcess: 1 },
        ]);
        setVisibility(true);
    }

    function finishProgressSteps() {
        setVisibility(false);
    }

    return (
        <ProgressStepsContext.Provider
            value={{
                isVisible,
                MVRName,
                progressSteps,
                setVisibility,
                setMVRName,
                setProgressStatus,
                setNumFilesProcessed,
                setNumFilesToProcess,
                startProgressSteps,
                finishProgressSteps,
            }}
        >
            {children}
        </ProgressStepsContext.Provider>
    );
};
