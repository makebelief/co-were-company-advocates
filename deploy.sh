#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo 'First use: extract the new ZIP contents INTO the already-linked GitHub repository directory.'
  exit 1
fi
if ! git remote get-url origin >/dev/null 2>&1; then
  echo 'Missing GitHub origin. Run inside the EXISTING repository.'; exit 1
fi
git add -A
git diff --cached --quiet || git commit -m "Redesign C.O. Were website with client portraits and Pexels imagery"
git push origin HEAD:main
# Reuse the existing named project, creating it only when needed.
if ! vercel link --yes --project co-were-company-advocates --scope shayo-victors-projects; then
  vercel project add co-were-company-advocates --scope shayo-victors-projects
  vercel link --yes --project co-were-company-advocates --scope shayo-victors-projects
fi
vercel deploy --prod --yes --scope shayo-victors-projects
