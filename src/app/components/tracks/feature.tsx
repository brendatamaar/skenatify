

import FeatureTag from "./featureTag";
import { Track } from "@/app/util/spotify/types";
import { Keys } from "./../../util/spotify/constants";
import { formatPercentage, msToMinSec } from "./../../util/utils";


type Props = {
    track: Track;
};

export default function Features({ track }: Props) {
    const features = track.features;

    return (
        <div className="flex flex-wrap p-2 gap-1">
            <FeatureTag>
                🥁 {features?.tempo?.toString().split(".")[0]} BPM
            </FeatureTag>
            <FeatureTag>⏱️ {msToMinSec(features?.duration_ms)}s</FeatureTag>
            <FeatureTag>🖋️ {features?.time_signature}/4</FeatureTag>
            <FeatureTag>
                👀 {formatPercentage(track.popularity / 100)} Popular
            </FeatureTag>
            <FeatureTag>
                🎹 {features?.key ? Keys[features?.key] : ""}
                {features?.mode == 0 ? " Min" : " Maj"}
            </FeatureTag>
            <FeatureTag>
                🕺🏾 {formatPercentage(features?.danceability)} Danceable
            </FeatureTag>
            <FeatureTag>⚡️ {formatPercentage(features?.energy)} Energy</FeatureTag>
            <FeatureTag>😊 {formatPercentage(features?.valence)} Happy</FeatureTag>
            <FeatureTag>
                🗣️ {formatPercentage(features?.speechiness)} Speechy
            </FeatureTag>
            <FeatureTag>
                🎻 {formatPercentage(features?.instrumentalness)} Instrumental
            </FeatureTag>
            <FeatureTag>
                🪘 {formatPercentage(features?.acousticness)} Acoustic
            </FeatureTag>
            <FeatureTag>🎤 {formatPercentage(features?.liveness)} Live</FeatureTag>
            <FeatureTag>🔊 {features?.loudness}dB Loud</FeatureTag>
        </div>
    );
}
