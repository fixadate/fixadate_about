import tw from 'tailwind-styled-components';

interface SectionProps {
    $reversed?: boolean;
}
export const Section = tw.div<SectionProps>`    
    mx-auto w-full max-w-screen-lg flex flex-col items-center justify-between gap-24 py-20
    lg:gap-20 lg:justify-start lg:items-end
    ${(p) => (p.$reversed ? 'lg:flex-row-reverse !gap-52' : 'lg:flex-row')}
`;

export const H3 = tw.h3`
    ml-auto flex flex-col items-center ~text-sm/3xl font-normal leading-relaxed text-fixadate-gray-5 lg:text-lg lg:items-start
`;
