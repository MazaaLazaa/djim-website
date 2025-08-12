import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Performance Monitor',
  description:
    'Executive dashboard for revenue, margin, and cash—real‑time monitoring with variance analysis and scenario planning.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Financial Performance Monitor</h1>
      <p>A C‑suite view that keeps revenue, margin, and cash in one place.</p>

      <h2>Core Metrics</h2>
      <ul>
        <li>Topline revenue, GM%, OPEX by function</li>
        <li>Unit economics: CAC, LTV, Payback</li>
        <li>Cash runway + DSOs</li>
      </ul>

      <h2>Analysis</h2>
      <ul>
        <li>
          <strong>Variance vs. plan</strong> and vs. prior year
        </li>
        <li>Drill into FX impact and seasonality</li>
        <li>Scenario planning with driver‑based assumptions</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Surfaced <strong>$2M</strong> cost‑saving opportunities</li>
        <li>Standardized monthly reviews across teams</li>
      </ul>
    </article>
  )
}
