import React, { useState,useEffect } from "react";
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
    "extra":{
      "companyLogo": "https://assets-global.website-files.com/6372777fbe45dea33d0c2638/63794df920daa9ee7af9b164_Crosby%20-%20Logo.svg",  // No logo provided in the text
      "companyName": "Crosby Development",
      "jobTitle": "Freelancer",
      "jobDescription": "<p>We're looking for a skilled freelancer to develop our current setup further for creating visually cohesive on-brand assets, starting with still images and possibly expanding to moving images...</p>",
      "viewsCount": 0,  // Views count not provided
      "appliedCount": 0,  // Applied count not provided
      "applyLink": "",  // No apply link provided, would need to be updated
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

  const handleJobClick = (index:number,id: string) => {
    setActiveJobIndex(index);
    router.push(`/?job=${id}`,  { scroll: false });
  };

  return (
    <div>
      {jobData.map((job, index) => (
        <JobCard
          key={index}
          details={job as any}
          isActive={index === activeJobIndex}
          onClick={(id: string) => handleJobClick(index, id)} innerJobData={undefined as any}         />
      ))}
    </div>
  );
};

export default JobList;

