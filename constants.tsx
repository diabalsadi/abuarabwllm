
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
  { name: "Al Malki Holding Group" }
];

export const PROJECTS: Project[] = [
  {
    title: "Al Khor Warehouses",
    category: "Industrial MEP",
    location: "Al Khor, Qatar",
    image: 'wearhouses-project.jpeg',
    status: 'finished',
    description: 'Complete MEP installation for industrial warehouses including electrical distribution, HVAC systems, and fire protection systems.',
    date: 'December 2024'
  },
  {
    title: "Al Messila Apartments",
    category: "Residential HVAC & Plumbing",
    location: "Messila, Doha",
    image: 'massila-apartments.png',
    status: 'ongoing',
    description: 'Comprehensive HVAC and plumbing solutions for luxury residential apartments with advanced climate control systems.',
    date: 'November 2024'
  },
  {
    title: "Les Maisons Blanches",
    category: "Hospitality MEP",
    location: "Lusail, Qatar",
    image: 'https://instagram.famm12-1.fna.fbcdn.net/v/t51.75761-15/469977470_18473105659016210_6862973803698448789_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzUyNDI1MjE4NDAxMzc2ODUwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=4jtCOXrFxscQ7kNvwGOt-_X&_nc_oc=AdnlbQDuVzwQ7jTGRgnfpEwQKepMxR1YGj13rFh8risaRMJ8z_sdWqFsDKHZsy42InE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.famm12-1.fna&_nc_gid=JwuW7TKvRDP_CnqFl1JHBg&oh=00_AfuBVZfe64Rhjy2__HVuK4mE4z9h1uFFHttrC-s_nZWbww&oe=69882E48',
    status: 'ongoing',
    description: 'Full MEP services for luxury hospitality project including VRF systems, advanced lighting, and building automation.',
    date: 'January 2025'
  },
  {
    title: "Lusail Fox Hills -1",
    category: "Residential & Commercial",
    location: "Lusail City",
    image: "foxhills.jpeg",
    status: 'ongoing',
    description: 'Mixed-use development featuring integrated MEP solutions for both residential and commercial spaces.',
    date: 'February 2025'
  },
  {
    title: "Jery Al Samar - Warehouses",
    category: "Industrial MEP",
    location: "Umm Salal",
    image: "jery.png",
    status: 'ongoing',
    description: 'Premium MEP installation for luxury palace including smart home automation, advanced HVAC, and security systems.',
    date: 'October 2024'
  },
  {
    title: "Barzan Tower Renovation",
    category: "Restoration & MEP",
    location: "Doha",
    image: "barzan-tower.jpeg",
    status: 'ongoing',
    description: 'Complete renovation and upgrade of MEP systems in historic tower with modern energy-efficient solutions.',
    date: 'September 2024'
  },
  {
    title: "Al Wukair Villa",
    category: "Residential MEP",
    location: "Al Wukair, Qatar",
    image: "umm-salal-palace.jpeg",
    status: 'ongoing',
    description: 'Comprehensive MEP works for a luxury private villa, including electrical, plumbing, and HVAC systems.',
    date: 'January 2025'
  },
  {
    title: "Lusail Fox Hills - 2",
    category: "Residential & Commercial",
    location: "Lusail City",
    image: "foxhills.jpeg",
    status: 'ongoing',
    description: 'Phase 2 of Fox Hills development featuring integrated MEP solutions for premium residential and commercial units.',
    date: 'March 2025'
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
      companySub: 'MEP Works',
      careers: 'Careers',
      companyProfile: 'Company Profile'
    },
    hero: {
      tag: 'Your Trusted Partner for Integrated MEP Solutions.',
      title1: 'ABU ARAB',
      title2: 'CONTRACTING W.L.L',
      subtitle: 'Engineered solutions for Qatar\'s vision. Specializing in high-performance MEP systems for residential, commercial, and industrial sectors.', servicesBtn: 'OUR SERVICES',
      projectsBtn: 'OUR PROJECTS'
    },
    clients: {
      title: 'Our Esteemed Clients'
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
        { id: "hvac", title: "HVAC & Ventilation", description: "Specialized cooling solutions featuring Chilled Water plants, VRF systems, and advanced ducting, precision-engineered for the Gulf’s extreme climate." },
        { id: "plumbing", title: "Plumbing & Drainage", description: "Advanced water supply systems, drainage, sewage treatment integration, and high-pressure pumping stations." },
        { id: "firefighting", title: "Firefighting & Safety", description: "QCDD approved fire alarm systems, sprinkler networks, and FM200 suppression systems." },
        { id: "elv", title: "ELV & Automation", description: "CCTV, Access Control, BMS (Building Management Systems), and high-speed data networking." },
        { id: "maintenance", title: "Facility Maintenance", description: "Comprehensive preventive and corrective maintenance for electro-mechanical installations." }
      ],
      inquire: 'Inquire Now'
    },
    projects: {
      title: 'List Of Projects',
      subtitle: 'A track record of delivering successful MEP solutions across residential, commercial, and industrial sites in Qatar.',
      viewAll: 'View All Projects',
      items: [
        {
          title: "Al Khor Warehouses",
          category: "Industrial MEP",
          location: "Al Khor, Qatar",
          description: "Complete MEP installation for industrial warehouses including electrical distribution, HVAC systems, and fire protection systems.",
          date: "December 2024"
        },
        {
          title: "Al Messila Apartments",
          category: "Residential HVAC & Plumbing",
          location: "Messila, Doha",
          description: "Comprehensive HVAC and plumbing solutions for luxury residential apartments with advanced climate control systems.",
          date: "November 2024"
        },
        {
          title: "Les Maisons Blanches",
          category: "Hospitality MEP",
          location: "Lusail, Qatar",
          description: "Full MEP services for luxury hospitality project including VRF systems, advanced lighting, and building automation.",
          date: "January 2025"
        },
        {
          title: "Lusail Fox Hills - 1",
          category: "Residential & Commercial",
          location: "Lusail City",
          description: "Mixed-use development featuring integrated MEP solutions for both residential and commercial spaces.",
          date: "February 2025"
        },
        {
          title: "Jery Al Samar - Warehouses",
          category: "Industrial MEP",
          location: "Umm Salal",
          description: "Premium MEP installation for luxury palace including smart home automation, advanced HVAC, and security systems.",
          date: "October 2024"
        },
        {
          title: "Barzan Tower Renovation",
          category: "Restoration & MEP",
          location: "Doha",
          description: "Complete renovation and upgrade of MEP systems in historic tower with modern energy-efficient solutions.",
          date: "September 2024"
        },
        {
          title: "Al Wukair Villa",
          category: "Residential MEP",
          location: "Al Wukair, Qatar",
          description: "Comprehensive MEP works for a luxury private villa, including electrical, plumbing, and HVAC systems.",
          date: "January 2025"
        },
        {
          title: "Lusail Fox Hills - 2",
          category: "Residential & Commercial",
          location: "Lusail City",
          description: "Phase 2 of Fox Hills development featuring integrated MEP solutions for premium residential and commercial units.",
          date: "March 2025"
        }
      ]
    },
    featuredProjects: {
      title: 'Featured Projects',
      subtitle: 'Highlighting our key contributions to Qatar\'s infrastructure development.',
      items: [
        {
          title: "Al Khor Warehouses",
          category: "Industrial MEP",
          location: "Al Khor, Qatar",
        },
        {
          title: "Al Messila Apartments",
          category: "Residential HVAC & Plumbing",
          location: "Messila, Doha",
        },
        {
          title: "Les Maisons Blanches",
          category: "Hospitality MEP",
          location: "Lusail, Qatar",
        },
        {
          title: "Lusail Fox Hills - 1",
          category: "Residential & Commercial",
          location: "Lusail City",
        },
        {
          title: "Al Wukair Villa",
          category: "Residential MEP",
          location: "Al Wukair, Qatar",
        },
      ]
    },
    ourProjects: {
      hero: {
        tag: 'Delivering Excellence Across Qatar',
        title1: 'Our',
        title2: 'Projects',
        subtitle: 'Explore our portfolio of successfully delivered MEP projects across residential, commercial, and industrial sectors in Qatar.'
      },
      filterLabel: 'Filter by Status',
      allProjects: 'All Projects',
      ongoing: 'Ongoing',
      finished: 'Finished',
      statusOngoing: 'ONGOING',
      statusFinished: 'FINISHED',
      noProjects: 'No projects found',
      pagination: {
        previous: 'Previous',
        next: 'Next',
        page: 'Page',
        of: 'of'
      }
    },
    contact: {
      title: 'Let\'s Discuss Your Project',
      subtitle: 'Need expert MEP services for your next construction project in Qatar? Our team is ready to provide a detailed consultation.',
      call: 'Call Us',
      email: 'E-mail Us',
      visit: 'Visit Us',
      hours: 'Working Hours',
      hoursDetail: 'Sun - Thu: 8:00 AM - 5:00 PM',
      addressLine1: 'Al Kindi Clinics Center, Street #808',
      addressLine2: 'Zone 39, Building 73',
      phone1: '+974 5012 2123',
      labels: {
        name: 'Full Name',
        email: 'Email Address',
        service: 'Service Required',
        message: 'Message',
        send: 'SEND MESSAGE'
      },
      placeholders: {
        name: 'Name',
        email: 'Email',
        message: 'How can we help you?'
      }
    },
    footer: {
      desc: 'Abu Arab Contracting W.L.L (ABUAC) provides Full MEP design and Engineering Energy solutions in Qatar.',
      links: 'Quick Links',
      services: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe for company updates.',
      rights: 'All rights reserved.'
    },
    ai: {
      welcome: 'Welcome to ABUAC. How can we assist with your MEP requirements?',
      placeholder: 'Ask about HVAC, Fire Fighting...',
      header: 'ABUAC Assistant',
      sub: 'MEP Specialist',
      powered: 'Powered by Gemini AI'
    },
    careers: {
      hero: {
        tag: 'Build Your Future With ABUAC.',
        title1: 'Careers At',
        title2: 'Abu Arab Contracting',
        subtitle: 'Join a team delivering high-impact MEP projects across Qatar. Explore opportunities in engineering, project delivery, and field operations. Send your CV to ',
        email: 'recruitment@abuac.com'
      }
    },
    director: {
      title: 'Message From Our General Director',
      message1: 'In just six months, Abuac contacting has emerged as one of the fastest-growing MEP companies in Qatar.',
      message2: 'Our rapid success is built on a simple promise: delivering high-quality, integrated engineering solutions with speed and precision. We are proud to support Qatar’s ambitious development and remain committed to excellence in every project we touch.',
      message3: 'Thank you for trusting us to power your infrastructure. We are just getting started.',
      name: 'Mohammad Abu Arab',
      role: 'General Director'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
      contactBtn: 'اتصل بنا',
      companySub: 'أعمال الميكانيكا والكهرباء',
      careers: 'وظائف',
      companyProfile: 'ملف الشركة'
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
      title: 'عملاؤنا'
    },
    about: {
      title: 'من نحن',
      description: 'شركة أبو عرب للمقاولات ذ.م.م هي شركة مسجلة في قطر ومقرها الرئيسي في النصر. منذ تأسيسنا في عام 2025، أثبتنا مكانتنا في سوق MEP من خلال التزامنا بتقديم أفضل الحلول المناسبة في التصميم الهندسي، التوريد، التنفيذ، وخدمات ما بعد البيع.',
      missionTitle: 'مهمتنا',
      missionDesc: 'انطلاقاً من رؤية قطر الوطنية 2030، تتمثل مهمتنا في إعادة صياغة معايير الهندسة الكهروميكانيكية  من خلال الابتكار والممارسات المستدامة. نحن نسعى جاهدين لنكون الشريك الهندسي المفضل في المنطقة عبر تقديم أنظمة ذكية وموفرة للطاقة تعزز جودة الحياة. في أبو عرب للمقاولات، نحن لا نقوم بمجرد تركيب الأنظمة، بل نصمم الشرايين الحيوية للبنية التحتية الحديثة بـ دقة ونزاهة، مع التزام راسخ بمستقبل أكثر استدامة.',
      qualityTitle: 'ضمان الجودة',
      qualityDesc: 'نحن نضمن التميز من خلال عمليات التفتيش والاختبار والتشغيل الصارمة، مع الالتزام التام بالمعايير الهندسية في دولة قطر. يضمن التزامنا بالجودة حلولاً كهروميكانيكية آمنة ودقيقة وموثوقة، صُممت لضمان الاستدامة والكفاءة التشغيلية على المدى الطويل.',
      expertTitle: 'الخبرة المحلية',
      expertDesc: 'جذور عميقة في السوق القطري، بالتعاون مع كبار المقاولين لتسليم مشاريع معقدة في جميع أنحاء الدوحة وخارجها.'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'قدراتنا في الأعمال الميكانيكية والكهربائية والسباكة (MEP) مبنية حول تقديم تصاميم مجدية واقتصادية.',
      items: [
        { id: "electrical", title: "الأنظمة الكهربائية", description: "توزيع الطاقة على نطاق واسع، لوحات LV/MV، وأنظمة الإضاءة وحلول التأريض المتوافقة مع معايير كهرماء." },
        { id: "hvac", title: "التكييف والتهوية", description: "حلول تبريد متخصصة تشمل تركيب محطات المياه المبردة ، وأنظمة تدفق التبريد المتغير، وتمديدات توزيع الهواء المتطورة، المنفذة بدقة لتلائم المناخ القاسي في منطقة الخليج." },
        { id: "plumbing", title: "السباكة والصرف", description: "أنظمة إمداد المياه المتقدمة، الصرف الصحي، وتكامل معالجة المياه ومحطات الضخ عالية الضغط." },
        { id: "firefighting", title: "مكافحة الحريق والسلامة", description: "أنظمة إنذار الحريق المعتمدة من الدفاع المدني، شبكات الرش، وأنظمة إخماد FM200." },
        { id: "elv", title: "الأنظمة الأمنية والاتصالات", description: "كاميرات المراقبة، التحكم في الدخول، أنظمة إدارة المباني (BMS)، وشبكات البيانات عالية السرعة." },
        { id: "maintenance", title: "صيانة المرافق", description: "صيانة وقائية وتصحيحية شاملة للمنشآت الكهروميكانيكية." }
      ],
      inquire: 'استفسر الآن'
    },
    projects: {
      title: 'قائمة المشاريع',
      subtitle: 'نسعى جاهدين لتجاوز توقعات العملاء في القطاعات التجارية والسكنية والصناعية والطبية والضيافة والتعليمية.',
      viewAll: 'عرض كل المشاريع',
      items: [
        {
          title: "مستودعات الخور",
          category: "الأعمال الكهروميكانيكية الصناعية",
          location: "الخور، قطر",
          description: "تركيب كامل للأنظمة الكهروميكانيكية للمستودعات الصناعية بما في ذلك التوزيع الكهربائي وأنظمة التكييف وأنظمة الحماية من الحرائق.",
          date: "ديسمبر 2024"
        },
        {
          title: "شقق المسيلة",
          category: "التكييف والسباكة السكنية",
          location: "المسيلة، الدوحة",
          description: "حلول شاملة للتكييف والسباكة للشقق السكنية الفاخرة مع أنظمة تحكم متقدمة في المناخ.",
          date: "نوفمبر 2024"
        },
        {
          title: "ليه ميزون بلانش",
          category: "الأعمال الكهروميكانيكية للضيافة",
          location: "لوسيل، قطر",
          description: "خدمات كهروميكانيكية كاملة لمشروع ضيافة فاخر بما في ذلك أنظمة VRF والإضاءة المتقدمة وأتمتة المباني.",
          date: "يناير 2025"
        },
        {
          title: "فوكس هيلز لوسيل - 1",
          category: "سكني وتجاري",
          location: "مدينة لوسيل",
          description: "تطوير متعدد الاستخدامات يتميز بحلول كهروميكانيكية متكاملة للمساحات السكنية والتجارية.",
          date: "فبراير 2025"
        },
        {
          title: "جري السمر - مستودعات",
          category: "صناعي",
          location: "أم صلال",
          description: "تركيب كهروميكانيكي متميز لقصر فاخر بما في ذلك أتمتة المنزل الذكي والتكييف المتقدم وأنظمة الأمان.",
          date: "أكتوبر 2024"
        },
        {
          title: "تجديد برج بارزان",
          category: "الترميم والأعمال الكهروميكانيكية",
          location: "الدوحة",
          description: "تجديد وترقية كاملة للأنظمة الكهروميكانيكية في البرج التاريخي بحلول حديثة موفرة للطاقة.",
          date: "سبتمبر 2024"
        },
        {
          title: "فيلا الوكير",
          category: "الأعمال الكهروميكانيكية السكنية",
          location: "الوكير، قطر",
          description: "أعمال كهروميكانيكية شاملة لفيلا خاصة فاخرة، تشمل الأنظمة الكهربائية والسباكة وأنظمة التكييف.",
          date: "يناير 2025"
        },
        {
          title: "فوكس هيلز لوسيل - 2",
          category: "سكني وتجاري",
          location: "مدينة لوسيل",
          description: "المرحلة الثانية من تطوير فوكس هيلز والتي تتميز بحلول كهروميكانيكية متكاملة للوحدات السكنية والتجارية المتميزة.",
          date: "مارس 2025"
        }
      ]
    },
    featuredProjects: {
      title: 'مشاريع مميزة',
      subtitle: 'تسليط الضوء على مساهماتنا الرئيسية في تطوير البنية التحتية في قطر.',
      items: [
        {
          title: "مستودعات الخور",
          category: "الأعمال الكهروميكانيكية الصناعية",
          location: "الخور، قطر",
        },
        {
          title: "شقق المسيلة",
          category: "التكييف والسباكة السكنية",
          location: "المسيلة، الدوحة",
        },
        {
          title: "ليه ميزون بلانش",
          category: "الأعمال الكهروميكانيكية للضيافة",
          location: "لوسيل، قطر",
        },
        {
          title: "فوكس هيلز لوسيل",
          category: "سكني وتجاري",
          location: "مدينة لوسيل",
        },
        {
          title: "فيلا الوكير",
          category: "الأنظمة السكنية",
          location: "الوكير، قطر",
        }
      ]
    },
    ourProjects: {
      hero: {
        tag: 'تقديم التميز في جميع أنحاء قطر',
        title1: 'مشاريعنا',
        title2: 'المنجزة',
        subtitle: 'استكشف محفظة مشاريعنا الناجحة في القطاعات السكنية والتجارية والصناعية في قطر.'
      },
      filterLabel: 'تصفية حسب الحالة',
      allProjects: 'جميع المشاريع',
      ongoing: 'قيد التنفيذ',
      finished: 'مكتمل',
      statusOngoing: 'قيد التنفيذ',
      statusFinished: 'مكتمل',
      noProjects: 'لا توجد مشاريع',
      pagination: {
        previous: 'السابق',
        next: 'التالي',
        page: 'صفحة',
        of: 'من'
      }
    },
    contact: {
      title: 'لنتحدث عن مشروعك',
      subtitle: 'هل تحتاج إلى خدمات MEP خبيرة لمشروعك الإنشائي القادم في قطر؟ فريقنا جاهز لتقديم استشارة مفصلة.',
      call: 'اتصل بنا',
      email: 'بريدنا الإلكتروني',
      visit: 'زورونا',
      hours: 'ساعات العمل',
      hoursDetail: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
      addressLine1: 'مركز الكندي للعيادات، شارع #808',
      addressLine2: 'منطقة 39، مبنى 73',
      phone1: '+974 50122123',
      phone2: '+974 66067765',
      labels: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        service: 'الخدمة المطلوبة',
        message: 'الرسالة',
        send: 'إرسال'
      },
      placeholders: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'كيف يمكننا مساعدتك؟'
      }
    },
    footer: {
      desc: 'شركة أبو عرب للمقاولات ذ.م.م (ABUAC) تقدم تصميم MEP كامل وحلول الطاقة الهندسية في قطر.',
      links: 'روابط سريعة',
      services: 'خدماتنا',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'اشترك للحصول على تحديثات الشركة.',
      rights: 'جميع الحقوق محفوظة.'
    },
    ai: {
      welcome: 'مرحباً بكم في ABUAC. كيف يمكننا مساعدتك في متطلبات MEP؟',
      placeholder: 'اسأل عن التكييف، مكافحة الحريق...',
      header: 'مساعد ABUAC',
      sub: 'خبير MEP',
      powered: 'مدعوم بواسطة Gemini AI'
    },
    careers: {
      hero: {
        tag: 'ابنِ مستقبلك المهني مع أبو عرب.',
        title1: 'وظائف في',
        title2: 'أبو عرب للمقاولات',
        subtitle: 'انضم إلى فريق يقدّم مشاريع ميكانيكية وكهربائية وصحية عالية التأثير في قطر. إكتشف الفرص المتاحة في الهندسة، تنفيذ المشاريع، والعمليات الميدانية. أرسل سيراتك الذاتية إلى  ',
        email: 'recruitment@abuac.com'
      }
    },
    director: {
      title: 'رسالة المدير العام',
      message1: 'في غضون ستة أشهر فقط، برزت شركة أبو عرب للمقاولات كواحدة من أسرع شركات MEP نمواً في قطر.',
      message2: 'إن نجاحنا السريع مبني على وعد بسيط: تقديم حلول هندسية متكاملة عالية الجودة بسرعة ودقة. نحن فخورون بدعم التنمية الطموحة في قطر ونظل ملتزمين بالتميز في كل مشروع نقوم به.',
      message3: 'شكراً لثقتكم بنا لتعزيز بنيتكم التحتية. نحن لا نزال في البداية.',
      name: 'محمد أبو عرب',
      role: 'المدير العام'
    }
  }
};
