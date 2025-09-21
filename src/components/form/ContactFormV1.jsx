"use client"
import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactFormV1 = () => {
    // Validation schema with website and message as optional
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        website: Yup.string()
            .url('Please enter a valid URL')
            .nullable(), // Optional field
        message: Yup.string()
            .max(500, 'Message must be less than 500 characters')
            .nullable() // Optional field
    });

    const initialValues = {
        name: '',
        email: '',
        website: '',
        message: ''
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        try {
            // Here you can add your form submission logic
            console.log('Form values:', values);
            toast.success("Thanks For Your Message!");
            resetForm();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box team">
                                    <Field 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name*" 
                                        autoComplete='off'
                                        className={errors.name && touched.name ? 'error' : ''}
                                    />
                                    <ErrorMessage name="name" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box team">
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        placeholder="E-mail*" 
                                        autoComplete='off'
                                        className={errors.email && touched.email ? 'error' : ''}
                                    />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box team">
                                    <Field 
                                        type="text" 
                                        name="website" 
                                        placeholder="Website (Optional)" 
                                        autoComplete='off'
                                        className={errors.website && touched.website ? 'error' : ''}
                                    />
                                    <ErrorMessage name="website" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box team">
                                    <Field 
                                        as="textarea" 
                                        name="message" 
                                        cols="30" 
                                        rows="10" 
                                        placeholder="Your Comments (Optional)" 
                                        autoComplete='off'
                                        className={errors.message && touched.message ? 'error' : ''}
                                    />
                                    <ErrorMessage name="message" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box-button team">
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ContactFormV1;