import IAction from "./IAction.ts";

const TmpButton: IAction = (ActionIcon, containerClasses, iconClasses, actionLabel) => {
    return (
        <button type="button" className={containerClasses} data-tooltip-content={actionLabel}>
            <ActionIcon classes={iconClasses} />
        </button>
    );
};

export default TmpButton;
