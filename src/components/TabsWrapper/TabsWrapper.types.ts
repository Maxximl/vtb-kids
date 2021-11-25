export interface ITabsWrapperProps {
    children: React.ReactNode
    tabs: ITab[];
}

export interface ITab {
    caption: string;
}