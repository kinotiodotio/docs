import Link from 'next/link'
import { Github } from 'lucide-react'

import { Kinotio } from '@/components/icons/kinotio'
import { Discord } from '@/components/icons/discord'

import { DATA } from '@/data'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <Kinotio width={150} height={100} />
        </Link>
        <nav className='flex items-center space-x-6'>
          <Link href='/docs' className='text-gray-300 hover:text-white transition-colors'>
            Docs
          </Link>
          <Link
            href={DATA.social_url.discord}
            className='text-gray-300 hover:text-white transition-colors'
          >
            <Discord className='h-6 w-6' />
            <span className='sr-only'>Discord</span>
          </Link>
          <Link
            href={DATA.social_url.github}
            className='text-gray-300 hover:text-white transition-colors'
          >
            <Github className='h-6 w-6' />
            <span className='sr-only'>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
