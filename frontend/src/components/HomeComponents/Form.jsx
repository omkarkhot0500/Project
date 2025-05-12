import React from 'react'
import bg from '../../assets/FormBg.png'
import formimage from '../../assets/formImage.png'

const Form = () => {
  return (
    <div className='bg-cover flex justify-center items-center w-full h-[100vh]'>
        <img src={bg} alt="" className='h-[100vh]   absolute -z-50  formAnim1' />
        <div className="bg-[#F5F5F5] rounded-3xl w-[80%] p-10 grid grid-cols-2 gap-10 formAnim">
            <div>
                <h1 className=' text-2xl lg:text-6xl font-bold mb-4'>Sign up to our Newsletter</h1>
                <form action="" className="space-y-6">
                    <div className="flex w-full gap-10">
                    <div>
                    <label className=' text-md ml-2 font-medium text-gray-700' htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" className='mt-1 p-3 w-full  rounded-3xl focus:ring-2 focus:ring-gray-500' />
                    </div>
                    <div>
                    <label className=' text-md ml-2 font-medium text-gray-700' htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className='mt-1 p-3 w-full  rounded-3xl focus:ring-2 focus:ring-gray-500' />
                    </div>
                    </div>
                    <div>
                        <label className='block text-md ml-2 font-medium text-gray-700' htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className='mt-1 p-3 w-full  rounded-3xl focus:ring-2 focus:ring-gray-500' />
                    </div>
                    <div>
                    <label className='block text-md ml-2 font-medium text-gray-700' htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" className='mt-1 p-3 w-full  rounded-3xl focus:ring-2 focus:ring-gray-500' />
                    </div>
                    <button type="submit" className=' px-20 bg-black text-white py-3 rounded-3xl font-semibold hover:bg-white border-2 border-black hover:text-black transition-all'>
                        SUBMIT 
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center">
                <img src={formimage} alt="Newsletter" className='' />
            </div>
        </div>
    </div>
  )
}

export default Form