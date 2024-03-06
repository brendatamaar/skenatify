import { Track, TrackID } from "../types";

export type Tracks = {
    tracks: Track[];
};

export type TrackAudioFeatures = {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: TrackID;
    instrumentalness: number;
    key: keyof TKeys;
    liveness: number;
    loudness: number;
    mode: number;
    popularity: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: string;
    uri: `spotify:track:${TrackID}`;
    valence: number;
};

export type TKeys = {
    "-1": "-";
    "0": "C";
    "1": "C#";
    "2": "D";
    "3": "D#";
    "4": "E";
    "5": "F";
    "6": "F#";
    "7": "G";
    "8": "G#";
    "9": "A";
    "10": "A#";
    "11": "B";
};