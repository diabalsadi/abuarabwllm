
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
  { name: "Al Mara Contracting and Trading WLL" },
  { name: "JMT Electromechanical WLL" },
  { name: "Al Baroun Contracting WLL" },
  { name: "Compass Facility Management" },
  { name: "Electroflow" },
  { name: "Al Malki Holding Group" }
];

export const PROJECTS: Project[] = [
  {
    title: "Al Khor Warehouses",
    category: "Industrial MEP",
    location: "Al Khor, Qatar",
    image: 'public/wearhouses-project.jpeg'
    // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Al Messila Apartments",
    category: "Residential HVAC & Plumbing",
    location: "Messila, Doha",
    image: 'public/massila-apartments.png'
    // image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Les Maisons Blanches",
    category: "Hospitality MEP",
    location: "Lusail, Qatar",
    image: 'https://instagram.famm12-1.fna.fbcdn.net/v/t51.75761-15/469977470_18473105659016210_6862973803698448789_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzUyNDI1MjE4NDAxMzc2ODUwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=4jtCOXrFxscQ7kNvwGOt-_X&_nc_oc=AdnlbQDuVzwQ7jTGRgnfpEwQKepMxR1YGj13rFh8risaRMJ8z_sdWqFsDKHZsy42InE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.famm12-1.fna&_nc_gid=JwuW7TKvRDP_CnqFl1JHBg&oh=00_AfuBVZfe64Rhjy2__HVuK4mE4z9h1uFFHttrC-s_nZWbww&oe=69882E48'
    // image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lusail Fox Hills",
    category: "Residential & Commercial",
    location: "Lusail City",
    image: "public/foxhills.jpeg"
  },
  {
    title: "Um Salal Palace",
    category: "Luxury Residential",
    location: "Umm Salal",
    image: "public/umm-salal-palace.jpeg"
    // image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Barzan Tower Renovation",
    category: "Restoration & MEP",
    location: "Doha",
    image: "public/barzan-tower.jpeg"
    // image: "https://images.unsplash.com/photo-1533395427226-7881e43666e6?auto=format&fit=crop&q=80&w=800"
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
      companySub: 'MEP Works'
    },
    hero: {
      tag: 'Engineering Design, Supply & Execution',
      title1: 'ABU ARAB',
      title2: 'CONTRACTING W.L.L.',
      subtitle: 'A fast-growing MEP company in Qatar, delivering precision in HVAC, Electrical, Plumbing, and Fire Fighting systems since 2024.',
      servicesBtn: 'OUR SERVICES',
      projectsBtn: 'OUR PROJECTS'
    },
    clients: {
      title: 'Our Esteemed Clients'
    },
    about: {
      title: 'About Us',
      description: 'Abu Arab Contracting W.L.L is a registered company in Qatar with its Head Office in Al Nassr. Since our establishment in 2024, we have proven our position in the MEP market by being a fast-growing company committed to providing the best suitable solutions in terms of Engineering Design, Supply, Execution, and After-Sales services.',
      missionTitle: 'Our Approach',
      missionDesc: 'We analyze and estimate every single detail of specifications with passion, creativity, and precision.',
      qualityTitle: 'Turnkey Solutions',
      qualityDesc: 'We provide full MEP design and engineering energy solutions that accommodate turnkey requirements for our clients.',
      expertTitle: 'Professional Team',
      expertDesc: 'Our team is equipped with the latest machinery, tools, and skilled workers to exceed client expectations.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Our capabilities in Mechanical, Electrical & Plumbing (MEP) are built around providing feasible and economically viable designs.',
      items: [
        { id: "hvac", title: "HVAC Engineering", description: "Specialist Heating, Ventilation & Air Conditioning systems including automated control systems to expertly manage climatic working environments." },
        { id: "firefighting", title: "Fire Fighting Systems", description: "Comprehensive fire protection solutions, from engineering design and authority approvals to installation of Sprinklers (Wet, Dry, Pre-action) and FM200." },
        { id: "electrical", title: "Electrical Engineering", description: "Complete service from feasibility study to conceptual design and installation of power systems throughout Qatar." },
        { id: "plumbing", title: "Plumbing Engineering", description: "Water supply, drainage, swimming pool filtration systems, and firefighting works with a focus on high water efficiency." },
        { id: "maintenance", title: "Maintenance & After Sales", description: "Reactive and planned preventative maintenance services to protect your investment and support critical operational facilities." },
        { id: "elv", title: "Full MEP Design", description: "Undertaking complex MEP design and build projects for residential, commercial, and industrial sectors." }
      ],
      inquire: 'Read More'
    },
    projects: {
      title: 'List Of Projects',
      subtitle: 'We strive to exceed client expectations across Commercial, Residential, Industrial, Medical, Hospitality, and Educational sectors.',
      viewAll: 'View All Projects',
      items: [] // Items are handled by the PROJECTS constant above
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Visit our Doha Office or get in touch for a consultation.',
      call: 'Call Us',
      email: 'Email Us',
      visit: 'Doha Office',
      hours: 'Working Hours',
      hoursDetail: 'Sun - Thu: 8:00 AM - 5:00 PM',
      addressLine1: 'Al Kindi Clinics Center, Street #808',
      addressLine2: 'Zone 39, Building 73',
      phone1: '+974 50122123',
      phone2: '+974 66067765',
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
      desc: 'Abu Arab Contracting W.L.L. (ABUAC) provides Full MEP design and Engineering Energy solutions in Qatar.',
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
      companySub: 'أعمال الميكانيكا والكهرباء'
    },
    hero: {
      tag: 'التصميم الهندسي، التوريد والتنفيذ',
      title1: 'شركة أبو عرب',
      title2: 'للمقاولات ذ.م.م',
      subtitle: 'شركة سريعة النمو في قطر، تقدم الدقة في أنظمة التكييف، الكهرباء، السباكة، ومكافحة الحريق منذ عام 2024.',
      servicesBtn: 'خدماتنا',
      projectsBtn: 'مشاريعنا'
    },
    clients: {
      title: 'عملاؤنا'
    },
    about: {
      title: 'من نحن',
      description: 'شركة أبو عرب للمقاولات ذ.م.م هي شركة مسجلة في قطر ومقرها الرئيسي في النصر. منذ تأسيسنا في عام 2024، أثبتنا مكانتنا في سوق MEP من خلال التزامنا بتقديم أفضل الحلول المناسبة في التصميم الهندسي، التوريد، التنفيذ، وخدمات ما بعد البيع.',
      missionTitle: 'نهجنا',
      missionDesc: 'نقوم بتحليل وتقدير كل تفصيل من المواصفات بشغف وإبداع ودقة.',
      qualityTitle: 'حلول متكاملة',
      qualityDesc: 'نقدم حلولاً هندسية وتصميم MEP كامل يلبي متطلبات "تسليم المفتاح" لعملائنا.',
      expertTitle: 'فريق محترف',
      expertDesc: 'فريقنا مجهز بأحدث الآلات والأدوات والعمالة الماهرة لتجاوز توقعات العملاء.'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'قدراتنا في الأعمال الميكانيكية والكهربائية والسباكة (MEP) مبنية حول تقديم تصاميم مجدية واقتصادية.',
      items: [
        { id: "hvac", title: "هندسة التكييف والتهوية", description: "أنظمة التدفئة والتهوية وتكييف الهواء المتخصصة بما في ذلك أنظمة التحكم الآلي لإدارة بيئة العمل المناخية." },
        { id: "firefighting", title: "أنظمة مكافحة الحريق", description: "حلول شاملة للحماية من الحرائق، من التصميم الهندسي وموافقات السلطات إلى تركيب الرشاشات وأنظمة FM200." },
        { id: "electrical", title: "الهندسة الكهربائية", description: "خدمة كاملة من دراسة الجدوى إلى التصميم المفاهيمي وتركيب أنظمة الطاقة في جميع أنحاء قطر." },
        { id: "plumbing", title: "هندسة السباكة", description: "إمدادات المياه، الصرف الصحي، أنظمة ترشيح حمامات السباحة، وأعمال مكافحة الحريق مع التركيز على كفاءة المياه." },
        { id: "maintenance", title: "الصيانة وما بعد البيع", description: "خدمات الصيانة الوقائية والتصحيحية المخطط لها لحماية استثمارك ودعم المرافق التشغيلية الحيوية." },
        { id: "elv", title: "تصميم MEP كامل", description: "تنفيذ مشاريع تصميم وبناء MEP معقدة للقطاعات السكنية والتجارية والصناعية." }
      ],
      inquire: 'اقرأ المزيد'
    },
    projects: {
      title: 'قائمة المشاريع',
      subtitle: 'نسعى جاهدين لتجاوز توقعات العملاء في القطاعات التجارية والسكنية والصناعية والطبية والضيافة والتعليمية.',
      viewAll: 'عرض كل المشاريع',
      items: []
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تفضل بزيارة مكتبنا في الدوحة أو تواصل معنا للحصول على استشارة.',
      call: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      visit: 'مكتب الدوحة',
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
    }
  }
};
