import type { doing, partner, testimonial, work } from './interfaces';
import {
  DigitalOcean,
  Envelope,
  Instagram,
  LinkedIn,
  Shopify,
  Twitter,
  YouTube
} from './lib/assets/vectors';

const partnersList: partner[] = Array(6)
  .fill({ icon: Shopify, href: 'https://shopify.com', label: 'Go to Shopify.com' })
  .map((_, i) => {
    return i % 2
      ? {
          icon: DigitalOcean,
          href: 'https://digitalocean.com',
          label: 'Go to DigitalOcean.com'
        }
      : _;
  });

const works: work[] = Array(3)
  .fill({
    imgSrc:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imgAlt: 'A woman and a man sitting in front of a monitor',
    title: 'Share love',
    description:
      'We are a creative and innovative design agency that is passionate about helping our clients achieve their goals. We are also committed to providing excellent customer service. You get access to a team of experienced and talented experts that are really good at what they do.',
    btnText: 'Join the waitlist'
  })
  .map((element, i) => (i % 2 ? { ...element, flip: true } : element));

const doings: doing[] = Array(3).fill({
  icon: Envelope,
  title: "It's more than an agency.",
  description:
    "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
});

const testimonials: testimonial[] = Array(4).fill({
  comment:
    'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
  avatarSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  author: 'Johnson B. Steven',
  title: 'CEO',
  company: 'Stripe',
  rating: 4
});

export const Layout = {
  routes: [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/faqs', label: 'FAQs' }
  ],
  footerSection: {
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod proin turpis malesuada montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod proin turpis malesuada montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod pro',
    socials: [
      {
        href: 'https://twitter.com/thdctech',
        label: 'Check out our Twitter',
        icon: Twitter
      },
      {
        href: 'https://instagram.com/thdctech',
        label: 'Check out our Instagram',
        icon: Instagram
      },
      {
        href: 'https://linkedin.com/thdctech',
        label: 'Check out our LinkedIn',
        icon: LinkedIn
      },
      {
        href: 'https://youTube.com/thdctech',
        label: 'Check out our YouTube',
        icon: YouTube
      }
    ]
  }
};

export const HomePage = {
  landing: {
    heading: 'Design that tells your story.',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    buttonText: 'Get A Quote',
    partnersList: [...partnersList]
  },
  aboutUs: {
    heading: "It's more than an agency",
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    doings: [...doings]
  },
  projects: {
    heading: "It's more than an agency",
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    works: [...works]
  },
  testimonials: {
    heading: 'Our Happy Clients',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    testimonials: [...testimonials]
  },
  subscribe: {
    heading: 'Be among those that hear from us first.',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
  }
};
