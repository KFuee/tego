import { UserNav } from '@/components/user-nav';

export default async function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center">
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}
