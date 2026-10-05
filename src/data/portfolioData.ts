export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "uiux" | "social" | "logo";
  tagline?: string;
  role: string;
  duration: string;
  image: string;
  secondaryImage?: string;
  overview: string;
  problem?: string | string[];
  solution?: string | string[];
  keyFeatures?: string[];
  prototypeUrl?: string;
  flowDesignUrl?: string;
  additionalUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export const PORTFOLIO_DATA = {
  name: "Kunal Vaishnav",
  titles: ["UI UX Designer", "Product Designer"],
  bio: "I'm a UI UX and Product Designer dedicated to building thoughtful digital experiences that inspire and connect. By combining human-centered design principles with AI-powered productivity, I transform ideas into elegant, functional, and impactful products that people love to use.",
  contact: {
    email: "vaishnavkunaldz@gmail.com",
    phone: "+91 6350032099",
    location: "Rajasthan, India",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    figma: "https://www.figma.com",
  },
  skills: [
    { name: "Figma", level: "Expert", icon: "figma", description: "Design Systems, High-Fidelity UI, Interactive Prototyping" },
    { name: "Adobe XD", level: "Advanced", icon: "xd", description: "Wireframing, Screen Flow Design, Architecture" },
    { name: "Photoshop", level: "Advanced", icon: "ps", description: "Visual Assets, Image Manipulation, Texture & Mockups" },
    { name: "Illustrator", level: "Advanced", icon: "ai", description: "Vector Graphics, Iconography, Brand & Logo Design" },
  ],
  categories: [
    {
      id: "uiux",
      number: "1.",
      title: "UI UX",
      image: "/assets/new3.jpeg",
      description: "End-to-end user experience design, wireframes, component design systems, and clickable prototypes."
    },
    {
      id: "social",
      number: "2.",
      title: "Social Media",
      image: "/assets/new2.jpeg",
      description: "High-impact visual campaigns, social banners, 3D product renders, and engaging content graphics."
    },
    {
      id: "logo",
      number: "3.",
      title: "Logo & Branding",
      image: "/assets/new1.jpeg",
      description: "Distinct visual identities, memorable marks, brand guideline systems, and custom typography."
    },
  ],
  projects: [
    {
      id: "rsrtc-connect",
      number: "01",
      title: "RSRTC Connect",
      subtitle: "Modern Mobile Transit Platform for Rajasthan Roadways",
      tagline: "Travel Rajasthan, Seamlessly",
      category: "uiux" as const,
      role: "UI UX Designer",
      duration: "20 Days",
      image: "/assets/new RSRTC Rajasthan Travel App Showcase.png",
      secondaryImage: "/assets/rsrtc_laptop.jpg",
      overview: "RSRTC Connect is a modern mobile app designed to simplify bus travel across Rajasthan. It allows users to search routes, book tickets, select seats, access digital tickets, and track buses in real time. The app focuses on providing a fast, intuitive, and stress-free travel experience.",
      problem: [
        "Booking state buses is often inconvenient because:",
        "Existing systems feel outdated and difficult to navigate.",
        "Users don't get real-time information about their journey.",
        "Seat selection is confusing.",
        "Digital tickets and booking details are not easily accessible."
      ],
      solution: [
        "RSRTC Connect provides:",
        "Easy bus search and booking.",
        "Clear seat selection with visual indicators.",
        "Digital ticket with QR code.",
        "Live bus tracking.",
        "Simple and modern user interface."
      ],
      prototypeUrl: "https://www.figma.com/proto/1WuewjQqzCnIzlIReaNb3b/RSRTC?node-id=1-2&p=f&t=gGj7sBXniqQIMR8G-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      flowDesignUrl: "https://www.figma.com/design/1WuewjQqzCnIzlIReaNb3b/RSRTC?node-id=0-1&t=X6UYOjH6Edcy9kry-1%20%20%20prototype%20design",
      tags: ["Mobile App", "Transit Tech", "Design System", "Live Tracking"],
      metrics: [
        { label: "Design Time", value: "20 Days" },
        { label: "Design System", value: "Be Vietnam Pro" },
        { label: "Prototype", value: "100% Interactive" }
      ]
    },
    {
      id: "nprep-profile",
      number: "02",
      title: "NPrep Profile Experience Redesign",
      subtitle: "EdTech Dashboard & Daily Learning Motivation System",
      category: "uiux" as const,
      role: "Product Designer",
      duration: "5 Days",
      image: "/assets/new Dual Smartphone Learning Dashboard Mockup.png",
      secondaryImage: "/assets/nprep_solution.jpg",
      overview: "This project redesigns the NPrep profile experience for nursing aspirants. The new layout brings learning progress, daily goals, pending quizzes, study streaks, and achievements into one clear view. It improves content hierarchy, reduces emphasis on subscription details, and gives students a clear next action to continue learning confidently and efficiently.",
      problem: "The existing NPrep profile focused mainly on basic account information and subscription promotion. It did not clearly show learning progress, daily priorities, study consistency, or the next important task. As a result, students could not quickly understand their performance or decide what action to take next during their preparation journey.",
      solution: "I redesigned the profile into a personalized learning dashboard that highlights syllabus progress, study streaks, daily goals, pending quizzes, weekly improvement areas, and achievements. A clear visual hierarchy and prominent action buttons guide students toward their next task, helping them track performance, stay organized, and continue exam preparation more confidently.",
      prototypeUrl: "https://www.figma.com/proto/GDK3IU2I3cWBey9qwWfmiu/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=195%2C30%2C1.08&t=81Scqi77loy9B0iY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      flowDesignUrl: "https://www.figma.com/design/GDK3IU2I3cWBey9qwWfmiu/Untitled?node-id=0-1&t=E40cVlGjqWwjPPEZ-1",
      additionalUrl: "https://www.figma.com/design/7kDzrIOH4cNyyX4zbWmjY5/Veloura?node-id=10-23&t=rihYqATqvXVpsIdY-1",
      tags: ["EdTech", "Product Design", "Gamification", "Habit Building"],
      metrics: [
        { label: "Sprint Duration", value: "5 Days" },
        { label: "Target Audience", value: "B.Sc Nursing" },
        { label: "Focus", value: "Retention & Goals" }
      ]
    },
    {
      id: "examwalisite",
      number: "03",
      title: "ExamWaliSite Desktop Page",
      subtitle: "Comprehensive Competitive Exam Preparation Platform",
      tagline: "Crack Any Exam With Right Resources",
      category: "uiux" as const,
      role: "UI UX Designer",
      duration: "Web Portal",
      image: "/assets/crack any exam.png",
      overview: "This is a modern and user-friendly educational platform designed to help students prepare for competitive exams and academic studies. The homepage focuses on providing easy access to courses, study materials, and expert guidance through a clean and engaging interface.",
      keyFeatures: [
        "Smart omnibox search for notes, papers, syllabus and test series",
        "Multi-exam category switcher (NEET, JEE, CUET, CBSE, Class 12)",
        "Social proof badges: 50K Active Students, 500+ Mentors, 98% Success Rate",
        "High-conversion 1-Month Free trial onboarding modal flow"
      ],
      tags: ["Desktop Web", "EdTech Platform", "Modern Dark UI", "Conversion Funnel"],
      metrics: [
        { label: "Active Students", value: "50K+" },
        { label: "Verified Mentors", value: "500+" },
        { label: "Success Rate", value: "98%" }
      ]
    },
    {
      id: "hostel-hub",
      number: "04",
      title: "Hostel Hub",
      subtitle: "Smart Management Platform for Student Living & Administration",
      tagline: "Your Professional Sanctuary Awaits",
      category: "uiux" as const,
      role: "UI UX & Product Designer",
      duration: "SaaS Dashboard",
      image: "/assets/new hosthub.png",
      overview: "HostelHub is a digital hostel management platform designed to simplify hostel operations for both students and wardens. It provides features like room allocation, attendance tracking, mess menu updates, outpass requests, complaints, and student records in one centralized system.",
      flowDesignUrl: "https://www.figma.com/site/RNmn8GFAk10hlgp05oC9CL/Assesment-1?node-id=0-1&t=oZQWkgfgzaQAnZ2H-1",
      keyFeatures: [
        "Dual-role interface tailored for student requests and warden approvals",
        "Interactive room allocation and occupancy heatmaps",
        "Real-time digital outpass issuance with warden approval notifications",
        "Mess menu management, dietary preferences, and complaint tracker"
      ],
      tags: ["SaaS Dashboard", "Management Portal", "Dual Persona", "Responsive Web"],
      metrics: [
        { label: "Architecture", value: "Admin & Student" },
        { label: "Modules", value: "Rooms, Pass, Mess" },
        { label: "Status", value: "Completed Figma System" }
      ]
    }
  ],
  socialMediaShowcase: [
    {
      title: "Futuristic Gadgets Campaign",
      type: "Product Launch Socials",
      aspect: "Square & Story",
      description: "Sleek dark-mode aesthetic with 3D product floating rendering and typography hierarchy."
    },
    {
      title: "Audio Gear Ad Creatives",
      type: "E-Commerce Ads",
      aspect: "Mobile Feed",
      description: "High-contrast visual presentation highlighting tactile textures and technical specifications."
    },
    {
      title: "Editorial Brand Storytelling",
      type: "Carousel Experience",
      aspect: "Multi-slide",
      description: "Visual identity storytelling optimized for engagement, swipe-through rate, and brand recall."
    }
  ],
  logoShowcase: [
    { name: "MAS", industry: "Tech & Dynamic", style: "Minimal Geometric Wave" },
    { name: "Villa Messian", industry: "Hospitality & Heritage", style: "Lion Crest Luxury Serif" },
    { name: "Juristir", industry: "Legal Services", style: "Shield & Pillar Emblem" },
    { name: "hlo", industry: "Communication App", style: "Lowercase Tech Monogram" },
    { name: "VELA", industry: "Aviation & Luxury", style: "Sleek Aerodynamic Wing Mark" },
  ]
};
