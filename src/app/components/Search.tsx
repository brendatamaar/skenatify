"use client"
import { useState } from "react";
import { debounce } from "lodash";
import SelectedTracks from "./Tracks";
import { RecommendButton } from "./RecommendButton"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

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
        // <div className="px-4 lg:px-12 mt-12">
        //     <Input className="w-full"
        //         onChange={(event) => searchTrack(event.target.value)}
        //         onFocus={() => setSearchOpen(true)}
        //         onBlur={(event) => event.target.value = ''}
        //         placeholder="Search for artists... (up to 5)" />
        //     {searchOpen ? (
        //         <ul className="w-full z-20 bg-white flex flex-col gap-2 rounded-xl border-[1px] mt-3">
        //             {searchResults?.map((item: any) => (
        //                 <button
        //                     key={item.id}
        //                     onClick={() => setTracks(item)}
        //                     className="w-full hover:bg-gray-100 rounded-xl flex flex-row items-center p-2"
        //                 >
        //                     <img className="w-12 h-12 rounded-lg" src={item.cover}></img>
        //                     <div className="flex flex-col items-start pl-4 overflow-hidden grow">
        //                         <ul className="overflow-hidden text-left truncate">
        //                             {item.name}
        //                         </ul>
        //                         <ul className="text-gray-500">{item.artist}</ul>
        //                     </div>
        //                     <a className="grow flex justify-end pr-4">
        //                         <svg
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 256 256"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <path
        //                                 fill="#000000"
        //                                 d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
        //                             />
        //                         </svg>
        //                     </a>
        //                 </button>
        //             ))}
        //         </ul>
        //     ) : null}
        //     <SelectedTracks
        //         selectedTracks={selectedTracks}
        //         setSelectedTracks={setSelectedTracks}
        //     />
        //     <RecommendButton selectedTracks={selectedTracks} />
        // </div>

        <section className="relative pt-10 pb-8 md:py-[72px] lg:pb-[100px] xl:pb-[128px]">
            <div className="container">
                <div className="flex flex-col-reverse items-center text-center gap-2.5 mb-8 md:gap-4 md:mb-10 lg:gap-5 lg:mb-12">
                    <h1 className="leading-none font-medium tracking-[-0.41px] md:text-2xl md:leading-none lg:text-[45px] lg:leading-none">
                        Get song recommendations based on your fav artists
                    </h1>
                </div>
                <form className="flex items-center border border-[#e6e6e6] rounded-[48px] px-4 max-w-[848px] mx-auto md:px-6 lg:px-8 mb-3">
                    <MagnifyingGlassIcon className="w-[14px] h-[14px] mr-1.5 md:w-6 md:h-6 md:mr-2.5 lg:w-8 lg:h-6 lg:mr-[14px]" />
                    <label className="w-full">
                        <Input type="search" onChange={(event) => searchTrack(event.target.value)}
                            onFocus={() => setSearchOpen(true)}
                            onBlur={(event) => event.target.value = ''}
                            placeholder="Search for artists... (up to 5)" />
                    </label>
                </form>
                {searchOpen ? (
                    <ul className="max-w-[848px] mx-auto z-20 bg-white flex flex-col gap-2 rounded-xl border-[1px]">
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
                                <a className="grow flex justify-end pr-4">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
                                        />
                                    </svg>
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

                <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full max-md:hidden"></div>
            </div>
        </section>
    );
}