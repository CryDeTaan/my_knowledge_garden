let fs = require('fs');

module.exports = {
    title: '🌱 My Knowledge Garden 🌱',
    description: 'A wiki for the things I learn to reference in future.',

    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
        ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
        ['meta', { name: "theme-color", content: "#ffffff"}],
      ],

    themeConfig: {
      lastUpdated: 'Last Updated',
      searchPlaceholder: 'Press / to search',
      smoothScroll: true,

        nav: [
          { text: '🤖', link: 'https://abstractentropy.com/' },
          { text: '🐦', link: 'https://twitter.com/CryDeTaan' },
          { text: '🐙', link: 'https://github.com/CryDeTaan' },
        ],

        
        sidebar: [
            {
              title: 'Home',
              collapsable: false,
              children: ['/']
            },
            {
              title: 'History',
              collapsable: false,
              children: pagesIn('history'),
            },
          ],


      },
      plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
      ]

}

// https://stackoverflow.com/a/53271115

function pagesIn(path) {
  let files = fs.readdirSync('./docs/mkg/' + path);
  let list = [];

  for (let i in files) {
      
    let filename = files[i].split('.').slice(0, -1).join('.');

    if (filename.toLowerCase() !=="readme") list.push(`/mkg/${path}/${filename}`);
    
  }

  return list;

}
