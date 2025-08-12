import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Analytics Post 3',
  description: 'Text and images coming soon.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Analytics Post 3</h1>
      <p>Add figures, explanations, and key takeaways here.</p>

      <h2>Figure 1</h2>
      <Image
        src="https://picsum.photos/seed/p3/1200/630"
        alt="Placeholder"
        width={1200}
        height={630}
        className="rounded-md"
        unoptimized
      />

      <p className="mt-6">
        <Link href="/work" className="underline">← Back to Work</Link>
      </p>
    </article>
  )
}