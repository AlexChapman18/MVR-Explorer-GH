import React from "react";
import MVRFolder from "../../icons/icon_mvr_folder.tsx";
import FitScreen from "../../icons/icon_fit_screen.tsx";
import ResetCamera from "../../icons/icon_reset_camera.tsx";
import CameraPerspective from "../../icons/icon_camera_perspective.tsx";
import CameraOrth from "../../icons/icon_camera_orth.tsx";
import Punter from "../../icons/icon_punter.tsx";
import FileUpload from "../actionComponents/FileUpload.tsx";
import TmpButton from "../actionComponents/TmpButton.tsx";
import IActionLogic from "../actionComponents/IAction.ts";
import Examples from "../../icons/icon_examples.tsx";
import { Tooltip } from "react-tooltip";

// All of the actions related to files
const fileActions = [
    { actionLabel: "Open Local MVR", ActionIcon: MVRFolder, ActionElement: FileUpload, active: true },
    {
        actionLabel: "Open Example MVR",
        ActionIcon: Examples,
        ActionElement: TmpButton,
        actionClasses: "scale-110",
        active: false,
    },
];

// All actions related to camera
const cameraActions = [
    { actionLabel: "Fit MVR to Screen", ActionIcon: FitScreen, ActionElement: TmpButton, active: false },
    { actionLabel: "Reset Camera", ActionIcon: ResetCamera, ActionElement: TmpButton, active: false },
    {
        actionLabel: "Camera Perspective",
        ActionIcon: CameraPerspective,
        ActionElement: TmpButton,
        actionClasses: "rotate-25",
        active: false,
    },
    {
        actionLabel: "Camera Orthographic",
        ActionIcon: CameraOrth,
        ActionElement: TmpButton,
        actionClasses: "rotate-25",
        active: false,
    },
];

// All actions related to Punter POV
const punterActions = [{ actionLabel: "Punter POV", ActionIcon: Punter, ActionElement: TmpButton, active: false }];

// Components of an Action
/**
 * @param {IActionButton} props - The hover label
 * @returns {JSX.Element} JSC Action
 */

function CreateActionButton(props: IActionButton): JSX.Element {
    return props.ActionElement(
        props.ActionIcon,
        "p-3 actions-tooltip-anchor hover:bg-gray-800 transition-colors duration-100 " +
            (props.active ? "cursor-pointer" : "cursor-not-allowed"),
        "h-5 w-auto fill-white " + (props.active ? "" : "opacity-15 ") + props.actionClasses,
        (props.active ? "" : "WIP: \n ") + props.actionLabel,
    );
}

interface IActionButton {
    actionLabel: string; // Label when hovering over ActionButton
    ActionIcon: ({ classes }: { classes?: string | undefined }) => JSX.Element; // ActionButton Icon
    ActionElement: IActionLogic; // Action Button Logic
    actionClasses?: string; // Additional classes for customising action Icon
    active: boolean;
}

// White vertical separator line
function Separator() {
    return (
        <div className="flex mx-2">
            <div className="my-auto h-7/10 w-[2px] bg-white rounded-xl"></div>
        </div>
    );
}

// Create the Action Bar
function Actions() {
    return (
        <div className="bg-primary-dark dark:text-white flex">
            {/* Add keys to elements, to allow for better DOM updating */}
            {fileActions.map((action) => React.cloneElement(CreateActionButton(action), { key: action.actionLabel }))}
            <Separator />
            {cameraActions.map((action) => React.cloneElement(CreateActionButton(action), { key: action.actionLabel }))}
            <Separator />
            {punterActions.map((action) => React.cloneElement(CreateActionButton(action), { key: action.actionLabel }))}
            <Tooltip anchorSelect=".actions-tooltip-anchor" delayShow={300} place="bottom-start" />
        </div>
    );
}

export default Actions;
