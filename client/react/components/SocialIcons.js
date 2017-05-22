import React from 'react';

const profiles = [
  { id: 1, href: 'https://github.com/jakepeyser', icon: 'github' },
  { id: 2, href: 'https://twitter.com/jakepeyser', icon: 'twitter' },
  { id: 3, href: 'https://www.linkedin.com/in/jakepeyser', icon: 'linkedin' },
  { id: 4, href: 'http://stackoverflow.com/users/1116896/jake-peyser', icon: 'stack-overflow' },
  { id: 5, href: 'https://www.instagram.com/jakepeyser/', icon: 'instagram' }
]

export default ({ size }) => {
  const magnify = size ? `fa-${size}x` : '';
  return (
    <div className="profiles">
    {
      profiles.map(profile => {
        return (
          <a key={profile.id} href={profile.href} target="_blank">
            <i className={`profile-icon fa fa-${profile.icon} ${magnify}`}
              aria-hidden="true">
            </i>
          </a>
        )
      })
    }
    </div>
  )
};
