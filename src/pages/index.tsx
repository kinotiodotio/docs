import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { DATA } from '@/data'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`
  },
  description: DATA.description,
  keywords: DATA.keywords,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image'
  },
  verification: {
    google: '',
    yandex: ''
  }
}

export default function Home() {
  return (
    <ThemeProvider attribute='class' forcedTheme='dark'  disableTransitionOnChange>
      <div className={cn('min-h-screen relative overflow-hidden', [inter.className])}>
        <Head>
          <title>{metadata.title.default}</title>
          <meta name='description' content={metadata.description} />
          <meta name='keywords' content={metadata.keywords.join(', ')} />
          <meta property='og:title' content={metadata.openGraph.title} />
          <meta property='og:description' content={metadata.openGraph.description} />
          <meta property='og:url' content={metadata.openGraph.url} />
          <meta property='og:site_name' content={metadata.openGraph.siteName} />
          <meta property='og:locale' content={metadata.openGraph.locale} />
          <meta property='og:type' content={metadata.openGraph.type} />
          <meta name='robots' content='index, follow' />
          <meta
            name='googlebot'
            content='index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
          />
          <meta name='twitter:title' content={metadata.twitter.title} />
          <meta name='twitter:card' content={metadata.twitter.card} />
          <meta name='google-site-verification' content={metadata.verification.google} />
          <meta name='yandex-verification' content={metadata.verification.yandex} />
        </Head>

        <Script
          async
          src='https://analytics.kinotio.io/script.js'
          data-website-id='718d3793-a9ba-4478-abd9-595f53028bb8'
        />

        <Header />
        <main className='min-h-screen'>
          <section className='container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white to-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse'></div>
            <div className='max-w-6xl space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-4xl font-medium text-white md:text-5xl lg:text-6xl'>
                  This platform is dedicated to providing detailed documentation about our products,
                  offering users and developers the necessary insights and guidance to effectively
                  engage with and contribute to our ecosystem.
                </h1>
              </div>
              <div>
                <p className='text-white'>
                  If you&apos;re passionate about open-source development, you should{' '}
                  <Link href='/join' className='underline hover:text-gray-300'>
                    join us and contribute!
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
