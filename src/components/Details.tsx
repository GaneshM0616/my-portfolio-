'use client'
import React from 'react'
import { Button } from './ui/button'
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandLeetcode } from "react-icons/tb";
import AnimatedTextInHomePage from '@/components/AnimatedTextInHomePage'

function Details() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:text-left">
      <div className="text-center lg:text-left">
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
          Hey,there<span className='text-accent'>!</span>
        </h1>
        <p className='mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
          I&apos;m
        </p>
        <div className='mt-3 text-4xl sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl'>
          <AnimatedTextInHomePage text="Ganesh" />
        </div>
        <div className='mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
          <AnimatedTextInHomePage text="Software Developer" />
        </div>
        <p className="mt-4 text-base sm:text-base md:text-lg lg:text-[20px] xl:text-[20px] text-gray-600">
          I&apos;m a passionate developer with a knack for creating functional and well-designed web applications.
        </p>
      </div>
      <div className='flex flex-col items-center lg:items-start mt-10 space-y-5 lg:space-y-0 lg:flex-row lg:gap-5'>
        <Button className='bg-transparent border border-accent hover:bg-transparent rounded-lg py-3 px-6'>
          Download Resume <span className='ml-2'><FiDownload size={21} /></span>
        </Button>
        <div className='lg:ml-10 flex flex-wrap justify-center lg:justify-start gap-5'>
          <a target='_blank' href='https://github.com/GaneshM0616' className='border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            <FaGithub size={20} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/ganesh-mallela/' className='border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            <FaLinkedin size={20} />
          </a>
          <a target='_blank' href='https://leetcode.com/u/Ganesh_Mallela/' className='border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            <TbBrandLeetcode size={20} />
          </a>
          <a target='_blank' href='https://x.com/MallelaGanesh34' className='border border-accent p-2 rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            <TfiTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Details
