import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
