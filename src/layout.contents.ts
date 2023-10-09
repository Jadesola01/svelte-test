import { Instagram, LinkedIn, Twitter, YouTube } from './lib/assets/vectors';

export default {
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
