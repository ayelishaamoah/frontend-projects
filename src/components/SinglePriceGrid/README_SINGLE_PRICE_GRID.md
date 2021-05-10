# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![Single Price Grid](./singlepricegrid.png)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Responsive markup
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

The purpose of this project was to recap on some of the basics that I might not get to use regularly, e.g:
- Responsive design and how to use media queries to build responsive layouts
- Response font sizes - tried using bot em and rem and have decided that rem is more predictable
- css transitions 
- css filters
```css
    transition: filter 0.5s ease-in-out;
    &:hover {
      filter:  brightness(90%);
    }
```
- storybook
- SASS - mainly used the [parent selector (&) example above](https://sass-lang.com/documentation/style-rules/parent-selector)


I also played around with styled components as I have recently been using [emotion](https://emotion.sh/docs/introduction) (which is built on styled components) and wanted to compare the differences - I think I will need to spend a bit more time using styled components before comparing as I'm not sure if the way I am using props is the most efficient way as this seems much cleaner in emotion of you have a few styles that need to change based on the same prop.
```js
export const ButtonStyle = styled.button`
    background-color: ${(props: ButtonStyleProps) => props.variant === 'primary' && theme.colours.secondaryOne};
`
}
```

### Continued development

- Rebuild the component using grid 
- Read more about accessibility and update the component in line with accessibility standards
- Refactor the card components to make them more reusable - to think about how small the 'atoms' should be when designing components

### Useful resources
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) - I have enjoyed working with storybook as you can create smaller components in isolation and then bring them together


## Author

- Frontend Mentor - [@ayelishaamoah](https://www.frontendmentor.io/profile/ayelishaamoah)
