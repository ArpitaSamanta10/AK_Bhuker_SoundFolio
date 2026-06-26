export interface Track {
  id: string;
  title: string;
  category: 'Film' | 'Jingles' | 'Arrangement' | 'Background Score' | 'Mixing';
  duration: string;
  description: string;
  audioUrl: string;
  coverUrl: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: 'Film' | 'Tv' | 'Volume2' | 'Sliders' | 'Music';
  description: string;
  deliverables: string[];
  turnaround: string;
  price: string;
}

export interface Project {
  id: string;
  client: string;
  projectName: string;
  type: string;
  description: string;
  year: string;
  status: 'Completed' | 'In Production' | 'Released';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export const BIOGRAPHY = {
  name: "Ak Bhuker",
  tagline: "Cinematic Composer & Producer",
  subTagline: "Sculpting acoustic architecture and bespoke spatial soundscapes for film and virtual mediums.",
  aboutText1: "Ak Bhuker is a senior orchestral composer and acoustic designer with over a decade of scoring experience. Harmonizing classical instrumentation with modular synthesizer synthesis, his practice focuses on visual synchronization and narrative resonance.",
  aboutText2: "Operating from a synchronized custom facility, he collaborates with directors and visual artists to construct tailored acoustic universes. Each score is treated as a three-dimensional environment—crafted to elevate, suspend, or dissolve visual tension.",
  influences: ["Hans Zimmer", "Trent Reznor", "John Williams", "Max Richter", "Ludwig Göransson", "Vangelis"],
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Compositions Scored", value: "120+" },
    { label: "Global Clients", value: "45+" },
    { label: "Feature Films", value: "12" }
  ],
  timeline: [
    {
      year: "2015",
      phase: "THE BEGINNING",
      title: "Assistant Arrangement Composer",
      agency: "Metropolis Orchestra",
      desc: "Learning orchestration, arrangement, and cinematic composition while collaborating with experienced composers.",
      tags: ["Orchestral", "Strings", "MIDI", "Film Score"],
      achievement: "First commercial orchestral production",
      coverUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=600&auto=format&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      year: "2018",
      phase: "THE DISCOVERY",
      title: "Freelance Composer",
      agency: "Independent Studios",
      desc: "Worked with independent artists and filmmakers creating emotional cinematic music.",
      tags: ["Piano", "Ambient", "Drama", "Documentary"],
      achievement: "50+ Independent Projects",
      coverUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600&auto=format&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      year: "2021",
      phase: "THE BREAKTHROUGH",
      title: "Senior Sound Designer",
      agency: "Vivid Media Corp",
      desc: "Designed premium sonic branding, trailers, commercials, and immersive sound experiences.",
      tags: ["Commercial", "Brand Audio", "Trailers"],
      achievement: "Fortune 500 Clients",
      coverUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      year: "2024",
      phase: "THE MASTERPIECE",
      title: "Lead Cinematic Composer",
      agency: "Epic Soundscapes Studios",
      desc: "Leading orchestral productions, AAA game music, and feature film scores.",
      tags: ["Film", "Games", "Orchestra"],
      achievement: "100+ Productions",
      coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    }
  ]
};

export const TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Visions of the Void",
    category: "Film",
    duration: "6:12",
    description: "An epic, high-suspense hybrid orchestral piece designed for science fiction and thriller climaxes. Heavy analog sub-bass blended with dramatic staccato strings.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "track-2",
    title: "The Golden Horizon",
    category: "Background Score",
    duration: "7:05",
    description: "Sweeping, hopeful symphonic landscape composition. Rich French horns, organic grand piano, and lush cello solos representing a majestic wilderness journey.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "track-3",
    title: "Cyber-Pulse Odyssey",
    category: "Arrangement",
    duration: "5:02",
    description: "High-octane cyberpunk action track featuring distorted basslines, live orchestral brass stabs, and retro-futuristic modular synth patterns.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "track-4",
    title: "Chrono-Shards (Time Lapse)",
    category: "Jingles",
    duration: "1:45",
    description: "Fast-tempo rhythmic arrangement designed for modern high-tech advertising campaigns. Featuring acoustic percussion, pizzicato strings, and glockenspiel.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "track-5",
    title: "Shadows of the Citadel",
    category: "Film",
    duration: "5:40",
    description: "Deeply atmospheric, dark suspense cue. Creepy woodwinds, metallic textures, and distant heavy impacts, custom-crafted for psychological thrillers.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    coverUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "track-6",
    title: "Echoes in the Rain",
    category: "Mixing",
    duration: "4:15",
    description: "Intimate ambient composition. Rain textures, warm Rhodes piano, and a soaring reverb-drenched electric guitar solo, highlighting absolute mixing depth.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop",
    year: "2024"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Film Scoring",
    iconName: "Film",
    description: "Original scores composed and synchronized to your film, trailer, documentary, or animation. From acoustic intimacy to massive hybrid cinematic orchestras.",
    deliverables: ["Full cinematic orchestral mix", "Isolated stem files (Strings, Brass, Synth, Percussion)", "MIDI mockups & tempo maps", "Sync-licensed broadcast rights"],
    turnaround: "3 - 5 weeks",
    price: "Contact for Quote"
  },
  {
    id: "srv-2",
    title: "Background Scores",
    iconName: "Tv",
    description: "Custom audio logos, ad scores, and memorably punchy jingles curated to build your brand identity and hook your target audience instantly.",
    deliverables: ["15s, 30s, and 60s cutdowns", "Sound branding logo files (WAV & MP3)", "Royalty-free licensing", "High-impact master file optimized for streaming/TV"],
    turnaround: "1 - 2 weeks",
    price: "Contact for Quote"
  },
  {
    id: "srv-3",
    title: "Commercial Music",
    iconName: "Music",
    description: "Elevating raw song demos into rich, professionally composed masterpieces. Harmonization, instrumentation, and full dynamic structures custom-fitted to your voice.",
    deliverables: ["Complete multitrack arrangement", "Sheet music transcription (Optional)", "Virtual instrument rendering (VCO, Soloists)", "Pre-production demo project files"],
    turnaround: "2 - 3 weeks",
    price: "Contact for Quote"
  },
  {
    id: "srv-4",
    title: "Video Game Music",
    iconName: "Sliders",
    description: "Blending your separate instrumental and vocal tracks into a unified, warm, and competitive final mix. Perfect balance, incredible stereo depth, and high-impact transients.",
    deliverables: ["Primary Stereo Mix (WAV 24-bit)", "Instrumental and A-cappella passes", "Full dynamic stem groups", "Revisions included"],
    turnaround: "3 - 5 days",
    price: "Contact for Quote"
  },
  {
    id: "srv-5",
    title: "Music Production",
    iconName: "Volume2",
    description: "Creating tailor-made soundscapes, synthesizer presets, atmospheric textures, and SFX packages for video games, trailers, and modern cinematic media.",
    deliverables: ["Unique high-res audio assets (96kHz)", "Interactive loop layers", "Custom synth presets (Serum, Omnisphere)", "Full commercial license"],
    turnaround: "1 - 2 weeks",
    price: "Contact for Quote"
  }
];

export const CLIENT_WORK: Project[] = [
  {
    id: "prj-1",
    client: "Nebula Pictures",
    projectName: "Beyond the Event Horizon",
    type: "Feature Film Score",
    description: "Composed the full 90-minute award-winning original soundtrack. Built a highly atmospheric score using custom analog synthesizers, solo violoncello, and a 40-piece choir.",
    year: "2025",
    status: "Released",
    imageUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prj-2",
    client: "Aura Luxury Motors",
    projectName: "Genesis EV Launch Campaign",
    type: "Global Commercial Campaign",
    description: "Designed a premium, sleek sound identity. Blended futuristic electric hums with driving strings to accentuate the luxury and silent power of the flagship electric vehicle.",
    year: "2025",
    status: "Released",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prj-3",
    client: "Zenith Games",
    projectName: "Ruinous Quest: Chrono Wars",
    type: "AAA Video Game Soundtrack",
    description: "Arranged and produced the action battle themes and interactive ambient layers. The music dynamically transitions based on high/low game combat intensity.",
    year: "2026",
    status: "In Production",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prj-4",
    client: "Nordic Waves Records",
    projectName: "Solitude EP - Ingrid Vang",
    type: "EP Album Production & Mixing",
    description: "Full production and stereo mixing of a 5-track ambient folk EP. Created a warm acoustic space where acoustic guitar, double-bass, and vocals blend organically.",
    year: "2024",
    status: "Released",
    imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=600&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tst-1",
    name: "Elena Rostova",
    role: "Director / Executive Producer",
    company: "Siberia Film Co.",
    text: "Working with Ak was an absolute revelation. He has an innate ability to read a scene and understand exactly what frequency it needs. The final score of 'Beyond the Event Horizon' elevated the film to a theatrical masterpiece. Highly professional, responsive, and brilliantly creative.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: "tst-2",
    name: "Julian Sterling",
    role: "Creative Director",
    company: "Apex Branding Agency",
    text: "We needed a sound signature for a major automotive client that screamed luxury, innovation, and silence. Ak delivered a custom brand theme within a week that blew our clients away. His production quality is incredible—perfect transients and crystal clear master.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: "tst-3",
    name: "Marcus Vance",
    role: "Lead Audio Director",
    company: "Zenith Games",
    text: "Ak's arrangement work is incredibly adaptive. Our interactive musical cues require meticulous planning and perfect performance. Ak's hybrid compositions met all our strict game-engine latency requirements while staying cinematic and deeply engaging.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];
