interface IAction {
    (
        ActionIcon: ({ classes }: { classes?: string | undefined }) => JSX.Element, // ActionButton Icon
        containerClasses: string, // Classes used for customising container looks
        iconClasses: string, // Classes used for customising icon
    ): JSX.Element;
}

export default IAction;
