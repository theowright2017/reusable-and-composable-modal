
<br />
<div align="center" >
  

  <h3 align="center">Reusable and Composable Complex Form (Proof of Concept)</h3>

  <p align="center">
    A reusable form to be used predominantly within modals.
    <br />
   
  </p>
</div>






<!-- ABOUT THE PROJECT -->
## About The Project




There are multiple instances in the app of complex forms that take on a similar structure and interface whilst using custom inputs.
The existing solution for this is very difficult to make sense of and can no longer be maintained or extended without significant input and time.

A more React centric approach is needed to enable future development.









### Built With

This project is using the following technologies:


- Languages
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
  - <a href="https://sass-lang.com/">SCSS</a>
- Frameworks
  - <a href="https://nextjs.org/">Next.js</a>
  - <a href="https://react.dev/">React</a>
- Libraries
  - <a href="https://www.radix-ui.com/">Radix UI</a>
- Tools
  - <a href="https://react-hook-form.com/">React Hook Form</a>


  
<!-- USAGE EXAMPLES -->
## Usage

- A reusable form with inputs that can be configured on a per use basis

- Requirements are as follows:
   - Allow for reuse in multiple locations, modals, dialogs, etc
   - Easy to read and make sense of, to allow for said reuse

- Code behaviour and points to note:
  - React-Hook-Form is ready to use 'out of the box' for large and complex forms
  - Extensive configuration is available and is well documented
  - A base input component is used for each type, text, select, etc
    - A higher order component (HOC) wrapper is then used to add a checkbox or other related and interactive component
  - Input components that interact with each other e.g select of one determines options of another, can be grouped together and controlled using a 'groupName' param.
    - This registers a 'watch' in the form hook which responds to any changes in the parent.
  - The base form inputs and components (FormEdit.jsx) should not need to be modified and can be extended via other means as demonstrated (MultiFormEditLayer.jsx)




<!-- GETTING STARTED -->

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.





 
