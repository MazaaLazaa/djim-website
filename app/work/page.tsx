import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'My Work',
  description: 'Showcase of my web development and data analytics projects.',
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const websites = [
  {
    title: 'Pulaar',
    description: 'High-end, unisex ready-to-wear clothing brand with Afro-European influences.',
    tech: [],
    link: 'https://pulaar.co/',
    image: 'https://image.thum.io/get/width/1200/crop/800/https://pulaar.co/',
  },
  {
    title: 'Sophie Lukacs',
    description: 'Official website for Sophie Lukacs, a kora player and composer.',
    tech: [],
    link: 'https://www.sophielukacs.com/',
    image: 'https://image.thum.io/get/width/1200/crop/800/https://www.sophielukacs.com/',
  },
  {
    title: 'Szapor',
    description: 'Website for Szapor.',
    tech: [],
    link: 'https://szapor.com/',
    image: 'https://image.thum.io/get/width/1200/crop/800/https://szapor.com/',
  },
]

const dashboards = [
  {
    title: 'Analytics Post 1',
    href: '/work/posts/P1',
    description: 'Coming soon — text and images. (Built with Power BI and SQL)',
    tech: [],
    metrics: [],
  },
  {
    title: 'Analytics Post 2',
    href: '/work/posts/P2',
    description: 'Coming soon — text and images. (Built with Tableau and Python)',
    tech: [],
    metrics: [],
  },
  {
    title: 'Analytics Post 3',
    href: '/work/posts/P3',
    description: 'Coming soon — text and images. (Built with Looker Studio and BigQuery)',
    tech: [],
    metrics: [],
  },
  {
    title: 'Analytics Post 4',
    href: '/work/posts/P4',
    description: 'Coming soon — text and images. (Built with Excel and VBA)',
    tech: [],
    metrics: [],
  },
  {
    title: 'Analytics Post 5',
    href: '/work/posts/P5',
    description: 'Coming soon — text and images. (Built with R Shiny and PostgreSQL)',
    tech: [],
    metrics: [],
  },
]

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Work</h1>
      
      <div className="mb-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          A showcase of my professional work spanning web development and data analytics. 
          Each project represents a unique challenge solved with modern technologies and best practices.
        </p>
      </div>

      {/* Websites Section */}
      <div className="mt-12">
        <h2 className="font-semibold text-xl mb-6 tracking-tight">Websites</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Full-stack web applications built with a focus on performance, user experience, and scalability.
        </p>
        
        <div className="grid gap-8">
          {websites.map((project, index) => (
            <div 
              key={index} 
              className="group border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md object-cover"
                    unoptimized
                  />
                </Link>
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Visit Site
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mt-16">
        <h2 className="font-semibold text-xl mb-6 tracking-tight">Analytics & Dashboards</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Data-driven solutions that transform raw data into actionable insights through interactive visualizations and automated reporting.
        </p>
        
        <div className="grid gap-8">
          {dashboards.map((dashboard, index) => (
            <Link
              key={index}
              href={dashboard.href}
              className="group block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <h3 className="font-medium text-lg mb-2">{dashboard.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {dashboard.description}
              </p>
              
              {dashboard.metrics.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Key Metrics:</p>
                  <div className="flex flex-wrap gap-3">
                    {dashboard.metrics.map((metric) => (
                      <span key={metric} className="text-sm text-blue-600 dark:text-blue-400">• {metric}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {dashboard.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {dashboard.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded">{tech}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-medium text-lg mb-2">Interested in working together?</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          I'm always open to discussing new projects and opportunities. Whether you need a modern web application 
          or data-driven insights for your business, let's connect and explore how we can collaborate.
        </p>
        <Link 
          href="mailto:hello@example.com"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Get in touch
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
} 