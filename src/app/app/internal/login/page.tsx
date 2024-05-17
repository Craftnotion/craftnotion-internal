'use client'
import React from 'react'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import CustomInput from '@/app/utilities/components/form-utilities/custom-input'
import Logo from '../../../../../public/brand/logo.svg'
import FormFields from '../../../utilities/models/formfields.json'
import styles from './styles.module.scss'

type Props = {}

const InternalLoginPage = (props: Props) => {

    const { handleSubmit, control } = useForm<LoginFormTypes>({
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit = (values: LoginFormTypes) => {
        console.log(values)
	}

    return (
        <div className={styles.cn_outer}>
            <div className={styles.cn_inner}>
                <div className={styles.cn_logo_wrap}>
                    <Logo />
                </div>
                <div className={styles.cn_title_wrap}>
                    <h1>Welcome to Your Project Workspace</h1>
                    <p>Sign in to connect with your team, share ideas, and achieve project goals</p>
                </div>
                <div className={styles.cn_form_wrap}>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.cn_footer_wrap}>
                    
                </div>
            </div>
        </div>
    )
}

export default InternalLoginPage

interface LoginFormTypes {
    email: string;
    password: string;
}

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