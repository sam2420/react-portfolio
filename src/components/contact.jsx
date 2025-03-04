import React from 'react'
import { CONTACT } from '../constants'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Get In Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4 '>{CONTACT.address}</p>
            <p className='my-4 '>{CONTACT.phoneNo}</p>
            {/* <p className='my-4 '>{CONTACT.}</p> */}
            <a href={`mailto
            :${CONTACT.email}`} className='text-purple-500 border-b'>
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact
