import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

export interface Inputs {
    newsletterMail: string
}

export const schema = yupResolver<Inputs>(yup.object().shape({
    newsletterMail: yup
        .string()
        .email("Please, input a proper E-mail address.")
        .required("E-mail address is required.")
}))
