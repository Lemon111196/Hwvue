import { Reference } from "yup";

export interface IForm{
    username: string;
    name: string;
    password: string;
    confirmPassword: string | undefined | null;
}