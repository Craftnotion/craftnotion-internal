/** React Imports */
'use client'
import { FC } from "react"

/** Libraries */
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

/** Components */
import CustomInput from '@/app/utilities/components/form-utilities/custom-input'

/** Local Imports */
import FormFields from '../../../../utilities/models/formfields.json'

/** Icons */
import ArrowRight from '../../../../../../public/icons/arrow-small-right.svg'

/** Styles */
import styles from '../styles.module.scss'

/** Main Export */
const InternalLoginForm: FC<Props> = () => {

    const { handleSubmit, control } = useForm<LoginFormTypes>({
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit = (values: LoginFormTypes) => {
        console.log(values)
	}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                {...{
                    name: 'email',
                    parent: 'internal_login',
                    styles,
                    control,
                    type: 'text',
                    label: true
                }}
            />
            <CustomInput
                {...{
                    name: 'password',
                    parent: 'internal_login',
                    styles,
                    control,
                    type: 'password',
                    label: true
                }}
            />
            <button type="submit">
                <span>Submit</span>
                <div>
                    <ArrowRight />
                </div>
            </button>
        </form>
    )
}

export default InternalLoginForm

/** Main Export Props */
type Props = {}

/** Login Form Props */
interface LoginFormTypes {
    email: string;
    password: string;
}

/** Login Schema */
const LoginSchema = yup.object().shape({
    email:
        yup.string()
            .email(FormFields.internal_login.email.errors.valid)
            .required(FormFields.internal_login.email.errors.required),
    password:
        yup.string()
            .min(8, FormFields.internal_login.password.errors.min)
            .max(25, FormFields.internal_login.password.errors.max)
            .required(FormFields.internal_login.password.errors.required)
})