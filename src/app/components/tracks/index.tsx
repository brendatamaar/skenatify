import { useEffect, useState, useRef } from "react";

import Image from "next/image";

export function Tracks() {
    const [FetchedTracks, setFetchedTracks] = useState(new Array());
    const [currentIndex, setCurrentIndex] = useState(0);

    const variants = {
        enter: { opacity: 0, x: 0 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 1200 },
    };

    useEffect(() => {
        const fetchTracks = async () => {
            const tracksParamsSearch = new URLSearchParams(window.location.search);
            const tracksParams = tracksParamsSearch.get("share") as string;

            try {
                const tracksList = await fetch(`api/tracks?share=${tracksParams}`);
                let tracksListJSON = (await tracksList.json()) as string[];
                tracksListJSON.pop();

                setFetchedTracks(tracksListJSON);
            } catch (error) {
                console.error("Error ClientSide");
            }
        };

        fetchTracks();
    }, []);

    console.log(FetchedTracks);
    return FetchedTracks ? (
        <div className="md:flex-row flex flex-col m-auto md:mx-12 lg:mx-auto lg:mt-[24vh] gap-6 lg:gap-12 mt-12">
            {Object.entries(FetchedTracks).map(([idTrack, tracks]) => (
                <div
                    className="my-2 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:bg-gray-100"
                    key={idTrack}
                >
                    <h1>{tracks.name}</h1>
                    <p>{tracks.artists.at(0)?.name}</p>
                    <Image
                        width={100}
                        height={100}
                        alt="Placeholder"
                        className="w-36 h-64 lg:w-24 lg:h-32 rounded-lg object-cover mx-auto mb-2"
                        src={tracks?.album.images.at(1)?.url}
                    />
                </div>
            ))}
        </div>
    ) : (
        <div></div>
    );
}