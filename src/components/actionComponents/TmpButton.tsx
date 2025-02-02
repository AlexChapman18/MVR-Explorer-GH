import IAction from "./IAction.ts";

const TmpButton: IAction = (ActionIcon, containerClasses, iconClasses) => {
    return (
        <button type="button" className={containerClasses}>
            <ActionIcon classes={iconClasses} />
        </button>
    );
};

export default TmpButton;
