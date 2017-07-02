import React from 'react'
import ProjectBubble from './ProjectBubble'
import projects from '../../../projects'
import { getStaticResourceLink } from '../../utils'

// Constants
const BUBBLE_SCROLL_DURATION = 250
const numProjects = Object.keys(projects).length
const getBubbleSize = () => {
  const { clientWidth } = document.documentElement
  if (clientWidth > 550) return 100
  else if (clientWidth > 400) return 80
  return 66.666
}

class BubbleCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadedProjects: [],
      curProject: this.props.projectIndex,
      bubbleSize: getBubbleSize(),
      leftScroll: this.props.projectIndex > 5,
      rightScroll: this.props.projectIndex !== numProjects
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.rotate = this.rotate.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.preloadProjectImage = this.preloadProjectImage.bind(this)
  }

  /* Lifecycle Hooks */
  componentDidMount() {
    this.setScroll(this.props.projectIndex)

    // Add window resize listener
    window.addEventListener('resize', this.handleWindowResize);
  }

  // Update current project index when selected in large portfolio view
  componentWillReceiveProps(nextProps) {
    if (nextProps.active && nextProps.active !== this.props.active) {
      this.setState({
        curProject: nextProps.projectIndex,
        leftScroll: nextProps.projectIndex > 5,
        rightScroll: nextProps.projectIndex !== numProjects
      })
      this.setScroll(nextProps.projectIndex)
    }
  }

  // Remove window resize listener
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  /* Event Handlers */
  handleWindowResize() {
    const newSize = getBubbleSize()
    if (newSize !== this.state.bubbleSize) {
      this.setState({ bubbleSize: newSize })
      this.handleScroll()
    }
  }

  // Control whether scroll indicators are present
  handleScroll() {
    const { scrollLeft, scrollWidth, offsetWidth } = this.refs.bubbles

    // Check whether scroll indicators should change
    let changeLeftScroll, changeRightScroll
    if (this.state.leftScroll && !scrollLeft)
      changeLeftScroll = false
    else if (!this.state.leftScroll && scrollLeft)
      changeLeftScroll = true
    if (this.state.rightScroll && scrollLeft === scrollWidth - offsetWidth)
      changeRightScroll = false
    else if (!this.state.rightScroll && scrollLeft !== scrollWidth - offsetWidth)
      changeRightScroll = true

    if (changeLeftScroll !== undefined || changeRightScroll !== undefined) {
      this.setState({
        leftScroll: changeLeftScroll !== undefined ? changeLeftScroll : this.state.leftScroll,
        rightScroll: changeRightScroll !== undefined ? changeRightScroll : this.state.rightScroll
      })
    }
  }

  // Calculate needed scroll offset based on initial select project
  setScroll(projectIndex) {
    setTimeout(() => {
      const scrollIncrements = projectIndex > 5 ? projectIndex - 5 : 0
      const scrollTarget = scrollIncrements * this.state.bubbleSize
      const scrollDuration = scrollIncrements * BUBBLE_SCROLL_DURATION
      this.scroll(scrollTarget, scrollDuration)
    }, 800)
  }

  // Rotate the carousel one bubble
  rotate(left) {
    const { scrollLeft } = this.refs.bubbles
    const roundFunc = left ? Math.floor : Math.ceil
    const curScroll = left ? scrollLeft - 1 : scrollLeft + 1
    const scrollTarget = roundFunc(curScroll / this.state.bubbleSize) * this.state.bubbleSize
    this.scroll(scrollTarget, BUBBLE_SCROLL_DURATION)
  }

  // Smooth scroll the carousel to the specified target
  scroll(target, duration) {
    const startTime = Date.now()
    const endTime = startTime + duration

    let previousLeft
    const startLeft = previousLeft = this.refs.bubbles.scrollLeft

    // Scroll a single frame
    const scrollFrame = () => {
      // Allow previous scroll (if any) to complete first
      if (this.refs.bubbles.scrollLeft !== previousLeft) return

      // Calculate the scrollLeft for this frame
      let point
      const now = Date.now()
      if (now <= startTime) point = 0
      else if (now >= endTime) point = 1
      else {
        const x = (now - startTime) / (endTime - startTime)
        point = x * x * (3 - 2 * x)
      }

      // Scroll the the next calculated frame
      const distance = target - startLeft
      const frameLeft = Math.round(startLeft + distance * point)
      this.refs.bubbles.scrollLeft = frameLeft

      // Check if we're done or we were supposed to scroll but hit the limit
      // Otherwise, go reset previous scroll value
      const scrollPos = this.refs.bubbles.scrollLeft
      if (now >= endTime || scrollPos === previousLeft && scrollPos !== frameLeft) return
      previousLeft = scrollPos

      // Schedule next frame for execution
      setTimeout(scrollFrame, 0);
    }

    // Begin the animation process
    scrollFrame()
  }

  // When hovering over a project bubble, preload images to improve performance
  preloadProjectImage({ target }) {
    // Bubble up to link wrapper if needed
    while (target.nodeName !== 'A') {
      target = target.parentNode
    }

    // Load corresponding project's images if not yet loaded
    let project = target.dataset.project
    if (!this.state.loadedProjects.includes(project)) {
      const projectBanner = new Image()
      projectBanner.src = getStaticResourceLink(`images/${project}/banner.png`)
      this.setState({ loadedProjects: [...this.state.loadedProjects, project] })
    }
  }

  render() {
    const { active } = this.props
    const bubblesStyle = active ? { width: `${numProjects * this.state.bubbleSize}px` } : {}

    const scrollIndicator = left => {
      const show = left ? this.state.leftScroll : this.state.rightScroll
      const className = `project-bubbles__scroll--${left ? 'left' : 'right'}`
      const style = {
        display: active ? 'flex' : 'none',
        pointerEvents: show ? 'auto' : 'none',
        opacity: show ? 1 : 0
      }
      return (
        <div
          className={ className }
          style={ style }
          onClick={() => this.rotate(left)}
        >{ left ? '<' : '>' }</div>
      )
    }

    return (
      <div className="project-bubbles__carousel">
        {scrollIndicator(true)}
        {scrollIndicator(false)}
        <div className="project-bubbles__wrapper" ref="bubbles" onScroll={ this.handleScroll }>
          <div className="project-bubbles__bg" />
          <div className="project-bubbles" style={ bubblesStyle }>
          {Object.keys(projects).map(key => {
            let project = projects[key]
            return (
              <ProjectBubble key={ key }
                name={ project.name }
                filename={ project.filename }
                small={ active }
                bubbleHover={ this.preloadProjectImage }
              />
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}

BubbleCarousel.defaultProps = {
  projectIndex: 0
}

export default BubbleCarousel
