export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce',
    category: 'Web Development',
    image: 'ecom.png',
    description: 'A complete overhaul of a fashion brand\'s online store with a focus on mobile conversion and performance.',
    tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    caseStudy: {
      overview: 'The client needed a modern, fast, and highly converting e-commerce platform to replace their aging legacy system. The goal was to reduce bounce rates and increase the average order value.',
      challenge: 'The existing site was slow, not mobile-friendly, and had a complicated checkout process that led to high cart abandonment.',
      solution: 'I built a custom Next.js application with server-side rendering for SEO, integrated Stripe for a seamless checkout, and used Tailwind CSS for a responsive, high-performance UI.',
      results: [
        '45% increase in mobile conversion rate',
        '30% reduction in page load time',
        '20% increase in average session duration'
      ],
      images: [
        'https://picsum.photos/seed/shop1/800/600',
        'https://picsum.photos/seed/shop2/800/600'
      ]
    }
  },
  {
    id: 'travel-doc',
    title: 'Travel Documentary',
    category: 'Video Editing',
    image: 'saqi.jpg',
    description: 'Cinematic editing and color grading for a 15-minute travel documentary series exploring the Himalayas.',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading'],
    github: '#',
    live: 'https://www.instagram.com/saqibali0867/',
    caseStudy: {
      overview: 'A documentary filmmaker captured 50+ hours of raw footage in the Himalayas and needed a cohesive, emotionally resonant 15-minute film.',
      challenge: 'The footage was shot across different cameras and lighting conditions, requiring extensive color matching and a strong narrative structure.',
      solution: 'I developed a narrative arc based on the interview transcripts, used DaVinci Resolve for professional color grading, and added subtle motion graphics to highlight key locations.',
      results: [
        'Selected for 3 international film festivals',
        'Over 500k views on YouTube within the first month',
        'Featured in National Geographic\'s digital showcase'
      ],
      images: [
        'vided1.jpg',
        'wedding.jpeg'
      ]
    }
  },
  {
    id: 'brand-launch',
    title: 'Brand Launch Campaign',
    category: 'Social Media',
    image: 'saqib5.jpg',
    description: 'Full-scale social media strategy and content creation for a sustainable tech startup launch.',
    tags: ['Strategy', 'Content Creation', 'Ads Management'],
    github: '#',
    live: 'https://www.instagram.com/saqibali0867/',
    caseStudy: {
      overview: 'A sustainable tech startup needed to build awareness and a community from scratch before their product launch.',
      challenge: 'The market was saturated with competitors, and the brand needed a unique voice that resonated with eco-conscious Gen Z and Millennials.',
      solution: 'I created a "Behind the Scenes" content series, partnered with 15 micro-influencers, and managed a targeted ad campaign focusing on educational content.',
      results: [
        'Gained 25k organic followers in 3 months',
        '15% average engagement rate on launch posts',
        '10k email signups before the official launch'
      ],
      images: [
        'https://picsum.photos/seed/brand1/800/600',
        'https://picsum.photos/seed/brand2/800/600'
      ]
    }
  },

];
