import * as yup from 'yup';

const schema=yup.object().shape({
    name:yup.
    string()
    .required('Name is req')
    .min(2,'Name must be at least 2 chars')
    .max(50,'Name must be at most 10 chars'),
    email:yup
    .string()
    .email('Invalid email format')
    .required('Email is req'),
    message:yup
    .string()
    .required('Message is req')
    .min(10,'Message must be at least 10 chars')
    .max(500,'Message must be at most 500 chars')
});

export default schema;