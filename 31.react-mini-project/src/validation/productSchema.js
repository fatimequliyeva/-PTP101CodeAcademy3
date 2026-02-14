import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup.string().required().min(2),
  price: yup.number().required().min(0),
  description: yup.string().optional(),
});

