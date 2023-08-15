import { Guild } from '@/types/guild.interface';
import useSWR from 'swr';

const fetcher = (url: string, token: string | undefined) =>
  fetch(`https://discord.com/api/v10${url}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  }).then((res) => res.json());

export const useGuilds = (token: string | undefined) => {
  const { data, error, isLoading } = useSWR<Guild[]>(
    `/users/@me/guilds`,
    (url) => fetcher(url, token)
  );

  return {
    guilds: data,
    isLoading,
    isError: error,
  };
};
