
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

<h3>Principles</h3>
<p>The design is based on two main principles:</p>
<ul>
  <li>Implement a hidden loader in <code>layout.ts</code> that is common to all pages, and manage its visibility using a global state manager like Zustand.</li>
  <li>Trigger the loader before navigation begins, ensuring users see an indication on the page you navigate from that something is happening, whether navigating internally or to an external page.</li>
</ul>

<h3>Optimal solution</h3>
The optimal solution has three pilars : 

<ol>
<li>generic solution</li>
<li>works in production</li>
<li>works in development</li>
</ol>

<h3>Sub Optimal solution 1</h3>
The following design is generic and it works in production but not in development. It has one layout - RootLayout. It does not work in development because due to fast relaod RootLayout is called only once per app and not per page. You can check tag 0.2


<h2>Code Structure</h2>
........

<h2>Demo</h2>
........

<h2>Points of Interest</h2>
<ul>
      <li>Unlike the Page Router, the App Router does not provide easy-to-use events , making it necessary to implement custom logic for showing navigation progress. but anyway next.js router is not relevant when you navigate to external pages</li>
      <li>It is hard to debug console.log in RootLayout because the log is deleted by the browwser per page. you can tell the prowser not to do it. in firefox you do it in the dev tools->console->persist logs</li>
</ul>

<h2>References</h2>
<ul>
    <li></li>
</ul>

<h2>open issue</h2>
<ul>
    <li>working on production not development --> looks like that the Rootlayout is not created for every page in develoment , just once (seems that it relate to fast refresh that is done). On production it is created for each page as expected. I assume in development this is done to save development run time</li>
    <li>why i get hydration error in development ->because of gramerly extension in firefox. it worked in chrome and in firefox with gramerly disabled also </li>
    <li>why i need to put children in dependency array --> because if children not there why should it re-render</li>
    <li>why i need to use useEffect in Layoout component and not enough in loader</li>
</ul>

