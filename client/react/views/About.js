import React from 'react'
import Helmet from 'react-helmet'
import AboutComponents from '../components/about'
const { AboutSection, AboutSkill } = AboutComponents
import skills from '../components/about/skills'

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
          <AboutSection title="About Me">
            <div className="about__intro">
              <p className="about__intro--headline">
                Hi there! My name is Jake Peyser and I am a software engineer with a passion for all things product.
              </p>
              <div className="about__intro--body">
                <p>
                  I love the end-to-end process of designing and building digital experiences for a broad set of users. As such, I find myself involved in everything from research to prototyping to implementation. Having spent the earlier part of my career in consulting and developer advocacy, my focus always aligns on the user experience of the things I create.
                </p>
                <p>
                  These days I spend most of my time doing front end development with frameworks like React and Vue. However, I still like to play around on the server and with DevOps tooling. Specialization aside, I am at my best when I am deeply invested in the product domain and working to solve real world problems.
                </p>
              </div>
            </div>
          </AboutSection>
          <AboutSection title="Skills">
            <div className="about__skills">
              {skills.sort((a, b) => (a.name > b.name) - (a.name < b.name)).map(skill =>
                <AboutSkill key={skill.icon}
                  icon={skill.icon}
                  title={skill.name}
                  link={skill.link}
                />
              )}
            </div>
          </AboutSection>
        </div>
      </div>
    </div>
  )
}
