
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export function RecommendButton({ selectedTracks, tempo, accoustic, dance, energy, instrumental, loud, popularity }: any) {

    function handleRecommend(
        selectedTracks: any,
        tempo: number,
        accoustic: any,
        dance: any,
        energy: any,
        instrumental: any,
        loud: any,
        popularity: any
    ) {
        if (selectedTracks.length > 0 && selectedTracks.length < 6) {
            const trackIDs = selectedTracks.map((track: any) => ({
                id: track.id,
            }));

            const queryTrackIDs = trackIDs.reduce((result: any, item: any) => {
                return `${result}${item.id},`;
            }, "");

            window.location.href = `api/recommend?tempo=${tempo}&accoustic=${accoustic}&dance=${dance}&energy=${energy}&instrumental=${instrumental}&loud=${loud}&popularity=${popularity}&recommend=${queryTrackIDs}`;

        }

    }

    return (
        <div className="flex items-center justify-center mt-6 mb-6 md:mb-8 lg:mb-10">
            <Button variant="search" size="se"
                onClick={() => handleRecommend(selectedTracks, tempo, accoustic, dance, energy, instrumental, loud, popularity)}
                className="flex items-center bg-[#d9faa1] rounded-[32px] hover:bg-black hover:text-white"
            >
                <span className="mr-1.5 md:mr-2 ">Cari sekarang</span>
                <ArrowRightIcon className="w-[14px] h-[14px] md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </Button>
        </div>


    );
}