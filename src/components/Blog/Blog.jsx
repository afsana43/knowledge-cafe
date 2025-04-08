import React, { useEffect, useState } from 'react';
import SingleBlock from '../SingleBlock/SingleBlock';

const Blog = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState( []);

    useEffect(()=>{
        fetch( 'blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data) )
    },[])
    return (
        <div className='md:w-2/3 p-14 space-y-8'>
            <h1 className='text-4xl'>Blogs {blogs.length}</h1>
            {
                blogs.map(item => <SingleBlock key={blogs.id} blog={item} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></SingleBlock>)
            }
        </div>
    );
};

export default Blog;