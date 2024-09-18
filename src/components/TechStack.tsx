import React, { useEffect } from 'react';
import { Header } from './Header';

export const TechStack = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />

            <main className='mx-auto mt-40 max-w-screen-lg space-y-60'>
                <div className='space-y-4 text-center'>
                    <h1 className='text-5xl font-bold'>Fixadate 기술 소개</h1>
                    <Divider />
                </div>

                <div className='flex flex-col gap-40'>
                    {/* 1. Backend */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-start'>
                        <h2 className='mr-auto text-4xl font-semibold'>백엔드 기술 스택</h2>

                        <img className='w-3/5' src='images/techStack/be_stack.png' alt='Backend Tech Stack' />
                    </section>

                    <Divider />

                    {/* 2. CICD Pipeline */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-start'>
                        <h2 className='mr-auto text-4xl font-semibold'>CICD Pipline</h2>

                        <img className='w-4/5' src='images/techStack/cicd.png' alt='CICD Pipeline' />
                    </section>

                    <Divider />

                    {/* 3. Infrastructure */}
                    <section className='flex h-full w-full flex-col items-center justify-center gap-20 text-start'>
                        <h2 className='mr-auto text-4xl font-semibold'>Infrastructure</h2>

                        <img className='w-4/5' src='images/techStack/aws.png' alt='Infrastructure' />
                    </section>
                </div>
            </main>
        </>
    );
};

const Divider = () => <div className='mx-auto h-2 w-6 border-b border-b-fixadate-gray-6'></div>;
