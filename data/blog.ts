import Addiction from "@/assets/Addiction.png"
import ADHD from "@/assets/ADHD.png"
import Anxiety from "@/assets/Anxiety.png"
import Depression from "@/assets/Depression.jpeg"
import Medication from "@/assets/Medication.jpg"
import PTSD from "@/assets/PTSD.jpeg"
import Patient from "@/assets/Patient.jpg"
import Treatment from "@/assets/Treatment.png"
import Wellness from "@/assets/Wellness.png"

export interface BlogContent {
  header: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorBio: string;
  image: string;
  tags: string[];
  featured: boolean;
  content: BlogContent[];
}

export const blogPosts: BlogPost[] = [
  // Existing posts
  {
    slug: "understanding-addiction-medicine",
    title: "Understanding Addiction Medicine: A Comprehensive Approach to Recovery",
    excerpt: "Learn about evidence-based treatments for substance use disorders and how our team supports patients through their recovery journey with personalized care plans.",
    category: "Addiction Medicine",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Dr. Jane Smith",
    authorBio: "Board-certified addiction medicine specialist with 15+ years of experience in substance use disorder treatment",
    image: Addiction.src,
    tags: ["addiction", "recovery", "MAT", "substance use", "treatment"],
    featured: true,
    content: [
      { header: "Understanding Addiction Medicine", description: "Addiction medicine is a specialized field focused on preventing, evaluating, diagnosing, treating, and supporting recovery for individuals with substance use disorders. Addiction is recognized as a chronic brain disease requiring long-term management and support." },
      { header: "Evidence-Based Treatment Approaches", description: "Medication-Assisted Treatment (MAT) combines FDA-approved medications with behavioral therapies." },
      { header: "Behavioral Therapies", description: "Cognitive Behavioral Therapy, Motivational Interviewing, Contingency Management, and Family Therapy play key roles." },
      { header: "Comprehensive Care Model", description: "Our integrated approach includes assessments, individualized treatment planning, co-occurring disorder care, and relapse prevention." },
      { header: "The Recovery Journey", description: "Recovery is a lifelong process involving detox, abstinence, maintenance, and personal growth." },
      { header: "Success Factors", description: "Key factors include strong therapeutic alliances, social support, trauma-informed care, and ongoing monitoring." },
      { header: "Contact Information", description: "If you or someone you know is struggling with addiction, contact our clinic to learn about treatment options." }
    ]
  },
  {
    slug: "depression-treatment-options",
    title: "Depression Treatment: Finding the Right Approach for You",
    excerpt: "Explore comprehensive treatment options for depression, including innovative therapies and personalized approaches that address both biological and psychological factors.",
    category: "Depression",
    readTime: "10 min read",
    date: "March 10, 2024",
    author: "Dr. John Doe",
    authorBio: "Psychiatrist specializing in mood disorders and treatment-resistant depression",
    image: Depression.src,
    tags: ["depression", "mood disorders", "treatment", "therapy", "medication"],
    featured: true,
    content: [
      { header: "Comprehensive Depression Treatment", description: "Depression is a complex mental health condition affecting millions worldwide. Effective treatment requires a multifaceted approach tailored to individual needs." },
      { header: "Treatment Modalities", description: "Psychotherapy approaches include CBT, IPT, Psychodynamic Therapy, and MBCT." },
      { header: "Medication Management", description: "Common medications include SSRIs, SNRIs, atypical antidepressants, and tricyclic antidepressants." },
      { header: "Advanced Treatments", description: "Options include TMS, ECT, Ketamine Infusion, and VNS." },
      { header: "Lifestyle Interventions", description: "Exercise, sleep hygiene, nutrition, stress management, and social support enhance treatment outcomes." },
      { header: "Measuring Progress", description: "PHQ-9 scores, functional assessments, and quality of life measures are used to track improvement." },
      { header: "Treatment Success", description: "Combining multiple approaches with regular follow-up care increases effectiveness." }
    ]
  },
  {
    slug: "trauma-informed-care",
    title: "Trauma-Informed Care: Creating Safe Healing Environments",
    excerpt: "Learn how trauma-informed approaches transform mental health care by recognizing the widespread impact of trauma and promoting healing-centered engagement.",
    category: "Trauma & PTSD",
    readTime: "9 min read",
    date: "March 12, 2024",
    author: "Dr. Michael Chen",
    authorBio: "Clinical psychologist specializing in trauma treatment and PTSD",
    image: PTSD.src,
    tags: ["trauma", "PTSD", "healing", "safety", "recovery"],
    featured: true,
    content: [
      { header: "Trauma-Informed Care", description: "Recognizing trauma's impact and creating environments that promote healing and recovery." },
      { header: "Key Principles", description: "Safety, Trust, Peer Support, Collaboration, and Empowerment are foundational." },
      { header: "Clinical Applications", description: "Includes trauma screening, TF-CBT, EMDR, and Somatic Experiencing." },
      { header: "Organizational Implementation", description: "Staff training, environmental changes, and policy reviews foster trauma-informed practices." }
    ]
  },
  {
    slug: "integrative-mental-health",
    title: "Integrative Mental Health: Combining Conventional and Complementary Approaches",
    excerpt: "Discover how integrative mental health combines traditional psychiatric care with evidence-based complementary therapies for comprehensive wellness.",
    category: "Treatment Approaches",
    readTime: "7 min read",
    date: "March 18, 2024",
    author: "Dr. Maria Rodriguez",
    authorBio: "Integrative psychiatrist combining conventional and complementary medicine approaches",
    image: Treatment.src,
    tags: ["integrative medicine", "holistic health", "wellness", "complementary therapies"],
    featured: false,
    content: [
      { header: "Integrative Mental Health", description: "Combining psychiatric treatments with complementary therapies to support holistic wellness." },
      { header: "Core Principles", description: "Whole-Person Care, Personalized Treatment, and Prevention Focus guide integrative care." },
      { header: "Complementary Modalities", description: "Nutritional psychiatry, mindfulness, yoga, tai chi, biofeedback, and movement therapies are included." },
      { header: "Evidence-Based Integration", description: "Research supports combining medication, psychotherapy, and lifestyle interventions." }
    ]
  },
  {
    slug: "sleep-mental-health-connection",
    title: "The Sleep-Mental Health Connection: Why Rest Matters",
    excerpt: "Understand the bidirectional relationship between sleep and mental health, and learn evidence-based strategies for improving both sleep quality and psychological wellbeing.",
    category: "Wellness & Prevention",
    readTime: "7 min read",
    date: "March 5, 2024",
    author: "Dr. Robert Williams",
    authorBio: "Sleep medicine specialist and behavioral sleep researcher",
    image: Wellness.src,
    tags: ["sleep", "wellness", "prevention", "circadian rhythm", "insomnia"],
    featured: false,
    content: [
      { header: "Sleep and Mental Health", description: "Sleep and mental health are closely linked, each influencing the other." },
      { header: "The Science Behind Sleep", description: "NREM supports memory; REM supports emotion regulation; neurotransmitters play a key role." },
      { header: "Common Sleep Disorders", description: "Insomnia, sleep apnea, and circadian rhythm disorders impact mental health." },
      { header: "Treatment Approaches", description: "CBT-I, sleep hygiene optimization, and medication adjustments are effective." },
      { header: "Integrated Treatment Benefits", description: "Improved mood, cognition, and reduced relapse risk are observed when sleep is optimized." }
    ]
  },

  // ✅ New Category: Anxiety Disorders
  {
    slug: "understanding-anxiety-disorders",
    title: "Understanding Anxiety Disorders: Symptoms, Causes, and Treatments",
    excerpt: "Anxiety disorders are among the most common mental health conditions. Learn how to recognize symptoms and explore evidence-based treatments.",
    category: "Anxiety Disorders",
    readTime: "8 min read",
    date: "March 20, 2024",
    author: "Dr. Emma Carter",
    authorBio: "Psychiatrist specializing in anxiety and mood disorders",
    image: Anxiety.src,
    tags: ["anxiety", "GAD", "panic disorder", "CBT", "treatment"],
    featured: true,
    content: [
      { header: "What Are Anxiety Disorders?", description: "Anxiety disorders involve excessive fear or worry that interferes with daily functioning. Common types include Generalized Anxiety Disorder, Panic Disorder, Social Anxiety Disorder, and Phobias." },
      { header: "Common Symptoms", description: "Symptoms include persistent worry, restlessness, rapid heart rate, difficulty sleeping, and irritability." },
      { header: "Causes and Risk Factors", description: "A combination of genetic, biological, environmental, and psychological factors contribute to anxiety disorders." },
      { header: "Treatment Approaches", description: "CBT, exposure therapy, mindfulness practices, and medication such as SSRIs or benzodiazepines are commonly used." },
      { header: "Self-Management Strategies", description: "Relaxation techniques, breathing exercises, regular physical activity, and sleep hygiene can help manage anxiety." }
    ]
  },

  // ✅ New Category: ADHD
  {
    slug: "adhd-management-strategies",
    title: "ADHD Management: Strategies for Focus and Success",
    excerpt: "Learn about ADHD symptoms, diagnosis, and evidence-based strategies to support daily functioning and well-being.",
    category: "ADHD",
    readTime: "9 min read",
    date: "March 25, 2024",
    author: "Dr. Alex Turner",
    authorBio: "Child and adolescent psychiatrist specializing in ADHD and behavioral interventions",
    image: ADHD.src,
    tags: ["ADHD", "focus", "executive function", "behavioral therapy", "medication"],
    featured: true,
    content: [
      { header: "Understanding ADHD", description: "ADHD is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It affects both children and adults." },
      { header: "Symptoms and Diagnosis", description: "Symptoms include difficulty sustaining attention, forgetfulness, impulsive actions, and trouble with organization. Diagnosis involves comprehensive evaluation." },
      { header: "Treatment Options", description: "Behavioral therapy, parent training, coaching, and stimulant or non-stimulant medications are evidence-based approaches." },
      { header: "Daily Life Strategies", description: "Creating structure, using reminders, breaking tasks into smaller steps, and practicing mindfulness can improve functioning." }
    ]
  },

  // ✅ New Category: Medication Management
  {
    slug: "medication-management-guide",
    title: "Medication Management in Mental Health: A Complete Guide",
    excerpt: "Effective medication management is key to optimizing treatment outcomes for mental health conditions. Learn how we ensure safety and effectiveness.",
    category: "Medication Management",
    readTime: "8 min read",
    date: "March 28, 2024",
    author: "Dr. Lisa Nguyen",
    authorBio: "Board-certified psychiatrist and psychopharmacology specialist",
    image: Medication.src,
    tags: ["medication", "psychopharmacology", "management", "treatment"],
    featured: false,
    content: [
      { header: "The Role of Medication", description: "Medications help manage symptoms of depression, anxiety, ADHD, and other mental health conditions." },
      { header: "Types of Psychiatric Medications", description: "Includes antidepressants, anxiolytics, mood stabilizers, stimulants, and antipsychotics." },
      { header: "Monitoring and Safety", description: "Regular follow-ups, lab work, and side-effect monitoring ensure safe and effective use." },
      { header: "Collaborative Care", description: "We work closely with patients to personalize treatment and integrate therapy with medication when appropriate." }
    ]
  },

  // ✅ New Category: Patient Resources
  {
    slug: "patient-resources-mental-health",
    title: "Patient Resources: Empowering You in Your Mental Health Journey",
    excerpt: "Explore practical tools, support options, and educational resources designed to help you take an active role in your mental health care.",
    category: "Patient Resources",
    readTime: "6 min read",
    date: "March 30, 2024",
    author: "Dr. Sarah Mitchell",
    authorBio: "Clinical psychologist and patient advocate",
    image: Patient.src,
    tags: ["resources", "support", "education", "mental health"],
    featured: false,
    content: [
      { header: "Educational Materials", description: "Access guides, fact sheets, and FAQs to better understand mental health conditions and treatments." },
      { header: "Support Groups", description: "Peer support can provide connection, encouragement, and practical coping strategies." },
      { header: "Crisis and Helpline Information", description: "Find immediate help through crisis hotlines and mental health services." },
      { header: "Self-Care Tools", description: "Use mindfulness apps, journals, and mood trackers to support your journey." }
    ]
  }
];

export const categories = [
  "All Posts",
  "Addiction Medicine",
  "Depression",
  "Trauma & PTSD",
  "Treatment Approaches",
  "Wellness & Prevention",
  "Anxiety Disorders",
  "ADHD",
  "Medication Management",
  "Patient Resources"
];

export const authors = [
  {
    name: "Dr. Jane Smith",
    specialization: "Addiction Medicine",
    bio: "Board-certified addiction medicine specialist with 15+ years of experience",
    image: "/images/authors/dr-smith.jpg"
  },
  {
    name: "Dr. John Doe",
    specialization: "Mood Disorders",
    bio: "Psychiatrist specializing in treatment-resistant depression",
    image: "/images/authors/dr-doe.jpg"
  },
  {
    name: "Dr. Maria Rodriguez",
    specialization: "Integrative Psychiatry",
    bio: "Combining conventional and complementary approaches",
    image: "/images/authors/dr-rodriguez.jpg"
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Trauma Psychology",
    bio: "Clinical psychologist specializing in PTSD treatment",
    image: "/images/authors/dr-chen.jpg"
  },
  {
    name: "Dr. Robert Williams",
    specialization: "Sleep Medicine",
    bio: "Behavioral sleep medicine and mental health",
    image: "/images/authors/dr-williams.jpg"
  },
  {
    name: "Dr. Emma Carter",
    specialization: "Anxiety Disorders",
    bio: "Psychiatrist specializing in anxiety and mood disorders",
    image: "/images/authors/dr-carter.jpg"
  },
  {
    name: "Dr. Alex Turner",
    specialization: "ADHD & Behavioral Health",
    bio: "Child and adolescent psychiatrist specializing in ADHD and behavioral interventions",
    image: "/images/authors/dr-turner.jpg"
  },
  {
    name: "Dr. Lisa Nguyen",
    specialization: "Psychopharmacology",
    bio: "Board-certified psychiatrist and medication management expert",
    image: "/images/authors/dr-nguyen.jpg"
  },
  {
    name: "Dr. Sarah Mitchell",
    specialization: "Clinical Psychology & Patient Advocacy",
    bio: "Clinical psychologist focused on empowering patients through education and support",
    image: "/images/authors/dr-mitchell.jpg"
  }
];

export const tags = [
  "addiction", "recovery", "MAT", "substance use", "treatment",
  "depression", "mood disorders", "therapy", "medication",
  "trauma", "PTSD", "healing", "safety",
  "integrative medicine", "holistic health", "wellness",
  "sleep", "circadian rhythm", "insomnia",
  "anxiety", "GAD", "panic disorder",
  "ADHD", "focus", "executive function",
  "psychopharmacology", "management",
  "resources", "support", "education"
];
