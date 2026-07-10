import Image from "next/image";
import type { ReactNode } from "react";

export default function Home() {
  return (
    <Page>
      <h1 className="text-center font-serif font-bold text-3xl tracking-tight text-green-700">Zach Hofmeister</h1>
      <p className="text-center font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
        Grand Junction, CO | zach@email.com | (123) 123-4567 | LinkedIn | GitHub
      </p>
      <Section title="Education">
        <div className="flex flex-row justify-between">
          <h3 className="font-serif font-bold tracking-tight">BS in Computer Science | California State University, Fullerton</h3>
          <h3 className="font-serif font-bold tracking-tight">Aug 2018 - May 2022</h3>
        </div>
        <ul className="list-disc list-inside">
          <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            Graduated Magna Cum Laude (3.84 GPA)
          </li>
        </ul>
      </Section>
      <Section title="Experience">
        <div className="my-2">
          <div className="flex flex-row justify-between">
            <h3 className="font-serif font-bold tracking-tight">IT Technician | Amentum | Grand Junction, CO</h3>
            <h3 className="font-serif font-bold tracking-tight">Aug 2025 - Present</h3>
          </div>
          <ul className="list-disc list-inside">
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Deployed Windows and iOS devices for an organization of 350+ users with varied configuration requirements
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Responded to user questions and provided solutions to software and hardware problems in person and remotely
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Developed and maintained PowerShell scripts to streamline device deployments
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Collaborated with team members to document solutions and share best practices
            </li>
          </ul>
        </div>
        <div className="my-2">
          <div className="flex flex-row justify-between">
            <h3 className="font-serif font-bold tracking-tight">Campus Missionary | FOCUS | Grand Junction, CO</h3>
            <h3 className="font-serif font-bold tracking-tight">May 2022 - Jun 2025</h3>
          </div>
          <ul className="list-disc list-inside">
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Mentored 100+ college students in spiritual growth, leadership and personal excellence
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Built and maintained a dynamic donor-facing newsletter website to increase engagement and retention
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Secured full funding for role ($140K+ in 3 years) by cultivating relationships with 60+ recurring donors
            </li>
          </ul>
        </div>
        <div className="my-2">
          <div className="flex flex-row justify-between">
            <h3 className="font-serif font-bold tracking-tight">Coding Instructor | Code Ninjas | San Diego, CA / Remote</h3>
            <h3 className="font-serif font-bold tracking-tight">Jun 2021 - May 2022</h3>
          </div>
          <ul className="list-disc list-inside">
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Delivered engaging coding lessons to 30+ students (ages 7-14) in a fast-paced setting
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Taught core and advanced concepts in JavaScript, HTML/CSS, C#, Java, and Dart
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Quickly adopted new technologies to meet evolving curriculum and student needs
            </li>
          </ul>
        </div>
      </Section>
      <Section title="Technical Skills">
        <div className="my-2">
          <h3 className="font-serif font-bold tracking-tight">Development and Design Languages</h3>
          <p className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            PHP, JavaScript, SQL, React, HTML/CSS, C#, C++, Python, Java, Swift
          </p>
        </div>
        <div className="my-2">
          <h3 className="font-serif font-bold tracking-tight">Operating Systems</h3>
          <p className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            Linux, Windows, macOS
          </p>
        </div>
        <div className="my-2">
          <h3 className="font-serif font-bold tracking-tight">Backend and Infrastructure</h3>
          <p className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            MariaDB, Apache, Docker, Cloudflare, Next.js, REST APIs
          </p>
        </div>
        <div className="my-2">
          <h3 className="font-serif font-bold tracking-tight">Tools</h3>
          <p className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            VS Code, Git, GitHub, Visual Studio, Xcode, Remote Desktop, npm, Bash, PowerShell, Claude
          </p>
        </div>
      </Section>
      <Section title="Projects">
        <div className="my-2">
          <h3 className="font-serif font-bold tracking-tight">zachhofmeister.com - Donor-Facing Newsletter Site | Live Site | Github</h3>
          <ul className="list-disc list-inside">
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Built and self-hosted a web app with PHP and MariaDB SQL for publishing monthly newsletters
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Containerized the full stack with Docker Compose for portable, repeatable deployment on multiple Linux servers
            </li>
            <li className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
              Integrated Cloudflare Tunnel for secure public access without exposing firewall ports
            </li>
          </ul>
        </div>
      </Section>
    </Page>
  );
}

function Page({children}: {children: ReactNode}) {
  return (
    <div className="m-20 p-10 aspect-8.5/11 inset-ring inset-ring-blue-500">
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({title, children}: SectionProps) {
  return (
    <section className="mt-5 mb-8">
      <h2 className="font-serif font-bold text-xl text-green-700">{title}</h2>
      <hr className="border-t-2 mb-1.5"/>
      {children}
    </section>
  );
}