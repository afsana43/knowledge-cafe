import React from 'react';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 mt-12 bg-slate-50 p-8'>
                 <h2 className='text-4xl font-bold py-5 border border-green-500 rounded-md p-4 mb-5 text-green-500'>Reading Time : {readingTime}</h2>
           <h3 className='font-semibold text-2xl border border-green-500 rounded-md p-4'>Bookmark : {bookmarks.length}</h3> 
           {
            bookmarks.map((bookmark, index)=> <Bookmark key={index} bookmark={bookmark} ></Bookmark>)
           }
        </div>
    );
};

export default Bookmarks;