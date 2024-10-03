import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Equipo',
      href: getPermalink('/equipo'),
    },
    {
      text: 'LESCO',
      href: getPermalink('/lenguasdeseña'),
    },
    {
      text: 'ABC',
      href: getPermalink('/abecedario'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Lista de blog',
          href: getBlogPermalink(),
        },
        {
          text: 'ATLAS',
          href: getPermalink('atlas', 'post'),
        },
        {
          text: 'Brechas de comunicación',
          href: getPermalink('brechas-de-comunicacion', 'post'),
        },
        {
          text: 'VisionLESCOT',
          href: getPermalink('visionlescot-vocales', 'post'),
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
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/visionlescot/' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/lescot/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61559610314126' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/LESCOT-EXPO-2024/LESCOT-WEB' },
  ],
};
