import React, { useState,useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import JobCard from "./JobCard";

// Import the job data array
const jobData = [
  {
    "title": "Software Engineer",
    "companyName": "TechCorp",
    "companyIcon": "/assets/company1.png",
    "location": { "short": "NY", "name": "New York" },
    "filters": {},
    "package": { "from": 60000, "to": 150000 },
    "verified": true,
    "hot": false,
    "new": true,
    "createdAt": new Date("2023-12-16T00:00:00.000Z"),
    "backgroundColor": "#2c2c2c",
    "textColor": "white",
    id:'1'
  },
  {
    "title": "Product Manager",
    "companyName": "InnovateX",
    "companyIcon": "/assets/company2.png",
    "location": { "short": "SF", "name": "San Francisco" },
    "filters": {},
    "package": { "from": 70000, "to": 130000 },
    "verified": false,
    "hot": true,
    "new": false,
    "createdAt": new Date("2023-12-16T00:00:00.000Z"),
    "backgroundColor": "#3c3c3c",
    "textColor": "black",
    id:'2'
  },
  {
    "title": "Data Scientist",
    "companyName": "DataPros",
    "companyIcon": "/assets/company3.png",
    "location": { "short": "LDN", "name": "London" },
    "filters": {},
    "package": { "from": 65000, "to": 145000 },
    "verified": true,
    "hot": false,
    "new": true,
    "createdAt": new Date("2023-12-16T00:00:00.000Z"),
    "backgroundColor": "#4c4c4c",
    "textColor": "white",
    id:'3'
  },
  {
    "title": "UX Designer",
    "companyName": "DesignHub",
    "companyIcon": "/assets/company4.png",
    "location": { "short": "BLN", "name": "Berlin" },
    "filters": {},
    "package": { "from": 55000, "to": 125000 },
    "verified": false,
    "hot": true,
    "new": false,
    "createdAt": new Date("2023-12-16T00:00:00.000Z"),
    "backgroundColor": "#5c5c5c",
    "textColor": "black",
    id:'4'
  },
  {
    "title": "DevOps Engineer",
    "companyName": "CloudBase",
    "companyIcon": "/assets/company5.png",
    "location": { "short": "TKY", "name": "Tokyo" },
    "filters": {},
    "package": { "from": 70000, "to": 140000 },
    "verified": true,
    "hot": true,
    "new": true,
    "createdAt": new Date("2023-12-16T00:00:00.000Z"),
    "backgroundColor": "#6c6c6c",
    "textColor": "white",
    id:'5'
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


 // Example job data
 const innerJobData: InnerJobDataInterface = {
  companyLogo:
    'https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=300,height=300,quality=80/https://remoteok.com/assets/img/jobs/aa6310daaf35eac44bfe1bd19aa4b68e1718294414.gif?',
  companyName: '7shifts',
  jobTitle: 'Remote Manager Customer Support',
  jobDescription:
    '<p>As the Manager, Customer Support at 7shifts...</p>', // Ensure HTML is properly formatted
  viewsCount: 65,
  appliedCount: 11,
  applyLink: '/l/800405', // Adjust based on actual link
  salaryRange: '$80,000 — $240,000/year',
  benefits:
    '<p>💰 401(k)</p><p>🌎 Distributed team</p><p>⏰ Async</p>...', // Ensure HTML is properly formatted
  location: 'Toronto, Ontario, Canada',
};
 

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
          details={job}
          isActive={index === activeJobIndex}
          onClick={(id:string) => handleJobClick(index,id)}
          innerJobData = {innerJobData}
        />
      ))}
    </div>
  );
};

export default JobList;

