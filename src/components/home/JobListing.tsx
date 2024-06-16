import React from 'react';

// Define TypeScript types for job data
interface JobData {
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

interface JobListingProps {
  jobData: JobData;
}

const JobListing: React.FC<JobListingProps> = ({ jobData }) => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    jobDescription,
    viewsCount,
    appliedCount,
    applyLink,
    salaryRange,
    benefits,
    location,
  } = jobData;

  return (
    <td style={{
      background:'white',
      color:'black',
      padding:'30px'
    }}  colSpan={999} className="heading">
      <div className="expandContents">
        <div className="description" itemProp="description">
          <div className="company_profile">
            <a className="no-border" href={companyLogo}>
              <img width={"100px"} alt={companyName} className="logo lazyloaded" src={companyLogo} />
            </a>
            <h1 style={{
              fontSize:'40px',
              fontWeight:'bold'
            }}>{companyName}</h1>
            <a target="_blank" className="button action-apply" href={applyLink}>
              Apply now
            </a>
            <p>👀 {viewsCount} views</p>
            <p>✅ {appliedCount} applied</p>
            {/* <p>
              <strong>Share this job:</strong>{' '}
              <input readOnly className="share-job-copy-paste" type="text" value={applyLink} />
              <br />
              <span style={{ fontSize: '12px', marginTop: '-7px', display: 'block' }}>
                Get a <a href="https://rok.co/hire-remotely">rok.co</a> short link
              </span>
            </p> */}
          </div>
          <h1 style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 400 }}>{jobTitle}</span>
          </h1>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: jobDescription }} />

          <h1 id="salaryandcompensation">Salary and compensation</h1>
          <p>{salaryRange}</p>
          <br />

          <h1 id="benefits">Benefits</h1>
          <div dangerouslySetInnerHTML={{ __html: benefits }} />

          <h1 id="location">Location</h1>
          <p>{location}</p>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="instructions">
        <a
          className="button action-apply apply_800405"
          href={applyLink}
          target="_blank"
          rel="nofollow"
        >
          Apply for this job
        </a>
        <p style={{ fontSize: '0.85em' }}>
          <strong>👉 Please reference you found the job on Remote OK, this helps us get more companies to post here, thanks!</strong>
          <br></br>
          <br></br>
            {`          When applying for jobs, you should NEVER have to pay to apply. You should also NEVER have to pay to buy equipment which they then pay you back for later. Also never pay for trainings you have to do. Those are scams! NEVER PAY FOR ANYTHING! Posts that link to pages with "how to work online" are also scams. Don't use them or pay for them. Also always verify you're actually talking to the company in the job post and not an imposter. A good idea is to check the domain name for the site/email and see if it's the actual company's main domain name. Scams in remote work are rampant, be careful! `}
          <a
            href="https://twitter.com/levelsio/status/1300443073562980353?s=20"
            style={{ fontWeight: 800 }}
          >
            Read more to avoid scams
          </a>
          . When clicking on the button to apply above, you will leave Remote OK and go to the job application page for that company outside this site. Remote OK accepts no liability or responsibility as a consequence of any reliance upon information on there (external sites) or here.
        </p>
      </div>
    </td>
  );
};

export default JobListing;
