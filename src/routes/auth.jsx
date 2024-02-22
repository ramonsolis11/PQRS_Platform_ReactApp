// routes/auth.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const RegisterForm = () => {
    return (
        <div>
            <h2>Registro</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('El nombre es requerido'),
                    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
                    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('/api/register', values)
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit">Registrarse</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterForm;