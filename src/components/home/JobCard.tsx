import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import JobListing from './JobListing'; // Adjust the path based on your file structure
import { InnerJobDataInterface } from "./JobList"; // Assuming this interface is defined elsewhere
import { useRouter, useSearchParams } from "next/navigation";

interface Location {
  short: string;
  name: string;
}

interface Filters {
  [key: string]: any;
}

interface Package {
  from: number;
  to: number;
}

interface JobData {
  title: string;
  companyName: string;
  companyIcon: string;
  location: Location;
  filters: Filters;
  package: Package;
  verified?: boolean;
  hot?: boolean;
  new?: boolean;
  createdAt: Date;
  backgroundColor?: string;
  textColor?: string;
  extra?:any,
  id: string; // Assuming id is a string, adjust as per your actual type
}

interface JobCardProps {
  details: JobData;
  isActive: boolean;
  onClick: (id:string) => void;
  innerJobData: InnerJobDataInterface; // Adjust as per your actual interface
}

const JobCard: React.FC<JobCardProps> = ({ details, isActive, onClick, innerJobData }) => {
  const [showJobListing, setShowJobListing] = useState(false);
  const jobCardRef = useRef<HTMLDivElement>(null); // Ref for JobCard component
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobIdFromUrl = searchParams.get("job");

  useEffect(() => {
    // Check if job ID from URL matches details.id
    if (jobIdFromUrl === details.id && jobCardRef.current) {
      setShowJobListing(true);
      // // Scroll to the JobCard component
      jobCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      // const padding = 1000;
      // const topPos = jobCardRef.current?.getBoundingClientRect().top + window.scrollY + padding;
      // window.scroll({ top: topPos, behavior: 'smooth' });
 
    } else {
      setShowJobListing(false);
    }
  }, [jobIdFromUrl, details.id]);

  return (
    <div ref={jobCardRef}>
      <div
        onClick={() => {
          onClick(details.id);
          setShowJobListing(!showJobListing); // Toggle visibility on click
        }}
        style={{
          backgroundColor: details.backgroundColor || "#2c2c2c",
          color: details.textColor || "white",
          margin: 0,
          marginTop: 30,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        className="group h-[88px] mt-2 sm:mx-2 sm:rounded-xl flex items-center cursor-pointer hover:opacity-80 transition-all ease-linear"
      >
        <div className="p-4 md:pe-2">
          <Image
            src={details.companyIcon}
            alt={`${details.companyName} Logo`}
            className="w-16 aspect-square object-cover bg-cyan-900 rounded-full"
            width={60}
            height={60}
          />
        </div>
        <div className="w-[min(70%,448px)]">
          <div className="text-[clamp(14px,6vw,17px)] font-extrabold">
            {details.title}
          </div>
          <div>{details.companyName}</div>
          <div className="my-1">
            <span className="bg-[#424242] rounded-full text-xs px-2 py-1 me-2">
              {details.location.short}
            </span>
            <span className="bg-[#424242] rounded-full text-xs px-2 py-1">
              {details.location.name}
            </span>
          </div>
        </div>
        <div className="w-[20%] hidden lg:flex items-center font-bold">
          {/* Adjust content as needed */}
          <span className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white border-solid rounded-xl text-xs px-2 py-1 cursor-cell transition-all ease-linear">
            {details.location.name}
          </span>
        </div>
        <div className="ms-auto w-10 flex items-center p-2 me-3 md:me-0">
          <Image
            src="/assets/paper-clip.svg"
            alt="paper-clip"
            width={20}
            height={20}
            className="w-3 aspect-square invert me-1"
          />
          <div className="text-sm">7d</div>
        </div>
        <div className="p-4 hidden md:block w-48">
          {/* Adjust button content and styling */}
          <button className="hidden group-hover:block w-40 bg-white text-black rounded-xl py-3 px-7 font-extrabold">
            Apply now
          </button>
        </div>
      </div>

      {showJobListing && (
        <div>
          <JobListing jobData={details.extra} />
        </div>
      )}
    </div>
  );
};

export default JobCard;
