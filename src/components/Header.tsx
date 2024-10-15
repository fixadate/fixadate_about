import { Link } from 'react-router-dom';

export const Header = ({ className }: { className?: string }) => {
    return (
        <header
            className={`${className} duration-250 fixed left-6 right-6 top-6 z-50 overflow-hidden rounded-full shadow-lg transition-opacity`}
            style={{ boxShadow: '0px 0px 18px 0px rgba(156, 164, 190, 0.30)' }}
        >
            <nav className='flex w-full items-center justify-between bg-fixadate-white px-8 py-2'>
                {/* Left */}
                <Link to='/fixadate_about/'>
                    <div className='flex items-center gap-3'>
                        <span className='h-12 w-12'>
                            <img
                                src='images/app_icon.png'
                                alt='icon'
                                className='h-full w-full object-contain'
                            />
                        </span>

                        <span className='text-xl font-bold'>Fixadate</span>
                    </div>
                </Link>

                {/* Right */}
                <div className='flex gap-6 text-sm font-medium text-fixadate-gray-5 sm:text-base'>
                    <Link to='/fixadate_about/'>ABOUT</Link>
                    <Link to='/fixadate_about/tech-stack'>TECH</Link>
                </div>
            </nav>
        </header>
    );
};
