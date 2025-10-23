import React from 'react'
import BlogPart from '../Utility/BlogPartD'
import BlogPartD from '../Utility/BlogPartD'

const Blog = () => {
  return (
    <section className='container flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mt-5'>Blog Page</h1>
      <h2 className='py-6'>Resources and insights</h2>
      <p className=''>The latest industry news, interviews, technologies, and resources.</p>

      <input type="text" className='my-8 max-w-80 bg-blue-600 rounded-3xl' />
      <div className='grid grid-rows-3 gap-4 mb-10'>
        <BlogPartD />
        <BlogPartD />
        <BlogPartD /> 
      </div>
    </section>
  )
}

export default Blog
