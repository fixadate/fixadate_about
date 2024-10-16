import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './Header';
import { CalendarIcon, InviteIcon, LoginIcon } from './Icons';
import { H3, Section } from './styled/Section';

export const Home = () => {
    useEffect(() => {
        // 홈 페이지 이동 시 맨 위로 스크롤
        // window.scrollTo(0, 0);
    }, []);

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (typeof window === 'undefined') {
        return <MobileView />;
    }

    return isMobile ? <MobileView /> : <DesktopView />;
};

const DesktopView = () => {
    return (
        <div className='pt-12'>
            <Header className='' />

            <main className='flex flex-col justify-center gap-80'>
                <section className='relative mx-auto max-w-screen-lg space-y-40'>
                    <div className='grid grid-cols-2 pt-32'>
                        {/*  Title  */}
                        <div className='space-y-24'>
                            <div className=''>
                                <h2
                                    className='space-y-3 text-8xl font-bold'
                                    style={{
                                        background: 'linear-gradient(180deg, #0B98FF 0%, #0047FF 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    <p>협동적,</p>
                                    <p>합치적,</p>
                                    <p>개성적!</p>
                                </h2>
                            </div>

                            <div className='space-y-1'>
                                <h4 className='text-base font-medium text-fixadate-gray-4 sm:text-xl'>
                                    지능적인 스케줄 디자이너
                                </h4>
                                <h1 className='fixadate text-7xl font-bold text-fixadate-text sm:text-8xl'>
                                    Fixadate
                                </h1>
                            </div>
                        </div>

                        <div className='h-full w-full'>
                            {/* Image */}
                            <img
                                src='images/screenshots_desktop.png'
                                alt='icon'
                                className='absolute -right-[25%] top-20 mx-auto h-[90%] w-full object-contain'
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div
                        className='grid grid-cols-2 overflow-hidden rounded-[40px] px-20 py-12'
                        style={{ boxShadow: '0px 0px 18px 0px rgba(156, 164, 190, 0.30)' }}
                    >
                        <div>
                            <div className='w-full'>
                                <img
                                    src='images/app_icon.png'
                                    alt='icon'
                                    className='h-36 w-36 object-contain'
                                />
                            </div>

                            <h1 className='fixadate mb-2 mt-3 text-5xl font-bold'>Fixadate</h1>

                            <H3 className=''>
                                <p>나를 다시 돌아보고, 나의 하루를 다시 돌아볼 수 있도록.</p>

                                <p>오늘을 되돌아 보고, 내일을 다시 설계할 수 있는 Fixadate.</p>
                            </H3>
                        </div>
                    </div>
                </section>

                <section className='w-full space-y-40 *:bg-fixadate-gray-1'>
                    {/* 1. 캘린더 일정 관리 */}
                    <div>
                        <Section>
                            <img
                                src='images/screenshot01.png'
                                alt='app info'
                                className='screenshot max-w-sm object-contain'
                            />

                            <div className='flex flex-col items-start space-y-4 pb-14 text-end'>
                                <CalendarIcon />

                                <h2 className='text-2xl font-semibold'>캘린더 일정 관리</h2>

                                <H3>
                                    <p className='text-fixadate-black'>
                                        Fixadate에 여러분의 일정을 기록해보세요!
                                    </p>
                                    <p>
                                        클릭 몇 번으로{' '}
                                        <span className='text-fixadate-black'>쉽고 빠르게</span> 일정을 추가할
                                        수 있습니다.
                                    </p>
                                    <p>시간, 장소를 한 번에 입력하세요. </p>

                                    <p className='mt-8'>
                                        누구나 쉽게 사용할 수 있는{' '}
                                        <span className='text-fixadate-black'>깔끔하고 모던한 디자인</span>
                                        으로
                                    </p>
                                    <p>일정 관리가 더욱 즐거워집니다.</p>
                                </H3>
                            </div>
                        </Section>
                    </div>

                    {/* 2. 간단한 소셜 로그인 */}
                    <div className='!bg-white'>
                        <Section $reversed={true}>
                            <img
                                src='images/screenshot02.png'
                                alt='app info'
                                className='screenshot max-w-sm object-contain'
                            />

                            <div className='flex flex-col items-start space-y-4 pb-20 text-end'>
                                <LoginIcon />

                                <h2 className='text-2xl font-semibold'>간단한 소셜 로그인</h2>

                                <H3>
                                    <p>사용하고 있는 소셜 계정이 있다면 </p>
                                    <p>
                                        <span className='text-fixadate-black'>
                                            누구든지 간편하고 빠른 회원가입
                                        </span>
                                        이 가능합니다.
                                    </p>
                                    <p> Fixadate 에서 번거로움 없이 지금 바로 앱을 시작해보세요!</p>
                                </H3>
                            </div>
                        </Section>
                    </div>

                    {/* 3. 사람 초대 기능(미정) */}
                    <div>
                        <Section>
                            <img
                                src='images/screenshot03.png'
                                alt='app info'
                                className='screenshot max-w-sm rounded-3xl object-contain'
                            />

                            <div className='flex flex-col items-start space-y-4 pb-20 text-end'>
                                <InviteIcon />

                                <h2 className='text-2xl font-semibold'>사람 초대 기능(미정)</h2>

                                <H3>
                                    <p className=''>버튼 하나로 간편하게</p>
                                    <p>
                                        <span className='text-fixadate-black'>친구, 가족, 동료</span>를 일정에
                                        초대할 수 있습니다.
                                    </p>
                                    <p className=''>복잡한 과정 없이 빠르게 참석자를 추가하세요.</p>
                                </H3>
                            </div>
                        </Section>
                    </div>
                </section>

                <section className='mx-auto my-[-10rem] grid w-full grid-cols-2 items-start justify-center gap-36'>
                    {/* GitHub */}
                    <div className='relative flex h-full w-full justify-end'>
                        <a
                            className='flex h-16 w-64 items-center justify-center gap-3 rounded-2xl bg-[#2b3137] pr-2 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100'
                            href='https://github.com/fixadate'
                            target='_blank'
                        >
                            <img src='images/github_white.png' alt='github' className='h-10 w-10' />

                            <span className='truncate text-xl font-normal text-white'>Fixadate GitHub</span>
                        </a>
                    </div>

                    {/* Tech Stack */}
                    <div className='relative flex h-full w-full justify-start'>
                        <Link
                            to='/fixadate_about/tech-stack'
                            className='flex h-16 w-64 items-center justify-center gap-3 rounded-2xl bg-fixadate-primary pr-2 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100'
                        >
                            <span className='top-1/2 text-3xl'>🛠️</span>

                            <span className='truncate text-xl font-normal text-white'>기술 소개</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

const MobileView = () => {
    return (
        <>
            <Header />

            {/* Main */}
            <div className='relative mt-28'>
                <img
                    className='ml-auto h-full w-[90%] select-none object-contain'
                    src='images/main_picture_mobile.png'
                    alt='icon'
                />

                {/* Texts */}
                <div className='absolute -bottom-16 left-7 space-y-8 sm:left-12'>
                    <div className=''>
                        <h2
                            className='space-y-3 text-5xl font-bold sm:text-8xl'
                            style={{
                                background: 'linear-gradient(180deg, #0B98FF 0%, #0047FF 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            <p>협동적,</p>
                            <p>합치적,</p>
                            <p>개성적!</p>
                        </h2>
                    </div>

                    <div className='space-y-2'>
                        <h4 className='text-base font-medium text-fixadate-gray-4 sm:text-xl'>
                            지능적인 스케줄 디자이너
                        </h4>
                        <h1 className='fixadate text-7xl font-bold text-fixadate-text sm:text-8xl'>
                            Fixadate
                        </h1>
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div className='mt-60 space-y-52'>
                {/* 1. Title */}
                <section className='space-y-7 text-center'>
                    <div className='w-full'>
                        <img
                            src='images/app_icon.png'
                            alt='icon'
                            className='mx-auto h-36 w-36 object-contain'
                        />
                    </div>

                    <h1 className='fixadate text-4xl font-semibold text-fixadate-text'>Fixadate</h1>

                    <div className='space-y-7 font-normal text-fixadate-gray-5 ~text-sm/3xl'>
                        <p>나를 다시 돌아보고, 나의 하루를 다시 돌아볼 수 있도록.</p>

                        <div className='space-y-1'>
                            <p>오늘을 되돌아 보고,</p>
                            <p>내일을 다시 설계할 수 있는 Fixadate.</p>
                        </div>
                    </div>
                </section>

                {/* 2. 캘린더 일정 관리 */}
                <Section>
                    <img
                        src='images/screenshot01.png'
                        alt='app info'
                        className='screenshot max-w-sm object-contain'
                    />

                    <div className='flex flex-col items-center space-y-4 text-end'>
                        <CalendarIcon />

                        <h2 className='text-2xl font-semibold'>캘린더 일정 관리</h2>

                        <H3>
                            <p className='text-fixadate-black'>Fixadate에 여러분의 일정을 기록해보세요!</p>
                            <p>
                                클릭 몇 번으로 <span className='text-fixadate-black'>쉽고 빠르게</span> 일정을
                                추가할 수 있습니다.
                            </p>
                            <p>시간, 장소를 한 번에 입력하세요. </p>

                            <p className='mt-8'>
                                누구나 쉽게 사용할 수 있는{' '}
                                <span className='text-fixadate-black'>깔끔하고 모던한 디자인</span>
                                으로
                            </p>
                            <p>일정 관리가 더욱 즐거워집니다.</p>
                        </H3>
                    </div>
                </Section>

                {/* 3. 간단한 소셜 로그인 */}
                <Section>
                    <img
                        src='images/screenshot02.png'
                        alt='app info'
                        className='screenshot max-w-sm object-contain'
                    />

                    <div className='flex flex-col items-center space-y-4 text-end'>
                        <LoginIcon />

                        <h2 className='text-2xl font-semibold'>간단한 소셜 로그인</h2>

                        <H3>
                            <p>사용하고 있는 소셜 계정이 있다면 </p>
                            <p>
                                <span className='text-fixadate-black'>누구든지 간편하고 빠른 회원가입</span>이
                                가능합니다.
                            </p>
                            <p> Fixadate 에서 번거로움 없이 지금 바로 앱을 시작해보세요!</p>
                        </H3>
                    </div>
                </Section>

                {/* 4. 사람 초대 기능(미정) */}
                <Section>
                    <img
                        src='images/screenshot03.png'
                        alt='app info'
                        className='screenshot max-w-sm rounded-3xl object-contain'
                    />

                    <div className='flex flex-col items-center space-y-4 text-end'>
                        <InviteIcon />

                        <h2 className='text-2xl font-semibold'>사람 초대 기능(미정)</h2>

                        <H3>
                            <p className=''>버튼 하나로 간편하게</p>
                            <p>
                                <span className='text-fixadate-black'>친구, 가족, 동료</span>를 일정에 초대할
                                수 있습니다.
                            </p>
                            <p className=''>복잡한 과정 없이 빠르게 참석자를 추가하세요.</p>
                        </H3>
                    </div>
                </Section>
            </div>
        </>
    );
};
