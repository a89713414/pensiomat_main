import React from 'react';
import { Form } from '../../components';


export const ContactUs = ({ texts, direction }) => {
  return (
    <Form formData={texts?.home.form} direction={"center"} style={{ width: '100%' }} />
  );
};
