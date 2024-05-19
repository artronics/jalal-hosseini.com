import Image from "next/image";
import React from "react";
import {CollapsableSection, Period} from "@/app/me/components.client";

const config = {
    rangeWidth: "max-w-50",
};

const personalInfo = (icon: string, text: string, url: string = "") =>
    (
        <li>
            <i className={`${icon} pr-1`}></i>
            {url == "" ?
                <span>{text}</span> :
                <a href={url} target="_blank" rel="noopener noreferrer"
                   className="text-blue-500 visited:text-blue-500">{text}</a>}
        </li>
    );
type PeriodProps = {
    from: string;
    to: string;
    children: React.ReactNode;
};

// const Period: React.FC<PeriodProps> = ({from, to, children}) => {
//     return (
//         <section className="flex flex-row items-start align-right">
//             <div className="pr-4">{from} - {to}</div>
//             <main className="flex-grow border-l-4 border-section-separator pl-4 bg-blue-50"> {children} </main>
//         </section>
//     );
// };

const Tags: React.FC<any> = ({tags}) => {
    return (
        <div className="flex flex-row">
            {tags.map((tag: string) => (
                <span
                    className={`rounded-xl bg-white shrink-0 grow-0 text-black border-black border-2 m-1 px-1 py-1 text-xs`}
                    key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

const Section: React.FC<any> = ({title, children}) => {
    return (
        <section className="flex flex-col">
            <h2 className="text-2xl mb-2 mt-4">{title}</h2>
            {children}
        </section>
    );
};

export default function Me() {
    return (
        <article className="flex justify-center items-center bg-red-50">
            <main className="flex-row align-center w-1/2 bg-green-50 mt-12">
                <header className="flex flex-row items-start align-right">
                    <Image src="https://via.assets.so/img.jpg?w=240&h=300&tc=blue&bg=#cecece"
                           width={240} height={300}
                           alt="Jalal Hosseini's profile photo"/>
                    <section className="pl-4">
                        <h1 className="text-4xl">Jalal Hosseini</h1>
                        <h2 className="text-2xl">Software Developer</h2>
                        <ol>
                            {personalInfo("fa-solid fa-globe", "jalal-hosseini.com", "https://jalal-hosseini.com")}
                            {personalInfo("fa-brands fa-github", "artronics", "https://github.com/artronics")}
                            {personalInfo("fa-brands fa-linkedin", "jalal-hosseini", "https://www.linkedin.com/in/jalal-hosseini")}
                            {personalInfo("fa-solid fa-location-dot", "Leeds, UK")}
                            {personalInfo("fa-solid fa-clipboard-check", "Indefinite Leave to Remain")}
                            {personalInfo("fa-solid fa-shield-halved", "Security Cleared")}
                        </ol>
                    </section>
                </header>
                <p className="text-xl">
                    Highly skilled Software Engineer with 8 years of experience, specializing in AWS, web services,
                    infrastructure, and platform design. Proven track record as a Technical Lead for 2 years, adept at
                    building scalable backend systems and designing APIs. Proficient in Java, Python, Kotlin,
                    JavaScript,
                    and TypeScript, with extensive knowledge of infrastructure-as-code technologies such as Terraform,
                    Ansible. Experienced in CI/CD and committed to test automation principles. Passionate about
                    leveraging
                    emerging technologies to deliver efficient, scalable and maintainable software solutions.
                </p>
                <Section title="Experience">
                    {/*<Period from="Aug, 2022" to="Sep, 2023">*/}
                    <Period fromMonth={8} fromYear={2022} toMonth={9} toYear={2023}/>
                    leveraging
                    emerging technologies to deliver efficient, scalable and maintainable software solutions.
                    <CollapsableSection title>
                        <h2>yhoo</h2>
                        <div>
                            leveraging
                            emerging technologies to deliver efficient, scalable and maintainable software solutions.
                        </div>

                    </CollapsableSection>
                    <Tags tags={["AWS", "Terraform"]}/>
                    {/*</Period>*/}
                </Section>

            </main>
        </article>
    );
}