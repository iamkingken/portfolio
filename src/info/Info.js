import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Kenneth",
  lastName: "Ekerette",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "📂",
      text: "MERN stack",
    },
    {
      emoji: "🌎",
      text: "am based in Abuja",
    },
    {
      emoji: "💼",
      text: "a zealous Freelancer",
    },
    {
      emoji: "📧",
      text: "kennethekerette@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com/k.ekerette",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/i_am_kingken",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/iamkingken",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/kenneth-ekerette-8149442a5/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Experienced Front-End Developer proficient in React, Tailwind CSS, HTML, CSS, and JavaScript (ES6). Specialized in creating dynamic and visually appealing web applications. Skilled in Strapi for content management and backend development. Adept at optimizing website performance, ensuring responsive design, and integrating e-commerce solutions. Collaborative and client-focused, committed to delivering high-quality, user-friendly websites. Keen on staying current with industry trends and a zealous problem solver.",
  skills: {
    proficientWith: [
      "javascript",
      "npm",
      "JOSN",
      "Scss",
      "react",
      "git",
      "github",
      "Express",
      "tailwind CSS",
      "html5",
      "css3",
      "figma",
      "strapi",
    ],
    exposedTo: ["nodejs", "mongoDB", "FireBase", "TypeScript"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "coding challenges",
      emoji: "💻",
    },
    {
      label: "collaborative coding",
      emoji: "🖥️",
    },
    {
      label: "gaming",
      emoji: "👾",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "City Estate",
      live: "https://cityestate-vhyw.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/iamkingken", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "City Blog",
      live: "https://iamkingken.netlify.app/",
      source: "https://github.com/iamkingken",
      image: mock2,
    },
    {
      title: "My Porfolio",
      live: "https://iamkingken.netlify.app/",
      source: "https://github.com/iamkingken",
      image: mock3,
    },
    {
      title: "E-commerce Web-App",
      live: "https://iamkingken.netlify.app/",
      source: "https://github.com/iamkingken",
      image: mock4,
    },
    {
      title: "Strapi Blog",
      live: "https://iamkingken.netlify.app/",
      source: "https://github.com/iamkingken",
      image: mock5,
    },
  ],
};
