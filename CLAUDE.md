# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository documents the K. phaffii hoc1tr strain (PhaffiiNet-2) distributed by Change Bio. It's a scientific/biotechnology resource repository containing strain information, genetic sequences, and distribution data for the microbiology research community.

**Important**: This repository contains confidential commercial information that has not yet been reviewed by Change Bio's lawyers. Handle with appropriate discretion.

## Repository Structure

- `README.md` - Main documentation explaining the strain, its construction, and distribution
- `index.md` - Jekyll homepage with "coming soon" landing page
- `_config.yml` - Jekyll configuration for GitHub Pages (minimal theme)
- `CLAUDE.md` - This file - guidance for Claude Code instances
- `phaffinet.csv` - Database of strains with IDs, genotypes, and contact information
- `sequence_resources/` - Genetic sequence files and construction materials
  - `Phaffiinet_1/YB-4290_annotated.gbk` - Annotated genome sequence of parent strain
  - `Phaffiinet_2/` - Construction materials for the hoc1tr strain including:
    - Cloning strategy documentation
    - Split marker fragments
    - PCR primers for verification
    - Sequencing results
- `NRRL_Order_Form_anonymised.pdf` - Documentation of original strain acquisition
- `.github/workflows/jekyll-gh-pages.yml` - GitHub Pages deployment workflow

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

This repository contains biological data and documentation rather than software code. There are no build, test, or lint commands. Work primarily involves:
- Updating strain database (phaffinet.csv)
- Managing sequence files in GenBank format (.gbk, .gb)
- Maintaining documentation and distribution records

### Jekyll/GitHub Pages
- Repository is configured for GitHub Pages with Jekyll
- Uses `jekyll-theme-minimal` for clean, academic presentation
- Automatic deployment via `.github/workflows/jekyll-gh-pages.yml`
- Site builds automatically on push to main branch

## Outstanding Tasks
- Whole-genome sequencing validation
- Killer plasmid screening
- Community testing to reproduce OpenPichia findings
- FTO legal documentation