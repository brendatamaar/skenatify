import { useEffect, useState } from "react";

import Image from "next/image";
import Features from "./feature";

export function Tracks() {
    const [FetchedTracks, setFetchedTracks] = useState(new Array());

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

    return FetchedTracks ? (
        <section
            id="recommendations"
            className="flex p-4 col-span-2 lg:col-span-4"
        >
            <div className="flex-1 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {Object.entries(FetchedTracks).map(([idTrack, tracks]) => (
                    <div key={idTrack} className="text-left relative flex flex-col mt-2 rounded bg-shell-200 hover:bg-shell-200/50 transition-all duration-150">
                        <div className="flex items-start cursor-pointer md:flex-col hover:bg-gray-100">
                            <div className="w-32 h-32 md:w-full md:h-auto">
                                <Image
                                    width={300}
                                    height={300}
                                    className="w-full"
                                    alt="Placeholder"
                                    src={tracks?.album.images.at(1)?.url}
                                />
                            </div>

                            <div className="flex flex-col p-2">
                                <h2 className="text-sm font-bold md:text-base line-clamp-1">{tracks.name}</h2>
                                <p className="text-sm font-medium text-shell-600">
                                    <span className="text-shell-600 transition-all duration-150 hover:text-shell-400">
                                        {tracks.artists.at(0)?.name}
                                    </span>
                                </p>
                                <p className="text-xs font-medium line-clamp-1 text-shell-600">
                                    {tracks.album.name}
                                </p>
                            </div>

                        </div>

                        <div className="flex-1 bg-shell-300">
                            <Features track={tracks} />
                        </div>
                    </div>
                ))}
                <div className="md:h-24" />
            </div>
        </section>


    ) : (
        <div></div>
    );
}