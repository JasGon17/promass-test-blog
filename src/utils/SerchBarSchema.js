import { object, string } from 'yup'

export const SearchBarSchema = object().shape({
  typeSearch: string()
    .required('Selecciona una opción'),
  nameSearch: string()
    .required('Este campo es requerido')
})
