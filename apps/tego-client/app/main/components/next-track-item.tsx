import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { ClockIcon } from '@radix-ui/react-icons';

interface NextTrackItemProps extends React.HTMLAttributes<HTMLDivElement> {
  track: any;
}

export function NextTrackItem({
  track,
  className,
  ...props
}: NextTrackItemProps) {
  return (
    <div className={cn('flex flex-row gap-4', className)} {...props}>
      <Image
        src={track.albumArt}
        alt={track.title}
        width={150}
        height={150}
        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square overflow-hidden rounded-lg shadow-md"
      />

      <div className="flex flex-col">
        <div className="flex-1 space-y-1 text-sm">
          <h3 className="font-medium leading-none">{track.title}</h3>
          <p className="text-xs text-muted-foreground">{track.artist}</p>
        </div>

        <div className="flex flex-row items-center space-x-2">
          {/* Duration */}
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />

            <span className="text-xs text-muted-foreground">
              {track.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
