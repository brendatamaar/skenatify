"use client"
import { useState } from "react";
import { debounce } from "lodash";
import SelectedTracks from "./Tracks";
import { RecommendButton } from "./RecommendButton"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons"

export default function Search() {
    const [searchResults, setSearchResults] = useState(new Array());
    const [selectedTracks, setSelectedTracks] = useState(new Array());
    const [searchOpen, setSearchOpen] = useState(false);


    async function fetchSearch(searchQuery: string) {
        try {
            const response = await fetch(`/api/search?searchQuery=${searchQuery}`);
            if (!response.ok) {
                throw new Error("Dummy Error");
            }

            const searchResponse = await response.json();
            setSearchOpen(true)

            setSearchResults(
                searchResponse.artists.items.map((item: any) => ({
                    artist: item.name,
                    name: item.name,
                    cover: item.images.at(1)?.url,
                    id: item.id,
                }))
            );
        } catch (error) {
            setSearchOpen(false)
            setSearchResults([]);
        }
    }

    async function setTracks(track: any) {
        const tracksArray = [
            { id: track.id, name: track.name, cover: track.cover },
        ];

        setSelectedTracks([...selectedTracks, ...tracksArray]);
        setSearchOpen(false)
        setSearchResults([]);
    }

    const searchTrack = debounce((value) => {
        fetchSearch(value)
    }, 500)


    return (
        <section className="relative pt-10 pb-8 md:py-[72px] lg:pb-[100px] xl:pb-[128px]">
            <div className="ml-3">
                <div className="flex flex-col-reverse items-center text-center gap-2.5 mb-8 md:gap-4 md:mb-10 lg:gap-5 lg:mb-12">
                    <h1 className="leading-none font-medium tracking-[-0.41px] text-3xl lg:text-[45px]">
                        Temukan rekomendasi baru berdasarkan artis idolamu😼
                    </h1>
                    <h2 className="text-sm leading-none tracking-[-0.41px] text-[#5b5b5e] md:text-base md:leading-none lg:text-xl lg:leading-none">Bosen denger lagu yang itu-itu aja?</h2>
                </div>
                <form className="flex items-center border border-[#e6e6e6] rounded-[48px] px-4 max-w-[848px] mx-auto md:px-6 lg:px-8 mb-3">
                    <MagnifyingGlassIcon className="w-[14px] h-[14px] mr-1.5 md:w-6 md:h-6 md:mr-2.5 lg:w-8 lg:h-6 lg:mr-[14px]" />
                    <label className="w-full">
                        <Input type="search" onChange={(event) => searchTrack(event.target.value)}
                            onFocus={() => setSearchOpen(true)}
                            onBlur={(event) => event.target.value = ''}
                            placeholder="Pilih artis favoritmu... (maks 5)" />
                    </label>
                </form>
                {searchOpen ? (
                    <ul className="max-w-[848px] pr-2 mx-auto z-20 bg-white flex flex-col gap-2 rounded-xl border-[1px]">
                        {searchResults?.map((item: any) => (
                            <button
                                key={item.id}
                                onClick={() => setTracks(item)}
                                className="w-full hover:bg-gray-100 rounded-xl flex flex-row items-center p-2"
                            >
                                <img className="w-12 h-12 rounded-lg" src={item.cover}></img>
                                <div className="flex flex-col items-start pl-4 overflow-hidden grow">
                                    <ul className="overflow-hidden text-left truncate">
                                        {item.name}
                                    </ul>
                                    <ul className="text-gray-500">{item.artist}</ul>
                                </div>
                                <a className="grow flex justify-end">
                                    <PlusIcon className="w-6 h-6"/>
                                </a>
                            </button>
                        ))}
                    </ul>
                ) : null}

                <SelectedTracks
                    selectedTracks={selectedTracks}
                    setSelectedTracks={setSelectedTracks}
                />

                <RecommendButton selectedTracks={selectedTracks} />

                <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full"></div>
            </div>
        </section>
    );
}