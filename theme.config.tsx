import { DocsThemeConfig } from 'nextra-theme-docs'

import { Kinotio } from '@/components/icons/kinotio'
import { Heart } from '@/components/icons/heart'

import { DATA } from '@/data'

const config: DocsThemeConfig = {
  logo: () => <Kinotio width={100} height={100} />,
  project: {
    link: DATA.repo
  },
  chat: {
    link: DATA.social_url.discord
  },
  docsRepositoryBase: DATA.doc_repo,
  footer: {
    content: (
      <div className='flex items-center space-x-3 text-gray-400'>
        <div className='h-6 w-6 opacity-50'>
          <Heart />
        </div>
        <p className='text-sm'>crafted with care and dedication.</p>
      </div>
    )
  }
}

export default config
