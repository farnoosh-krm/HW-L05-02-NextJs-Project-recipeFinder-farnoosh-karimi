// example: components/UserInfo.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>hello {session.user?.name}</p>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>sign in</button>;
}
