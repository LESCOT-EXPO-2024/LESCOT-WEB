import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/proyecto/equipo'),
    },
    {
      text: 'Proyecto',
      links: [
        {
          text: 'Abecedario',
          href: getPermalink('/proyecto/abecedario'),
        },
        {
          text: 'Startup',
          href: getPermalink('/proyecto/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/proyecto/mobile-app'),
        },
        {
          text: 'Equipo',
          href: getPermalink('/proyecto/equipo'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('LESCO', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('lesco', 'tag'),
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Bitácora',
      href: 'https://docs.google.com/document/d/1Hxc8AN_Jazl7ty1PhKYLaaY7R1G3iFdGMxWRrWoW9kk/edit',
      target: '_blank',
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/visionlescot/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/lesco-translator/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/LESCOT-EXPO-2024/LESCOT-WEB' },
  ],
};
