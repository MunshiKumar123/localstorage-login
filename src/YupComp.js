import React from 'react';
import * as Yup from 'yup';


export const YupComp =
    Yup.object({
        email: Yup.string().email('Invalid email address').required('Please Enter the Email id'),

        password: Yup.string()
            .max(8, 'Must be 8 characters')
            .required('Please Enter the Password'),

    });
