import type { ReactNode } from "react";

function Page({children}: {children: ReactNode}) {
  return (
    <div className="m-20 p-10 aspect-8.5/11 inset-ring inset-ring-blue-500">
      {children}
    </div>
  );
}

interface SectionInfo {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionInfo) {
  return (
    <section className="mt-5 mb-8">
      <h2 className="font-serif font-bold text-xl text-green-700">{title}</h2>
      <hr className="border-t-2 mb-1.5" />
      {children}
    </section>
  );
}

interface ListItem {
  id: number;
  text: string;
}

interface JobInfo {
  title: string;
  company: string;
  location?: string;
  dateStart: string;
  dateEnd: string | null;
  bullets: ListItem[];
}

function Job({job}: {job: JobInfo}) {
  return (
    <div className="my-2">
      <div className="flex flex-row justify-between">
        <h3 className="font-serif font-bold tracking-tight">{[job.title, job.company, job.location].filter(Boolean).join(" | ")}</h3>
        <h3 className="font-serif font-bold tracking-tight">{job.dateStart} - {job.dateEnd? job.dateEnd : "Present"}</h3>
      </div>
      <ul className="list-disc list-inside">
        {job.bullets.map(bullet =>
          <li key={bullet.id} className="font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
            {bullet.text}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <Page>
      <h1 className="text-center font-serif font-bold text-3xl tracking-tight text-green-700">Zach Hofmeister</h1>
      <p className="text-center font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
        Grand Junction, CO | zach@email.com | (123) 123-4567 | LinkedIn | GitHub
      </p>
      <Section title="Education">
        <Job job={{
          title: "BS in Computer Science", company: "California State University, Fullerton", dateStart: "Aug 2018", dateEnd: "May 2022", bullets: [
            { id: 0, text: "Graduated Magna Cum Laude (3.84 GPA)" },
          ]
        }} />
      </Section>
      <Section title="Experience">
        <Job job={{
          title: "IT Technician", company: "Amentum", location: "Grand Junction, CO", dateStart: "Aug 2025", dateEnd: null, bullets: [
            { id: 0, text: "Deployed Windows and iOS devices for an organization of 350+ users with varied configuration requirements" },
            { id: 1, text: "Responded to user questions and provided solutions to software and hardware problems in person and remotely" },
            { id: 2, text: "Developed and maintained PowerShell scripts to streamline device deployments" },
            { id: 3, text: "Collaborated with team members to document solutions and share best practices" },
          ]
        }} />
        <Job job={{
          title: "Campus Missionary", company: "FOCUS", location: "Grand Junction, CO", dateStart: "May 2022", dateEnd: "Jun 2025", bullets: [
            { id: 0, text: "Mentored 100+ college students in spiritual growth, leadership and personal excellence" },
            { id: 1, text: "Built and maintained a dynamic donor-facing newsletter website to increase engagement and retention" },
            { id: 2, text: "Secured full funding for role ($140K+ in 3 years) by cultivating relationships with 60+ recurring donors" },
          ]
        }} />
        <Job job={{
          title: "Coding Instructor", company: "Code Ninjas", location: "San Diego, CA / Remote", dateStart: "Jun 2021", dateEnd: "May 2022", bullets: [
            { id: 0, text: "Delivered engaging coding lessons to 30+ students (ages 7-14) in a fast-paced setting" },
            { id: 1, text: "Taught core and advanced concepts in JavaScript, HTML/CSS, C#, Java, and Dart" },
            { id: 2, text: "Quickly adopted new technologies to meet evolving curriculum and student needs" },
          ]
        }} />
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