import * as yup from "yup";
export const schema = yup.object().shape({
    title: yup.string()
        .required('Title is required'),
    url: yup.string()
        .required('URL is required')
})