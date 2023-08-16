'use client';

import GuildSwitcher from './guild-switcher';
import { UserNav } from './user-nav';
import { Session } from 'next-auth/core/types';

type NavProps = {
  session: Session;
};

export default function Nav({ session }: NavProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <GuildSwitcher session={session} />

        <div className="flex items-center ml-auto">
          <UserNav session={session} />
        </div>
      </div>
    </div>
  );
}
