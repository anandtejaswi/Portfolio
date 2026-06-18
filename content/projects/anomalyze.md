---
title: Project Anomalyze
description: An AI-powered cybersecurity system detecting network anomalies in real-time to ease the day-to-day work of a SOC analyst.
stack: ["AI/ML", "Python", "Cybersecurity", "Scikit-learn"]
github: https://github.com/anandtejaswi
images: [{"i":"img-1","url":"/images/Project_Anomalyze_1.jpg"},{"i":"img-2","url":"/images/Project_Anomalyze_2.jpg"},{"i":"img-3","url":"/images/Project_Anomalyze_3.jpg"}]
links: [{"name": "Repository", "url": "https://github.com/anandtejaswi"}]
---

Project Anomalyze is an AI-powered network anomaly detection system built to augment the capabilities of Security Operations Center (SOC) analysts by surfacing suspicious IP traffic in real-time.

## The Problem

SOC analysts are overwhelmed by the sheer volume of network logs they must manually triage daily. Traditional rule-based SIEM tools generate too many false positives, causing alert fatigue and allowing genuine threats to slip through unnoticed.

## The Solution

Anomalyze uses a trained machine learning model to classify network connections as normal or anomalous, dramatically reducing the noise that analysts must sift through. The system processes live log streams, applies feature extraction, and flags suspicious activity with a confidence score.

## Key Features

- **Real-time Detection** — Analyses live IP traffic feeds and returns anomaly classifications with sub-second latency.
- **ML Classification Pipeline** — Network logs are transformed into structured numerical feature vectors, and an Isolation Forest / Random Forest model classifies each session.
- **Scalable Ingestion** — Designed to handle high-throughput log sources without blocking the analysis pipeline.
- **Analyst Dashboard** — A clean interface surfaces flagged IPs, anomaly scores, and suggested response actions ranked by severity.
- **Retrainable Model** — Analysts can flag false positives through the UI, which feeds back into an incremental retraining loop.

## Technical Architecture

The ingestion layer consumes log data from network interfaces or log files, normalizes the raw text into structured records, and encodes categorical fields (protocol, flag state) into numeric vectors. The trained Scikit-learn model is served via a lightweight Flask API that the dashboard polls in real-time.

## Impact

In testing against the NSL-KDD dataset, Anomalyze achieved over 97% classification accuracy. Deployed in a simulated SOC environment, it reduced the daily alert volume requiring human review by approximately 80%, allowing analysts to focus only on high-confidence threats.
