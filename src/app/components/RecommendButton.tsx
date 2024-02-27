
import { Button } from "@/components/ui/button"

export function RecommendButton({ selectedTracks }: any) {

    function handleRecommend(selectedTracks: any) {
        if (selectedTracks.length > 0 && selectedTracks.length < 6) {
            const trackIDs = selectedTracks.map((track: any) => ({
                id: track.id,
            }));

            const queryTrackIDs = trackIDs.reduce((result: any, item: any) => {
                return `${result}${item.id},`;
            }, "");

            window.location.href = `api/recommend?recommend=${queryTrackIDs}`;

        }
        
    }

    return (
        <Button
            onClick={() => handleRecommend(selectedTracks)}
            className="mt-12 flex gap-4 bg-black text-white px-4 m-auto py-2 rounded-full font-medium"
        >
            Get Song Recommendations
        </Button>
    );
}