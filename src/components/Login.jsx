import React from 'react'
import styled from "styled-components";

const handleClick = () => {
    const clientId = "418b6247798044518e3d5b0f6103a35d";
    const redirectUrl = "https://a-singh09-laughing-space-goggles-6x9pr45pvgq249pp-3000.preview.app.github.dev/";
    const apiUrl = "https://accounts.spotify.com/authorize";

    const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
        )}&response_type=token&show_dialog=true`;
}

function Login() {
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="logo" />
            <button onClick={handleClick}>Connect to Spotify</button>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: black;
gap: 5rem;
img {
height: 20vh;
}
button {
padding: 1rem 5rem; border-radius: 5rem;
border: none;
background-color: #1db954;
color: black; 
font-size: 1.4rem;
cursor: pointer;
}`

export default Login
