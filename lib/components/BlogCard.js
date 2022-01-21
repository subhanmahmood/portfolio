import React from 'react'
import { Date } from 'prismic-reactjs'
import { format } from 'date-fns-tz'
import { linkResolver } from '../../prismicConfiguration'

export default function BlogCard({ blogPost }) {
    console.log(blogPost)
    const date = Date(blogPost.first_publication_date)
    const formattedDate = format(date, 'MMMM dd, yyyy')
    const data = blogPost.data
    return (
        <a href={linkResolver(blogPost)}>
            <div className="flex flex-col space-y-2 cursor-pointer">
                <div className="w-full h-64 bg-cover" style={{ backgroundImage: `url(${data['cover_image'].url})` }}></div>
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <h3 className="font-medium text-2xl text-gray-700">{data.title[0].text}</h3>
            </div>
    </a>
    )
}
