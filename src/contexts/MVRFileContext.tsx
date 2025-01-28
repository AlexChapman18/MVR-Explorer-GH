import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

// ProgressSteps Context
export interface MVRFileContextType {
    file: File | undefined; // Should display modal

    // Dispatch: A function that can be used to update the state of a useState or useReducer hook.
    // SetStateAction: The instruction passed to a Dispatch function in useState to tell React what the next value of the useState should be.
    setFile: Dispatch<SetStateAction<File | undefined>>;
}

const MVRFileContext = createContext<MVRFileContextType | undefined>(undefined);

export const MVRFileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [file, setFile] = useState<File | undefined>();

    return (
        <MVRFileContext.Provider
            value={{
                file,
                setFile,
            }}
        >
            {children}
        </MVRFileContext.Provider>
    );
};

export function useMVRFileContext() {
    const context = useContext(MVRFileContext);
    if (!context) {
        throw new Error("useMVRFileContext must be used within a MVRFileProvider");
    }
    return context;
}
