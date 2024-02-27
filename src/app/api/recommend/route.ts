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
            limit: 20,
            seed_artists: [RecommendationsParams]
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
            `https://skenatify.vercel.app/recommended?share=${shorterURL}`
        );
        return NextResponse.redirect(redirectUrl);
    } catch (error) {
        return new Response("Error");
    }
}