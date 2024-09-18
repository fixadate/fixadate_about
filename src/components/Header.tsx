import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ className }: { className?: string }) => {
    return (
        <header className={`sticky top-0 z-50 ${className} duration-250 transition-opacity`}>
            <nav className='flex w-full items-center justify-between border border-b-fixadate-gray-2 bg-fixadate-white px-8 py-3'>
                {/* Left */}
                <Link to='/fixadate_about/'>
                    <div className='flex items-center gap-3'>
                        <span className='h-14 w-14 rounded-xl border border-fixadate-gray-2 p-0.5'>
                            <img
                                src='images/app_icon.png'
                                alt='icon'
                                className='h-full w-full object-contain'
                            />
                        </span>

                        <span className='text-2xl font-bold'>Fixadate</span>
                    </div>
                </Link>

                {/* Right */}
                <div className='flex gap-6 font-medium text-fixadate-gray-5'>
                    <Link to='/fixadate_about/'>Home</Link>
                    <Link to='/fixadate_about/tech-stack'>Tech</Link>
                </div>
            </nav>
        </header>
    );
};
