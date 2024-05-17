"use client";
import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import FormFields from '../../../models/formfields.json';
import { useTheme } from '../../../theme';

const CustomPhoneInput = ({
    name,
    parent,
    control,
    styles,
    wrapper = true,
    label = true,
    Asterisk = false,
    inputWrapper = false,
    disabled = false,
}) => {
    const fieldConfig = parent ? (FormFields[parent] || {})[name] : FormFields[name] || {};
    const Wrapper = wrapper ? 'div' : React.Fragment;
    const InputWrapper = inputWrapper ? 'div' : React.Fragment;
    const { isDark } = useTheme();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
                <Wrapper className={`${styles.cn_phone_input_wrap} ${error ? styles.error : ''}`}>
                    {label && (
                        <label className={styles.FormLabel} htmlFor={name}>
                            {fieldConfig.label}
                            {Asterisk && <span className={styles.asterisk}>*</span>}
                        </label>
                    )}
                    <InputWrapper className={styles.InputWrapper}>
                        <PhoneInput
                            {...field}
                            value={field.value || ''}
                            placeholder={fieldConfig.placeholder}
                            disabled={disabled}
                            className={`${styles.cn_input} ${isDark ? styles.cn_input_dark : ''}`}
                            defaultCountry='IN'
                        />
                    </InputWrapper>
                    {error && <p className={styles.error_msg}>{error.message}</p>}
                </Wrapper>
            )}
        />
    );
};

export default CustomPhoneInput;
