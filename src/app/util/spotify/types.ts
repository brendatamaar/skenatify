import {TrackAudioFeatures} from "./client/tracks";

// API Types

export type UserID = string;
export type PlaylistID = string;
export type TrackID = string;
export type ArtistID = string;
export type AlbumID = string;
export type DeviceID = string;
export type Genre = string;
export type Market = string;

export type Image = {
  height: number;
  url: string;
  width: number;
};

// Basics

export type Track = {
  name: string;
  id: TrackID;
  href: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: `spotify:track:${TrackID}`;
  duration_ms: number;
  genres: Genre[];
  external_urls: {
    spotify: string;
  };
  features?: TrackAudioFeatures;
};
