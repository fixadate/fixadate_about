export const Footer = () => {
    return (
        <footer className='mt-40 flex w-full flex-col items-center justify-between gap-6 p-12 lg:flex-row-reverse'>
            <div className='flex gap-8 font-medium text-fixadate-gray-5'>
                <a href='https://github.com/fixadate'>Github</a>
                <a href='/fixadate_about/tech-stack'>Tech</a>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <p className='text-lg font-bold text-fixadate-gray-4'>Fixadate</p>
                <p className='text-sm text-fixadate-gray-3'> Copyright Fixadate. All rights reserved.</p>
            </div>
        </footer>
    );
};
