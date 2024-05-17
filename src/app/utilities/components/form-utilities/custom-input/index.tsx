"use client"
import React, {FC, ReactNode} from "react";
import { Control, Controller } from "react-hook-form"
import FormFields from '../../../../utilities/models/formfields.json' assert { type: 'json' }

export type TextFieldProps = {
    control: Control<any>;
    name: string;
    parent: string;
    type: string;
    required?: boolean;
    styles: any;
    label: boolean;
    wrapper?: boolean;
    inputWrapper?: boolean;
    disabled?: boolean;
    Icon?: ReactNode | null;
};

const CustomInput: FC<TextFieldProps> = ({
    name,
    parent,
    control,
    type,
    styles,
    wrapper = true,
    label = true,
    inputWrapper = false,
    disabled = false,
    Icon = null
}) => {

    const FieldName = (FormFields[parent])[name]
    const Wrapper = wrapper ? 'div' : React.Fragment
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    const InputType = type === 'textarea' ? 'textarea' : 'input'

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            render={({ field, fieldState: { error } }) => {
                return (
                    <>
                        <Wrapper {...(wrapper && {className: `${styles.cn_input_wrap}  ${error ? styles.error : ''}`})}>
                            {
                                label && 
                                <label 
                                    className={styles.cn_label}
                                    htmlFor={name.replace('_', ' ')}
                                >{FieldName.label}</label>
                            }
                            <InputWrapper {...(inputWrapper && {className: `${styles.cn_input_wrap_inner}`})}>
                                {Icon}
                                <InputType 
                                    type={type}
                                    className={styles.cn_input}
                                    placeholder={FieldName.placeholder}
                                    disabled={disabled}
                                    {...field}
                                    value={field?.value || ''}
                                    id={name.replace('_', ' ')}
                                />
                            </InputWrapper>
                            {error && <p className={styles.error_msg}>{error.message}</p>}
                        </Wrapper>
                    </>
                )
            }}
        />
    )
}

export default CustomInput