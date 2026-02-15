import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  category: Yup.string()
    .required('Category is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be positive')
    .required('Price is required'),
  oldPrice: Yup.number()
    .typeError('Old Price must be a number')
    .min(0, 'Old Price must be positive')
    .nullable(),
  discount: Yup.number()
    .typeError('Discount must be a number')
    .min(0, 'Discount must be at least 0')
    .max(100, 'Discount cannot exceed 100'),
    image: Yup.string()
      .required('Image is required'),
});
