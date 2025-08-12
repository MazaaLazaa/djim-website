import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ticket Sales & Churn Prediction',
  description: 'Predicting season-ticket churn using behavioral signals with actionable retention dashboards.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Ticket Sales & Churn Prediction</h1>
      <p>This project uses predictive modeling to forecast season-ticket holder churn, leveraging historical behavior, purchase patterns, and engagement metrics to drive targeted retention campaigns.</p>

      <h2>Key Objectives</h2>
      <ul>
        <li>Identifying early churn indicators from fan engagement data.</li>
        <li>Building predictive models to segment high-risk ticket holders.</li>
        <li>Creating actionable dashboards for retention teams.</li>
      </ul>

      <h2>Dashboard Preview</h2>
      <Image
        src="https://picsum.photos/seed/ticketsales/1200/630"
        alt="Ticket Sales & Churn Prediction Dashboard"
        width={1200}
        height={630}
        className="rounded-md"
        unoptimized
      />

      <h2>Technical Stack</h2>
      <div className="flex space-x-4 mt-4">
        <div className="border border-gray-300 rounded-md px-3 py-1">Python</div>
        <div className="border border-gray-300 rounded-md px-3 py-1">Pandas</div>
        <div className="border border-gray-300 rounded-md px-3 py-1">Scikit-learn</div>
        <div className="border border-gray-300 rounded-md px-3 py-1">Power BI</div>
        <div className="border border-gray-300 rounded-md px-3 py-1">SQL</div>
      </div>

      <h2>Impact</h2>
      <p>The implemented solution successfully reduced season-ticket churn by 15%, significantly improving marketing efficiency and enabling the retention team to focus efforts on high-risk segments with tailored campaigns.</p>

      <p className="mt-6">
        <Link href="/work" className="underline">← Back to Work</Link>
      </p>
    </article>
  )
}