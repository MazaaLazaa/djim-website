import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my corner of the web —
         I’m a bilingual strategist and data-driven marketer with a passion for turning ideas into measurable impact.
          Here you’ll find my work and projects, 
          where creative thinking meets analytical precision,
           all crafted with focus and intention.
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
