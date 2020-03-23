import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'
import AboutComponents from '../components/about'
const { AboutSection, AboutSkill } = AboutComponents
import skills from '../components/about/skills'
import publications from '../components/about/publications'

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
                  I love the end-to-end process of designing and building digital experiences for a broad set of users. As such, I find myself involved in everything from strategy to research to implementation. Having spent the earlier part of my career in consulting and developer advocacy, my focus always aligns on the user experience of the things I create.
                </p>
                <p>
                  These days I spend my time leading a team of engineers working on everything needed to make a great SaaS product: single-page applications, APIs, streaming data jobs, and data storage and synchronization services. I contribute to all layers of the stack, but am most effective at building and scaling complex web components. Specialization aside, I am at my best when I am deeply invested in the product domain and working to solve real world problems.
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
          <AboutSection title="Publications">
            <p>
              I like to write in my free time. Notes, journals, random musings. Sometimes I string my words into coherent sentences and publish them for the masses. Here are a few of my favorites:
            </p>
            <div className="about__publications">
              {publications.sort((a, b) => b.date - a.date).map(writing =>
                <div key={ writing.title } className="about__writing">
                  <a href={ writing.link } target="_blank">{ writing.title }</a>
                  <span>{ moment(writing.date * 1000).format('MMMM Do, YYYY') }</span>
                </div>
              )}
            </div>
          </AboutSection>
        </div>
      </div>
    </div>
  )
}
