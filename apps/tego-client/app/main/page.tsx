'use client';

import Nav from '@/components/nav';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Skeleton from './skeleton';

export default function Index() {
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
    <div className="flex flex-col min-h-screen">
      <Nav session={session} />

      <Skeleton />
    </div>
  );
}
