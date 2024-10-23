import Link from 'next/link'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { KinotioLogo } from '@/components/kinotio-logo'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

const config: DocsThemeConfig = {
  darkMode: false,
  logo: function Logo() {
    return <KinotioLogo width={100} height={100} />
  },
  project: {
    link: DATA.repo
  },
  chat: {
    link: DATA.social_url.discord
  },
  docsRepositoryBase: DATA.doc_repo,
  footer: {
    content: (
      <span>
        {`Copyright © ${getCurrentYear()} Developed by `}
        <Link href={'https://kinotio.io'} target={'_blank'}>
          Kinotio
        </Link>
        .
      </span>
    )
  }
}

export default config
