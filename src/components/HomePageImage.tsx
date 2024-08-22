import React from 'react'
import Image from 'next/image';

function HomePageImage() {
  return (
    <div>
         <Image
        src="homeImage.svg" 
        alt="Description of SVG"
        width={500}
        height={500}
        className="your-custom-class"
      />
    </div>
  )
}

export default HomePageImage