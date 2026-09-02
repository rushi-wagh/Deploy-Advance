import { ServiceItem, FAQItem, JourneyStep, BenefitItem, ClinicImage } from './types';

export const CLINIC_INFO = {
  name: "Advance Physio's Hub",
  tagline: "Advanced Physiotherapy & Rehabilitation Clinic",
  city: "Chhatrapati Sambhajinagar",
  cityAlt: "Aurangabad",
  state: "Maharashtra",
  country: "India",
  locationShort: "Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  phone: "[Phone Number]",
  whatsapp: "[WhatsApp Number]",
  email: "[Email Address]",
  address: "[Clinic Address], Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  hours: "Monday – Saturday: [Clinic Hours] | Sunday: [Clinic Hours]",
  googleMapsQuery: "Advance+Physio+Hub+Chhatrapati+Sambhajinagar+Maharashtra",
};

export const VALUE_STRIP_ITEMS = [
  {
    title: "Evidence-Based Care",
    subtitle: "Clinical science & proven protocols",
    icon: "ShieldCheck",
  },
  {
    title: "Personalized Treatment",
    subtitle: "Custom-tailored 1-on-1 attention",
    icon: "UserCheck",
  },
  {
    title: "Sports & Orthopedic Rehab",
    subtitle: "Joint, muscle & movement recovery",
    icon: "Activity",
  },
  {
    title: "Functional Recovery",
    subtitle: "Return to daily living & sport",
    icon: "RotateCw",
  },
];

export const ABOUT_PRINCIPLES = [
  {
    number: "01",
    title: "Assess",
    tagline: "Understand the underlying movement problem.",
    description: "We conduct detailed biomechanical assessments and clinical evaluations to locate the root cause of dysfunction, not just surface symptoms.",
  },
  {
    number: "02",
    title: "Treat",
    tagline: "Apply targeted physiotherapy & manual strategies.",
    description: "Combining hands-on joint and soft-tissue manual therapy with guided rehabilitation modalities to alleviate pain and restore joint kinematics.",
  },
  {
    number: "03",
    title: "Restore",
    tagline: "Progress toward strength, mobility & function.",
    description: "Structured progressive loading and movement re-education that builds long-term physical resilience, preventing recurrence.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "orthopedic",
    title: "Orthopedic Rehabilitation",
    description: "Recovery from musculoskeletal conditions, joint problems, spine issues, and acute or chronic movement limitations.",
    iconName: "Bone",
    benefits: [
      "Targeted spine & peripheral joint mobilization",
      "Corrective posture and alignment rebalancing",
      "Restoration of natural range of motion",
    ],
    idealFor: "Back pain, neck stiffness, osteoarthritis, disc issues, frozen shoulder",
  },
  {
    id: "sports",
    title: "Sports Injury Rehabilitation",
    description: "Structured, evidence-based rehabilitation protocols designed specifically for athletes, runners, and active individuals.",
    iconName: "Zap",
    benefits: [
      "Sport-specific movement retraining",
      "Accelerated tissue healing and load management",
      "Return-to-play objective milestone testing",
    ],
    idealFor: "Ligament sprains, tendonitis, muscle tears, marathon runners, cricketers",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Individualized physiotherapy strategies focused on desensitizing chronic pain pathways and restoring daily functional capacity.",
    iconName: "HeartPulse",
    benefits: [
      "Non-pharmacological neurological pain relief",
      "Trigger point & myofascial decompression",
      "Graded active movement therapy",
    ],
    idealFor: "Chronic lower back pain, sciatica, fibromyalgia, tension headaches",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description: "Skilled hands-on techniques seamlessly integrated with active movement-based rehabilitation for rapid tissue response.",
    iconName: "HandMetal",
    benefits: [
      "Joint articulation and mobilization",
      "Soft tissue and fascial release techniques",
      "Immediate reduction in muscle guarding",
    ],
    idealFor: "Joint stiffness, restricted mobility, post-immobilization stiffness",
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Rehabilitation",
    description: "Progressive, staged rehabilitation protocols to safely rebuild mobility, muscular strength, and joint function following surgical procedures.",
    iconName: "Stethoscope",
    benefits: [
      "Phase-specific protocol adherence with surgeon alignment",
      "Safe scar tissue management and swelling control",
      "Functional gait and balance retraining",
    ],
    idealFor: "ACL reconstruction, knee/hip arthroplasty, rotator cuff repair, spine surgery",
  },
  {
    id: "functional-recovery",
    title: "Functional Recovery",
    description: "Movement-focused programs designed to help patients return to daily activities, work tasks, and hobbies with confidence.",
    iconName: "Flame",
    benefits: [
      "Task-specific kinetic chain conditioning",
      "Ergonomic work-station and daily habit optimization",
      "Confidence-building progressive physical challenges",
    ],
    idealFor: "General deconditioning, post-illness mobility loss, active lifestyle restart",
  },
  {
    id: "performance",
    title: "Performance Enhancement",
    description: "Advanced training and biomechanical movement strategies engineered to optimize athletic efficiency and physical output.",
    iconName: "TrendingUp",
    benefits: [
      "Movement screening & kinetic chain analysis",
      "Power, agility, and endurance conditioning",
      "Neuromuscular coordination refinement",
    ],
    idealFor: "Marathoners, competitive athletes, fitness enthusiasts wanting higher output",
  },
  {
    id: "injury-prevention",
    title: "Injury Prevention",
    description: "Proactive functional assessments and corrective movement strategies to identify biomechanical asymmetries and mitigate injury risk.",
    iconName: "Shield",
    benefits: [
      "Functional movement screening (FMS)",
      "Targeted muscle imbalance correction",
      "Personalized warm-up & recovery regimens",
    ],
    idealFor: "Active adults, seasonal athletes, individuals with recurring strains",
  },
];

export const DIRECTOR_DATA = {
  name: "[Director Name]",
  title: "Director & Head Physiotherapist",
  clinic: "Advance Physio's Hub",
  location: "Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
  quote: "Treatment is not just about reducing pain. It is about restoring movement, confidence and the ability to live and perform at your best.",
  paragraphs: [
    "I am a results-driven and passionate physiotherapist dedicated to transforming lives through advanced rehabilitation, pain management, and movement restoration.",
    "As the Director of Advance Physio's Hub in Chhatrapati Sambhajinagar (Aurangabad), I lead a modern physiotherapy center focused on delivering evidence-based, patient-centric care that creates measurable outcomes.",
    "Beyond clinical practice, I actively contribute to the professional physiotherapy ecosystem as the Secretary of the CSN (Chhatrapati Sambhajinagar) Physiotherapy Association, where I work towards enhancing awareness, collaboration, and continuous learning within the healthcare community.",
    "I am also proud to be associated as a Physio Partner for the Lokmat Maha Marathon, supporting athletes with injury prevention, performance optimization, and on-ground rehabilitation during high-impact endurance events.",
    "I have also completed a Business Excellence, Leadership & Coaching Workshop from Life Catalyst, strengthening my capabilities in mentoring, coaching and leadership.",
  ],
  focusAreas: [
    "Orthopedic & Sports Injury Rehabilitation",
    "Pain Management & Manual Therapy",
    "Post-Surgical & Functional Recovery",
    "Performance Enhancement & Injury Prevention",
    "Mentoring, Coaching & Leadership Development",
  ],
};

export const CREDENTIALS_DATA = [
  {
    organization: "CSN Physiotherapy Association",
    subtitle: "Chhatrapati Sambhajinagar",
    role: "Secretary",
    description: "Driving healthcare awareness, professional clinical governance, continuous medical education, and community physiotherapy initiatives across the region.",
    tag: "Professional Leadership",
  },
  {
    organization: "Lokmat Maha Marathon",
    subtitle: "Maharashtra's Premier Running Event",
    role: "Physio Partner",
    description: "Official physiotherapy partner providing athlete injury prevention, on-ground biomechanical screening, and acute race-day recovery for thousands of endurance runners.",
    tag: "Athletic Excellence",
  },
  {
    organization: "Life Catalyst",
    subtitle: "Executive Development",
    role: "Business Excellence, Leadership & Coaching Workshop",
    description: "Advanced program in healthcare leadership, patient-centric service management, team mentoring, and clinical operations excellence.",
    tag: "Clinical Leadership",
  },
];

export const WHY_US_ITEMS: BenefitItem[] = [
  {
    title: "Personalized Assessment",
    description: "Every patient receives a dedicated 1-on-1 biomechanical evaluation to identify kinetic dysfunctions rather than standard one-size-fits-all prescriptions.",
    icon: "ScanFace",
  },
  {
    title: "Evidence-Based Treatment",
    description: "All protocols are grounded in modern clinical research, validated orthopedic literature, and physiological rehabilitation science.",
    icon: "FileCheck",
  },
  {
    title: "Goal-Oriented Rehabilitation",
    description: "Your recovery path is benchmarked against concrete functional milestones — whether returning to professional sports or pain-free daily work.",
    icon: "Target",
  },
  {
    title: "Movement-Focused Recovery",
    description: "We prioritize active movement restoration and progressive neuromuscular re-education over passive, temporary symptom masking.",
    icon: "Compass",
  },
  {
    title: "Sports & Performance Expertise",
    description: "Proven experience working directly with marathoners and competitive athletes through our Lokmat Maha Marathon partnership.",
    icon: "Medal",
  },
  {
    title: "Long-Term Functional Outcomes",
    description: "Empowering patients with self-management education, strength foundations, and movement awareness to prevent reinjury.",
    icon: "LineChart",
  },
];

export const PATIENT_JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: "01",
    title: "Consultation & Assessment",
    subtitle: "Comprehensive Clinical Evaluation",
    description: "We start with a thorough discussion of your medical history, symptoms, lifestyle, and movement patterns. Through orthopedic testing and gait/joint assessment, we identify the exact root cause of your concern.",
    highlights: ["Detailed movement screen", "Posture & joint analysis", "Root-cause identification"],
  },
  {
    stepNumber: "02",
    title: "Personalized Treatment Plan",
    subtitle: "Evidence-Based Roadmap",
    description: "Based on clinical findings, we formulate an individualized treatment roadmap with clear milestones tailored to your specific timeline, daily demands, and recovery goals.",
    highlights: ["Customized therapy modalities", "Objective recovery milestones", "Timeline & expectations set"],
  },
  {
    stepNumber: "03",
    title: "Guided Rehabilitation",
    subtitle: "Active & Manual Therapy",
    description: "You work 1-on-1 with skilled physiotherapists utilizing manual therapy, targeted exercise therapy, and specialized rehabilitation equipment in a modern, supportive environment.",
    highlights: ["Hands-on manual therapy", "Supervised machine rehab", "Graded exercise progression"],
  },
  {
    stepNumber: "04",
    title: "Progress & Return to Activity",
    subtitle: "Sustained Long-Term Strength",
    description: "As function restores, we advance your program toward functional conditioning, injury prevention strategies, and confident return to work, sports, and active life without fear of reinjury.",
    highlights: ["Functional re-testing", "Home maintenance regime", "Resilient return to activity"],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What conditions does physiotherapy help with?",
    answer: "Physiotherapy addresses a wide spectrum of musculoskeletal, sports, and neurological movement conditions. Common areas include back and neck pain, sciatica, joint arthritis, ligament tears (ACL/meniscus), rotator cuff injuries, postural imbalances, frozen shoulder, and post-operative recovery following orthopedic surgeries.",
  },
  {
    id: "faq-2",
    category: "appointments",
    question: "How does the first physiotherapy session work?",
    answer: "Your initial session includes a comprehensive consultation and clinical assessment. The physiotherapist reviews your medical history, performs orthopedic tests, evaluates joint mobility, muscle strength, and movement patterns, explains findings, and initiates your first targeted treatment.",
  },
  {
    id: "faq-3",
    category: "appointments",
    question: "Do I need an appointment beforehand?",
    answer: "Yes, we recommend scheduling an appointment in advance to ensure dedicated 1-on-1 time with our clinical team and minimize waiting time. You can easily request an appointment via our online booking form or via WhatsApp / Phone.",
  },
  {
    id: "faq-4",
    category: "treatment",
    question: "How long does a physiotherapy session take?",
    answer: "An initial comprehensive assessment typically takes between 45 to 60 minutes. Subsequent rehabilitation sessions generally range from 35 to 50 minutes depending on your specific protocol, manual therapy needs, and exercise program.",
  },
  {
    id: "faq-5",
    category: "treatment",
    question: "Can physiotherapy help with sports injuries?",
    answer: "Absolutely. We specialize in sports injury rehabilitation for runners, athletes, and active individuals. Our approach combines acute symptom reduction, biomechanical correction, load management, and progressive return-to-sport testing to ensure safe, peak athletic recovery.",
  },
  {
    id: "faq-6",
    category: "appointments",
    question: "What should I bring to my first appointment?",
    answer: "Please bring any recent diagnostic reports (MRI, X-ray, surgical summaries) and doctor referrals if available. We also suggest wearing comfortable clothing (such as athletic wear, shorts, or a t-shirt) that allows easy movement and joint assessment.",
  },
  {
    id: "faq-7",
    category: "treatment",
    question: "How is a rehabilitation plan created?",
    answer: "Rehabilitation plans at Advance Physio's Hub are never cookie-cutter. They are formulated using clinical assessment findings, individual lifestyle factors, physical demands, and specific functional goals, and are continuously calibrated as you progress through each stage.",
  },
];

export const TESTIMONIALS_PLACEHOLDERS = [
  {
    id: 1,
    tag: "Orthopedic Rehabilitation",
    condition: "Post-Surgical Knee & Mobility Recovery",
    text: "Real patient experiences can be added here. This placeholder demonstrates the verified patient recovery review format, highlighting clinical care, personalized rehabilitation exercises, and measurable return to pain-free daily movement.",
    patientTitle: "Verified Patient Feedback",
    location: "Chhatrapati Sambhajinagar",
    status: "Completed Full Program",
  },
  {
    id: 2,
    tag: "Sports Performance & Rehab",
    condition: "Endurance Runner Hamstring & Knee Care",
    text: "Real patient experiences can be added here. This placeholder demonstrates athletic recovery feedback, showcasing guided physical conditioning, marathon preparation support, and on-ground biomechanical guidance.",
    patientTitle: "Verified Marathon Runner Feedback",
    location: "Chhatrapati Sambhajinagar",
    status: "Returned to Competition",
  },
  {
    id: 3,
    tag: "Chronic Pain Management",
    condition: "Cervical & Lumbar Posture Restoration",
    text: "Real patient experiences can be added here. This placeholder illustrates patient satisfaction with evidence-based manual therapy, ergonomic education, and structured core stabilization exercises.",
    patientTitle: "Verified Patient Feedback",
    location: "Aurangabad",
    status: "Active Maintenance",
  },
];
