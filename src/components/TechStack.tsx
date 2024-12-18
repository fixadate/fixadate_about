import { useEffect } from 'react';
import { Header } from './Header';

export const TechStack = () => {
    useEffect(() => {
        // 기술스택 페이지 이동 시 맨 위로 스크롤
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mx-auto max-w-screen-xl'>
            <Header />

            <main className='mx-auto mt-40 max-w-screen-lg space-y-60'>
                <div className='space-y-4 text-center'>
                    <h1 className='text-5xl font-bold'>Fixadate 기술 소개</h1>
                </div>

                <div className='flex flex-col gap-40'>
                    {/* 1. Backend */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-start'>
                        <h2 className='mr-auto text-4xl font-semibold'>백엔드 기술 스택</h2>

                        <img className='w-4/5' src='images/techStack/be_stack.png' alt='Backend Tech Stack' />
                    </section>

                    <Divider />

                    {/* 2. CICD Pipeline */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-start'>
                        <h2 className='mr-auto text-4xl font-semibold'>CICD 파이프라인</h2>

                        <img className='w-4/5' src='images/techStack/cicd.png' alt='CICD Pipeline' />
                    </section>
                </div>
            </main>
        </div>
    );
};

const Divider = () => <div className='mx-auto h-2 w-6 border-b border-b-fixadate-gray-6'></div>;
