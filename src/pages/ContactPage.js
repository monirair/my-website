import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import PageTitle from '../components/PageTitle/PageTitle';

const ContactPage = () => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1'>Contact</h1>
        <p className='lead  mb-0'>
          If you’d like to chat about a project please fill in the form below
          and I’ll get back within 1-2 days.
        </p>
      </PageTitle>

      <ContactForm></ContactForm>
    </>
  );
};

export default ContactPage;
