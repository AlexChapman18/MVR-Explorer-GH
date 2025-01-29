import React, { createContext, useState, useContext } from "react";

export enum StepName {
    EXTRACTING_MVR,
    FETCHING_FIXTURES,
    LOADING_MODELS,
    DRAWING_MODELS,
}

// Status of
export enum StepStatus {
    IDLE,
    PENDING,
    SUCCESS,
    ERROR,
}

// Progress Step, i.e. "Extracting MVR"
export interface ProgressStep {
    status: StepStatus;
    numFilesProcessed: number;
    numFilesToProcess: number;
}

// ProgressSteps Context
export interface ProgressStepsContextType {
    isVisible: boolean; // Should display modal
    MVRName: string; // Name of MVR being extracted
    progressSteps: ProgressStep[]; // Each of the stages for loading an MVR
    setVisibility: (state: boolean) => void;
    setMVRName: (str: string) => void;
    setProgressStatus: (index: number, status: StepStatus) => void; // Set the Status of the Progress Step
    setNumFilesProcessed: (index: number, numFilesProcessed: number) => void; // Set the number of files processed
    setNumFilesToProcess: (index: number, numFilesToProcess: number) => void; // Set the number of files to process
    startProgressSteps: () => void;
    finishProgressSteps: () => void;
}

const ProgressStepsContext = createContext<ProgressStepsContextType | undefined>(undefined);

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

export const useProgressStepsContext = () => {
    const context = useContext(ProgressStepsContext);
    if (!context) {
        throw new Error("useProgressStepsContext must be used within a ProgressStepsProvider");
    }
    return context;
};
