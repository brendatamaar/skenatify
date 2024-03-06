import { Spotify } from "@/app/consts";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, searchQuery: string) {
    const searchQ = request.nextUrl.searchParams.get('searchQuery') as string;

    try {

        
        const items = await Spotify.search(
            searchQ,
            ["artist"],
            "ID",
            5
        );

        // TODO: Format items if necessary and send them back in the response
        // For example, if using Express.js:
        // res.status(200).json(items);

        return new Response(JSON.stringify(items), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });

    } catch (error) {
        console.error(error);
        // Handle error response
        // For example, if using Express.js:
        // res.status(500).send('Internal Server Error');

        return new Response('Internal Server Error', { status: 500 });
    }
}