import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = () => {
    return (
        <>
            <body className=''>
                <Header />

                <main className=''>
                    <div className='flex flex-col justify-center gap-80'>
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
                                <p className='text-2xl font-normal'>
                                    나를 다시 돌아보고, 나의 하루를 다시 돌아볼 수 있도록.
                                </p>
                            </div>

                            <div className='space-y-1'>
                                <p className='text-2xl font-normal'>오늘을 되돌아 보고,</p>
                                <p className='text-2xl font-normal'>
                                    내일을 다시 설계할 수 있는 <span className='font-medium'>Fixadate.</span>
                                </p>
                            </div>
                        </section>

                        <section className='w-full space-y-40'>
                            {/* Section 1  */}
                            <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
                                <img
                                    src='images/screenshot01.png'
                                    alt='app info'
                                    className='max-w-sm object-contain'
                                />

                                <div className='space-y-4 text-end'>
                                    <h2 className='text-4xl font-semibold'>캘린더 일정 관리</h2>
                                    <h3 className='ml-auto text-xl font-medium text-fixadate-gray-5'>
                                        <p className='text-fixadate-black'>
                                            Fixadate에 여러분의 일정을 기록해보세요!
                                        </p>
                                        <p className=''>
                                            클릭 몇 번으로{' '}
                                            <span className='text-fixadate-black'>쉽고 빠르게</span> 일정을
                                            추가할 수 있습니다.
                                        </p>
                                        <p className=''>시간, 장소를 한 번에 입력하세요. </p>
                                    </h3>

                                    <h3 className='ml-auto text-xl font-medium text-fixadate-gray-5'>
                                        <p className=''>
                                            누구나 쉽게 사용할 수 있는{' '}
                                            <span className='text-fixadate-black'>
                                                깔끔하고 모던한 디자인
                                            </span>
                                            으로
                                        </p>
                                        <p className=''>일정 관리가 더욱 즐거워집니다.</p>
                                    </h3>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
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
                            <div className='bg-fixadate-gray-2 py-24'>
                                <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
                                    <img
                                        src='images/screenshot03.png'
                                        alt='app info'
                                        className='max-w-sm rounded-3xl object-contain'
                                    />

                                    <div className='space-y-4 text-end'>
                                        <h2 className='text-4xl font-semibold'>
                                            사람 초대 기능{' '}
                                            <span className='text-fixadate-gray-4'>(작업 중)</span>
                                        </h2>

                                        <h3 className='ml-auto text-xl font-medium text-fixadate-gray-5'>
                                            <p className=''>
                                                버튼 하나로 간편하게{' '}
                                                <span className='text-fixadate-black'>친구, 가족, 동료</span>
                                                를 일정에 초대할 수 있습니다.
                                            </p>
                                            <p className=''>복잡한 과정 없이 빠르게 참석자를 추가하세요.</p>
                                        </h3>
                                    </div>
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
