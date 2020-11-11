import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { CartInputs } from '../../@types/CartTypes'

export const schema = yupResolver<CartInputs>(yup.object().shape({
    address: yup.string().required()
}))
export default schema 