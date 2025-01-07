import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="site-container">
      <nav className='space-x-4'>
        <Link href="/">Anasayfa</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href='/about' >Hakkimda</Link>
      </nav>
    </header>
  )
}

export default Header