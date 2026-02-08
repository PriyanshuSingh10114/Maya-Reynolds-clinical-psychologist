<h1>Maya Reynolds — Clinical Psychologist Website</h1>

<p>
This repository contains the source code for the clinical psychology practice website of
<strong>Dr. Maya Reynolds, PsyD</strong>.
</p>

<p>
The site is built using modern frontend technologies with a focus on calm, clarity,
and accessibility for adults seeking therapy for anxiety, trauma, burnout,
and perfectionism.
</p>

<hr />

<h2>Overview</h2>

<p>
This project is a modern therapy website designed to feel professional, grounded,
and supportive. It reflects Dr. Maya Reynolds’ therapeutic approach and clinical focus.
</p>

<ul>
  <li>Refined home page with clear positioning and call-to-action</li>
  <li>Blog with dynamic routing and individual post pages</li>
  <li>Contact and booking sections with HIPAA-aware messaging</li>
  <li>Office location details and FAQs</li>
  <li>Consistent navigation and footer across the site</li>
</ul>

<hr />

<h2>Tech Stack</h2>

<ul>
  <li>Next.js (App Router)</li>
  <li>React</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
  <li>Next/Image for optimized images</li>
  <li>Custom hooks for scroll animations and parallax effects</li>
</ul>

<hr />

<h2>Project Structure</h2>

<pre>
app/
 ├─ blog/
 │   ├─ [slug]/page.tsx
 │   └─ page.tsx
 ├─ contact/
 │   ├─ ContactHero.tsx
 │   ├─ ContactBooking.tsx
 │   ├─ OfficeSection.tsx
 │   ├─ SocialGallery.tsx
 │   └─ page.tsx
 ├─ components/
 │   ├─ Hero.tsx
 │   ├─ FAQSection.tsx
 │   ├─ Footer.tsx
 │   └─ Shared UI components
 ├─ layout.tsx
 └─ page.tsx
hooks/
 ├─ useScrollAnimation.ts
 └─ useParallax.ts
public/
 └─ Images and static assets
</pre>

<hr />

<h2>Key Features</h2>

<h3>Home Page</h3>
<ul>
  <li>Parallax hero section</li>
  <li>Clear therapy focus: anxiety, trauma, burnout</li>
  <li>Client-centered and non-clinical language</li>
  <li>Responsive design for all screen sizes</li>
</ul>

<h3>Blog</h3>
<ul>
  <li>Blog grid with curated mental health topics</li>
  <li>Dynamic blog post pages using URL slugs</li>
  <li>Previous / next post navigation</li>
  <li>Readable long-form content layout</li>
</ul>

<h3>Contact Page</h3>
<ul>
  <li>Supportive contact hero messaging</li>
  <li>Booking call-to-action</li>
  <li>HIPAA-aware disclaimer for forms</li>
  <li>Office location with embedded map</li>
  <li>Shared footer used across the entire site</li>
</ul>

<h3>Animations & UX</h3>
<ul>
  <li>Subtle scroll-based animations</li>
  <li>Parallax imagery where appropriate</li>
  <li>No distracting or excessive motion</li>
  <li>Accessibility-focused spacing and typography</li>
</ul>

<hr />

<h2>Getting Started</h2>

<h3>Clone the Repository</h3>

<pre>
git clone https://github.com/PriyanshuSingh10114/Maya-Reynolds-clinical-psychologist.git
cd Maya-Reynolds-clinical-psychologist
</pre>

<h3>Install Dependencies</h3>

<pre>
npm install
</pre>

<h3>Run the Development Server</h3>

<pre>
npm run dev
</pre>

<p>
Open your browser at <strong>http://localhost:3000</strong>
</p>

<hr />

<h2>Styling & Design Notes</h2>

<ul>
  <li>Neutral, calming color palette</li>
  <li>Typography optimized for reading and emotional ease</li>
  <li>Clear visual hierarchy using semantic headings</li>
  <li>Consistent spacing using Tailwind utility classes</li>
</ul>

<hr />

<h2>Future Improvements</h2>

<ul>
  <li>CMS or MDX-based blog content</li>
  <li>SEO metadata per blog post</li>
  <li>HIPAA-compliant scheduling integration</li>
  <li>Accessibility audits</li>
  <li>Expanded therapy resource content</li>
</ul>

<hr />

<h2>License</h2>

<p>MIT License</p>

<hr />

<h2>Author</h2>

<p>
<strong>Priyanshu Singh</strong><br />
Frontend Developer
</p>

<p>
This project was built as a production-quality therapy website using modern
Next.js and React best practices.
</p>
