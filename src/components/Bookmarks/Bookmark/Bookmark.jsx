import React from 'react';
import { TiThLarge } from 'react-icons/ti';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-100 p-6 m-4'>
       
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;