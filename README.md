# Spootify Coding Challenge 🎧 &nbsp; ![hard](https://img.shields.io/badge/-Hard-red) ![time](https://img.shields.io/badge/%E2%8F%B0-60m-blue)

## DEMO

- [gh-pages](https://c1495616js.github.io/react-coding-challenge)

![](https://i.imgur.com/bObC7vI.png)

## Setup

### Setup Spotify App

- Login to [Dashboard](https://developer.spotify.com/dashboard)
- Click `CREATE AN APP` button.

  ![](https://i.imgur.com/git01oE.png)

- Click `EDIT SETTINGS` button to add the `Redirect URIs`

  ![](https://i.imgur.com/JVqJV9V.png)

### Local Development

- `cp .env .env.local` (Add your spotify app info here)
- `npm install`
- `npm start`

### Deploy to gh-pages

- Add `"homepage": "https://c1495616js.github.io/react-coding-challenge/",` in `package.json` file. (use your own repo link)

## Refs

- [Spotify Auth Document](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)
- [Spotify Api Document](https://developer.spotify.com/console/get-featured-playlists/)
- [React-Query useQueries hook](https://react-query.tanstack.com/reference/useQueries)

&nbsp;

# Goals/Outcomes ✨

- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently

&nbsp;

# Pre-requisites ✅

- Add your Spotify client ID & secret to `config.js`
  - Note. **Never add this type of config to version control. This would usually come from your build server.**

&nbsp;

# Requirements 📖

- Fetch and display _Released This Week_ songs
  - Use the API path `new-releases`
- Fetch and display _Featured Playlists_
  - Use the API path `featured-playlists`
- Fetch and display _Browse_ genres
  - Use the API path `categories`
- Loading state/UI _(optional, current UX is already clean)_

&nbsp;

# Think about 💡

- Taking a look at the Spotify API documentation
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

&nbsp;

# What's Already Been Done 🏁

- UI/UX for all elements, including previews (mobile responsive)

&nbsp;

# Screenshots 🌄

&nbsp;
![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
<img alt="screenshot-mobile" width=400 src="https://puu.sh/GwPLS/0bcb566d23.png" />
