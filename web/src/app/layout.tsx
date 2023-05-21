import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TaildCSS e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/** Left */}
          <div
            className="bg-stripers relative flex flex-col items-start justify-between overflow-hidden border-r  
       border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 "
          >
            {/** Blur */}
            <div
              className="-translate-y-ss1/2 absolute right-0 top-1/2 h-[288px] w-[526px] translate-x-1/2 rounded-full
         bg-purple-700 opacity-50 blur-full"
            ></div>
            {/** * Stripes**/}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

            {isAuthenticated ? <Profile /> : <SingIn />}

            <Hero />

            <Copyright />
          </div>

          {/** Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16 ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
