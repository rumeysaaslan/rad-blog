import { notFound } from 'next/navigation'


export default async function Page({
    params,
}: {
    params: Promise<{ blogUrl: string }>
}) {
    const gecerliUrller = ["yapay-zeka-nedir", "recep-rumeysa-seviyor",'welcome','recep']
    const blogUrl = (await params).blogUrl
    const { default: Post } = await import(`@/content/${blogUrl}.mdx`)

    if (gecerliUrller.includes(blogUrl))
        return <div className='site-container'>My Post:<Post /></div>
    else
        notFound()
}
