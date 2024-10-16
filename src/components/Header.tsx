import { Link } from 'react-router-dom';

export const Header = ({ className }: { className?: string }) => {
    return (
        <header
            className={`${className} duration-250 fixed left-6 right-6 top-6 z-50 overflow-hidden rounded-full shadow-lg transition-opacity lg:left-1/2 lg:right-0 lg:w-[80%] lg:-translate-x-1/2`}
            style={{ boxShadow: '0px 0px 18px 0px rgba(156, 164, 190, 0.30)' }}
        >
            <nav className='flex w-full items-center justify-between bg-fixadate-white py-1 pl-5 pr-6 lg:px-16'>
                {/* Left */}
                <Link to='/fixadate_about/'>
                    <div className='flex items-center gap-0.5 lg:gap-2'>
                        <span className='h-11 w-11'>
                            <img
                                src='images/app_icon.png'
                                alt='icon'
                                className='h-full w-full object-contain'
                            />
                        </span>

                        <span className='fixadate text-xl font-bold'>Fixadate</span>
                    </div>
                </Link>

                {/* Right */}
                <div className='flex gap-6 text-sm font-medium text-fixadate-gray-6'>
                    <Link to='/fixadate_about/'>ABOUT</Link>
                    <Link to='/fixadate_about/tech-stack'>TECH</Link>
                </div>
            </nav>
        </header>
    );
};
