'use client'
import React from 'react'
import Image from 'next/image';

function HomePageImage() {
  return (
    <div className="flex justify-end">
      <Image
        src="/homeImage.svg" 
        alt="Description of SVG"
        width={350} // Reduced width
        height={300} // Reduced height
        className="object-contain"
      />
    </div>
  )
}

export default HomePageImage
