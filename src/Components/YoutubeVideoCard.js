import React from 'react'
import logo from '../assests/logo.png'

function YoutubeVideoCard() {
  return (
    <div>
        <div className='border-2 shadow-md w-72 rounded'>
            <div className=''><img src={logo} className='w-32' alt="" /></div>
            <div className='px-4'>
                <p>Fullstack javascript</p>
                <p>chai aur code</p>
                <div className='flex justify-between'>
                    <p>20 Hours</p>
                    <p>50 videos</p>
                </div>
            </div>
            <div className='justify-center flex bg-blue-600 text-cyan-50 py-2 rounded-b cursor-pointer m-[2px]'>
                <p className=''>Learn</p>
            </div>
        </div>
    </div>
  )
}

export default YoutubeVideoCard;