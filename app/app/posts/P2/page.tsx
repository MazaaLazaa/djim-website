import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Analytics Post',
  description: 'Text and images coming soon.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Analytics Post</h1>
      <p>Write your content here. You can add text, lists, code, and images.</p>

      <h2>Sample image</h2>
      <Image
        src="https://picsum.photos/1200/630"
        alt="Placeholder"
        width={1200}
        height={630}
        className="rounded-md"
        unoptimized
      />
    </article>
  )
}