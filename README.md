# Gandalf Website

Last updated: 2026-03-05

## Table of Contents

<!-- TOC start -->
- [Stack](#stack)
- [Local development](#local-development)
- [Build + preview](#build--preview)
- [Content source of truth](#content-source-of-truth)
- [Cloudflare Pages settings](#cloudflare-pages-settings)
- [Notable files](#notable-files)
<!-- TOC end -->

[![Lint](https://github.com/RaphaelGuerra/Gandalf-website/actions/workflows/lint.yml/badge.svg)](https://github.com/RaphaelGuerra/Gandalf-website/actions/workflows/lint.yml)
[![Security](https://github.com/RaphaelGuerra/Gandalf-website/actions/workflows/security.yml/badge.svg)](https://github.com/RaphaelGuerra/Gandalf-website/actions/workflows/security.yml)

Single-page landing site for **Gandalf** (Raphael Guerra's personal AI sage), built with Astro + Tailwind and deployed as static output.

## Stack

- Astro (static site generation)
- Tailwind CSS
- TypeScript config/data
- Cloudflare Pages-ready output (`dist`)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build + preview

```bash
npm run build
npm run preview
```

## Content source of truth

All site content and links are centralized in:

- `src/site.config.ts`

Update this file to change navigation, CTAs, features, prompts, and core copy.

## Cloudflare Pages settings

- Framework preset: `Astro` (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` (also pinned in `.nvmrc`)

## Notable files

- `src/layouts/BaseLayout.astro`
- `src/components/Nav.astro`
- `src/components/Hero.astro`
- `src/components/Section.astro`
- `src/components/FeatureGrid.astro`
- `src/components/PromptExamples.astro`
- `src/components/Footer.astro`
- `src/styles/global.css`
- `public/patterns/runes.svg`
- `public/favicon.svg`
- `public/og.png`
- `public/_headers`
