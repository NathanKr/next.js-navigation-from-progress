
<h1>UX Indication for Navigation from Pages (Source) in Next.js App Router</h1>


<h2>Project Description</h2>
<p>This project demonstrates how to provide a UX indication (e.g., loading spinner) when navigating between pages in a Next.js application using the App Router. This includes both navigation within the app (e.g., internal page links) and to external pages (e.g., OAuth2 login). The indication will remain visible on the source page until the target page is fully loaded or the user is redirected.</p>


<h2>Motivation</h2>
<p>Navigation between pages, whether internal or external, often takes some time. It's important to provide users with feedback during this waiting period to improve the user experience</p>


<h2>Installation</h2>

install all packages using

```bash
pnpm i
```
Alternitvely you can use npm

<h2>Usage</h2>

```bash
npm run dev
```


<h2>Pre Design Discussion</h2>

<h3>Use case to navigate from page?</h3>

<ul>
  <li>navigate between the application pages using router.push
    <p>Using <code>router.push</code> for programmatic navigation:</p>
    
```ts
    router.push('/target-internal-page');
```

  </li>
  <li>Navigate to a page outside the application e.g. when you need to login using OAuth2 - Google
       
```ts
<Link href="https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token">Login to google</Link>
```
  
  </li>
</ul>

Any page in the application is a valid candidate to navigate from 

<h2>Design</h2>
<p>The design is based on two main principles:</p>
<ul>
  <li>Implement a hidden loader in <code>layout.ts</code> that is common to all pages, and manage its visibility using a global state manager like Zustand.</li>
  <li>Trigger the loader before navigation begins, ensuring users see an indication on the the page you navigate from that something is happening, whether navigating internally or to an external page.</li>
</ul>


<h2>Code Structure</h2>
........

<h2>Demo</h2>
........

<h2>Points of Interest</h2>
<ul>
      <li>Unlike the Page Router, the App Router does not provide easy-to-use events , making it necessary to implement custom logic for showing navigation progress. but anyway next.js router is not relevant when you navigate to external pages</li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li></li>
</ul>

