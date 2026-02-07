# Remodelação.Pt (HTML/CSS/JS)

## Files
- `index.html` — layout + content + base SEO + JSON-LD (LocalBusiness/WebSite)
- `styles.css` — responsive styling + mobile menu + animations
- `app.js` — hamburger menu logic + scroll reveal + FAQ behavior + PT/EN/ES/FR i18n + dynamic SEO + FAQ JSON-LD

## Change text / languages
- Edit translations in `app.js` → `I18N` object.
- Any element with `data-i18n="someKey"` will be filled from `I18N[someKey][lang]`.

## Change SEO
- Edit `app.js` → `SEO_META` (title/description per language).
- FAQ structured data is generated from the visible FAQ after translation.

## Replace visuals
- Hero “image” is a gradient block: `index.html` → `.media-frame`.
- CSS may use `html[lang]` for small per-language tweaks, but hero sizing is now handled with a general desktop override.
- Project cards use inline `style="--bg: ..."`; replace with real images by swapping to `background-image: url(...)` in CSS or inline styles.

## Mobile menu
- At `<980px` the nav becomes an off-canvas panel.
- JS closes menu on outside click, ESC, and when a nav link is tapped.

## Contact icons
- The 3 contact icons (Email/Phone/WhatsApp) are inline SVGs in `index.html` under `#contactos`.
- Circle styling + colors are in `styles.css` under the `.contact-icon` rules.
- WhatsApp title is translated via `data-i18n="contactWhatsappTitle"` in `index.html` and the `I18N` key in `app.js`.
