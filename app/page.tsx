import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my portfolio! Here you’ll find a collection of my work, projects, and ideas—each crafted with care and attention to detail. Take a look around, explore the posts, and discover the creativity and problem-solving that drive my work.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
