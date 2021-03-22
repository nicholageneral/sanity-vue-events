export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-vue-events-studio',
                  apiId: 'fce1db64-b100-45ce-9a4e-2a22f9865880'
                },
                {
                  buildHookId: '60581885369ba232afe3f30b',
                  title: 'Events Website',
                  name: 'sanity-vue-events',
                  apiId: '14171f53-560e-48a3-ac6f-82885ed34b20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholageneral/sanity-vue-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-vue-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
