export interface ILink {
    title: string;
    url: string;
    status: string;
}

export interface IDialog {
    open: boolean;
    title?: string;
    url?: string;
    status?: string;
    onSubmit?: () => void;
    onClose: () => void;
    submitBtn?: string;
}