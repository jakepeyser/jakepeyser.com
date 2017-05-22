import projects from '../data/projects'
import { AMAZON_S3_BUCKET } from './constants'

export const getStaticResourceLink = filename =>
  `${AMAZON_S3_BUCKET}${filename}`

export const getProject = projectName => projects.find(proj => proj.filename === projectName)
