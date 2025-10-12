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
  {
    slug: "understanding-addiction-medicine",
    title: "Understanding Addiction Medicine: A Comprehensive Approach to Recovery",
    excerpt: "Learn about evidence-based treatments for substance use disorders and how our team supports patients through their recovery journey with personalized care plans.",
    category: "Addiction Medicine",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Dr. Jane Smith",
    authorBio: "Board-certified addiction medicine specialist with 15+ years of experience in substance use disorder treatment",
    image: "https://images.unsplash.com/photo-1581092334904-97a6f34af8f3",
    tags: ["addiction", "recovery", "MAT", "substance use", "treatment"],
    featured: true,
    content: [
      { header: "Understanding Addiction Medicine", description: "Addiction medicine is a specialized field focused on preventing, evaluating, diagnosing, treating, and supporting recovery for individuals with substance use disorders. Addiction is recognized as a chronic brain disease requiring long-term management and support." },
      { header: "Evidence-Based Treatment Approaches", description: "Medication-Assisted Treatment (MAT) combines FDA-approved medications with behavioral therapies. Common medications include Buprenorphine and Methadone for opioid use disorder, Naltrexone for opioid and alcohol use disorders, and Acamprosate and Disulfiram for alcohol use disorder." },
      { header: "Behavioral Therapies", description: "Cognitive Behavioral Therapy helps patients recognize and change negative thought patterns. Motivational Interviewing enhances motivation for change. Contingency Management provides positive reinforcement for healthy behaviors. Family Therapy involves family members in the recovery process." },
      { header: "Comprehensive Care Model", description: "Our integrated approach includes medical and psychological assessments, individualized treatment planning, treatment for co-occurring disorders, relapse prevention strategies, and aftercare with ongoing support." },
      { header: "The Recovery Journey", description: "Recovery is a lifelong process involving detoxification and stabilization, early abstinence and treatment engagement, maintaining abstinence through lifestyle changes, and advanced recovery with personal growth." },
      { header: "Success Factors", description: "Key factors for successful recovery include strong therapeutic alliances, social support systems, addressing underlying trauma, developing healthy coping mechanisms, and ongoing monitoring." },
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
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    tags: ["depression", "mood disorders", "treatment", "therapy", "medication"],
    featured: true,
    content: [
      { header: "Comprehensive Depression Treatment", description: "Depression is a complex mental health condition affecting millions worldwide. Effective treatment requires a multifaceted approach tailored to individual needs." },
      { header: "Treatment Modalities", description: "Psychotherapy Approaches include Cognitive Behavioral Therapy to identify and change negative thought patterns, Interpersonal Therapy addressing relationship issues, Psychodynamic Therapy exploring unconscious patterns, and Mindfulness-Based Cognitive Therapy combining CBT with mindfulness practices." },
      { header: "Medication Management", description: "Common medications include SSRIs, SNRIs, atypical antidepressants, and tricyclic antidepressants for treatment-resistant cases." },
      { header: "Advanced Treatments", description: "Options include Transcranial Magnetic Stimulation, Electroconvulsive Therapy, Ketamine Infusion Therapy, and Vagus Nerve Stimulation." },
      { header: "Lifestyle Interventions", description: "Exercise, sleep hygiene, nutrition, stress management, and social support all enhance treatment outcomes." },
      { header: "Measuring Progress", description: "PHQ-9 depression scale monitoring, functional assessments, quality of life measures, and patient-reported outcomes track improvement." },
      { header: "Treatment Success", description: "Combining multiple approaches with regular follow-up care increases effectiveness." }
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    tags: ["integrative medicine", "holistic health", "wellness", "complementary therapies"],
    featured: false,
    content: [
      { header: "Integrative Mental Health", description: "Integrative mental health combines conventional psychiatric treatments with evidence-based complementary therapies to support holistic wellness." },
      { header: "Core Principles", description: "Whole-Person Care addresses physical, emotional, mental, social, and spiritual aspects of health. Personalized Treatment tailors interventions based on individual biochemistry, genetics, and personal preferences. Prevention Focus emphasizes wellness promotion and early intervention." },
      { header: "Complementary Modalities", description: "Nutritional Psychiatry uses Omega-3 supplementation, vitamin D optimization, probiotics for gut-brain support, and anti-inflammatory diets. Mind-Body Practices include mindfulness meditation, yoga, tai chi, biofeedback, neurofeedback, and breathing exercises. Movement Therapies include exercise, dance therapy, and outdoor activities." },
      { header: "Evidence-Based Integration", description: "Research supports combining medications with nutritional supplements, psychotherapy with mindfulness practices, and standard care with exercise programs. Integrative approaches enhance treatment outcomes and promote overall wellness." }
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    tags: ["trauma", "PTSD", "healing", "safety", "recovery"],
    featured: true,
    content: [
      { header: "Trauma-Informed Care", description: "Trauma-informed care recognizes the widespread impact of trauma and creates environments that promote healing and recovery." },
      { header: "Key Principles", description: "Safety: Creating physical and emotional safety for patients and staff. Trustworthiness and Transparency: Building trust through clear communication and consistent boundaries. Peer Support: Incorporating lived experiences into the healing process. Collaboration and Mutuality: Partnering with patients throughout their treatment journey. Empowerment and Choice: Prioritizing patient autonomy and decision-making." },
      { header: "Clinical Applications", description: "Assessment Considerations include universal trauma screening, culturally sensitive evaluation, and understanding trauma responses as adaptations. Treatment Modalities include Trauma-Focused CBT, EMDR, Somatic Experiencing, and Narrative Exposure Therapy." },
      { header: "Organizational Implementation", description: "Staff training, policy review, environmental modifications, and quality improvement enhance trauma-informed practices. Trauma-informed care benefits patients by creating compassionate and effective treatment environments." }
    ]
  },
  {
    slug: "digital-mental-health-tools",
    title: "Digital Mental Health Tools: Enhancing Access and Engagement",
    excerpt: "Explore how digital tools and telepsychiatry are revolutionizing mental health care delivery and improving patient access to services.",
    category: "Innovation & Technology",
    readTime: "6 min read",
    date: "March 8, 2024",
    author: "Dr. Sarah Johnson",
    authorBio: "Digital health specialist and telepsychiatry pioneer",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
    tags: ["telehealth", "digital health", "innovation", "technology", "access"],
    featured: false,
    content: [
      { header: "Digital Mental Health Tools", description: "Digital tools and telepsychiatry improve access, engagement, and monitoring for mental health care." },
      { header: "Telepsychiatry Services", description: "Secure video consultations, remote medication management, virtual therapy sessions, and digital progress monitoring expand care accessibility." },
      { header: "Mobile Applications", description: "Mood tracking, CBT exercises, mindfulness guides, and crisis resources provide patient support outside clinical visits." },
      { header: "Emerging Technologies", description: "AI chatbots, virtual reality exposure therapy, wearable monitoring devices, and predictive analytics support treatment." },
      { header: "Benefits and Considerations", description: "Digital tools increase access, reduce stigma, and enable personalized interventions. Privacy, data security, and appropriate use must be considered. Digital tools complement, not replace, the therapeutic relationship." }
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
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    tags: ["sleep", "wellness", "prevention", "circadian rhythm", "insomnia"],
    featured: false,
    content: [
      { header: "Sleep and Mental Health", description: "Sleep and mental health share a bidirectional relationship, each affecting the other significantly." },
      { header: "The Science Behind Sleep", description: "Sleep Architecture: NREM sleep supports memory consolidation and physical restoration. REM sleep supports emotional processing and creativity. Neurotransmitter Regulation: Sleep influences serotonin, dopamine, norepinephrine, and GABA systems." },
      { header: "Common Sleep Disorders", description: "Insomnia: Difficulty falling or staying asleep, often associated with anxiety and depression. Sleep Apnea: Breathing interruptions during sleep, linked to cognitive impairment. Circadian Rhythm Disorders: Misalignment between the internal clock and external environment can impact mental health." },
      { header: "Treatment Approaches", description: "Cognitive Behavioral Therapy for Insomnia (CBT-I) includes sleep restriction, stimulus control, cognitive restructuring, and relaxation techniques. Sleep Hygiene Optimization focuses on consistent schedules, optimal sleep environment, pre-sleep routines, and managing technology use. Medication Considerations include proper timing of psychiatric medications and management of side effects." },
      { header: "Integrated Treatment Benefits", description: "Improved mood, cognition, medication response, and reduced relapse risk are observed when sleep is optimized. Addressing sleep issues often leads to significant improvements in mental health outcomes." }
    ]
  },
  {
    slug: "cultural-competence-mental-health",
    title: "Cultural Competence in Mental Health Care: Beyond Awareness to Action",
    excerpt: "Learn how culturally competent care improves treatment outcomes and reduces mental health disparities across diverse populations.",
    category: "Diversity & Inclusion",
    readTime: "8 min read",
    date: "February 28, 2024",
    author: "Dr. Amina Khan",
    authorBio: "Cultural psychiatrist and health disparities researcher",
    image: "https://images.unsplash.com/photo-1551836026-d5c55ac5fc78",
    tags: ["cultural competence", "diversity", "inclusion", "health equity", "social justice"],
    featured: false,
    content: [
      { header: "Cultural Competence in Mental Health", description: "Cultural competence involves understanding and responding effectively to the needs of diverse patient populations." },
      { header: "Core Components", description: "Cultural Awareness: Recognizing one's own cultural background and biases. Cultural Knowledge: Understanding different cultural practices and worldviews. Cultural Skills: Developing appropriate assessment and treatment approaches. Cultural Encounters: Engaging with diverse populations to refine understanding." },
      { header: "Clinical Applications", description: "Assessment Considerations include cultural formulation interviews, understanding idioms of distress, recognizing culture-bound syndromes, and assessing acculturation stress. Treatment Adaptations include incorporating cultural healing practices, providing language-appropriate services, involving family and community, and integrating religious or spiritual elements." },
      { header: "Addressing Health Disparities", description: "Barriers to Care include stigma, language barriers, mistrust of healthcare systems, and financial limitations. Solutions and Strategies include community outreach, bilingual and bicultural staff, cultural consultation services, and advocacy for systemic change. Organizational Cultural Competence promotes diverse representation, ongoing staff training, inclusive policies, and partnerships with communities." }
    ]
  },
  {
    slug: "mindfulness-based-interventions",
    title: "Mindfulness-Based Interventions: Science and Practice",
    excerpt: "Explore the evidence base for mindfulness practices in mental health treatment and learn practical applications for various conditions.",
    category: "Therapy & Interventions",
    readTime: "6 min read",
    date: "February 25, 2024",
    author: "Dr. Emily Chen",
    authorBio: "Clinical psychologist and mindfulness researcher",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    tags: ["mindfulness", "meditation", "stress reduction", "CBT", "well-being"],
    featured: false,
    content: [
      { header: "Mindfulness in Mental Health", description: "Mindfulness-based interventions have strong empirical support for improving mental health across various conditions." },
      { header: "What is Mindfulness?", description: "Core Components include present-moment awareness, non-judgmental observation, acceptance of experience, and intentional attention. Evidence-Based Programs include Mindfulness-Based Stress Reduction (MBSR), Mindfulness-Based Cognitive Therapy (MBCT), and Dialectical Behavior Therapy (DBT). Clinical Applications include prevention of depressive relapse, reduction of anxiety, awareness of substance use triggers, and changing pain perception. Practical Implementation involves short daily exercises, guided resources, and integration into daily life." }
    ]
  }
];


export const categories = [
  "All Posts",
  "Addiction Medicine",
  "Depression",
  "Anxiety Disorders",
  "ADHD",
  "Medication Management",
  "Patient Resources",
  "Trauma & PTSD",
  "Treatment Approaches",
  "Innovation & Technology",
  "Wellness & Prevention",
  "Diversity & Inclusion",
  "Therapy & Interventions"
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
    name: "Dr. Sarah Johnson",
    specialization: "Digital Psychiatry",
    bio: "Telepsychiatry and digital health innovation",
    image: "/images/authors/dr-johnson.jpg"
  },
  {
    name: "Dr. Robert Williams",
    specialization: "Sleep Medicine",
    bio: "Behavioral sleep medicine and mental health",
    image: "/images/authors/dr-williams.jpg"
  },
  {
    name: "Dr. Amina Khan",
    specialization: "Cultural Psychiatry",
    bio: "Health disparities and culturally competent care",
    image: "/images/authors/dr-khan.jpg"
  },
  {
    name: "Dr. Emily Chen",
    specialization: "Mindfulness & Therapy",
    bio: "Evidence-based mindfulness interventions",
    image: "/images/authors/dr-chen-emily.jpg"
  }
];

export const tags = [
  "addiction", "recovery", "MAT", "substance use", "treatment",
  "depression", "mood disorders", "therapy", "medication",
  "integrative medicine", "holistic health", "wellness",
  "trauma", "PTSD", "healing", "safety",
  "telehealth", "digital health", "innovation", "technology",
  "sleep", "circadian rhythm", "insomnia",
  "cultural competence", "diversity", "inclusion", "health equity",
  "mindfulness", "meditation", "stress reduction"
];