const netlifyWidget = {
  name: 'netlify',
  options: {
    description:
      'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
    sites: [
      {
        buildHookId: '5f41658fa293b7abf54a9f35',
        title: 'Sanity Studio',
        name: 'sanity-gatsby-portfolio-studio-xh6r65ai',
        apiId: '0758a086-cb2a-4b2e-9622-235852d5a850',
      },
      {
        buildHookId: '5f41658fc86c105b4cdfb007',
        title: 'Portfolio Website',
        name: 'eager-clarke-a32b73',
        apiId: '0e5bb56b-7040-4b65-b80b-861d5adc0ea7',
      },
    ],
  },
};

const projectInfoWidget = {
  name: 'project-info',
  options: {
    __experimental_before: [netlifyWidget],
    data: [
      {
        title: 'GitHub repo',
        value: 'https://github.com/SophieAu/crocs-site',
        category: 'Code',
      },
      {
        title: 'Frontend',
        value: 'https://eager-clarke-a32b73.netlify.app',
        category: 'apps',
      },
    ],
  },
};

const eventsWidget = {
  name: 'document-list',
  options: { title: 'Events', order: 'startTime desc', types: ['event'] },
  layout: { width: 'medium' },
};

export default {
  widgets: [projectInfoWidget, eventsWidget],
};
