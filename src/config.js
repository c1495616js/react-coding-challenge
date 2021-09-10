const Config = {
  api: {
    baseUrl: 'https://api.spotify.com/v1/browse',
    authUrl: 'https://accounts.spotify.com/api/token',
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
  },
};

export default Config;
