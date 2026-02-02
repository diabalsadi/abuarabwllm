
import React from 'react';
import { 
  Zap, 
  Droplets, 
  Wind, 
  ShieldCheck, 
  Cpu, 
  Settings 
} from 'lucide-react';
import { Client, Project } from './types';

export const CLIENTS: Client[] = [
  { name: "Arabian MEP Contracting LLC" },
  { name: "JMT Electromechanical WLL" },
  { name: "Al Huda Engineering" },
  { name: "Al Mara Contracting and Trading WLL" },
  { name: "Al Baroun Contracting WLL" },
  { name: "Compass Facility Management" },
];

export const PROJECTS: Project[] = [
  {
    title: "Lusail Commercial Tower",
    category: "Full MEP Installation",
    location: "Lusail City, Qatar",
    image: "https://picsum.photos/seed/lusail/800/600"
  },
  {
    title: "The Pearl Residential Complex",
    category: "HVAC & Firefighting",
    location: "The Pearl, Doha",
    image: "https://picsum.photos/seed/pearl/800/600"
  },
  {
    title: "Industrial Area Warehouse",
    category: "Electrical & ELV",
    location: "Doha Industrial Area",
    image: "https://picsum.photos/seed/warehouse/800/600"
  },
  {
    title: "Education City Extension",
    category: "Plumbing & Drainage",
    location: "Al Rayyan, Qatar",
    image: "https://picsum.photos/seed/education/800/600"
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  electrical: <Zap className="w-8 h-8" />,
  hvac: <Wind className="w-8 h-8" />,
  plumbing: <Droplets className="w-8 h-8" />,
  firefighting: <ShieldCheck className="w-8 h-8" />,
  elv: <Cpu className="w-8 h-8" />,
  maintenance: <Settings className="w-8 h-8" />
};

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      contactBtn: 'CONTACT US',
      companySub: 'Abu Arab Contracting'
    },
    hero: {
      tag: 'Your Trusted Partner for Integrated MEP Solutions.',
      title1: 'ABU ARAB',
      title2: 'CONTRACTING',
      subtitle: 'Engineered solutions for Qatar\'s vision. Specializing in high-performance MEP systems for residential, commercial, and industrial sectors.',
      servicesBtn: 'OUR SERVICES',
      projectsBtn: 'VIEW PROJECTS'
    },
    clients: {
      title: 'Trusted By Industry Leaders'
    },
    about: {
      title: 'WHO WE ARE',
      description: 'Abu Arab Contracting W.L.L. (ABUAC) is a premier Electro-Mechanical construction firm established in Doha, Qatar. With a commitment to excellence and a deep understanding of local regulatory standards, we deliver integrated MEP solutions that power the nation\'s progress.',
      missionTitle: 'Our Mission',
      missionDesc: 'Driven by Qatar National Vision 2030, our mission is to redefine the standards of MEP engineering through innovation and sustainable practices. We strive to be the preferred engineering partner in the region by delivering smart, energy-efficient systems that enhance the quality of life. At Abu Arab Contracting , we don’t just install systems; we engineer the vital lifelines of modern infrastructure with precision, integrity, and a commitment to a greener future.',
      qualityTitle: 'Quality Assurance',
      qualityDesc: 'We ensure excellence through rigorous inspections, testing, and commissioning in strict compliance with Qatar’s engineering standards. Our commitment to quality guarantees safe, precise, and reliable MEP solutions designed for long-term durability and operational efficiency.',
      expertTitle: 'Local Expertise',
      expertDesc: 'Deep roots in the Qatar market, collaborating with top contractors to deliver complex projects across Doha and beyond.'
    },
    services: {
      title: 'Our Core Expertise',
      subtitle: 'Comprehensive electro-mechanical services tailored for the unique technical requirements of Qatar\'s climate and infrastructure.',
      items: [
        { id: "electrical", title: "Electrical Systems", description: "Full-scale power distribution, LV/MV panels, lighting systems, and earthing solutions compliant with KAHRAMAA standards." },
        { id: "hvac", title: "HVAC & Ventilation", description: "Centralized cooling, VRF systems, ducting, and ventilation solutions optimized for the Gulf climate." },
        { id: "plumbing", title: "Plumbing & Drainage", description: "Advanced water supply systems, drainage, sewage treatment integration, and high-pressure pumping stations." },
        { id: "firefighting", title: "Firefighting & Safety", description: "QCDD approved fire alarm systems, sprinkler networks, and FM200 suppression systems." },
        { id: "elv", title: "ELV & Automation", description: "CCTV, Access Control, BMS (Building Management Systems), and high-speed data networking." },
        { id: "maintenance", title: "Facility Maintenance", description: "Comprehensive preventive and corrective maintenance for electro-mechanical installations." }
      ],
      inquire: 'Inquire Now'
    },
    projects: {
      title: 'OUR PROJECT PORTFOLIO',
      subtitle: 'A track record of delivering successful MEP installations across residential, commercial, and industrial sites in Qatar.',
      viewAll: 'VIEW ALL PROJECTS',
      items: [
        { title: "Lusail Commercial Tower", category: "Full MEP Installation", location: "Lusail City, Qatar" },
        { title: "The Pearl Residential Complex", category: "HVAC & Firefighting", location: "The Pearl, Doha" },
        { title: "Industrial Area Warehouse", category: "Electrical & ELV", location: "Doha Industrial Area" },
        { title: "Education City Extension", category: "Plumbing & Drainage", location: "Al Rayyan, Qatar" }
      ]
    },
    contact: {
      title: 'Let\'s Discuss Your Project',
      subtitle: 'Need expert MEP services for your next construction project in Qatar? Our team is ready to provide a detailed consultation.',
      call: 'Call Us',
      email: 'Email Us',
      visit: 'Visit Us',
      hours: 'Working Hours',
      hoursDetail: 'Sun - Thu: 8:00 AM - 5:00 PM',
      labels: {
        name: 'Full Name',
        email: 'Email Address',
        service: 'Service Required',
        message: 'Message',
        send: 'SEND MESSAGE'
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@company.com',
        message: 'Briefly describe your requirements...'
      }
    },
    footer: {
      desc: 'Abu Arab Contracting W.L.L. (ABUAC) is a leading provider of electro-mechanical solutions in Qatar, delivering excellence in every project we undertake.',
      links: 'Quick Links',
      services: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Stay updated with our latest project completions.',
      rights: 'All rights reserved.'
    },
    ai: {
      welcome: 'Hello! I am the ABUAC MEP Assistant. How can I help you with your project today?',
      placeholder: 'Ask about our MEP services...',
      header: 'ABUAC AI Assistant',
      sub: 'MEP Expert',
      powered: 'Powered by Gemini AI'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
      contactBtn: 'اتصل بنا الآن',
      companySub: 'أبو عرب للمقاولات'
    },
    hero: {
      tag: 'خياركم الموثوق للحلول الكهروميكانيكية المتكاملة',
      title1: 'شركة أبو عرب',
      title2: 'للمقاولات',
      subtitle: 'حلول هندسية لرؤية قطر. متخصصون في أنظمة MEP عالية الأداء للقطاعات السكنية والتجارية والصناعية.',
      servicesBtn: 'خدماتنا',
      projectsBtn: 'عرض المشاريع'
    },
    clients: {
      title: 'موثوقون من قادة الصناعة'
    },
    about: {
      title: 'من نحن',
      description: 'شركة أبو عرب للمقاولات ذ.م.م (ABUAC) هي شركة رائدة في مجال المقاولات الكهروميكانيكية تأسست في الدوحة، قطر. مع الالتزام بالتميز والفهم العميق للمعايير التنظيمية المحلية ، نقدم حلول MEP متكاملة تدعم تقدم الأمة.',
      missionTitle: 'مهمتنا',
      missionDesc: 'انطلاقاً من رؤية قطر الوطنية 2030، تتمثل مهمتنا في إعادة صياغة معايير الهندسة الكهروميكانيكية  من خلال الابتكار والممارسات المستدامة. نحن نسعى جاهدين لنكون الشريك الهندسي المفضل في المنطقة عبر تقديم أنظمة ذكية وموفرة للطاقة تعزز جودة الحياة. في أبو عرب للمقاولات، نحن لا نقوم بمجرد تركيب الأنظمة، بل نصمم الشرايين الحيوية للبنية التحتية الحديثة بـ دقة ونزاهة، مع التزام راسخ بمستقبل أكثر استدامة.',
      qualityTitle: 'ضمان الجودة',
      qualityDesc: 'نحن نضمن التميز من خلال عمليات التفتيش والاختبار والتشغيل الصارمة، مع الالتزام التام بالمعايير الهندسية في دولة قطر. يضمن التزامنا بالجودة حلولاً كهروميكانيكية آمنة ودقيقة وموثوقة، صُممت لضمان الاستدامة والكفاءة التشغيلية على المدى الطويل.',
      expertTitle: 'الخبرة المحلية',
      expertDesc: 'جذور عميقة في السوق القطري، بالتعاون مع كبار المقاولين لتسليم مشاريع معقدة في جميع أنحاء الدوحة وخارجها.'
    },
    services: {
      title: 'خبراتنا الأساسية',
      subtitle: 'خدمات كهروميكانيكية شاملة مصممة خصيصاً للمتطلبات الفنية الفريدة للمناخ والبنية التحتية في قطر.',
      items: [
        { id: "electrical", title: "الأنظمة الكهربائية", description: "توزيع الطاقة على نطاق واسع، لوحات LV/MV، وأنظمة الإضاءة وحلول التأريض المتوافقة مع معايير كهرماء." },
        { id: "hvac", title: "التكييف والتهوية", description: "التبريد المركزي، أنظمة VRF، الدكتات وحلول التهوية المحسنة لمناخ الخليج." },
        { id: "plumbing", title: "السباكة والصرف", description: "أنظمة إمداد المياه المتقدمة، الصرف الصحي، وتكامل معالجة المياه ومحطات الضخ عالية الضغط." },
        { id: "firefighting", title: "مكافحة الحريق والسلامة", description: "أنظمة إنذار الحريق المعتمدة من الدفاع المدني، شبكات الرش، وأنظمة إخماد FM200." },
        { id: "elv", title: "الأنظمة الأمنية والاتصالات", description: "كاميرات المراقبة، التحكم في الدخول، أنظمة إدارة المباني (BMS)، وشبكات البيانات عالية السرعة." },
        { id: "maintenance", title: "صيانة المرافق", description: "صيانة وقائية وتصحيحية شاملة للمنشآت الكهروميكانيكية." }
      ],
      inquire: 'استفسر الآن'
    },
    projects: {
      title: 'محفظة مشاريعنا',
      subtitle: 'سجل حافل من تسليم تركيبات MEP الناجحة في المواقع السكنية والتجارية والصناعية في قطر.',
      viewAll: 'عرض جميع المشاريع',
      items: [
        { title: "برج لوسيل التجاري", category: "تركيب MEP كامل", location: "مدينة لوسيل، قطر" },
        { title: "مجمع اللؤلؤة السكني", category: "التكييف ومكافحة الحريق", location: "اللؤلؤة، الدوحة" },
        { title: "مستودع المنطقة الصناعية", category: "الكهرباء والأنظمة الأمنية", location: "المنطقة الصناعية بالدوحة" },
        { title: "توسعة المدينة التعليمية", category: "السباكة والصرف", location: "الريان، قطر" }
      ]
    },
    contact: {
      title: 'لنتحدث عن مشروعك',
      subtitle: 'هل تحتاج إلى خدمات MEP خبيرة لمشروعك الإنشائي القادم في قطر؟ فريقنا جاهز لتقديم استشارة مفصلة.',
      call: 'اتصل بنا',
      email: 'بريدنا الإلكتروني',
      visit: 'زورونا',
      hours: 'ساعات العمل',
      hoursDetail: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
      labels: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        service: 'الخدمة المطلوبة',
        message: 'الرسالة',
        send: 'إرسال الرسالة'
      },
      placeholders: {
        name: 'أحمد محمد',
        email: 'ahmed@company.com',
        message: 'يرجى وصف متطلباتك باختصار...'
      }
    },
    footer: {
      desc: 'شركة أبو عرب للمقاولات ذ.م.م (ABUAC) هي مزود رائد للحلول الكهروميكانيكية في قطر، حيث تقدم التميز في كل مشروع نقوم به.',
      links: 'روابط سريعة',
      services: 'خدماتنا',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'ابق على اطلاع بآخر مشاريعنا المكتملة.',
      rights: 'جميع الحقوق محفوظة.'
    },
    ai: {
      welcome: 'مرحباً! أنا مساعد شركة أبو عرب. كيف يمكنني مساعدتك في مشروعك اليوم؟',
      placeholder: 'اسأل عن خدماتنا الكهروميكانيكية...',
      header: 'مساعد أبو عرب الذكي',
      sub: 'خبير MEP',
      powered: 'مدعوم بواسطة Gemini AI'
    }
  }
};
