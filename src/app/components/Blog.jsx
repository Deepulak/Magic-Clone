import Image from 'next/image';
import React from 'react'

const Blog = () => {
    const blogs = [
        {
          id: 1,
          title: 'What is a Virtual Assistant? All You Need to Know',
          date: 'December 1, 2023',
          author: 'John Doe',
          imageUrl: '/image/blog-images.webp',
        },
        {
          id: 2,
          title: 'How to Delegate Appointment Setting to an Executive Assistant ',
          date: 'December 5, 2023',
          author: 'Jane Smith',
          imageUrl: '/image/appointment.webp',
        },
        {
          id: 3,
          title: 'What Is a Magic Virtual Assistant? Everything You Need to Know ',
          date: 'December 10, 2023',
          author: 'Alex Johnson',
          imageUrl: '/image/male-with-headphone.webp',
        },
      ];
    
      return (
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <div key={blog.id} className="max-w-md mx-4 my-8">
              <Image className="w-full h-48 object-cover mb-4" width={150} height={150} src={blog.imageUrl} alt={blog.title} />
              <h2 className="text-xl font-bold mb-2 text-black">{blog.title}</h2>
              <p className="text-gray-500 mb-2">{blog.date}</p>
              <p className="text-gray-700 mb-4">{`By ${blog.author}`}</p>
            </div>
          ))}
        </div>
  )
}

export default Blog