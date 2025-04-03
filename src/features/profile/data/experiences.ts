import { EExperiencePositionIcon, IExperience } from "../types/experiences";

export const EXPERIENCES: IExperience[] = [
  {
    company: "Diamond Heist Cryptocurrency",
    companyLogo: "/images/companies/simplamo.png", //dht logo
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Senior Developer",
        year: "August 2024 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "- Built and still maintaining the [DiamondHeist Mini App](https://t.me/Diamondheistbot?profile) for Diamond-Heist Cryptocurrency, ensuring seamless integration and performance.\n- Developed and maintained core features for Diamond Heist, driving its functionality and smooth user experience.\n- Maintaining design consistency and ensure adherence to standards across all implementations for Diamond Heist.\n- Ensured robust frontend technical solutions for all screen sizes and mobile Operating Systems, aligning with project requirements and industry standards.\n- Implemented telegram APIs and TON SDK for Transaction Security and user-data fetching. \n- Analyzed and clarified technical implementation capabilities, providing guidance on feasible and optimal solutions.",
        skills: [
          "TypeScript",
          "Next.js",
          "Firebase",
          "Telegram API",
          "TON SDK",
          "Tailwind CSS",
          "DHT mini-app",
          "Complex backend",
          "Research",
          "Vercel/Git",
          "Problem-solving",
        ],
        expanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "UI Designer",
        year: "August 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.DraftingCompass,
        description:
          "- Maintain UI/UX consistency and ensure adherence to high-quality standards across all design implementations.\n- Designed intuitive, user-focused interfaces and apealing animations for features specified by the product manager, aligning with business goals and user needs.\n- Defined and established the UI design style for Simplamo's features, ensuring a cohesive and visually appealing user interface.",
        skills: ["Creativity", "UI/UX Design", "React", "Framer-Motion"],
      },
    ],
    current: true,
  },
  {
    company: "Absolute Wellness Services",
    companyLogo: "/images/companies/quaric.png", //aws logo
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Web Designer / Developer",
        year: "Feb 2025 - present",
        employmentType: "full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "Built and desgined AWS site with Typescript and Nextjs [Absolute Wellness](https://absolutewellness.vercel.app/)\n- Ensured Apealing design with user-friendly interface .\n- Maintained professional yet visually engaging design accross all pages.\n- Designed user interface compatible with all screens sizes and variations\n",
        skills: [
          "Next.js",
          "Typescript",
          "JSX",
          "Tailwind CSS",
          "Location",
          "Project Design",
        ],
        expanded: false,
      },
      /*{
        id: "991692c4-7d02-4666-8d31-933c4831768d",
        title: "Founder / Director",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        description:
          "- Lead and manage the company's strategy.\n- Oversee technical teams and product development.\n- Manage relationships with customers and partners.",
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },*/
    ],
    current: true,
  },
  /*
  {
    company: "Tung Tung JSC",
    companyLogo: "/images/companies/tungtung.png",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Web Developer",
        year: "2020 - 2022",
        employmentType: "Full-time",
        description:
          "- Designed and developed a scalable design system, promoting consistency and efficiency across the application.\n- Collaborated with the Backend Team to integrate APIs seamlessly into the website, enhancing functionality and performance.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
        expanded: true,
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        year: "2019 - 2020",
        employmentType: "Full-time",
        description:
          "- Rebuilt the mobile application using React Native, implementing the new design to enhance user experience and performance.\n- Integrated the [MoMo payment gateway](https://github.com/momo-wallet/mobile-sdk/issues/5) and App Store in-app purchase, enabling seamless and secure payment options.\n- Optimized the application deployment process for staging and production environments, ensuring efficient and reliable rollouts.\n- Published the mobile application on both the App Store and Google Play Store, reaching a wider audience and ensuring compliance with platform standards.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "Agile",
          "Teamwork",
          "Research",
        ],
        expanded: true,
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "UI/UX Designer",
        year: "2018 - 2019",
        employmentType: "Part-time",
        description:
          '- Redesigned and enhanced the interface of the "Online Quiz Platform" for both web and mobile applications, creating a more modern and visually appealing design.\n- Improved the user experience (UX) by addressing usability issues, streamlining navigation, and ensuring an intuitive user journey.',
        icon: EExperiencePositionIcon.DraftingCompass,
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },*/
  {
    company: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Web Developer",
        year: "2023",
        employmentType: "Part-time",
        description:
          "- Maintained and redesigned Sun Media Company's official blog site in Nigeria .\n- Developed an e-commerce display-only website for a small startup In Accra Ghana.\n- Designed and E-commerce UI for a fashion store start-up in Lome.\n- Designed and developed a landing Page Advertisement site with WordPress.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "Nextjs",
          "React",
          "Mongo DB",
          "Firebase",
          "Tailwind CSS",
          "HTML 5",
          "Wordpress",
          "Typescript"
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic Designer",
        year: "2018 - 2019",
        employmentType: "Part-time",
        description:
          "Designed logos, advertising banners, user interfaces and posters",
        icon: EExperiencePositionIcon.Palette,
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Autodesk",
        ],
      },
    ],
    current: true,
  },
  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "W3Schools - Cyber Security",
        year: "February 2025 - present",
        employmentType: "part-time learning",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Currently learning Cyber Security on W3Schools, focusing on ethical hacking, network security, cryptography, and data protection.\n- Exploring secure coding practices, penetration testing, and risk assessment to strengthen application security.\n  - Understanding cybersecurity policies, compliance standards (ISO 27001, GDPR), and best practices for online safety.  \n  - Applying cybersecurity concepts to web development, ensuring secure authentication, encryption, and data privacy.  ",
        skills: [
          "ISO 27001",
          "Risk Assessment",
          "Python",
          "Network Security",
          "Cryptography",
          "Software Engineering",
          "Self-learning",
        ],
        expanded: true,
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "W3Schools - Python / Machine Learning",
        year: "September 2024 - Present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Studying fundamental and advanced concepts of Python programming.\n" +
          "- Exploring data science libraries such as NumPy, Pandas, and Matplotlib.\n" +
          "- Working with machine learning frameworks like Scikit-learn and TensorFlow.\n" +
          "- Learning about supervised and unsupervised learning algorithms.\n" +
          "- Implementing regression, classification, and clustering models.\n" +
          "- Understanding neural networks and deep learning fundamentals.\n" +
          "- Working on hands-on projects involving data preprocessing and model training.\n" +
          "- Practicing Python scripting for automation and data analysis.",
        skills: [
          "Python",
          "Machine Learning",
          "Data Science",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Scikit-learn",
          "TensorFlow",
          "Deep Learning",
          "Data Preprocessing",
          "Neural Networks",
          "Supervised Learning",
          "Unsupervised Learning",
          "AI Model Training"
        ],
        expanded: false,
      },      
    ],
  },
];
