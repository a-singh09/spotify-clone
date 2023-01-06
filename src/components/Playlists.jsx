import React, {useEffect} from 'react'
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

function Playlists() {
    const [{ token, dispatch }] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/vI/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content -Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            })
        }
        getPlaylistData();
    }, [token, dispatch]);
    return (
        <div>Playlists</div>
    )
}

export default Playlists