# react-sketchapp-resume [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

> ⚛️ 💎 My resume built with [React](https://facebook.github.io/react) and rendered to [Sketch](https://www.sketchapp.com/) using [`react-sketchapp`](https://github.com/airbnb/react-sketchapp).

[![Screenshot](https://cloud.githubusercontent.com/assets/6137112/26737756/696019a6-47c3-11e7-8fe5-083948b6fc6b.png)](output/resume.en.pdf)

<p align="center">
  <a href="output/resume.en.pdf">View PDF ouput 🔎</a>
</p>

*Requirements: [Sketch 43+](https://www.sketchapp.com/), [Raleway font family](https://fonts.google.com/specimen/Raleway).*

## Features

*  🎂 Dynamic age based on my birthdate
*  📅 Events sorted in descending chronological order
*  🎓 Timelines' state updated at every render (circles get filled when a contract with a university or a company is over)
*  🔢 Retrieve only my last projects and experiences
*  🔤 Sort items alphabetically
* :octocat: Fetch my GitHub pinned repositories
*  🇫🇷 Translate to any language (only French and English are relevant to me)

## Usage

* Install dependencies: `yarn install`
* Run the images server: `yarn serve`
* Render to Sketch: `yarn render`

*Alternatively, you can use `yarn start` to serve the images and render.*

#### More commands

* Render in French: `yarn render:fr`
* Render in English: `yarn render:en`
* Render in prototype mode: `yarn render:mock`
* Render in production: `yarn render:production`

By default, the resume is in `mock` environment (doesn't pull real data from GitHub) when developing.

#### Production environment

* [Create an OAuth token](https://developer.github.com/early-access/graphql/guides/accessing-graphql) to get access to the GitHub GraphQL API (only `public_repo` scope is required)
* Option 1:
  * Add your newly generated token in [`config/.config.github.js`](config/.config.github.js)
  * Change the environment config variable in [`config/.config.env.js`](config/.config.env.js) to anything but `mock` (e.g. `production`)
* Option 2:
  * Stay in `mock` environment
  * Duplicate `.env.sample`, rename it `.env` and fill the right GitHub information
  * Run `yarn github:fetch` to re-generate your up-to-date pinned repositories
* Run `yarn render` to render to Sketch

Once you have saved your PDF in `output/resume.[lang].pdf`, run `yarn pdf:metadata` to fill the correct [Exif](https://en.wikipedia.org/wiki/Exif) metadata.

## Explanation

All the information of the resume is stored in the [`data`](data) folder, both in English and French.

[`react-sketchapp`](https://github.com/airbnb/react-sketchapp) is still in early development and doesn't support local image import. I had to serve my [`images`](images) folder to render them in the artboard.

Everything is rendered with React, except gradients and skew lines shown on the screenshot, which are not yet supported by [`react-sketchapp`](https://github.com/airbnb/react-sketchapp). I added some fancy tweaks manually in Sketch.

## Why?

The main reason I have never kept my resume updated is that the workflow was terrible. I will now only need to update the data and render in any language.

I was quite bored with "static" resumes and thought it was a good opportunity to display some real data in there. I used the [GitHub GraphQL API](https://developer.github.com/early-access/graphql) to fetch my pinned repositories and inject them into Sketch.

I'm more a developer than a designer, eh.

## License

MIT © [François Chalifour](https://francoischalifour.com)
