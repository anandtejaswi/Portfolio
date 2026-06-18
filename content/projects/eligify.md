---
title: Eligify
description: A secure exam eligibility verification system with hybrid document parsing that automates student data cross-referencing against exam rules.
stack: ["Flask", "Python", "OCR", "Security"]
github: https://github.com/anandtejaswi/Eligify
images: [{"i":"img-1","url":"/images/eligify1.jpg"},{"i":"img-2","url":"/images/eligify2.jpg"},{"i":"img-3","url":"/images/eligify3.jpg"}]
links: [{"name": "Repository", "url": "https://github.com/anandtejaswi/Eligify"}]
---

Eligify is a secure exam eligibility verification platform that automates the traditionally manual and error-prone process of verifying student eligibility for examinations.

## The Problem

Universities and exam boards spend enormous resources manually cross-referencing student records against eligibility criteria before each exam cycle. This process is time-consuming, inconsistent, and prone to human error — sometimes allowing ineligible students to sit exams or incorrectly barring eligible ones.

## The Solution

Eligify introduces a hybrid document parsing pipeline that ingests both structured (CSV/Excel) and unstructured (PDF, scanned image) data sources. It cross-references parsed student records against a configurable rule engine that encodes eligibility criteria defined by the institution.

## Key Features

- **Hybrid OCR Pipeline** — Supports both digital PDFs and scanned document images via Tesseract OCR, normalizing them into a unified record format.
- **Rule Engine** — A flexible criteria system where admins can configure attendance thresholds, fee clearances, subject prerequisites, and more without touching code.
- **Zero Stored Passwords** — Authentication is handled through one-time tokens, eliminating credential-stuffing attack surfaces entirely.
- **Real-time Feedback** — Students receive immediate eligibility status with human-readable reasons for any disqualification.
- **Security Hardened** — Input sanitization and parameterized queries protect against SQL injection and XSS attacks throughout the stack.

## Technical Architecture

The backend is built on Flask with a modular blueprint structure separating authentication, document parsing, eligibility logic, and admin controls. The OCR layer uses a combination of PyMuPDF for digital PDFs and Tesseract for scanned documents, with a post-processing normalization step that maps extracted text to a canonical schema.

## Impact

The system reduces eligibility processing time from several days to under a minute for batches of thousands of students, while also producing an auditable log of every decision with the specific criteria evaluated.
