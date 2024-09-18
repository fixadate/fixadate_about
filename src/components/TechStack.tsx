import React, { useEffect } from 'react';
import { Header } from './Header';

export const TechStack = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />

            <main className='mx-auto mt-40 max-w-screen-lg'>
                <div className='h-screen space-y-4 text-center'>
                    <h1 className='text-5xl font-semibold'>기술 소개</h1>
                    <p className='text-lg font-medium'>Fixadate에 사용된 Tech-Stack을 정리한 페이지랍니다.</p>
                </div>

                <div className='mt-[-20rem] flex flex-col gap-80'>
                    {/* 1. Backend */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-center'>
                        <h2 className='text-4xl font-semibold'>Backend</h2>

                        <img className='w-4/5' src='images/techStack/be_stack.png' alt='Backend Tech Stack' />
                    </section>

                    {/* 2. CICD Pipeline */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-center'>
                        <h2 className='text-4xl font-semibold'>CICD Pipline</h2>

                        <img className='w-4/5' src='images/techStack/cicd.png' alt='CICD Pipeline' />
                    </section>

                    {/* 3. Infrastructure */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-center'>
                        <h2 className='text-4xl font-semibold'>Infrastructure</h2>

                        <img className='w-4/5' src='images/techStack/aws.png' alt='Infrastructure' />
                    </section>
                </div>
            </main>
        </>
    );
};
