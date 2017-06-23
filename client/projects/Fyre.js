/* eslint-disable max-len */
export default {
  name: 'Fyre',
  filename: 'fyre',
  summary: {
    Company: 'Fyre Media',
    Description: 'The marketplace for seamless live entertainment bookings',
    Date: 'Spring 2017',
    Responsibility: 'Developed the front end and UI component library. Set up Elasticsearch-powered engine for real-time talent search. Established CI and deployment pipeline.',
    Technology: ['Vue.js', 'Vuex', 'Pug', 'Stylus', 'Node.js', 'Express', 'AWS (EC2, EBS, S3)', 'Codeship', 'Docker', 'Elasticsearch', 'Cloudinary']
  },
  background: 'Fyre was founded to build the first global marketplace for seamless and secure live entertainment bookings. Our product team worked on the bookings platform, a PWA that redefined the way that talent booking and negotiation is conducted. The core mission was to connect buyers with the widest selection of talent, while delivering control of the bookings process back to talent and their managers.',
  images: [
    { file: 'talent_search.png', desc: 'Find the headliner for your next event among Fyre\'s first-class talent portfolio, from hip-hop artists to movie stars to professional athletes' },
    { file: 'nav_search.png', desc: 'Search the talent pool by name, category, or region' },
    { file: 'make_offer.png', desc: 'Request to book anyone on the platform by filling out the simple request form' },
    [
      { file: 'add_venue.png', desc: 'Add and manage all of your venues' },
      { file: 'view_venue.png' }
    ],
    { file: 'concierge.png', desc: 'Chat discretely with staff and put together the most compelling offer on an affordable budget' },
    [
      { file: 'offer_submitted_modal.png' },
      { file: 'offer_revision_modal.png', desc: 'Make informed and sensible revisions to your initial offer' }
    ],
    { file: 'offer_negotiation.png', desc: 'Negotiate directly with the talent and their team' },
    [
      { file: 'offer_cancel_modal.png' },
      { file: 'offer_accept_modal.png' }
    ],
    { file: 'offer_list.png', desc: 'View all your pending offers and quickly disposition the ones that need your action' },
    { file: 'profile_settings.png', desc: 'Fine tune your profile information and notification settings' }
  ]
}

