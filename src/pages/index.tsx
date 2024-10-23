import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <Header />
        <h1>Hello docs</h1>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
