import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className='p-8'>
        <div className="flex-row-reverse flex flex-wrap max-sm:gap-4 justify-center max-w-7xl mx-auto">
          <div className=" bg-[#003B65] p-6 w-[90vw] sm:w-[45vw] h-[75vh] flex sm:content-center flex-col sm:items-center sm:justify-center">
            <h1 className='text-white text-2xl font-medium sm:text-3xl'>Welcome to Nickarson</h1>
            <p className='text-[#ABBECC] sm:text-justify pt-3 pb-3 text-[18px]'>
              {/* Nickarson is a startup EdTech headquartered in Lagos Nigeria. This site is currently in developer mode. All attached videos are the Devs favourite clips 
              which will be replaced with ours before going live. We give credit to the orinal creators. */}
 
              Nickarson is a startup EdTech headquartered in Lagos Nigeria. We are cosultants to organisations for Tech training. 
              With your mobile device, you can now train yourself indoors - from coding to accounting,
              as well as ICAN, JAMB and WAEC preps and so much more! 
            </p>
          </div> 
          <div className=" max-sm:rounded-lg sm:inline-block w-[90vw] sm:w-[45vw] h-[75vh] ">
            <Image className='w-[100%] h-[85%] overflow-hidden object-cover' src={'/nickarson_boss.jpg'} width={700} height={600} alt=''/>
            {/* <Image className='w-[100%] h-[85%] overflow-hidden object-cover' src="https://i.ibb.co/2S3WR9D/wandyboss1.png" width={24} height={24} alt=''/> */}
            {/* <img className='w-[100%] h-[85%] overflow-hidden object-cover' src="https://legaltrunk.com/wp-content/uploads/2022/08/How-to-Set-Up-an-Offshore-Company-and-Bank-Account-from-Nigeria-.jpg" /> */}
            <div className="w-[100%] p-6 h-[15%] flex flex-col justify-center items-center bg-lime-950 py-4 text-white">
             <p className='text-xl'>Nicholas Okoye</p>
             <p>CEO, Nickarson Training Institute</p>
             {/* <p>HighKlass Intl Schools </p> */}
            </div>
          </div>
        </div>
    </div>
  )
}
