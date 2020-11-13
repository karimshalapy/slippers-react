export interface AuthFormInputs {
    password: string
}
export interface SigninFormInputs extends AuthFormInputs {
    email: string
}
export interface SignupFormInputs extends SigninFormInputs {
    name: string
}


export type AuthFormTypes = "signin" | "signup"

export type ProviderId = "facebook.com" | "twitter.com" | "github.com" | "google.com"