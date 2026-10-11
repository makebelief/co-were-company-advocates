#!/usr/bin/env bash
# Run from the unzipped CO_Were_Production_Website folder after gh/vercel login.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
REPO_NAME="${REPO_NAME:-co-were-company-advocates}"
VISIBILITY="${VISIBILITY:---private}"
for cmd in git gh vercel; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    printf 'Missing command: %s. See README.md for installation.\n' "$cmd" >&2
    exit 1
  fi
done
if [[ ! -d .git ]]; then git init -b main; fi
git branch -M main
git add .
if ! git diff --cached --quiet; then git commit -m "Launch C.O. Were & Company Advocates website"; fi
if ! git remote get-url origin >/dev/null 2>&1; then
  echo 'Creating GitHub repository and pushing main branch...'
  gh repo create "$REPO_NAME" "$VISIBILITY" --source=. --remote=origin --push
else
  echo 'Pushing to the existing GitHub origin...'
  git push -u origin main
fi
printf '\nDeploying the website to Vercel production...\n'
# Vercel writes the final deployment URL to stdout; allow the CLI to print its progress.
vercel deploy --prod --yes | tee .DEPLOYED_URL.txt
printf '\nLIVE WEBSITE LINK:\n'
grep -Eo 'https://[^[:space:]]+' .DEPLOYED_URL.txt | tail -n 1 || true
printf '\nCopy this link and send it to your client.\n'
