'use client'
import Image from "next/image";
import { useState } from 'react'

import picMobile from '@/public/images/illustration-sign-up-mobile.svg'
import picDesktop from '@/public/images/illustration-sign-up-desktop.svg'
import listIcon from '@/public/images/icon-list.svg'

export default function Home() {

  return (
    <main className="text-slate-800 place-items-start grid grid-cols-1 md:flex">
      <Image src={picMobile} alt="mobile picture" className="w-full max-w-full md:hidden" />
      <div className="grid gap-6 p-10 md:flex w-full">
        <div className="grid md:flex md:justify-center gap-6 md:flex-col md:w-1/2 md:p-10 ">
          <h1 className="font-bold  text-4xl md:text-6xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receving monthly updates on:
          </p>
          <ul className="flex flex-col gap-4 ">
            <div className="flex items-center gap-3">
              <Image src={listIcon} alt="list icon" />
              <li>
                Product discovery and building what matters
              </li>
            </div>
            <div className="flex items-center gap-3">
              <Image src={listIcon} alt="list icon" />
              <li>
                Measuring to ensure updates are a success
              </li>
            </div>
            <div className="flex items-center gap-3">
              <Image src={listIcon} alt="list icon" />
              <li>
                And much more
              </li>
            </div>
          </ul>
          <form className="flex flex-col md:w-[95%]">
            <div className="flex justify-between">
              <label htmlFor="email" className="font-semibold mb-2 text-slate-900">Email address</label>
              <span className="hidden text-orange-600">Valid email required</span>
            </div>
            <input className="required:border-[#f55e53] required:bg-[#ffe2d7] required:text-orange-600 border rounded-md p-4 mb-8" id="email" type="email" placeholder="email@company.com" />
            <button className="hover:shadow-lg hover:bg-gradient-to-r from-[#ff6257] to-orange-400 bg-slate-800 font-semibold text-white rounded-md py-4 w-full max-w-full transition hover:ease-in-out duration-500 hover:scale-105">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <Image src={picDesktop} alt="desktop picture" className=" w-1/2 max-w-screen-[1440px] hidden md:flex" />
      </div>
    </main>
  )
}
