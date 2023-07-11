export default defineAppConfig({
  docus: {
    title: 'Docus by Ronald Punt',
    description: 'The best place to start your documentation. Docus with  Nuxt 3 and Ronald Punt',
    image: '/INVA_102_Unit_12863R.jpg.webp',

    socials: {
      twitter: 'ronaldpunt',
      github: 'rps2305',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      facebook: 'ronald.punt',
      instagram: 'ronaldpunt'
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    footer: {
      credits: {
        text: 'Powered by Docus | Nuxt 3 | content | Github Pages'
      }
    }
  },

  prose: {
    h1: {
      icon: 'lucide:activity'
    }
  }
})