import React from 'react'
import { render } from 'react-sketchapp'
import { getRepos } from './actions/github'
import Resume from './views/Resume'

export default async (context) => {
  const githubRepos = await getRepos()

  render(<Resume githubRepos={githubRepos} />, context.document.currentPage())
}
