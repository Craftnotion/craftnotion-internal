import './utilities/styles/reset.css'
import './utilities/styles/globals.scss'
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import localFont from 'next/font/local'

const primaryfont = Urbanist({
	subsets: ["latin"],
	variable: '--font_primary'
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({ children }: Readonly<{
  	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${primaryfont.variable} ${titlefont.variable}`}>{children}</body>
		</html>
	)
}

const titlefont = localFont({
	src: [
		{
			path: 'fonts/LufgaThin.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaExtraLight.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaLight.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaMedium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaSemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: 'fonts/LufgaBlack.ttf',
			weight: '900',
			style: 'normal',
		}
	],
	variable: '--font_title'
})