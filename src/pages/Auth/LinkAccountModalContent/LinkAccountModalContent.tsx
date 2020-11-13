import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthFormInputs } from '../../../@types/AuthTypes'
import Button from '../../../components/Button/Button'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import { linkAccountSchema } from '../AuthFormsValidation'

interface Props {
    linkAccountsSubmitHandler: (data: AuthFormInputs) => void,
}

const LinkAccountModalContent: React.FC<Props> = props => {

    const { register, handleSubmit, errors } = useForm<AuthFormInputs>({
        mode: "onChange",
        resolver: linkAccountSchema
    })

    return (
        <section>
            <h2>This email is used for another account</h2>
            <p>to sign in and link both accounts, please input your account password below:</p>
            <form onSubmit={handleSubmit(props.linkAccountsSubmitHandler)}>
                <div style={{ marginBottom: 15 }}>
                    <InputWithLabelAsPlaceholder
                        inputName="password"
                        inputType="password"
                        labelText="Password"
                        autocomplete="current-password"
                        error={errors.password?.message}
                        ref={register}
                    />
                </div>
                <Button>link accounts</Button>
            </form>
        </section>
    )
}

export default LinkAccountModalContent
