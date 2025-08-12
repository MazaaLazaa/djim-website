---
title: "Sales Analytics Dashboard"
date: "2025-08-12"
summary: "How I built a regional sales dashboard with drill‑downs, forecasting, and automated reporting that cut manual analysis time by 75%."
tags: ["analytics", "sales", "forecasting", "power-bi"]
---

# Sales Analytics Dashboard

This project transforms raw sales data into an interactive, executive‑ready view.

## Objectives
- Create a **single source of truth** for regional sales
- Support **drill‑downs** from global → region → rep → product
- Add **predictive forecasting** and **alerts** for anomalies

## Data & Modeling
- **Sources:** ERP exports + CRM deal tables
- **Modeling:** Star schema (FactSales + DimDate/Region/Product)
- **Refresh:** Daily scheduled loads

## Features
- KPI header (Revenue, Growth %, ASP, Win‑Rate)
- Region and product slicers
- Rep performance heatmap and cohort retention
- 12‑month forecast with confidence intervals

## Impact
- **−75%** manual reporting time
- Faster territory planning and promo timing

> Want the implementation notes (measures, refresh config, and governance)?
I can share a sanitized pbix / SQL pattern on request.