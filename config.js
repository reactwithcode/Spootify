export default {
    api: {
        clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
        authUrl: 'https://accounts.spotify.com/api/token',
        baseUrl: 'https://api.spotify.com/v1',
    }
}