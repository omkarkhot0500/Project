import React from 'react'
import im from '../../assets/About_Image.png'


const Departments = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center text-left bg-gray-100 py-20'>
        <div className="w-[80%] flex flex-col">
        <button className='px-10 py-2 w-fit bg-gdsc-green text-white rounded-3xl cursor-default projectsAnim'>Departments</button>
        <h1 className=' text-3xl lg:text-6xl font-semibold mt-10 projectsAnim flex'>Departments</h1>
        <p className=' text-gray-500 mt-5 mb-10 projectsAnim  text-[15px] '> Welcome to CSE(AIML)</p>

            <div className="grid grid-cols-3 gap-3 projectsAnim">
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
                <div className="flex bg-white px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="flex flex-col text-start">
                        <h1 className=' text-start text-gray-400'>01</h1>
                        <h2 className='text-gray-700 font-semibold'>AI & ML</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Departments