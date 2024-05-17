import React, { useState, useEffect, useRef } from 'react';
import { Controller, useWatch, Control } from 'react-hook-form';
import FormFields from '../../../models/formfields.json';
import { useTheme } from '../../../theme';

interface CustomSelectProps {
    control: Control;
    name: string;
    parent?: string;
    data?: Array<{ id: string; title: string }>;
    wrapper?: boolean;
    label?: boolean;
    Asterisk?: boolean;
    inputWrapper?: boolean;
    styles: any;
    multi?: boolean;
    SetSelectCustomers?: (inputIds: string[]) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    control,
    name,
    parent,
    data,
    wrapper = true,
    label = true,
    Asterisk = false,
    inputWrapper = false,
    styles,
    multi,
    SetSelectCustomers,
}) => {
    const [Drop, SetDrop] = useState(false);
    const [Search, SetSearch] = useState('');
    const buttonRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleKeyPress);
        return () => {
            document.removeEventListener('click', handleKeyPress);
        };
    }, []);

    const handleKeyPress = ({ target }: any) => {
        if (!buttonRef?.current?.contains(target)) {
            SetDrop(false);
        }
    };

    const FieldName = parent ? FormFields[parent][name] : FormFields[name];
    const Wrapper = wrapper ? 'div' : React.Fragment;
    const InputWrapper = inputWrapper ? 'div' : React.Fragment;
    const {isDark} = useTheme()
    const watch = useWatch({
        control,
    });

    const sdFilteredData = (data: Array<{ id: string; title: string }>, searchkey: string) => {
        let searchRegex = new RegExp(searchkey, 'i');
        let newData = [...data]?.filter((item) => {
            if (searchRegex.test(item.title)) return item;
        });
        return newData;
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => {
                return (
                
                    <Wrapper {...(wrapper && { className: `${styles.cn_input_wrap}  ${error ? styles.error : ''}` })}>
                        <InputWrapper {...(inputWrapper && { className: `${styles.cn_input_wrap}` })}>
                            <div className={styles.cn_droppable_input}>
                                {label && (
                                    <label className={styles.FormLabel} htmlFor={name}>
                                        {FieldName?.label}
                                        {Asterisk && <span className={styles.asterisk}>*</span>}
                                    </label>
                                )}
                                <div className={styles.cn_droppable_input_drop}>
                                    <ul className={styles.cn_droppable_input_drop_list}>
                                        {sdFilteredData(data, Search).length ? (
                                            sdFilteredData(data, Search).map((item) => {
                                                let active = multi
                                                    ? watch[name]?.length &&
                                                        watch[name]?.find((val) => val == item.title)
                                                    : watch[name]?.length &&
                                                        watch[name]?.find((val) => val === item.id) || '';
                                                return (
                                                    <li key={item.id} className={active ? styles.cn_active : ''}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                let inputIds = watch[name] || [];
                                                                if (multi) {
                                                                    if (inputIds.find((val) => val === item.title)) {
                                                                        inputIds = inputIds.filter(
                                                                            (val) => val != item.title
                                                                        );
                                                                    } else inputIds.push(item.title);
                                                                } else {
                                                                    inputIds = [];
                                                                    inputIds.push(multi ? item.title : item.id);
                                                                }
                                                                field.onChange(inputIds);
                                                                if (SetSelectCustomers) {
                                                                    SetSelectCustomers(inputIds);
                                                                }
                                                                SetDrop(false);
                                                            }}
                                                            className={`${styles.cn_select_btn } ${active ? styles.cn_active : ''} ${isDark ? styles.cn_select_btn_dark : ''}`}
                                                        >
                                                            {multi ? item.title : item.title}
                                                        </button>
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <li>
                                                <p className={styles.cn_empty}>No Data Found</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </InputWrapper>
                        {error && <p className={styles.error_msg}>{error.message}</p>}
                    </Wrapper>
                );
            }}
        />
    );
};

export default CustomSelect;
