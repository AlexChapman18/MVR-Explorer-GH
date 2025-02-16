import { createContext, useContext } from "react";

// Progress Step, i.e. "Extracting MVR"
export interface ProgressStep {
    status: StepStatus;
    numFilesProcessed: number;
    numFilesToProcess: number;
}

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

export const useProgressStepsContext = () => {
    const context = useContext(ProgressStepsContext);
    if (!context) {
        throw new Error("useProgressStepsContext must be used within a ProgressStepsProvider");
    }
    return context;
};

export const ProgressStepsContext = createContext<ProgressStepsContextType | undefined>(undefined);
