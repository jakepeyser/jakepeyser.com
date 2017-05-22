import React from 'react';
import Icon from './Icon';

const profiles = [
  { id: 1, href: 'https://github.com/jakepeyser', icon: 'github' },
  { id: 2, href: 'https://twitter.com/jakepeyser', icon: 'twitter' },
  { id: 3, href: 'https://www.linkedin.com/in/jakepeyser', icon: 'linkedin' },
  { id: 4, href: 'http://stackoverflow.com/users/1116896/jake-peyser', icon: 'stack-overflow' },
  { id: 5, href: 'https://www.instagram.com/jakepeyser/', icon: 'instagram' }
]

export default ({ size }) =>
  <div className="profiles">
  {profiles.map(profile =>
    <Icon
      key={ profile.id }
      icon={ profile.icon }
      link={ profile.href }
      size={ size }
    />
  )}
  </div>
