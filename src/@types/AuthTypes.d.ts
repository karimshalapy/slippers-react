export interface SigninFormInputs {
    email: string,
    password: string
}
export interface SignupFormInputs extends SigninFormInputs {
    name: string
}

export type AuthFormTypes = "signin" | "signup"

export type ProviderId = "facebook.com" | "twitter.com" | "github.com" | "google.com"