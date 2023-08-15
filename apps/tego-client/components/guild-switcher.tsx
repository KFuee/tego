'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn, getGuildIconURL, trimString } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useGuilds } from '@/lib/api/guild.api';

import { Session } from 'next-auth';
import { useGuildStore } from '@/lib/stores/guild';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type GuildSwitcherProps = PopoverTriggerProps & {
  session: Session;
};

export default function GuildSwitcher({
  className,
  session,
}: GuildSwitcherProps) {
  const { guilds, isLoading, isError } = useGuilds(session.accessToken);

  const [open, setOpen] = React.useState(false);
  const [selectedGuild, setSelectedGuild] = useGuildStore((state) => [
    state.selectedGuild,
    state.setSelectedGuild,
  ]);

  if (isLoading) {
    return <span>Loading guilds...</span>;
  }

  if (isError || !guilds?.length) {
    return <span>Failed to load guilds.</span>;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a guild"
          className={cn('w-[200px] justify-between', className)}
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage
              src={getGuildIconURL(selectedGuild?.id, selectedGuild?.icon)}
              alt={selectedGuild?.name.slice(0, 2)}
            />
            <AvatarFallback>
              {selectedGuild?.name.slice(0, 2).toUpperCase() ?? '??'}
            </AvatarFallback>
          </Avatar>
          {trimString(selectedGuild?.name ?? 'Select a guild', 15)}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search guild..." />
            <CommandEmpty>No guild found.</CommandEmpty>
            {guilds?.length &&
              guilds.map((guild) => (
                <CommandItem
                  key={guild.id}
                  onSelect={() => {
                    setSelectedGuild(guild);
                    setOpen(false);
                  }}
                  className="text-sm"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={getGuildIconURL(guild.id, guild.icon)}
                      alt={guild.name.slice(0, 2)}
                    />
                    <AvatarFallback>
                      {guild.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {trimString(guild.name, 20)}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      selectedGuild?.id === guild.id
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
