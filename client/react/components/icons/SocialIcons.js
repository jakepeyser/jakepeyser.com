import React from 'react';
import Icon from './Icon';

const profiles = [
  { href: 'https://github.com/jakepeyser', icon: 'github' },
  { href: 'https://twitter.com/jakepeyser', icon: 'twitter' },
  { href: 'https://www.linkedin.com/in/jakepeyser', icon: 'linkedin' },
  { href: 'http://stackoverflow.com/users/1116896/jake-peyser', icon: 'stack-overflow' },
  { href: 'https://www.instagram.com/jakepeyser/', icon: 'instagram' }
]

export default ({ size }) =>
  <div className="profiles">
  {profiles.map(profile =>
    <Icon
      key={ profile.href }
      icon={ profile.icon }
      link={ profile.href }
      size={ size }
    />
  )}
  </div>
