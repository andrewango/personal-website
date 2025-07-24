import React, { useEffect, useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

type Track = {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
};

const NowPlaying = () => {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    fetch('/api/now-playing')
      .then(res => res.json())
      .then(setTrack);
  }, []);

  if (!track?.isPlaying) return null;

  return (
    <div className="mt-6 p-4 rounded-xl bg-black/50 backdrop-blur border border-green-500 max-w-sm text-white animate-pulse-border shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={track.albumImageUrl}
          alt="Album Art"
          className="w-16 h-16 rounded shadow"
        />
        <div>
          <p className="text-xs text-gray-300">Now Playing</p>
          <h3 className="text-md font-semibold">{track.title}</h3>
          <p className="text-sm text-gray-400">{track.artist}</p>
          <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:underline text-xs mt-1"
          >
            <FaSpotify className="text-sm" /> Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
