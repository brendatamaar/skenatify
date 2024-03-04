
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

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
        <div className="flex items-center justify-center mt-6 mb-6 md:mb-8 lg:mb-10">
            <Button
                onClick={() => handleRecommend(selectedTracks)}
                className="flex items-center bg-[#d9faa1] rounded-[32px] hover:bg-black hover:text-white"
            >
                <span className="mr-1.5 md:mr-2 ">Cari sekarang</span>
                <ArrowRightIcon className="w-[14px] h-[14px] md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </Button>
        </div>


    );
}