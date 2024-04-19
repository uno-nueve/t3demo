import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/b490b188-54e0-4b95-8131-b2706966514e-1ody.jfif",
  "https://utfs.io/f/84c209ce-48a0-4081-87dc-7a47cde84c52-c6p99m.jfif",
  "https://utfs.io/f/1b467889-b58e-43f9-abdd-0cb9eaefb6a6-c6p98r.jfif",
  "https://utfs.io/f/ee77ff04-9ed9-4662-9715-e59b4919cd97-c6p97w.jfif",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (app in progress)
    </main>
  );
}
