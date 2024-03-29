import { NextResponse, type NextRequest } from "next/server";
import { Spotify } from "@/app/consts"

export async function GET(request: NextRequest) {
    const TracksParamsSearch = request.nextUrl.searchParams;
    const TrackParams = TracksParamsSearch.get("share") as string;

    try {
        const TracksResult = await Spotify.tracks.get([TrackParams]);
        const TracksFeatures = await Spotify.tracks.audioFeatures([TrackParams]);

        const Tracks: typeof TracksResult = TracksResult.map((track, index) => ({
            ...track,
            features: TracksFeatures[index]
        }));

        return new Response(JSON.stringify(Tracks));
    } catch (error) {

        return new Response(JSON.stringify("Error"));
    }
}