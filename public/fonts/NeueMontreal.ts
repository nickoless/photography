import localFont from 'next/font/local';

const myFont = localFont({
	src: [
		{
			path: './NeueMontreal_Book.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './NeueMontreal_Medium.otf',
			weight: '600',
		},
		{
			path: './NeueMontreal_Bold.otf',
			weight: '800',
			style: 'normal',
		},
	],
	fallback: ['Sans-serif'],
});

export default myFont;
