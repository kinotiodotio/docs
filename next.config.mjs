/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: true
      }
    ]
  }
}

export default withNextra(nextConfig)
