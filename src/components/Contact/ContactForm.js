import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faSkype,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_ww0s1zg',
      'template_6y5r7ek',
      e.target,
      'user_djGYuinKWe7ZBKADnEbsX'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
const ContactForm = () => {
  return (
    <div className='container py-100'>
      <div className='row justify-content-around'>
        <div className='col-lg-8'>
          <form className='contact-form mb-md-30' onSubmit={sendEmail}>
            <div className='row'>
              <div className='col-lg-6 mb-30'>
                <div className='input-group'>
                  <label>Name</label>
                  <input
                    className='form-control'
                    type='text'
                    name='user_name'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='input-group mb-30'>
                  <label>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    name='user_email'
                  />
                </div>
              </div>
            </div>

            <div className='input-group mb-30'>
              <label>Message</label>
              <textarea className='form-control' name='message' rows='6' />
            </div>
            <div className='d-grid'>
              <input
                className='btn py-10 btn-primary'
                type='submit'
                value='Submit'
              />
            </div>
          </form>
        </div>
        <div className='col-lg-3'>
          <div className=''>
            <ul className='contact-info'>
              <li>
                <FontAwesomeIcon icon={faSkype} className='mr-20' size='2x' />
                monirair
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTelegram}
                  className='mr-20'
                  size='2x'
                />
                monirair
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='mr-20'
                  size='2x'
                />{' '}
                +8801710021512
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='mr-20'
                  size='2x'
                />
                monirh.me@gmail.com
              </li>

              <li>
                <FontAwesomeIcon icon={faHome} className='mr-20' size='2x' />{' '}
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
