# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop-Design](./screenshots/desktop-design.jfif)
![Desktop-Active-State](./screenshots/active-state.jfif)
![Mobile-Design](./screenshots/mobile-design.jfif)
![Mobile-Active-State](./screenshots/active-mobile.jfif)


### Links

- Solution URL: [Github solution URL](https://github.com/cindyeme/advice-generator-app)
- Live Site URL: [Live site URL](https://cindyeme-advice.netlify.app)

## My process

### Built with

- JSX
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

I learned how to use fetch API and some react hooks to fetch and display data from an endpoint.

Some code snippet:

```js
  // state for updating advice(s)
  const [slip, setSlip] = useState({
    id: "117",
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action",
  });
  // indicates loading
  const [loading, setLoading] = useState(false);

  // generate new advice
  const generateAdvice = useCallback(() => {
    setLoading(true);
    fetch(API_URL, api)
      .then(resp => resp.json())
      .then(data => {
        setSlip(data.slip)
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [setSlip]);

  useEffect(() => {
    generateAdvice();
  }, [generateAdvice]);
```

### Continued development

I look forward to learning and working with TypeScript

### Useful resources

- [Learn REST APIs](https://rapidapi.com/learn) - I understood better how RESTful API works after learning and practicing with some interactive examples.

## Author

- LinkedIn - [Emerenini Cynthia Ngozi](https://www.linkedin.com/in/emerenini-cynthia-ngozi)
- Frontend Mentor - [@cindyeme](https://www.frontendmentor.io/profile/cindyeme)
- Twitter - [@CynthiaENgozi1](https://www.twitter.com/cynthiaengozi1)
