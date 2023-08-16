'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';
import {
  PauseIcon,
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import { NextTrackItem } from './next-track-item';

const queue = [
  {
    id: '1',
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    duration: 225,
    albumArt: 'https://via.placeholder.com/192',
  },
  {
    id: '2',
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    duration: 225,
    albumArt: 'https://via.placeholder.com/192',
  },
];

export default function Skeleton() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="flex flex-1">
      <div className="grid grid-cols-12 flex-1">
        <div className="sm:col-span-4 col-span-12 border-r border-gray-200">
          <div className="h-full flex flex-1 flex-col">
            <div className="space-y-1 px-6 pt-6">
              <h2 className="text-2xl font-semibold tracking-tight">Up Next</h2>
              <p className="text-sm text-muted-foreground">
                3 songs queued, 1h 45m left
              </p>
            </div>

            <ScrollArea className="h-[350px]">
              <div className="flex flex-col space-y-4 p-6">
                {queue.map((track) => (
                  <NextTrackItem key={track.id} track={track} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="sm:col-span-8 col-span-12">
          <div className="h-full flex flex-1 flex-col p-6 max-w-3xl mx-auto">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Currently Playing
              </h2>
            </div>

            <div className="flex flex-1 flex-col justify-center space-y-6">
              {/* Album art */}
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-64 h-64 bg-gray-100 rounded-full">
                  <div className="w-48 h-48 bg-gray-200 rounded-full shadow-lg overflow-hidden">
                    <Image
                      src="https://via.placeholder.com/192"
                      width={192}
                      height={192}
                      alt={'Album art'}
                    />
                  </div>
                </div>
              </div>

              {/* Song title */}
              <div className="flex flex-col space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Song Title
                </h2>

                <p className="text-sm text-muted-foreground">Artist Name</p>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col w-full space-y-2">
                <Slider />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">0:00</p>
                  <p className="text-sm text-muted-foreground">3:45</p>
                </div>
              </div>

              {/* Forward, play/pause, back */}
              <div className="flex items-center justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <TrackPreviousIcon className="w-6 h-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <PauseIcon className="w-6 h-6" />
                  ) : (
                    <PlayIcon className="w-6 h-6" />
                  )}
                </Button>

                <Button variant="outline" size="icon">
                  <TrackNextIcon className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
