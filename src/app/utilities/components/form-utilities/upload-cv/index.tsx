'use client'

import React from 'react'
import Image from 'next/image';
import Dropzone from 'react-dropzone'
import { Control, Controller, FieldValues, UseFormClearErrors } from "react-hook-form";
import File from '../../../../../public/icons/add-image.svg'
import FormFields from '../../../models/formfields.json'
import { useTheme } from '../../../theme';

interface UploadCvProps {
    control: Control<FieldValues>;
    name: string;
    parent?: string;
    inputWrapper?: boolean;
    setValue?: (name: string, value: any) => void;
    type?: string;
    label?: boolean;
    errors?: any;
    isDragAccept?:boolean
    clearErrors?: UseFormClearErrors<{
        name?: string;
        email?: string;
        phone?: string;
        services?: any;
      }>;
    watch?: (name: string) => any;
    styles?: any;
    Asterisk?: boolean;
  }

const UploadCv: React.FC<UploadCvProps> = ({
    name,
    parent,
    inputWrapper,
    setValue,
    type,
    label = true,
    clearErrors,
    isDragAccept,
    control,
    watch,
    styles,
    Asterisk = false,
  }) => {
    const Field = parent ? FormFields[parent][name] : FormFields[name];
    const InputWrapper = inputWrapper ? 'div' : React.Fragment;
    const { isDark } = useTheme();
  
    return (
      <div className={styles.FormWrapper}>
        {label && (
          <label className={styles.FormLabel}>
            <span>
              {Field.label}
              {Asterisk && <span className={styles.asterisk}>*</span>}
            </span>
          </label>
        )}
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <>
              <Dropzone
                onDrop={(acceptedFiles) => {
                    const fieldName = name as "name" | "email" | "phone" | "services";
                    if (isDragAccept && clearErrors) {
                        setValue(fieldName, {
                            type: 'local',
                            dataType: fieldName,
                            data: acceptedFiles[0],
                            url: URL.createObjectURL(acceptedFiles[0]),
                        });
                        clearErrors(fieldName);
                    }
                }}            
                accept={
                  type === 'file' && {
                    'application/pdf': ['.pdf'],
                    'application/msword': ['.doc'],
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                  }
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <div className={`${styles.image_block} ${isDark ? styles.cn_image_block_dark : ''}`}>
                    <div {...getRootProps()} className={`${styles.dropzone} `}>
                      <input {...getInputProps()} />
                      {type === 'file' && (
                        <>
                          {watch(name)?.type ? (
                            <Image width={500} height={500} alt="file" src="/images/pdf.png" className={styles.image_select} />
                          ) : (
                            <p className={styles.text}>
                              <span className={`${styles.image} ${isDark ? styles.image_dark : ''}`}>
                                <File />
                              </span>
                              <span className={styles.inner_text}>
                                <span className={styles.dragText}>
                                  <span className={styles.cn_text_color}>Click to upload</span> or Drag and Drop
                                </span>
                                <span className={`${styles.cn_support_file} ${isDark ? styles.cn_cn_support_file_dark : ''}`}>
                                  {' '}
                                  Support .PDF File
                                </span>
                              </span>
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </Dropzone>
              {error && <p className={styles.error_msg}>{error.message}</p>}
            </>
          )}
        />
      </div>
    );
  };
  
  export default UploadCv;
  