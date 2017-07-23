import React from 'react'
import Helmet from 'react-helmet'

export default () => {
  return (
    <div id="about">
      <Helmet title="About" />
      <div className="about__banner">
        <div className="about__banner--bg" />
      </div>
      <div className="about__wrapper">
        <div className="about__title-wrapper" />
        <div className="about__content">
          <div className="about__section">
            <div className="about__section--wrapper">
              <h2>About Me</h2>
              <div className="about__intro">
                <p className="about__intro--headline">
                  Hi there! My name is Jake Peyser and I am a software engineer with a passion for all things product.
                </p>
                <div className="about__intro--body">
                  <p>
                    I love the end-to-end process of designing and building digital experiences for a broad set of users. As such, I find myself involved in everything from research to prototyping to implementation. Having spent the earlier part of my career in consulting and developer advocacy, my focus always aligns with the user experience of the things I create.
                  </p>
                  <p>
                    These days I spend most of my time doing front end development with frameworks like React and Vue. However, I still like to play around on the server and with DevOps tooling from time to time. Specialization aside, I am at my best when I am deeply invested in the product domain and working to solve real world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
