import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import JobCard from "./JobCard";

// Import the job data array
const jobData = [
  {
    "title": "Freelancer",
    "companyName": "Crosby Development",
    "companyIcon": "https://assets-global.website-files.com/6372777fbe45dea33d0c2638/63794df920daa9ee7af9b164_Crosby%20-%20Logo.svg",  // No icon provided in the text
    "location": {
      "short": "Remote",
      "name": "Stockholm"
    },
    "extra": {
      "companyLogo": "https://assets-global.website-files.com/6372777fbe45dea33d0c2638/63794df920daa9ee7af9b164_Crosby%20-%20Logo.svg",  // No logo provided in the text
      "companyName": "Crosby Development",
      "jobTitle": "Freelancer",
      "jobDescription": "<p>We're looking for a skilled freelancer to develop our current setup further for creating visually cohesive on-brand assets, starting with still images and possibly expanding to moving images...</p>",
      "viewsCount": 0,  // Views count not provided
      "appliedCount": 0,  // Applied count not provided
      "applyLink": "mailto:alexander.hols@crosby.se",  // No apply link provided, would need to be updated
      "salaryRange": "",  // No salary range provided
      "benefits": "",  // No benefits provided
      "location": "Stockholm (Remote possible)"
    },
    "filters": {},
    "package": {
      "from": 0,  // No salary range provided, assuming 0 for freelance
      "to": 0    // No salary range provided, assuming 0 for freelance
    },
    "verified": false,  // Verification status not provided
    "hot": false,  // Hot status not mentioned
    "new": true,  // Assuming it's a new post
    "createdAt": "2023-12-16T00:00:00.000Z",  // Assuming today's date for creation
    "backgroundColor": "#2c2c2c",  // Assuming default value
    "textColor": "white",  // Assuming default value
    "id": "1",  // Assuming a default ID
  },
  {
    "title": "Generative AI Specialist",
    "companyName": "WongDoody",
    "companyIcon": "https://ai-jobs.net/media/cache/6a/b0/6ab031af0371dd30f13130d330ea89a6.jpg",
    "location": {
      "short": "Remote",
      "name": "Germany"
    },
    "extra": {
      "companyLogo": "https://ai-jobs.net/media/cache/6a/b0/6ab031af0371dd30f13130d330ea89a6.jpg",
      "companyName": "WongDoody",
      "jobTitle": "Generative AI Specialist",
      "jobDescription": "<p>We're a creative democracy. For over two decades we've put people and relationships at our core. Through ego-less creation, direct communication and a strict minimum of one belly laugh a day, we’ve also garnered over 300 international awards...</p><p>View all jobs at Wongdoody</p><p>Posted 1 week ago</p><p>WongDoody creates human experiences at 22 studios across 4 continents. We believe the future can be molded. And by shaping human experiences through creativity and tech, we work to build a future we believe in.</p><p>For us, this starts with our own culture. We strive to create an inclusive environment where every human can bring their whole self to work. Our clients are brands we believe in, from global big players to local heroes to startups we love. With each of our partners, we embark on a journey of co-creation, pushing the boundaries of what's possible and exploring the space where creativity and tech meet.</p><p>Our team of fun, welcoming, values-driven, and collaborative problem solvers has one focus at the heart of everything we do: human experience. Human experiences are the touchpoints where brands connect with customers. And we transform businesses by creating engaging, inspiring moments using strategy, creativity, data and technology—all backed by the global technological power of Infosys.</p><p>Experience & Tech</p><p>We are a cross-unit and cross-location tech and experience team. With more than 50 developers, UX designers and consultants working directly with other WongDoody teams, we are team players and specialists—both in frontend and backend. As part of Infosys, we belong to a leading global technology company with access to solutions and extensive know-how in the fields of commerce, marketing automation and AI, among others.</p><p>Our local benefits</p><ul><li>Flexible working hours</li><li>Work where it works for you. At home or in the office, or any mix you like</li><li>Working for strong brands and clients we believe in</li><li>30 days' vacation per year</li><li>Urban Sports Club</li><li>Nice people in welcoming teams</li></ul><p>What you can expect</p><ul><li>Create technical concepts for projects which involve Generative AI</li><li>Provision and set up on-premises servers and Cloud solutions for usage with GenAI Tools</li><li>Configure GenAI Tools and define suitable workflows</li><li>Build, customise, and extend GenAI Tools through the development of new modules, add-ons and APIs</li><li>Work within an interdisciplinary team using an agile approach</li></ul><p>What we'd love to see</p><ul><li>Experience with image generation tools, like Stable Diffusion (diffusers, A1111, ComfyUI, Fooocus, etc.), DALL-E, Adobe Firefly, etc.</li><li>Experience with prompting tools, like ChatGPT (OpenAI), Agents (AWS, CrewAI), bots or similar</li><li>Proficiency in Python development</li><li>Good skills in infrastructure/network setup (Docker, Terraform, Ansible or manually)</li><li>General understanding of the AI landscape, available tools and technologies</li><li>Interest in new technologies and willingness to learn and evolve with new tools</li><li>Logical thinking and reasoning</li><li>Open Source development experience</li><li>Proficient English skills (plus German skills would be great)</li></ul><p>We care about your personality and professional skills. We don't care about your gender, age, nationality or appearance and are open to working with everyone.</p><p>Please note: This is a job ad by WongDoody GmbH based in Germany. Through our website or other sources, you may find job ads published by one of our WongDoody sister companies around the globe with whom we act jointly under the band “WongDoody”. For each job offer, only the entity is responsible, which has published the ad. Contact persons, required information and applicable terms may differ. You can inform yourself how WongDoody GmbH is processing your personal data provided in the application process here.</p><p>If you have any questions about the application process, feel free to contact our People & Culture Team directly under louisa.henze@odt.net</p>",
      "viewsCount": 0,
      "appliedCount": 0,
      "applyLink": "https://www.wongdoody.com/careers",
      "salaryRange": "",
      "benefits": "Flexible working hours, Work where it works for you. At home or in the office, or any mix you like, Working for strong brands and clients we believe in, 30 days' vacation per year, Urban Sports Club, Nice people in welcoming teams",
      "location": "Germany (Remote possible)"
    },
    "filters": {},
    "package": {
      "from": 0,
      "to": 0
    },
    "verified": false,
    "hot": false,
    "new": true,
    "createdAt": "2023-12-23T00:00:00.000Z",
    "backgroundColor": "#2c2c2c",
    "textColor": "white",
    "id": "2"
  },

  {
    "title": "Generative AI Specialist",
    "companyName": "WongDoody",
    "companyIcon": "https://ai-jobs.net/media/cache/6a/b0/6ab031af0371dd30f13130d330ea89a6.jpg",
    "location": {
      "short": "Remote",
      "name": "Germany"
    },
    "extra": {
      "companyLogo": "https://ai-jobs.net/media/cache/6a/b0/6ab031af0371dd30f13130d330ea89a6.jpg",
      "companyName": "WongDoody",
      "jobTitle": "Generative AI Specialist",
      "jobDescription": "<p>We're a creative democracy. For over two decades we've put people and relationships at our core. Through ego-less creation, direct communication and a strict minimum of one belly laugh a day, we’ve also garnered over 300 international awards...</p><p>View all jobs at Wongdoody</p><p>Posted 1 month ago</p><p>WongDoody creates human experiences at 22 studios across 4 continents. We believe the future can be molded. And by shaping human experiences through creativity and tech, we work to build a future we believe in.</p><p>For us, this starts with our own culture. We strive to create an inclusive environment where every human can bring their whole self to work. Our clients are brands we believe in, from global big players to local heroes to startups we love. With each of our partners, we embark on a journey of co-creation, pushing the boundaries of what's possible and exploring the space where creativity and tech meet.</p><p>Our team of fun, welcoming, values-driven, and collaborative problem solvers has one focus at the heart of everything we do: human experience. Human experiences are the touchpoints where brands connect with customers. And we transform businesses by creating engaging, inspiring moments using strategy, creativity, data and technology—all backed by the global technological power of Infosys.</p><p>Experience & Tech</p><p>We are a cross-unit and cross-location tech and experience team. With more than 50 developers, UX designers and consultants working directly with other WongDoody teams, we are team players and specialists—both in frontend and backend. As part of Infosys, we belong to a leading global technology company with access to solutions and extensive know-how in the fields of commerce, marketing automation and AI, among others.</p><p>Our local benefits</p><ul><li>Flexible working hours</li><li>Work where it works for you. At home or in the office, or any mix you like</li><li>Working for strong brands and clients we believe in</li><li>26 days' vacation per year</li><li>Private health insurance</li><li>Nice people in welcoming teams</li></ul><p>What you can expect</p><ul><li>Create technical concepts for projects which involve Generative AI</li><li>Provision and set up on-premises servers and Cloud solutions for usage with GenAI Tools</li><li>Configure GenAI Tools and define suitable workflows</li><li>Build, customise, and extend GenAI Tools through the development of new modules, add-ons and APIs</li><li>Work within an interdisciplinary team using an agile approach</li></ul><p>What we'd love to see</p><ul><li>Experience with image generation tools, like Stable Diffusion (diffusers, A1111, ComfyUI, Fooocus, etc.), DALL-E, Adobe Firefly, etc.</li><li>Experience with prompting tools, like ChatGPT (OpenAI), Agents (AWS, CrewAI), bots or similar</li><li>Proficiency in Python development</li><li>Good skills in infrastructure/network setup (Docker, Terraform, Ansible or manually)</li><li>General understanding of the AI landscape, available tools and technologies</li><li>Interest in new technologies and willingness to learn and evolve with new tools</li><li>Logical thinking and reasoning</li><li>Open Source development experience</li><li>Proficient English skills</li></ul><p>We care about your personality and professional skills. We don't care about your gender, age, nationality or appearance and are open to working with everyone.</p><p>Please note: This is a job ad by WongDoody GmbH based in Germany. Through our website or other sources, you may find job ads published by one of our WongDoody sister companies around the globe with whom we act jointly under the band “WongDoody”. For each job offer, only the entity is responsible, which has published the ad. Contact persons, required information and applicable terms may differ. You can inform yourself how WongDoody GmbH is processing your personal data provided in the application process here.</p><p>If you have any questions about the application process, feel free to contact our People & Culture Team directly under teodora.radovic@odt.net</p>",
      "viewsCount": 0,
      "appliedCount": 0,
      "applyLink": "https://www.wongdoody.com/careers",
      "salaryRange": "EUR 95K - 194K",
      "benefits": "Flexible working hours, Work where it works for you. At home or in the office, or any mix you like, Working for strong brands and clients we believe in, 26 days' vacation per year, Private health insurance, Nice people in welcoming teams",
      "location": "Germany (Remote possible)"
    },
    "filters": {
      "employmentType": "Full Time",
      "experienceLevel": "Entry-level / Junior"
    },
    "package": {
      "from": 95000,
      "to": 194000
    },
    "verified": false,
    "hot": false,
    "new": true,
    "createdAt": "2023-11-23T00:00:00.000Z",
    "backgroundColor": "#2c2c2c",
    "textColor": "white",
    "id": "3"
  }




];

// Define TypeScript types for job data
export interface InnerJobDataInterface {
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  viewsCount: number;
  appliedCount: number;
  applyLink: string;
  salaryRange: string;
  benefits: string;
  location: string;
}




const JobList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobParam = searchParams.get("job");
  const [activeJobIndex, setActiveJobIndex] = useState<number | null>(null);

  useEffect(() => {
    if (jobParam) {
      setActiveJobIndex(parseInt(jobParam, 10));
    }
  }, [jobParam]);

  const handleJobClick = (index: number, id: string) => {
    setActiveJobIndex(index);
    router.push(`/?job=${id}`, { scroll: false });
  };

  return (
    <div>
      {jobData.map((job, index) => (
        <JobCard
          key={index}
          details={job as any}
          isActive={index === activeJobIndex}
          onClick={(id: string) => handleJobClick(index, id)} innerJobData={undefined as any} />
      ))}
    </div>
  );
};

export default JobList;

