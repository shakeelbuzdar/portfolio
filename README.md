# Muhammad Shakeel – SEO Portfolio (GitHub Pages)

## Kaun si file me kya badalna hai
| Kya badalna hai | File |
|---|---|
| Email, LinkedIn, Fiverr, form endpoint, Google Analytics ID, dropdown options | `assets/js/config.js` |
| Colors aur fonts | `assets/css/style.css` (sab se upar `:root`) |
| Services cards / deliverables | `data/services.js` |
| Portfolio projects | `data/projects.js` (screenshots `assets/img/` me daal kar path likho) |
| FAQ | `data/faq.js` |
| Home / About / Process / Contact / Privacy text | `index.html`, `about.html`, `process.html`, `contact.html`, `privacy.html` |
| Header, footer, menu, CTA section, form fields | `assets/js/site.js` (ek jagah change = har page par) |
| Apni photo | `assets/img/headshot.svg` ko apni `headshot.jpg` se badlo, phir HTML me `headshot.svg` ko `headshot.jpg` likho |

## Form ko email se connect karna (zaroori)
1. https://formspree.io par free account banao, "New Form" banao, apni email do.
2. Endpoint copy karo (`https://formspree.io/f/xxxxxxx`) aur `config.js` me `formEndpoint` me paste karo.
3. Receiver email baad me badalni ho to Formspree dashboard me badlo. Client ki email reply-to ban jati hai.
4. Spam: honeypot already laga hai; Formspree settings me reCAPTCHA bhi on kar sakte ho.
Jab tak endpoint nahi lagta, form error dikhata hai (jhoota success nahi).

## GitHub Pages par upload
1. github.com par new repository banao (Public).
2. "Add file → Upload files": is folder ki saari files drag-drop karo (`.nojekyll` bhi), Commit karo.
3. Settings → Pages → Source: "Deploy from a branch" → Branch `main` / `/ (root)` → Save.
4. 1-2 minute baad site `https://USERNAME.github.io/REPO/` par live.
5. `robots.txt` aur `sitemap.xml` me `YOUR-USERNAME/YOUR-REPO` apne URL se badlo, phir sitemap Search Console me submit karo.
Search Console verification tag har page ke `<head>` me comment me diya hai.

## Note
Placeholders (portfolio, about details, privacy text) ko sirf apni verified information se badlo.
