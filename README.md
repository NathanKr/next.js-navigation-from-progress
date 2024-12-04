
<h2 id="project-description">Project Description</h2>
<p>A concise and informative summary of the project's purpose, key features, and target audience.</p>

<h2 id="motivation">Motivation</h2>
<p>Navigation from one page (source) to another page (target) might take time. It is nice to show the user some indication while you are still in the source page. Here, we will discover how to do it in an app router.</p>

<p>How to navigate from page?</p>

<ul>
  <li>router.push
    <p>Using <code>router.push</code> for programmatic navigation:</p>
    
```ts
    router.push('/target-page');</code></pre>
```

  </li>
  <li>External API like when you need to log in using OAuth2 - Google
    <p>Example of redirecting to an OAuth2 login page:</p>
   
```ts
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token';
```
  
  </li>
  <li>Click on anchor element
    <p>Using an anchor element for navigation:</p>

```ts
    <a href="/target-page">Click here to navigate</a>
```
  </li>
</ul>



<h2 id="installation">Installation</h2>



<h2 id="usage">Usage</h2>

<h2>Design</h2>
add hiden loader in layout.ts - common to all pages and enable on use cases above

<h2 id="code-structure">Code Structure</h2>
<p>An explanation of the project's code structure, including important files and directories.</p>

<h2 id="demo">Demo</h2>
<p>A link to a live demo or a GIF/video showcasing the project's functionality.</p>
<ul>
    <li>Live demo link</li>
    <li>GIF or video demonstration</li>
</ul>

<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>page router had events that were easy to ue using nprogress but app router does not. </li>
</ul>

<h2 id="references">References</h2>
<ul>
    <li>External libraries or frameworks</li>
    <li>Articles or tutorials</li>
    <li>Other relevant resources</li>
</ul>

