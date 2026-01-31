import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  // 1. Create a reference to the container for drag constraints
  const scrollRef = useRef(null);

  const data = [
    { desc: "Quarterly financial report for Q4. Contains sensitive audit data.", fileSize: "2.4mb", close: true, tag: {isOpen: true, tagTitle: "Download Report", tagColor: "blue"} },
    { desc: "Project assets: high-resolution brand guidelines.", fileSize: "142mb", close: false, tag: {isOpen: true, tagTitle: "Upload Progress", tagColor: "orange"} },
    { desc: "System logs from server-alpha-09. Check for critical errors.", fileSize: "45kb", close: true, tag: {isOpen: false, tagTitle: "Archived", tagColor: "blue"} },
    { desc: "Employee onboarding handbook for the 2024 cohort.", fileSize: "1.2mb", close: false, tag: {isOpen: true, tagTitle: "Get Started", tagColor: "purple"} },
    { desc: "2024 annual marketing budget roadmap.", fileSize: "4.2mb", close: false, tag: {isOpen: true, tagTitle: "In Review", tagColor: "sky"} },
    { desc: "Vector assets for the brand redesign.", fileSize: "85.4mb", close: true, tag: {isOpen: true, tagTitle: "High Priority", tagColor: "red"} },
    { desc: "Client feedback transcript from workshop.", fileSize: "128kb", close: false, tag: {isOpen: true, tagTitle: "Archived", tagColor: "zinc"} },
    { desc: "System deployment logs for production.", fileSize: "1.1mb", close: true, tag: {isOpen: true, tagTitle: "Completed", tagColor: "green"} },
    { desc: "Onboarding presentation for new hires.", fileSize: "15.7mb", close: false, tag: {isOpen: true, tagTitle: "Action Required", tagColor: "orange"} },
    { desc: "Critical patch for vulnerability CVE-2024-1234.", fileSize: "12.5mb", close: true, tag: {isOpen: true, tagTitle: "Emergency", tagColor: "red"} },
    { desc: "Draft copy of the 2025 SLA.", fileSize: "850kb", close: false, tag: {isOpen: true, tagTitle: "Draft", tagColor: "yellow"} },
    { desc: "Automated backup of the production database.", fileSize: "2.8gb", close: true, tag: {isOpen: true, tagTitle: "Secured", tagColor: "emerald"} }
  ];

  return (
    // 2. Attach the ref to the parent container
    <div ref={scrollRef} className='flex fixed top-0 left-0 z-3 w-full h-full gap-10 flex-wrap p-5'>
      {data.map((item, idx) => (
        // 3. Pass the ref to the Card component
        <Card key={idx} data={item} reference={scrollRef} />
      ))}
    </div>
  )
}

export default Foreground