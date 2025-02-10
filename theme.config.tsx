import { DocsThemeConfig } from 'nextra-theme-docs'

import { Kinotio } from '@/components/icons/kinotio'
import { Heart } from '@/components/icons/heart'

import { DATA } from '@/data'

const config: DocsThemeConfig = {
  color: {
    hue: 25
  },
  logo: () => <Kinotio width={125} height={125} />,
  project: {
    link: DATA.repo
  },
  chat: {
    link: DATA.social_url.discord
  },
  docsRepositoryBase: DATA.doc_repo,
  footer: {
    content: (
      <div className='footer'>
        <div className='icon'>
          <Heart />
        </div>
        <p className='paragraph'>crafted with care and dedication.</p>
      </div>
    )
  }
}

export default config
