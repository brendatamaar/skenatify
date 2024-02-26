import { NextResponse, type NextRequest } from "next/server";
import { Spotify } from "@/app/consts";

export async function GET(request: NextRequest) {
    let RecommendationsCall;
    let RecommendationsCallIDs;

    const RecommendationsParamsSearch = request.nextUrl.searchParams;
    const RecommendationsParams = RecommendationsParamsSearch.get(
        "recommend"
    ) as string;

    try {
        RecommendationsCall = await Spotify.recommendations.get({
            limit: 10,
            seed_tracks: [RecommendationsParams],
            max_tempo: 152,
            min_tempo: 118,
            target_danceability: 0.8,
            target_energy: 0.8,
            target_instrumentalness: 0.6,
            target_popularity: 50,
            target_speechiness: 0.4,
            target_tempo: 140,
            target_valence: 0.5
        });

        RecommendationsCallIDs = RecommendationsCall.tracks.map((track: any) => ({
            id: track.id,
        }));

        const RecommendationsCallReduced = RecommendationsCallIDs.reduce((result: any, item: any) => {
            return `${result}${item.id},`;
        }, "");

        const shorterURL = encodeURIComponent(RecommendationsCallReduced)
        console.log(JSON.stringify(RecommendationsCall))

        const redirectUrl = new URL(
            `http://localhost:3000/recommended?share=${shorterURL}`
        );
        return NextResponse.redirect(redirectUrl);
    } catch (error) {
        return new Response("Error");
    }
}