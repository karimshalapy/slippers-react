import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { AuthFormInputs, SigninFormInputs, SignupFormInputs } from '../../@types/AuthTypes'

class SchemaClass {
    constructor(public password: yup.StringSchema<string, object>, public name?: yup.StringSchema<string, object>) {
        this.password = password
        if (name) this.name = name
    }

    email = yup.string()
        .required("E-mail is required.")
        .email("Please, input a proper for of an E-mail")
}

const singinSchemaObject = new SchemaClass(
    yup.string()
        .required("Password is required")
)
const signupSchemaObject = new SchemaClass(
    yup.string()
        .required("Password is required.")
        .matches(/^(?=.*\d)(?=.*[a-z])[\w~@#$%^&*+=`|{}:;!.?"()[\]-]{8,}$/, "Password should be at least 8 characters long and have at least one number and one letter"),
    yup.string()
        .required("Your name is required.")
)
const linkAccountSchemaObject = {
    password: yup.string()
        .required("Password is required.")
}

export const singinSchema = yupResolver<SigninFormInputs>(yup.object().shape(singinSchemaObject))
export const singupSchema = yupResolver<SignupFormInputs>(yup.object().shape(signupSchemaObject))
export const linkAccountSchema = yupResolver<AuthFormInputs>(yup.object().shape(linkAccountSchemaObject))