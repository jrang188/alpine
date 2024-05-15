// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Justin Ang',
    description: 'Portfolio Website of Justin Ang powered by Nuxt Content',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://github.com/jrang188',

        text: 'Justin Ang'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jrang188/'
      },

      github: 'https://github.com/jrang188'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  },

  prose: {
    h1: {
      icon: 'key-116'
    }
  },

  nuxtIcon: {
    aliases: {
      'key-116': ''
    }
  }
})