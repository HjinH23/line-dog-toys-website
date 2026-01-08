import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const fredoka = Fredoka({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-fredoka',
    display: 'swap',
})

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700', '800'],
    variable: '--font-nunito',
    display: 'swap',
})

export const metadata: Metadata = {
    title: '线条小狗 - 优质毛绒玩具制造商',
    description: '线条小狗专注于生产高品质儿童毛绒玩具,为8-14岁儿童带来温暖陪伴和快乐时光。',
    keywords: '毛绒玩具,儿童玩具,线条小狗,玩具制造商,小狗玩具,小熊玩具',
    authors: [{ name: '线条小狗' }],
    openGraph: {
        title: '线条小狗 - 优质毛绒玩具制造商',
        description: '专注于生产高品质儿童毛绒玩具',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN" className={`${fredoka.variable} ${nunito.variable}`}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <ChatWidget />
            </body>
        </html>
    )
}
