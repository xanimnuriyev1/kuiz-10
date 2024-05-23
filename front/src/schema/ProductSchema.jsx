import * as yup from 'yup';

export const ProductSchema=yup.object().shape({
    title:yup.string().required("fill"),
    price:yup.number().required("fill"),
})