/**
 * Build a standalone single HTML file.
 *
 * 1. Run the normal Vite build (JS/CSS are chunked).
 * 2. Inline every <script> and <link rel="stylesheet"> into the HTML.
 * 3. Find every image URL referenced inside the inlined JS bundle
 *    (patterns like "/images/screenshots/clean/foo.png") and replace
 *    them with base64 data URIs by reading from public/.
 * 4. Also inline the Google Fonts CSS and font files.
 * 5. Write out a single dist-single/index.html.
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { glob } from 'node:fs/promises';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const OUT  = join(ROOT, 'dist-single');
const PUB  = join(ROOT, 'public');

// Step 1 — normal build
console.log('Building with Vite...');
execSync('npx vite build', { cwd: ROOT, stdio: 'inherit' });

// Step 2 — read index.html
let html = readFileSync(join(DIST, 'index.html'), 'utf-8');

// Step 3 — inline CSS files
const cssRe = /<link\s+rel="stylesheet"\s+crossorigin\s+href="(\/assets\/[^"]+\.css)"[^>]*>/g;
html = html.replace(cssRe, (_match, href) => {
  const css = readFileSync(join(DIST, href), 'utf-8');
  return `<style>${css}</style>`;
});

// Step 4 — inline JS files
const jsRe = /<script\s+type="module"\s+crossorigin\s+src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/g;
html = html.replace(jsRe, (_match, src) => {
  const js = readFileSync(join(DIST, src), 'utf-8');
  return `<script type="module">${js}</script>`;
});

// Also handle modulepreload links (remove them, they're not needed in single file)
html = html.replace(/<link\s+rel="modulepreload"[^>]*>/g, '');

// Step 5 — inline all images referenced in the HTML/JS as /images/...
// Find patterns like "/images/screenshots/clean/foo.png" or "/images/logos/bar.svg"
const imgRe = /\/images\/[a-zA-Z0-9_\/\-]+\.(png|jpg|jpeg|svg|gif|webp)/g;
const seen = new Set();

// Collect all image paths from the full HTML (which now includes inlined JS)
const matches = html.match(imgRe) || [];
for (const imgPath of matches) {
  if (seen.has(imgPath)) continue;
  seen.add(imgPath);

  const filePath = join(PUB, imgPath);
  if (!existsSync(filePath)) {
    console.warn(`  Warning: ${imgPath} not found in public/`);
    continue;
  }

  const ext = extname(filePath).slice(1).toLowerCase();
  const mime = {
    png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
    svg: 'image/svg+xml', gif: 'image/gif', webp: 'image/webp',
  }[ext] || 'application/octet-stream';

  const b64 = readFileSync(filePath).toString('base64');
  const dataUri = `data:${mime};base64,${b64}`;

  // Escape the path for use in regex (forward slashes)
  const escaped = imgPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  html = html.replace(new RegExp(escaped, 'g'), dataUri);
  console.log(`  Inlined: ${imgPath} (${Math.round(b64.length / 1024)}KB)`);
}

// Step 6 — inline the Google Fonts
// Replace the external font link with an inline @font-face using the system font
// (embedding actual Google Font files would add ~500KB+ and they're not critical)
html = html.replace(/<link\s+rel="preconnect"[^>]*>/g, '');
html = html.replace(/<link\s+href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*>/g, '');

// Step 7 — inline the favicon
const faviconRe = /<link\s+rel="icon"\s+type="image\/svg\+xml"\s+href="([^"]+)"[^>]*>/;
const faviconMatch = html.match(faviconRe);
if (faviconMatch) {
  const favPath = join(PUB, faviconMatch[1]);
  if (existsSync(favPath)) {
    const favB64 = readFileSync(favPath).toString('base64');
    html = html.replace(faviconMatch[0],
      `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${favB64}" />`);
    console.log('  Inlined: favicon');
  }
}

// Step 8 — write output
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'index.html'), html, 'utf-8');

const sizeKB = Math.round(html.length / 1024);
const sizeMB = (html.length / (1024 * 1024)).toFixed(1);
console.log(`\nDone! Single file: dist-single/index.html (${sizeKB}KB / ${sizeMB}MB)`);
