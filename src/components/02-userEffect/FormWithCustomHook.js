import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
export const FormWithCustomHook = () => {
    //useEffects es un hook que permitira ejecutar un efecto secundario cuando algo suceda en nuestro componente
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log(email);
    }, [email]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    // const handleInputChange = ({ target }) => {
    //     setFormState({
    //         ...formState,
    //         [target.name]: target.value
    //     });
    // };
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className='form-group'>
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@asdas.cl"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}