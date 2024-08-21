import  React from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

      <a href="tel:+962776800891" className='tel'>
        <span type='tel' >
        📞 Call Me : +962776800891
        </span>
      </a>
    </section>
  )
}

export default Contact