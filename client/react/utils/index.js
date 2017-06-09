import projects from '../components/projects'
import { AMAZON_S3_BUCKET } from './constants'

export const getStaticResourceLink = filename =>
  `${AMAZON_S3_BUCKET}${filename}`

export const existingProject = projectName => !!projects[projectName]
