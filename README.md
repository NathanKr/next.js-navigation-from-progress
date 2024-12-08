
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

Invoke the server as follows 

```bash
npm run build
npm start
```

Navigate to internal and external page

```ts
const { navigateToInternalPage, navigateToExternalPage } = useNavigation();

  const navigateToInternal = () => {
    navigateToInternalPage("/");
  };

  const navigateToExternal = () => {
    navigateToExternalPage("https://www.example.com");
  };

  return (
    <>
      <h1>This is Page1</h1>
      <button onClick={navigateToExternal}>Visit Example.com</button>
      <br />
      <button onClick={navigateToInternal}>Back to Home</button>
    </>
  );
```


<h2>Design</h2>

<p>The design has three main parts</p>
<ul>
  <li>Implement a hidden loader in the app <code>layout.ts</code> which is common to all pages, and manage its visibility using a global state manager - Zustand.</li>
  <li>Trigger the loader before navigation begins, ensuring users see an indication on the page you navigate from that something is happening, whether navigating internally or to an external page.</li>
  <li>use custom hook for navigation to internal \ external pages</li>
</ul>

<h2>Limitation</h2>
Only the the build version is working correctly because RootLayout is called on every page navigation as follows

<img src='./figs/build-version-is-working.png'/>

The development is not working as expected and progress continue indefinetly. This is because RootLayout is called only once as follows

<img src='./figs/development-version-not-working.png'/>



<h2>Demo</h2>
Navigate to a page show a progres on the page you navigate from
<img src='./figs/demo.png'>


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

