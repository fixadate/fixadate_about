export const Footer = () => {
    return (
        <footer className='mt-40 flex w-full flex-col items-center justify-between gap-6 p-12 lg:mx-auto lg:mt-80 lg:max-w-screen-lg lg:flex-row-reverse'>
            <div className='flex gap-8 font-medium text-fixadate-gray-5'>
                <a href='https://github.com/fixadate'>Github</a>
                <a href='/fixadate_about/tech-stack'>Tech</a>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <p className='fixadate text-lg font-semibold text-fixadate-gray-4'>Fixadate</p>
                <p className='text-sm text-fixadate-gray-3'> Copyright Fixadate. All rights reserved.</p>
            </div>
        </footer>
    );
};
