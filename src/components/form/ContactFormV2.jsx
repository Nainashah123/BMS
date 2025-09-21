"use client"
import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactFormV2 = () => {
    // Validation schema with website and message as optional
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .max(25, 'First name must be less than 25 characters')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters')
            .max(25, 'Last name must be less than 25 characters')
            .required('Last name is required'),
        phone: Yup.string()
            .matches(/^[0-9+\-\s()]*$/, 'Please enter a valid phone number')
            .min(10, 'Phone number must be at least 10 digits')
            .required('Phone number is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email address is required'),
        subject: Yup.string()
            .min(3, 'Subject must be at least 3 characters')
            .max(100, 'Subject must be less than 100 characters')
            .required('Subject is required'),
        website: Yup.string()
            .url('Please enter a valid URL')
            .nullable(), // Optional field
        message: Yup.string()
            .max(500, 'Message must be less than 500 characters')
            .nullable() // Optional field
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
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
                                <div className="form-box">
                                    <Field 
                                        type="text" 
                                        name="firstName" 
                                        placeholder="First Name*" 
                                        autoComplete='off'
                                        className={errors.firstName && touched.firstName ? 'error' : ''}
                                    />
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <Field 
                                        type="text" 
                                        name="lastName" 
                                        placeholder="Last Name*" 
                                        autoComplete='off'
                                        className={errors.lastName && touched.lastName ? 'error' : ''}
                                    />
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <Field 
                                        type="tel" 
                                        name="phone" 
                                        className={`no-arrows ${errors.phone && touched.phone ? 'error' : ''}`}
                                        placeholder="Phone*" 
                                        autoComplete='off'
                                    />
                                    <ErrorMessage name="phone" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email Address*" 
                                        autoComplete='off'
                                        className={errors.email && touched.email ? 'error' : ''}
                                    />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <Field 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject*" 
                                        autoComplete='off'
                                        className={errors.subject && touched.subject ? 'error' : ''}
                                    />
                                    <ErrorMessage name="subject" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
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
                                <div className="form-box">
                                    <Field 
                                        as="textarea" 
                                        name="message" 
                                        cols="30" 
                                        rows="10" 
                                        placeholder="Comment (Optional)" 
                                        autoComplete='off'
                                        className={errors.message && touched.message ? 'error' : ''}
                                    />
                                    <ErrorMessage name="message" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box-button inner">
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <div id="status"></div>
        </>
    );
};

export default ContactFormV2;