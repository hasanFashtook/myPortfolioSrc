import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import Button from '../../Components/Button'
import InputFeild from '../../Components/InputFeild'
import { useId, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
function ContactSection({ className }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    content: ''
  })

  const idTextArea = useId();

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'emails'), formData);
      alert('message has been sent')
    } catch (err) {
      alert(err)
    }
    finally {
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        content: ''
      })
    }
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
          <div className='relative mt-6'>
            <textarea
              value={formData.content}
              name='content'
              id={idTextArea}
              onChange={(e) => handleChange(e)}
              className={`peer w-full h-14 rounded-lg border-b py-2 px-[0.625rem] focus:outline 
              focus:outline-2 focus:outline-[#7d11f9] placeholder:text-transparent 
              bg-slate-50 focus:bg-white resize-none
              ${formData.content && ' bg-white'}`}
            />
            <label
              htmlFor={idTextArea}
              className={`absolute capitalize left-0 ml-1 p-1 bg-inherit 
              peer-focus:-translate-y-4 ease-linear text-gray-500 
              peer-placeholder-shown:translate-y-1/2 peer-focus:px-1 
              peer-focus:bg-white peer-focus:ml-1 duration-100
          ${formData.content && ' -translate-y-4 bg-white'}`}
            >
              your message
            </label>
          </div>
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