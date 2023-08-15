import { create } from 'zustand';
import { Guild } from '@/types/guild.interface';
import { persist, createJSONStorage } from 'zustand/middleware';

type GuildStore = {
  selectedGuild: Guild | null;
  setSelectedGuild: (guild: Guild | null) => void;
};

export const useGuildStore = create(
  persist<GuildStore>(
    (set) => ({
      selectedGuild: null,
      setSelectedGuild: (guild) => set({ selectedGuild: guild }),
    }),
    {
      name: 'guild-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
