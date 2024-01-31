import { object, string } from 'yup'

export const AddEntrySchema = object().shape({
  title: string()
    .required('Titulo es requerido')
    .min(4, 'Mínimo 4 caracteres'),
  author: string()
    .required('Autor es requerido')
    .min(4, 'Mínimo 4 caracteres'),
  content: string()
    .required('Contenido es requerido')
    .min(4, 'Mínimo 4 caracteres')
})