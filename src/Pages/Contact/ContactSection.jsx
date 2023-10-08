import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import Button from '../../Components/Button'
import InputFeild from '../../Components/InputFeild'
import { useState } from 'react'

function ContactSection({ className }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    content: ''
  })


  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={'ContactSection ' + className} >
      <div className="container-b my-24 flex gap-6 justify-between max-md:flex-col">

        <div className="addresses flex-1 max-w-xs max-md:max-w-full">
          <ul className=' grid grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
            <li className='flex items-start gap-6'>
              <div className="icon">
                <PhoneIcon className='w-6 h-6 max-sm:w-5 max-sm:h-5 text-[#7d11f9]' />
              </div>
              <div className="content text-left">
                <div className="type text-[#3F3A64] text-xl max-sm:text-lg font-semibold capitalize">call me</div>
                <a href='tel:0940453436' className="address text-[#696969] text-lg max-sm:text-base">0940 453 436</a>
              </div>
            </li>
            <li className='flex items-start gap-6'>
              <div className="icon">
                <PhoneIcon className='w-6 h-6 text-[#7d11f9]' />
              </div>
              <div className="content text-left">
                <div className="type text-[#3F3A64] text-xl font-semibold capitalize">Whatsapp Me</div>
                <a href='https://wa.me/qr/PKIS6LEEMURJF1' className="address text-[#696969] text-lg">0940 453 436</a>
              </div>
            </li>
            <li className='flex items-start gap-6'>
              <div className="icon">
                <EnvelopeIcon className='w-6 h-6 text-[#7d11f9]' />
              </div>
              <div className="content text-left">
                <div className="type text-[#3F3A64] text-xl font-semibold capitalize">Email Me</div>
                <a href='mailto:fashtoukhasan@gmail.com' className="address text-[#696969] text-lg">fashtoukhasan@gmail.com</a>
              </div>
            </li>
            <li className='flex items-start gap-6'>
              <div className="icon">
                <MapPinIcon className='w-6 h-6 text-[#7d11f9]' />
              </div>
              <div className="content text-left">
                <div className="type text-[#3F3A64] text-xl font-semibold capitalize">Location</div>
                <a href='https://maps.app.goo.gl/BDC5TM3mz5a8gnJq7' className="address text-[#696969] text-lg">
                  36.210525, 37.116503</a>
              </div>
            </li>

          </ul>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className=' max-w-2xl flex-1 flex flex-col gap-5' action="">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
            <InputFeild
              value={formData.name}
              label={'name'}
              name={'name'}
              onChange={(e) => { handleChange(e) }}
            />
            <InputFeild
              value={formData.email}
              label={'email'}
              name={'email'}
              onChange={(e) => { handleChange(e) }}
            />
            <InputFeild
              value={formData.subject}
              label={'subject'}
              name={'subject'}
              onChange={(e) => { handleChange(e) }}
            />
            <InputFeild
              value={formData.phone}
              label={'phone'}
              name={'phone'}
              onChange={(e) => { handleChange(e) }}
            />
          </div>
          <textarea
            value={formData.content}
            name='content'
            onChange={(e) => handleChange(e)}
            className=' p-5 bg-slate-50 rounded-2xl resize-none h-36 focus:bg-white transition-all duration-300 outline-[#7d11f9]' />
          <Button contained className={' self-end max-sm:self-stretch justify-center'}>send message</Button>
        </form>
      </div>
    </div>
  )
}

ContactSection.propTypes = {
  className: PropTypes.string
}

export default ContactSection
