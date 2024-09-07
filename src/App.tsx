import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = () => {
    return (
        <>
            <body className=''>
                <Header />

                <main className=''>
                    <div className='flex flex-col justify-center gap-72'>
                        {/* App 소개 사진 */}
                        <section className='flex h-screen justify-center gap-0 bg-fixadate-primary py-12'>
                            <img src='images/app01.png' alt='app info' className='max-w-sm object-contain' />
                            <img src='images/app02.png' alt='app info' className='max-w-sm object-contain' />
                        </section>

                        {/*  Title  */}
                        <section className='space-y-7 text-center'>
                            <div className='w-full'>
                                <img
                                    src='images/app_icon.png'
                                    alt='icon'
                                    className='mx-auto h-44 w-44 object-contain'
                                />
                            </div>

                            <h1 className='text-5xl font-bold'>Fixadate</h1>

                            <div className='space-y-1'>
                                <p className='text-xl font-normal'>
                                    나를 다시 돌아보고, 나의 하루를 다시 돌아볼 수 있도록
                                </p>
                            </div>

                            <div className='space-y-1'>
                                <p className='text-xl font-normal'>오늘을 되돌아 보고,</p>
                                <p className='text-xl font-normal'>
                                    내일을 다시 설계할 수 있는 <span className='font-medium'>Fixadate.</span>
                                </p>
                            </div>
                        </section>

                        <section className='mx-auto w-full max-w-screen-xl space-y-40'>
                            {/* Section 1  */}
                            <div className='flex items-center justify-between'>
                                <img
                                    src='images/screenshot01.png'
                                    alt='app info'
                                    className='max-w-sm object-contain'
                                />

                                <div className='space-y-4 text-end'>
                                    <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit</h2>
                                    <p className='text-3xl'>
                                        Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur,
                                        illo earum! Sapiente provident enim aliquam est consequatur fugit
                                        porro quia earum!
                                    </p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className='flex items-center justify-between'>
                                <div className='space-y-4 text-start'>
                                    <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit</h2>
                                    <p className='text-3xl'>
                                        Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur,
                                        illo earum! Sapiente provident enim aliquam est consequatur fugit
                                        porro quia earum!
                                    </p>
                                </div>

                                <img
                                    src='images/screenshot02.png'
                                    alt='app info'
                                    className='max-w-sm object-contain'
                                />
                            </div>

                            {/* Section 3 */}
                            <div className='flex items-center justify-between'>
                                <img
                                    src='images/screenshot03.png'
                                    alt='app info'
                                    className='max-w-sm object-contain'
                                />

                                <div className='space-y-4 text-end'>
                                    <h2 className='text-4xl font-semibold'>Lorem ipsum dolor sit</h2>
                                    <p className='text-3xl'>
                                        Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur,
                                        illo earum! Sapiente provident enim aliquam est consequatur fugit
                                        porro quia earum!
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </main>
            </body>
        </>
    );
};

export default App;
