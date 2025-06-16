"use client";
import { useState } from "react";
import { debounce } from "lodash";
import SelectedTracks from "./Tracks";
import { RecommendButton } from "./RecommendButton";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Search() {
  const [searchResults, setSearchResults] = useState(new Array());
  const [selectedTracks, setSelectedTracks] = useState(new Array());
  const [searchOpen, setSearchOpen] = useState(false);
  const [tempo, setTempo] = useState("140");
  const [accoustic, setAccoustic] = useState("60");
  const [dance, setDance] = useState("80");
  const [energy, setEnergy] = useState("80");
  const [instrumental, setInstrumental] = useState("0");
  const [loud, setLoud] = useState("0");
  const [popularity, setPopularity] = useState("50");

  async function fetchSearch(searchQuery: string) {
    try {
      const response = await fetch(`/api/search?searchQuery=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Dummy Error");
      }

      const searchResponse = await response.json();
      setSearchOpen(true);

      setSearchResults(
        searchResponse.artists.items.map((item: any) => ({
          artist: item.name,
          name: item.name,
          cover: item.images.at(1)?.url,
          id: item.id,
        }))
      );
    } catch (error) {
      setSearchOpen(false);
      setSearchResults([]);
    }
  }

  async function setTracks(track: any) {
    const tracksArray = [
      { id: track.id, name: track.name, cover: track.cover },
    ];

    setSelectedTracks([...selectedTracks, ...tracksArray]);
    setSearchOpen(false);
    setSearchResults([]);
  }

  const searchTrack = debounce((value) => {
    fetchSearch(value);
  }, 500);

  return (
    <section className="relative pt-10 pb-8 md:py-[72px] lg:pb-[100px] xl:pb-[128px]">
      <div className="ml-3">
        <div className="flex flex-col-reverse items-center text-center gap-2.5 mb-8 md:gap-4 md:mb-10 lg:gap-5 lg:mb-12">
          <h1 className="leading-none font-medium tracking-[-0.41px] text-3xl lg:text-[45px]">
            Discover fresh music based on your favorite artists
            😼
          </h1>
          <h2 className="text-sm leading-none tracking-[-0.41px] text-[#5b5b5e] md:text-base md:leading-none lg:text-xl lg:leading-none dark:text-slate-200">
            Tired of hearing the same old songs?
          </h2>
        </div>
        <form className="flex items-center border border-[#e6e6e6] rounded-[48px] px-4 max-w-[848px] mx-auto md:px-6 lg:px-8 mb-3">
          <MagnifyingGlassIcon className="w-[14px] h-[14px] mr-1.5 md:w-6 md:h-6 md:mr-2.5 lg:w-8 lg:h-6 lg:mr-[14px]" />
          <label className="w-full">
            <Input
              type="search"
              onChange={(event) => searchTrack(event.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={(event) => (event.target.value = "")}
              placeholder="Pick your fav artists (up to 5 artists)"
            />
          </label>
          <Sheet>
            <SheetTrigger className="text-gray-500">Filter</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Search filter</SheetTitle>
                <SheetDescription>
                  Customize your filters any way you like🔍✨
                </SheetDescription>
              </SheetHeader>

              <div className="flex justify-between w-full mt-6">
                <Label>Tempo🥁</Label>
                <Label>{tempo} BPM</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="220"
                defaultValue={tempo}
                onChange={(event) => setTempo(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Acousticness Level🎸</Label>
                <Label>{accoustic} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={accoustic}
                onChange={(event) => setAccoustic(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Danceability Level🕺</Label>
                <Label>{dance} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={dance}
                onChange={(event) => setDance(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Energy Level⚡</Label>
                <Label>{energy} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={energy}
                onChange={(event) => setEnergy(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Instrumentalness Level🎻</Label>
                <Label>{instrumental} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={instrumental}
                onChange={(event) => setInstrumental(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Loudness Level🔊</Label>
                <Label>{loud} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={loud}
                onChange={(event) => setLoud(event.target.value)}
              />

              <div className="flex justify-between w-full">
                <Label>Popularity Level⭐</Label>
                <Label>{popularity} %</Label>
              </div>
              <Input
                type="range"
                className="h-2 w-full cursor-ew-resize rounded-lg disabled:cursor-not-allowed"
                min="0"
                max="100"
                defaultValue={popularity}
                onChange={(event) => setPopularity(event.target.value)}
              />
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Save preference</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </form>
        {searchOpen ? (
          <ul className="max-w-[848px] mx-auto z-20 bg-white dark:bg-slate-800 flex flex-col gap-2 rounded-xl border-[1px]">
            {searchResults?.map((item: any) => (
              <button
                key={item.id}
                onClick={() => setTracks(item)}
                className="w-full hover:bg-gray-100 dark:hover:text-black rounded-xl flex flex-row items-center px-4 py-2"
              >
                <img className="w-12 h-12 rounded-lg" src={item.cover}></img>
                <div className="flex flex-col items-start pl-4 overflow-hidden grow">
                  <ul className="overflow-hidden text-left truncate">
                    {item.name}
                  </ul>
                  <ul className="text-gray-500">{item.artist}</ul>
                </div>
                <a className="grow flex justify-end">
                  <PlusIcon className="w-6 h-6" />
                </a>
              </button>
            ))}
          </ul>
        ) : null}

        <SelectedTracks
          selectedTracks={selectedTracks}
          setSelectedTracks={setSelectedTracks}
        />

        <RecommendButton
          selectedTracks={selectedTracks}
          tempo={tempo}
          accoustic={accoustic}
          dance={dance}
          energy={energy}
          instrumental={instrumental}
          loud={loud}
          popularity={popularity}
        />
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full"></div>
      </div>
    </section>
  );
}
