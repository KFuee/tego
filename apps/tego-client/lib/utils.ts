import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimString(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function getGuildIconURL(
  guildId: string | undefined,
  icon: string | undefined
) {
  if (!guildId || !icon) {
    return '';
  }

  return `https://cdn.discordapp.com/icons/${guildId}/${icon}.png`;
}
