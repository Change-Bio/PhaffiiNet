# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains:
1. A Next.js static website for phaffii.net showcasing K. phaffii strains
2. Scientific documentation for PhaffiiNet strains distributed by Change Bio
3. Genetic sequences and strain distribution data for the microbiology research community

**Important**: This repository contains confidential commercial information that has not yet been reviewed by Change Bio's lawyers. Handle with appropriate discretion.

## Repository Structure

### Website Code (Next.js)
- `src/app/` - Next.js 14 App Router pages
  - `page.tsx` - Homepage with hero section and strain cards
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global Tailwind CSS styles
- `content/` - Markdown content files with frontmatter
  - `home.md` - Homepage hero text and strain section content
  - `strains/*.md` - Individual strain markdown files
  - `settings.md` - Site-wide settings (colors, company name)
- `package.json` - npm scripts and dependencies
- `next.config.mjs` - Next.js configured for static export
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with `@/*` path alias

### Scientific Data
- `README.md` - Main scientific documentation explaining strain construction and distribution
- `data/strain_database.csv` - Database of strains with IDs, genotypes, and contact information
- `data/sequence_resources/` - Genetic sequence files and construction materials
  - `Phaffiinet_1/YB-4290_annotated.gbk` - Annotated genome sequence of parent strain
  - `Phaffiinet_2/` - Construction materials for the hoc1tr strain including cloning strategy, split marker fragments, PCR primers, and sequencing results
- `data/NRRL_Order_Form_anonymised.pdf` - Documentation of original strain acquisition

## Key Information

### Strain Details
- **PhaffiiNet-1 (PN-1)**: YB-4290 type strain from ARS/NRRL collection
- **PhaffiiNet-2 (PN-2)**: Industrial strain with hoc1tr modification, equivalent to CBS7435/OpenPichia
- Distribution under OpenMTA through noah@changebio.uk
- Strain construction followed Claes et al., 2024 methodology using double-crossover with split Noursethricin marker

### Legal/Compliance Considerations
- Original YB-4290 strain obtained from USDA-ARS Culture Collection (NRRL)
- Third parties should contact ARS directly for parent strain
- Modified strain (PhaffiiNet-2) distributed under OpenMTA
- Freedom to Operate (FTO) investigation ongoing
- Acknowledgment required: "Microbial strains used in this work were provided by the USDA-ARS Culture Collection (NRRL)"

## Development Commands

### Next.js Website
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build static site for production (output to out/)
npm run start        # Start production server (requires build first)
npm run lint         # Run Next.js linter
npm run deploy:dev   # Build and deploy to Firebase dev environment
npm run deploy:prod  # Build and deploy to Firebase production environment
npm run deploy       # Alias for deploy:dev
```

### Scientific Data Management
Work primarily involves:
- Updating strain database (`data/strain_database.csv`)
- Managing sequence files in GenBank format (`.gbk`, `.gb`)
- Maintaining documentation in `README.md`
- Adding/updating strain content files in `content/strains/*.md`

## Architecture Notes

### Content Management System
The website uses a file-based CMS approach:
- Content is stored in markdown files with YAML frontmatter in `content/`
- `gray-matter` parses frontmatter at build time (server-side)
- Page components use Node.js `fs` module to read content during static generation
- Strains are rendered as cards, sorted by `order` field in frontmatter

### Static Site Generation
- Next.js configured with `output: 'export'` for static HTML export
- Images use `unoptimized: true` for compatibility with static hosting
- No API routes or server-side rendering - fully static site
- `@/*` path alias maps to `./src/*` for cleaner imports

## Outstanding Tasks
- Whole-genome sequencing validation
- Killer plasmid screening
- Community testing to reproduce OpenPichia findings
- FTO legal documentation