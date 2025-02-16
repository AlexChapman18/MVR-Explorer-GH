import React from "react";
import { useState } from "react";
import Arrow from "../../icons/icon_arrow.tsx";

// Enum declarations
enum ErenderTechniques {
    WIREFRAME = "Wireframe",
    REALISTIC = "Realistic",
}
enum Ebackground {
    SOLID = "Solid Color",
    DAY = "Day Scene",
    NIGHT = "Night Scene",
}
enum EautoOrbit {
    DISABLED = "Disabled",
    SLOW = "Slow",
    MEDIUM = "Medium",
    FAST = "Fast",
}

// List of ranges
const settingsRanges = [
    {
        title: "Fog Density",
        defaultValue: 0,
        onChangeFunction: () => {},
        active: false,
    },
];

// List of dropdowns
const settingsDropdowns = [
    {
        title: "Render Technique",
        defaultOption: ErenderTechniques.REALISTIC,
        options: [ErenderTechniques.WIREFRAME, ErenderTechniques.REALISTIC],
        onSelectFunction: () => {},
        active: false,
    },
    {
        title: "Auto Orbit",
        defaultOption: EautoOrbit.DISABLED,
        options: [EautoOrbit.DISABLED, EautoOrbit.SLOW, EautoOrbit.MEDIUM, EautoOrbit.FAST],
        onSelectFunction: () => {},
        active: false,
    },
    {
        title: "Background",
        defaultOption: Ebackground.SOLID,
        options: [Ebackground.SOLID, Ebackground.DAY, Ebackground.NIGHT],
        onSelectFunction: () => {},
        active: false,
    },
];

function LeftBar() {
    const [sidebarOpen, setSideBarOpen] = useState(true);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div className="flex max-md:hidden">
            <div
                className={
                    "transition-all duration-500 overflow-hidden ease-in-out " + (sidebarOpen ? "max-w-2xs" : "max-w-0")
                }
            >
                <div className="h-full ps-5 w-[16rem]">
                    <h1 className="border-b border-white border-b text-center text-2xl">Settings</h1>
                    <div className="pe-1">
                        {settingsDropdowns.map((setting) =>
                            React.cloneElement(SettingDropdown<string | number>(setting), { key: setting.title }),
                        )}
                        {settingsRanges.map((setting) =>
                            React.cloneElement(SettingRange(setting), { key: setting.title }),
                        )}
                    </div>
                </div>
            </div>
            <button
                className="transition-colors duration-300 hover:bg-gray-700 my-auto h-20 bg-primary-dark cursor-pointer"
                onClick={handleViewSidebar}
            >
                <Arrow
                    classes={
                        "transition-transform duration-300 fill-white " + (sidebarOpen ? "rotate-180" : "rotate-0")
                    }
                ></Arrow>
            </button>
        </div>
    );
}

//
//
//

interface ISettingRange {
    title: string; // Dropdown title
    defaultValue: number; // Default selected option
    onChangeFunction: (value: number) => void; // Function to call when selection is changed
    active: boolean;
}

function SettingRange(props: ISettingRange) {
    return (
        <div className={props.active ? "" : "opacity-50"}>
            <label htmlFor="small-range" className="block mt-3 text-sm text-gray-900 dark:text-white">
                {(props.active ? "" : "WIP: ") + props.title}
            </label>
            <input
                disabled={!props.active}
                id="small-range"
                type="range"
                defaultValue={props.defaultValue}
                min="0"
                max="100"
                step="10"
                onChange={(e) => props.onChangeFunction(+e.target.value)}
                className={"w-full h-2 " + (props.active ? "cursor-pointer" : "cursor-not-allowed")}
            />
        </div>
    );
}

//
//
//

// (OptionType extends string | number) = Enum
interface ISettingDropdown<OptionType extends string | number> {
    title: string; // Dropdown title
    defaultOption: OptionType; // Default selected option
    options: OptionType[]; // All possible options
    onSelectFunction: (option: OptionType) => void; // Function to call when selection is changed
    active: boolean;
}

// (OptionType extends string | number) = Enum
function SettingDropdown<OptionType extends string | number>(props: ISettingDropdown<OptionType>) {
    return (
        <div className={props.active ? "" : "opacity-50"}>
            <label htmlFor="countries" className="block mt-2 mb-1 text-sm font-normal text-gray-900 dark:text-white">
                {/* Title of settings */}
                {(props.active ? "" : "WIP: ") + props.title}
            </label>
            <select
                disabled={!props.active}
                id="countries"
                className={
                    "bg-gray-50 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
                    (props.active ? "cursor-pointer" : "cursor-not-allowed")
                }
                defaultValue={props.defaultOption} // Default selected setting
                onChange={(e) => props.onSelectFunction(e.target.value as OptionType)} // What to do when setting changes
            >
                {/* Create all the options of the setting */}
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LeftBar;
