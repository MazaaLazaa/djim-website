import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Campaign Tracker',
  description:
    'Unified cross‑channel campaign analytics: spend, reach, conversions, and ROI with automated QA and alerting.',
}

export default function Page() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Marketing Campaign Tracker</h1>
      <p>
        A centralized view of <strong>paid</strong>, <strong>owned</strong>, and{' '}
        <strong>earned</strong> performance so teams make decisions on the same numbers.
      </p>

      <h2>What it Solves</h2>
      <ul>
        <li>Fragmented data across ads, web, and CRM</li>
        <li>Inconsistent attribution assumptions</li>
        <li>Slow, manual reporting cycles</li>
      </ul>

      <h2>Approach</h2>
      <ol>
        <li><strong>Ingestion:</strong> API pulls (ads), GA4 export, and CRM leads/opps</li>
        <li><strong>Normalization:</strong> Channel taxonomies + UTM standards</li>
        <li><strong>Attribution:</strong> Last‑touch by default with MTA sensitivity checks</li>
        <li><strong>QA:</strong> Anomaly detection and source freshness checks</li>
      </ol>

      <h2>Views</h2>
      <ul>
        <li>Channel overview (CPM, CPC, CPL, CAC, ROAS)</li>
        <li>Creative analysis by message and format</li>
        <li>Funnel drop‑offs (impressions → clicks → MQL → SQL → Win)</li>
      </ul>

      <h2>Outcomes</h2>
      <ul>
        <li><strong>+30%</strong> ROI via budget reallocation</li>
        <li>Faster weekly readouts with shareable deep links</li>
      </ul>
    </article>
  )
}