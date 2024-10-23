import { icons } from 'lucide-react'

import { Icon } from '@/components/ui/icon'

const features: { title: string; description: string; icon: string }[] = [
  {
    title: 'Interactive Setup Wizard',
    description:
      'Simplify the initial configuration and installation process with a guided, step-by-step wizard.',
    icon: 'Wand'
  },
  {
    title: 'Comprehensive API Documentation',
    description:
      'Access detailed API references with examples to help integrate and extend the product.',
    icon: 'Code'
  },
  {
    title: 'Deployment Guides',
    description:
      'Follow in-depth tutorials for deploying the product across various environments, including cloud and on-premises.',
    icon: 'Cloud'
  },
  {
    title: 'Use Case Scenarios',
    description:
      'Explore real-world examples and case studies demonstrating how to apply the product to solve specific problems.',
    icon: 'BookOpen'
  },
  {
    title: 'Search and Navigation',
    description:
      'Utilize advanced search functionality and intuitive navigation to quickly find relevant information.',
    icon: 'Search'
  },
  {
    title: 'Troubleshooting and FAQs',
    description:
      'Access a dedicated section for common issues and frequently asked questions to resolve problems quickly.',
    icon: 'HandHelping'
  }
]

export const Information = () => {
  return (
    <section id='information' className='w-full py-12 md:py-24 lg:py-32 flex justify-center'>
      <div className='container px-4 md:px-6'>
        <div className='gap-6'>
          <div className='space-y-4 grid grid-cols-2'>
            <div className='space-y-2 flex flex-col justify-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Introducing Our Documentation
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Our Documentation Platform offers an extensive collection of resources designed to
                guide you through every aspect of our product. From initial configuration and
                installation to seamless deployment, our step-by-step instructions ensure a smooth
                setup process.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {features.map((feature) => (
                <div key={feature.title} className='rounded-lg border bg-background p-4 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
                    <Icon
                      name={feature.icon as keyof typeof icons}
                      size={20}
                      className='text-primary-foreground'
                    />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold'>{feature.title}</h3>
                  <p className='text-sm text-muted-foreground'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
