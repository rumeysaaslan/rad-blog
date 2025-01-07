import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

function page() {
    const posts=[
        {
            header:' Anasayfa,Blogs,Hakkimda',
            name:'Rad-blogs',
            date:'07/01/2025',
            url:'blogs/recep'
        },
        {
            header:'osman',
            name:'osman demir ',
            date:'07/01/2025',
            url:'blogs/osman'
        }
    ]

    
    return (
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum deserunt aliquid tenetur minima pariatur temporibus ex cupiditate suscipit alias perspiciatis repellendus molestias quod nulla, laudantium obcaecati, soluta quos est autem dolorum! Nesciunt corporis odio minus debitis ducimus iure, minima fugit nobis hic voluptatum aspernatur dolor ipsa est fugiat distinctio pariatur veniam iusto ad quisquam commodi? Delectus quis id neque earum, reprehenderit eaque nostrum rem voluptas doloribus vel! Magni vero et magnam esse ab quis ea eligendi explicabo dolores blanditiis alias sequi enim obcaecati consectetur fugit aspernatur, libero consequuntur impedit omnis commodi sapiente, dicta non temporibus minus. Minima itaque asperiores quae.
            <hr />
            <hr /><hr /><hr />
            <Link href="/blogs/yapay-zeka-nedir">Yapay zeka nedir</Link>
            {posts.map((item)=> <div>< Link href={item.url}>{item.name} </Link> <p>{item.date}</p> </div>)}
           
        </div>
    )
}

export default page