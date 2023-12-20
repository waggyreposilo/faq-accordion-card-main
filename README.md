# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

# Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: https://github.com/waggyreposilo/faq-accordion-card-main
- Live Site URL: https://waggyreposilo.github.io/faq-accordion-card-main/files/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Learned how and when to use section tags in your html code. Learned how accordion works and learned different ways to implement transition effects through javascript code.

```html - 
<section class="accordion-img">
  <section class="img-center">
    <img class="container-img1" src="images/illustration-woman-online-desktop.svg" alt="">
  </section>
  <img src="images/illustration-box-desktop.svg" alt="" srcset="" class="container-img2">
</section>
```

```css
.accordion-body {
  line-height: 1.2rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease;
}
```

### Useful resources

- [Accordion Bootstrap](https://getbootstrap.com/docs/5.0/components/accordion/) - Used this as a reference on how accordion works. I really liked this and will use it going forward.

## Author

- Frontend Mentor - [@waggyreposilo](https://www.frontendmentor.io/profile/waggyreposilo)
