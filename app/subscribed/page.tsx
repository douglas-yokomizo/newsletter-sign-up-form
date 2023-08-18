import React from 'react'
import Link from 'next/link'

import successIcon from '@/public/images/icon-success.svg'
import Image from 'next/image'

const Success = () => {
  return (
    <main className='bg-[#36384e] h-screen grid place-items-center'>
      <div className='bg-white w-full flex flex-col items-center justify-center max-w-xl h-2/4 rounded-3xl'>
        <div className='grid gap-6 place-items-center text-slate-800'>
          <div className='grid w-3/4 place-items-start pb-6'>
            <Image src={successIcon} alt='success icon' />
          </div>
          <h1 className='font-bold text-5xl ml-[68px]'>Thanks for subscribing!</h1>
          <p className='w-3/4'>
            A confirmation email has been sent to <strong>companyemail@gmail.com.</strong>Please open it and click the button inside to confirm your subscription
          </p>
          <Link href='/' className='hover:shadow-lg text-center hover:bg-gradient-to-r from-[#ff6257] to-orange-400 bg-slate-800 font-semibold text-white rounded-md py-4 w-3/4 transition hover:ease-in-out duration-500 hover:scale-105'>Dismiss message</Link>
        </div>
      </div>
    </main>
  )
}

export default Success
