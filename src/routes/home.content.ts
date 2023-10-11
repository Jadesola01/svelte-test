import { DigitalOcean, Envelope, Shopify } from '$lib/assets/vectors';

export default {
  landing: {
    heading: 'Design that tells your story.',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    buttonText: 'Get A Quote',
    partnersList: Array(6)
      .fill(null)
      .map((_, i) =>
        i % 2
          ? {
              icon: DigitalOcean,
              href: 'https://digitalocean.com',
              label: 'Go to DigitalOcean.com'
            }
          : { icon: Shopify, href: 'https://shopify.com', label: 'Go to Shopify.com' }
      )
  },
  aboutUs: {
    heading: "It's more than an agency",
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    doings: Array(3).fill({
      icon: Envelope,
      title: "It's more than an agency.",
      description:
        "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
    })
  },
  projects: {
    heading: "It's more than an agency",
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    works: Array(3)
      .fill({
        imgSrc:
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imgAlt: 'A woman and a man sitting in front of a monitor',
        title: 'Share love',
        description:
          'We are a creative and innovative design agency that is passionate about helping our clients achieve their goals. We are also committed to providing excellent customer service. You get access to a team of experienced and talented experts that are really good at what they do.',
        btnText: 'Join the waitlist'
      })
      .map((element, i) => (i % 2 ? { ...element, flip: true } : element))
  },
  testimonials: {
    heading: 'Our Happy Clients',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
    testimonials: Array(4).fill({
      comment:
        'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
      avatarSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      author: 'Johnson B. Steven',
      title: 'CEO',
      company: 'Stripe',
      rating: 4
    })
  },
  subscribe: {
    heading: 'Be among those that hear from us first.',
    subHeading:
      "It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
  }
};
