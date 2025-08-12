import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Analytics Dashboard',
  description:
    'How I built a regional sales dashboard with drill‑downs, forecasting, and automated reporting that cut manual analysis time by 75%.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Sales Analytics Dashboard</h1>
      <p>This project transforms raw sales data into an interactive, executive‑ready view.</p>

      <h2>Objectives</h2>
      <ul>
        <li>Create a <strong>single source of truth</strong> for regional sales</li>
        <li>Support <strong>drill‑downs</strong> from global → region → rep → product</li>
        <li>Add <strong>predictive forecasting</strong> and <strong>alerts</strong> for anomalies</li>
      </ul>

      <h2>Data &amp; Modeling</h2>
      <ul>
        <li><strong>Sources:</strong> ERP exports + CRM deal tables</li>
        <li><strong>Modeling:</strong> Star schema (FactSales + DimDate/Region/Product)</li>
        <li><strong>Refresh:</strong> Daily scheduled loads</li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>KPI header (Revenue, Growth %, ASP, Win‑Rate)</li>
        <li>Region and product slicers</li>
        <li>Rep performance heatmap and cohort retention</li>
        <li>12‑month forecast with confidence intervals</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li><strong>−75%</strong> manual reporting time</li>
        <li>Faster territory planning and promo timing</li>
      </ul>
    </article>
  )
}