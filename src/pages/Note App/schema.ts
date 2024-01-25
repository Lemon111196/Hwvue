import * as yup from "yup";
export const schema = yup.object().shape({
    title: yup.string()
        .required('Title is required'),
    note: yup.string()
        .required('Note is required')
})