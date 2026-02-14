import * as yup from 'yup';

export const blogSchema = yup.object({
  title: yup.string().required().min(3),
  content: yup.string().required().min(10),
});

