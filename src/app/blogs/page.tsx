'use client';



import Link from 'next/link'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

function Page() {
   
    const { user } = useUser();
    console.log(user)

    
    return (
        <div className='mt-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum deserunt aliquid tenetur minima pariatur temporibus ex cupiditate suscipit alias perspiciatis repellendus molestias quod nulla, laudantium obcaecati, soluta quos est autem dolorum! Nesciunt corporis odio minus debitis ducimus iure, minima fugit nobis hic voluptatum aspernatur dolor ipsa est fugiat distinctio pariatur veniam iusto ad quisquam commodi? Delectus quis id neque earum, reprehenderit eaque nostrum rem voluptas doloribus vel! Magni vero et magnam esse ab quis ea eligendi explicabo dolores blanditiis alias sequi enim obcaecati consectetur fugit aspernatur, libero consequuntur impedit omnis commodi sapiente, dicta non temporibus minus. Minima itaque asperiores quae.
            <hr />
            <hr /><hr /><hr />
            <div className='space-x-4'>
      <div style={{display:'flex'}} className='space-x-3'>

      {user && user.picture ? (<Image style={{ border: '1px solid black', borderRadius: '50%', width:'30px', height:'30px'}} src={user.picture} alt=''></Image> ) : "Giris yapilmadi"}
      {user && user.name ? (<span>{user.name}</span> ) : ""}
     
        <Link href='/api/auth/login'>Login</Link>
        <Link href='/api/auth/logout' >x</Link>  </div>

      </div >
        <div>
            <div>
            <textarea rows={3} style={{border:'1px solid white', width:'270px'}} ></textarea></div>
            <div>
            <button className='bg-blue-600 text-white px-2 py-1 rounded' >Send</button></div>
        </div>
        </div>
    )
}

export default Page