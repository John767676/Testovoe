import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const PostForm = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'})

    const {position, token} = props

    const onSubmit = (data) => {
        let fullData = JSON.stringify(data)
        axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', fullData, {
            headers: {
                'Token': token
            }
        }).then((res) => {console.log('ok', res)}).catch((err) => {console.log('error', err)})
        console.log(fullData)
        reset()
    }


    return (
        <div className='main__post-content'>
            <form className='main__post-form' onSubmit={handleSubmit(onSubmit)}>
                <label> Name
                    <input autoComplete='off'
                        {...register('name', {
                            required: 'Поле обязательно к заполению',
                            minLength: {
                                value: 2,
                                message: 'Длина имени от 2х до 60 символов'
                            },
                            maxLength: {
                                value: 60,
                                message: 'Длина имени от 2х до 60 символов'
                            },
                            pattern: {
                                value: /[a-zA-z]/,
                                message: 'Только английские буквы'
                            }
                        })}
                    />
                </label>
                <div style={{color: 'red'}}>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
                <label> Email
                    <input autoComplete='off'
                        {...register('email', {
                            required: 'Поле обязательно к заполению',
                            minLength: {
                                value: 2,
                                message: 'Длина имени от 2х до 100 символов'
                            },
                            maxLength: {
                                value: 100,
                                message: 'Длина имени от 2х до 100 символов'
                            },
                            pattern: {
                                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                message: 'Некорректный формат имейла'
                            }
                        })}
                    />
                </label>
                <div style={{color: 'red'}}>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
                <label> Phone
                    <input autoComplete='off'
                           {...register('phone', {
                               required: 'Поле обязательно к заполению',
                               pattern: {
                                   value: /^[\+]{1}380([0-9]{9})$/,
                                   message: 'Некорректный формат телефона'
                               }
                           })}
                    />
                </label>
                <div style={{color: 'red'}}>{errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}</div>
                    {position?.map(pos => (
                        <label key={pos.id}>
                            <input{...register("position_id", {
                                required: 'Выбор позиции обязателен'
                            })} type="radio" value={pos.id} />
                            {pos.name}
                        </label>
                    ))}
                <div style={{color: 'red'}}>{errors?.position_id && <p>{errors?.position_id?.message || 'Error'}</p>}</div>
                <label> Picture
                    <input type='file' accept='.jpg, .jpeg'
                           {...register('photo', {
                               required: 'Выбор фото обязателен',
                           })}
                    />
                </label>
                <button className='main__post-submit' type='submit' disabled={!isValid} style={!isValid ? {backgroundColor: 'grey'} : {backgroundColor: '#F4E041'}}>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;