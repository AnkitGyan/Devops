import { client } from "@repo/db/client";

export default async function Home() {
  // ✅ Await the async Prisma query
  const user = await client.user.findFirst();

  return (
    <div>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
