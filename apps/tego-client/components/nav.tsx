'use client';

import { signIn, useSession } from 'next-auth/react';
import GuildSwitcher from './guild-switcher';
import { UserNav } from './user-nav';
import { Button } from './ui/button';

export default function Nav() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center ml-auto">
            <Button onClick={() => signIn()}>
              <span className="hidden sm:inline">Sign in</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
