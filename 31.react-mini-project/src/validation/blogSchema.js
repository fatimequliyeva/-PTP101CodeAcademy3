import * as Yup from 'yup';

export const blogSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters')
    .required('Title is required'),
  description: Yup.string()
    .min(20, 'Description must be at least 20 characters')
    .required('Description is required'),
  date: Yup.string().required('Date is required'),
  position: Yup.string().optional(),
});
