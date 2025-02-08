import TickIcon from "../../../icons/Tick.tsx";
import WaitingIcon from "../../../icons/Waiting.tsx";
import CrossIcon from "../../../icons/Cross.tsx";
import { StepStatus } from "../../../contexts/ProgressContext.tsx";

function ProgressSection({
    title = "",
    status = StepStatus.IDLE,
    displayCurrentFileNum = 0,
    displayTotalNumFiles = 100,
}) {
    const currentPercentage = (displayCurrentFileNum / displayTotalNumFiles) * 100;

    return (
        <li className="mb-10 ms-8">
            <StepIcon status={status} />
            <h3 className="flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {title}{" "}
                <span className="bg-blue-100 text-blue-800 text-sm mr-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3 font-bold">
                    {displayCurrentFileNum}/{displayTotalNumFiles}
                </span>
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-800">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-100 ease-in-out"
                    style={{ width: currentPercentage + "%" }}
                ></div>
            </div>
        </li>
    );
}

// Set the icon of the current stage based on the Status
function StepIcon({ status = StepStatus.ERROR }) {
    const statusMap = {
        SUCCESS: {
            bgColor: "bg-blue-100 dark:bg-blue-600",
            Icon: TickIcon,
        },
        PENDING: {
            bgColor: "bg-orange-100 dark:bg-orange-600",
            Icon: WaitingIcon,
        },
        IDLE: {
            bgColor: "bg-gray-100 dark:bg-gray-600",
            Icon: WaitingIcon,
        },
        ERROR: {
            bgColor: "bg-red-100 dark:bg-red-600",
            Icon: CrossIcon,
        },
    };

    const { bgColor, Icon } = statusMap[StepStatus[status] as keyof typeof statusMap] || statusMap.ERROR;

    return (
        <span
            className={`absolute flex items-center justify-center w-6 h-6 ${bgColor} rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700`}
        >
            <Icon scale={"60%"} />
        </span>
    );
}

export default ProgressSection;
