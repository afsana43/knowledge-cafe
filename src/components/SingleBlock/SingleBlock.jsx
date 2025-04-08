import React from 'react';
import { CiBookmark } from 'react-icons/ci';

const SingleBlock = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const {author, img, author_img, reading_time, posting_date, hashtags} = blog;
    return (
        <div className='space-y-2'>
            <img src={img} alt="" className='w-full h-96 rounded-lg space-y-6' />
            <h2 className="text-2xl">{author}</h2>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={author_img} alt="" className='h-14 w-14 rounded-full' />
                   <div className='ml-6'>
                   <h2>{author}</h2>
                   <h4>{posting_date}</h4>
                   </div>
                </div>
                <div className='flex items-center'>
                    <h3>{reading_time} min read </h3>
                 <button 
                 onClick={()=>handleAddToBookmark(blog)}
                className='ml-2'>
                 < CiBookmark></CiBookmark>
                 </button>
                </div>
            </div>
           <p>
            {
                hashtags.map((hash , index) =><span key={index}><a href="">{hash}</a></span>)
            }
           </p>
           <button
           onClick={()=> handleMarkAsRead(reading_time)}
            className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

export default SingleBlock;