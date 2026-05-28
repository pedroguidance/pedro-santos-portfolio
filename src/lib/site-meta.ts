export const site = {
  name: 'Pedro Santos',
  title: 'Pedro Santos · Senior Product Designer · Head of Design',
  description:
    'Quase 10 anos liderando design em produto digital. Head of Design at Guidance. Lead UX da Neodent (Straumann), premiado globalmente em 2024. Cultura Inglesa, Sesc RJ, Arezzo, Itaú.',
  url: 'https://pedrosantos.design',
  language: 'pt-BR',
  locale: 'pt_BR',
  author: {
    name: 'Pedro Santos',
    role: 'Head of Design at Guidance',
    email: 'pedrosantosdesigner@outlook.com',
    whatsapp: '5522999675972',
    linkedin: 'https://www.linkedin.com/in/pedrosantosd',
    cv: 'https://drive.google.com/file/d/1uednCbYBAz0rdKITYQb9EQCRVK1_PEZ6/view?usp=sharing',
  },
} as const;

export const nav = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Conversar', href: '/conversar' },
] as const;

export const footerLinks = [
  { label: 'Email', href: `mailto:${site.author.email}` },
  { label: 'WhatsApp', href: `https://wa.me/${site.author.whatsapp}` },
  { label: 'LinkedIn', href: site.author.linkedin },
] as const;
