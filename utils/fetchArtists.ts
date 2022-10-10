import { Artist } from "../typings";

export const fetchArtists = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getArtist`);

    const data = await res.json();
    const artists: Artist[] = data.artists

    return artists;
}