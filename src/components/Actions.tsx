import MVRFile from "../icons/icon_mvr_file.tsx";
import MVRFolder from "../icons/icon_mvr_folder.tsx";
import FitScreen from "../icons/icon_fit_screen.tsx";
import ResetCamera from "../icons/icon_reset_camera.tsx";
import CameraPerspective from "../icons/icon_camera_perspective.tsx";
import CameraOrth from "../icons/icon_camera_orth.tsx";
import Punter from "../icons/icon_punter.tsx";
import FileUpload from "./actionComponents/FileUpload.tsx";
import TmpButton from "./actionComponents/TmpButton.tsx";
import IActionLogic from "./actionComponents/IAction.ts";

// All of the actions related to files
const fileActions = [
    { actionLabel: "Open Local MVR", ActionIcon: MVRFile, ActionElement: FileUpload },
    { actionLabel: "Open Example MVR", ActionIcon: MVRFolder, ActionElement: TmpButton },
];

// All actions related to camera
const cameraActions = [
    { actionLabel: "Fit MVR to Screen", ActionIcon: FitScreen, ActionElement: TmpButton },
    { actionLabel: "Reset Camera", ActionIcon: ResetCamera, ActionElement: TmpButton },
    {
        actionLabel: "Camera Perspective",
        ActionIcon: CameraPerspective,
        ActionElement: TmpButton,
        actionClasses: "rotate-25",
    },
    {
        actionLabel: "Camera Orthographic",
        ActionIcon: CameraOrth,
        ActionElement: TmpButton,
        actionClasses: "rotate-25",
    },
];

// All actions related to Punter POV
const punterActions = [{ actionLabel: "Punter POV", ActionIcon: Punter, ActionElement: TmpButton }];

// Components of an Action
/**
 * @param {IActionButton} props - The hover label
 * @returns {JSX.Element} JSC Action
 */
function CreateActionButton(props: IActionButton): JSX.Element {
    return props.ActionElement(
        props.ActionIcon,
        "p-3 hover:bg-gray-800",
        "fill-white h-6 w-auto " + props.actionClasses,
    );
}

interface IActionButton {
    actionLabel: string; // Label when hovering over ActionButton
    ActionIcon: ({ classes }: { classes?: string | undefined }) => JSX.Element; // ActionButton Icon
    ActionElement: IActionLogic; // Action Button Logic
    actionClasses?: string; // Additional classes for customising action Icon
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
        <div className="bg-primary-dark dark:text-white">
            <ul className="flex ">
                {fileActions.map((action) => CreateActionButton(action))}
                <Separator />
                {cameraActions.map((action) => CreateActionButton(action))}
                <Separator />
                {punterActions.map((action) => CreateActionButton(action))}
            </ul>
        </div>
    );
}

export default Actions;
