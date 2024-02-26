import { NextResponse, type NextRequest } from "next/server";
import { Spotify } from "@/app/consts";

export async function GET(request: NextRequest) {
    const TracksParamsSearch = request.nextUrl.searchParams;
    const TrackParams = TracksParamsSearch.get("share") as string;

    try {
        const TracksFeatures = await Spotify.tracks.audioFeatures([TrackParams]);

        return new Response(JSON.stringify(TracksFeatures));
    } catch (error) {

        return new Response(JSON.stringify("Error"));
    }
}