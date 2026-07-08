import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <h1 className="text-center font-serif font-bold text-3xl tracking-tight">Zach Hofmeister</h1>
      <p className="text-center font-serif text-sm">
        Grand Junction, CO | zach@email.com | (123) 123-4567 | LinkedIn | GitHub
      </p>
      <section className="mt-5">
        <h2 className="font-serif font-bold text-xl text-green-700">Education</h2>
        <hr className="border-t-2 mb-1.5"/>
        <div className="flex flex-row justify-between">
          <h3 className="font-serif font-bold tracking-tight">BS in Computer Science | California State University, Fullerton</h3>
          <h3 className="font-serif font-bold tracking-tight">August 2018 - May 2022</h3>
        </div>
      </section>
    </Page>
  );
}

function Page({children}: {children: React.ReactNode}) {
  return (
    <div className="m-20 p-10 aspect-8.5/11 inset-ring inset-ring-blue-500">
      {children}
    </div>
  );
}