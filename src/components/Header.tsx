export const Header = () => {
    return (
        <header className=''>
            <nav className='fixed flex w-full items-center justify-between border border-b-fixadate-gray-2 bg-fixadate-white px-8 py-3'>
                <div className='flex items-center gap-3'>
                    <span className='h-14 w-14 rounded-xl border border-fixadate-gray-2 p-0.5'>
                        <img src='images/app_icon.png' alt='icon' className='h-full w-full object-contain' />
                    </span>

                    <span className='text-2xl font-bold'>Fixadate</span>
                </div>

                <div className='flex gap-6 font-medium text-fixadate-gray-5'>
                    <span>홈</span>
                    <span>Tech</span>
                </div>
            </nav>
        </header>
    );
};
