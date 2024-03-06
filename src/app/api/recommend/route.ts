import { NextResponse, type NextRequest } from "next/server";
import { Spotify } from "@/app/consts";

export async function GET(request: NextRequest) {
    let RecommendationsCall;
    let RecommendationsCallIDs;

    const RecommendationsParamsSearch = request.nextUrl.searchParams;
    const RecommendationsParams = RecommendationsParamsSearch.get(
        "recommend"
    ) as string;
    const tempo = RecommendationsParamsSearch.get(
        "tempo"
    ) as string;
    const accoustic = RecommendationsParamsSearch.get(
        "accoustic"
    ) as string;
    const dance = RecommendationsParamsSearch.get(
        "dance"
    ) as string;
    const energy = RecommendationsParamsSearch.get(
        "energy"
    ) as string;
    const instrumental = RecommendationsParamsSearch.get(
        "instrumental"
    ) as string;
    const loud = RecommendationsParamsSearch.get(
        "loud"
    ) as string;
    const popularity = RecommendationsParamsSearch.get(
        "popularity"
    ) as string;
    try {

        RecommendationsCall = await Spotify.recommendations.get({
            limit: 20,
            seed_artists: [RecommendationsParams],
            target_tempo: Number(tempo),
            target_acousticness: Number(accoustic),
            target_danceability: Number(dance),
            target_energy: Number(energy),
            target_instrumentalness: Number(instrumental),
            target_loudness: Number(loud),
            target_popularity: Number(popularity)
        });

        RecommendationsCallIDs = RecommendationsCall.tracks.map((track: any) => ({
            id: track.id,
        }));

        const RecommendationsCallReduced = RecommendationsCallIDs.reduce((result: any, item: any) => {
            return `${result}${item.id},`;
        }, "");

        const shorterURL = encodeURIComponent(RecommendationsCallReduced)
        console.log(JSON.stringify(RecommendationsCall))

        // const redirectUrl = new URL(
        //     `https://skenatify.vercel.app/recommended?share=${shorterURL}`
        // );

        const redirectUrl = new URL(
            `http://localhost:3000/recommended?share=${shorterURL}`
        );
        return NextResponse.redirect(redirectUrl);

        // return new Response(JSON.stringify(RecommendationsCall), {
        //     headers: { 'Content-Type': 'application/json' },
        //     status: 200,
        // });

    } catch (error) {
        return new Response("Error");
    }
}