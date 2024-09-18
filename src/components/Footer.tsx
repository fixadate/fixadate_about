import React from 'react';

export const Footer = () => {
    return (
        <footer className='mt-48 flex w-full justify-between p-12 text-fixadate-gray-6'>
            <span> Copyright Fixadate. All rights reserved </span>

            <div className='flex gap-4'>
                <a href='https://github.com/fixadate'>
                    <img src='images/github.png' alt='github' className='h-6 w-6' />
                </a>
            </div>
        </footer>
    );
};
