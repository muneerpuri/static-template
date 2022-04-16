import React from 'react'
import Link from 'next/link'

function FloatingIcons() {
  return (
    <div className=' flex z-10 flex-col justify-center items-center fixed bottom-0 right-0'>
        <Link href="#"><a><img className='m-2' width={30} src="/discord.svg" alt=""/></a></Link>
        <Link href="#"><a><img className='m-2' width={30} src="/twitter.svg" alt=""/></a></Link> 
        <Link href="#"><a><img className='m-2' width={30} src="/logomark.svg" alt=""/></a></Link>

    </div>
  )
}

export default FloatingIcons