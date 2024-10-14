import fluid, { extract } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
    content: {
        files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        extract,
    },
    theme: {
        extend: {
            colors: {
                'fixadate-primary': 'var(--fixadate-primary)',
                'fixadate-secondary-1': 'var(--fixadate-secondary-1)',
                'fixadate-secondary-2': 'var(--fixadate-secondary-2)',
                'fixadate-secondary-3': 'var(--fixadate-secondary-3)',
                'fixadate-secondary-4': 'var(--fixadate-secondary-4)',

                'fixadate-gray-1': 'var(--fixadate-gray-1)',
                'fixadate-gray-2': 'var(--fixadate-gray-2)',
                'fixadate-gray-3': 'var(--fixadate-gray-3)',
                'fixadate-gray-4': 'var(--fixadate-gray-4)',
                'fixadate-gray-5': 'var(--fixadate-gray-5)',
                'fixadate-gray-6': 'var(--fixadate-gray-6)',

                'fixadate-disabled-text': 'var(--fixadate-disabled-text)',
                'fixadate-input-text': 'var(--fixadate-input-text)',
                'fixadate-text': 'var(--fixadate-text)',

                'fixadate-error': 'var(--fixadate-error)',
                'fixadate-positive': 'var(--fixadate-positive)',
                'fixadate-black': 'var(--fixadate-black)',
                'fixadate-white': 'var(--fixadate-white)',
            },
        },
    },
    plugins: [fluid],
};
