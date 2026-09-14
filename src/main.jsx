import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import heroImage from './assets/istanbul-hero.png';
import aboutImage from './assets/about-istanbul.png';
import realEstateImage from './assets/real-estate.jpg';
import constructionImage from './assets/construction-land-development.jpg';
import educationImage from './assets/education-language-academy.jpg';
import tourismImage from './assets/tourism.jpg';

import turkeyIcon from './assets/turkey.jpg';
import europeIcon from './assets/europe.jpg';
import uaeIcon from './assets/uae.jpg';
import asiaIcon from './assets/asia.jpg';

import aboutBackground from './assets/about-background.png';
import aboutLeftImage from './assets/about-left.png';
import servicesAboutImage from './assets/services-about.png';
import whyUsImage from './assets/why.us.png';
import contactImage from './assets/contact.png';
import importExportImage from './assets/import-export.png';
import businessInvestmentImage from './assets/business-investment.png';
import projectDevelopmentImage from './assets/project-development.png';
import globalBusinessImage from './assets/global-business-operations.png';
import citizenshipResidencyImage from './assets/citizenship-residency-investment.png';
import studyTurkiyeImage from './assets/study-turkiye-abroad.png';
import workJobImage from './assets/work-job-opportunities-abroad.png';
import companyFormationImage from './assets/company-formation-business-setup.png';
import investmentProjectImage from './assets/investment-project-consultancy.png';
import officialTranslationImage from './assets/official-translation-documentation.png';
import ozIstanbulLogo from './assets/hero-black.jpg';
import servicesBackground from './assets/services-background.png';
import {
  UsersRound,
  ClipboardList,
  FileCheck2,
  FileUser,
  UserRoundCheck,
  ArrowUpRight,
  Play,
  Menu,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Building2,
  Linkedin,
  Instagram,
  Youtube,
  Globe2,
  ShieldCheck,
  BarChart3,
  ChevronUp,
  Building,
  TrendingUp,
  GraduationCap,
  Globe,
  Plane,
  BriefcaseBusiness,
  Handshake,
  Languages
} from 'lucide-react';

const IMG = 'https://ozistanbul.com/wp-content/uploads';

const isAboutPage = window.location.pathname === '/about';


/* =========================================================
   SERVICES
========================================================= */

const coreServices = [
  [
    'Real Estate & Investment',
    'We manage and develop real estate projects, offering strong and secure investment opportunities in Türkiye.',
    realEstateImage
  ],
  [
    'Construction & Land Development',
    'We offer land sourcing, project development and engineering solutions for construction and key investments.',
    constructionImage
  ],
  [
    'Education & Language Academy',
    'We run language schools and offer international student services, helping students build a global future.',
    educationImage
  ],
  [
    'Tourism & Health Tourism',
    'We are a licensed tourism company in Türkiye, offering travel and health tourism solutions worldwide.',
    tourismImage
  ],
  [
  'Trading & Import / Export',
  'We manage international trade, sourcing and supplying products across global markets efficiently.',
  importExportImage
],
[
  'Business & Investment',
  'Helping investors start and grow businesses in Türkiye with expert support and strategic guidance.',
  businessInvestmentImage
],
  [
  'Project Dev & Partnerships',
  'Collaborating on real estate and business projects with global partners for growth and success.',
  projectDevelopmentImage
],
  [
  'Global Business Operations',
  'Active across Türkiye, Europe, Middle East and Asia, building strong international partnerships.',
  globalBusinessImage
],
];


const consultancy = [
  [
  'Citizenship & Residency by Investment',
  'Professional consultancy for legal pathways in Türkiye, and global programs.',
  citizenshipResidencyImage
],
  [
  'Study in Türkiye and Abroad',
  'University placement, language education, and full student support services.',
  studyTurkiyeImage
],
  [
  'Work & Job Opportunities Abroad',
  'Structured and legal employment solutions across different countries.',
  workJobImage
],
  [
  'Company Formation & Business Setup',
  'Full support to start and grow businesses in Türkiye, Europe and globally.',
  companyFormationImage
],
  [
  'Investment & Project Consultancy',
  'Expert guidance for real estate, construction, and business investments.',
  investmentProjectImage
],
  [
  'Official Translation & Documentation Services',
  'Certified translation of diplomas, transcripts, passports and legal papers.',
  officialTranslationImage
]
];


/* =========================================================
   COMPONENTS
========================================================= */

function Arrow() {
  return (
    <ArrowUpRight
      className="arrow"
      size={17}
      strokeWidth={2}
    />
  );
}


function Logo() {
  return (
    <a
      className="logo"
      href="/"
      aria-label="Öz Istanbul home"
    >
      <span className="logo-mark">ÖZ</span>

      <span>
        ISTANBUL
        <small>WORLD BUSINESS POINT</small>
      </span>
    </a>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>

      <div className="topbar">
        <div className="shell topbar-inner">
          <span>info@ozistanbul.com</span>
          <span>Istanbul, Türkiye</span>
          <span>+90 546 727 07 77</span>
        </div>
      </div>

      <div className="nav-shell shell">

        <Logo />

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Menu
            size={27}
            strokeWidth={2}
          />
        </button>

        <nav className={open ? 'open' : ''}>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/services">
  Services
</a>

          <a href="/contact">
  Contact
</a>

        </nav>

        <a
  className="button nav-button"
  href="/contact"
>
  Apply Now <Arrow />
</a>

      </div>

    </header>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ item }) {
  return (
    <article className="service-card">

      <div className="service-photo">

        <img
          src={item[2]}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.parentElement.classList.add('fallback');
          }}
        />

      </div>

      <div className="service-copy">

        <h3>
          {item[0]}
        </h3>

        <p>
          {item[1]}
        </p>

      </div>

    </article>
  );
}


/* =========================================================
   SCROLL SERVICES
========================================================= */

function ScrollServiceList() {
  const servicesRef = useRef(null);

  const services = [
    'Construction & Development',
    'Real Estate Investment',
    'Education',
    'International Trade',
    'Tourism',
    'Immigration & Global Mobility',
    'Business & Investment'
  ];

  useEffect(() => {
    const items =
      servicesRef.current?.querySelectorAll('.scroll-service');

    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="scroll-services"
      ref={servicesRef}
    >

      <span className="scroll-services-label">
        OUR SERVICES
      </span>

      <div className="scroll-services-list">

        {services.map((service, index) => (
          <div
            className="scroll-service"
            key={service}
            style={{
              transitionDelay: `${index * 0.08}s`
            }}
          >

            <span>
              0{index + 1}
            </span>

            <strong>
              {service}
            </strong>

          </div>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}

<section
  className="about-page-hero"
  style={{
    backgroundImage: `url(${aboutBackground})`
  }}
>
  <div className="shell about-page-hero-inner">

    <p className="eyebrow">
      About Öz Istanbul
    </p>

    <h1>
      A Global Vision
      <br />
      Rooted in Trust
    </h1>

    <p className="hero-text">
      Our story is built on people, partnerships
      <br />
      and a commitment to a stronger tomorrow.
    </p>

  </div>
</section>


      {/* ABOUT STORY */}

      <section className="about-story">

        <div className="shell about-story-inner">

          {/* LEFT IMAGES */}

          <div className="about-story-visual">
  <img
    className="about-services-image"
    src={servicesAboutImage}
    alt="Öz Istanbul Group Services"
  />
</div>


          {/* RIGHT CONTENT */}

          <div className="about-story-content">

            <p className="eyebrow">
              ABOUT ÖZ ISTANBUL GROUP
            </p>

            <h2>
              Welcome To Öz Istanbul
              <br />
              World Business Point
            </h2>

            <div className="about-story-copy">

              <p>
                <strong>
                  Building Businesses. Developing Investments. Creating Opportunities.
                </strong>
              </p>

              <p>
                Öz İstanbul Group is an international investment,
                development, and business group headquartered in
                Istanbul, Türkiye, built on more than 20 years of
                international business experience across Dubai,
                Europe, Türkiye, and global markets.
              </p>

              <p>
                Over the past two decades, our experience has grown
                across different countries, industries, and economic
                environments — giving us a strong understanding of
                investment, development, international business,
                and cross-border opportunities.
              </p>

              <p>
                <strong>
                  We are more than a consultancy. We are investors,
                  developers, and active business operators.
                </strong>
              </p>

              <p>
                Our core activities include construction and real
                estate development, real estate investment, education,
                international trade, immigration and global mobility,
                tourism, and technology.
              </p>

              <p>
                We don&apos;t simply advise our clients on opportunities.
                We invest, we develop, we operate, and we execute.
              </p>

              <p>
                Our international experience and established business
                network allow us to connect people, capital, businesses,
                and opportunities across borders.
              </p>

              <p>
                <strong>
                  One Group. Multiple Industries. Global Vision.
                </strong>
              </p>

              <p>
                From developing and investing in real estate to
                building businesses, expanding into international
                markets, creating educational opportunities, and
                facilitating global trade and mobility, every division
                of Öz İstanbul Group operates with the same principles:
              </p>

              <p>
                <strong>
                  Experience. Trust. Transparency. Execution. Long-term value.
                </strong>
              </p>

              <p>
                For more than two decades, we have believed that
                strong businesses are not built on promises —
                they are built on results.
              </p>

              <p>
                Today, Öz İstanbul Group continues to expand its
                international presence while remaining focused on
                one mission: creating valuable businesses, strong
                investments, and opportunities that cross borders.
              </p>

              <p>
                <strong>
                  We don&apos;t wait for opportunities. We build them.
                </strong>
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="about-experience">

        <div className="shell about-experience-inner">

          <div>

            <p className="eyebrow">
              OUR EXPERIENCE
            </p>

            <h2>
              Experience That
              <br />
              <em>Creates Confidence.</em>
            </h2>

          </div>

          <div className="experience-number">

            <strong>
              20<sup>+</sup>
            </strong>

            <span>
              Years of
              <br />
              International
              <br />
              Experience
            </span>

          </div>

        </div>

      </section>


      {/* WHAT WE DO */}

      <section className="section shell about-values">

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              WHAT WE DO
            </p>

            <h2>
              Connecting People,
              <br />
              <em>Business &amp; Opportunity.</em>
            </h2>

          </div>

          <p>
            We combine international experience, local knowledge,
            and strong business networks to create practical
            opportunities for our clients and partners.
          </p>

        </div>


        <div className="about-value-grid">

          <div className="about-value">
            <span>01</span>

            <h3>
              Global Business
            </h3>

            <p>
              Helping entrepreneurs and businesses establish,
              expand, and operate across international markets.
            </p>
          </div>


          <div className="about-value">
            <span>02</span>

            <h3>
              Investment
            </h3>

            <p>
              Connecting clients with carefully selected real
              estate, investment, and business opportunities.
            </p>
          </div>


          <div className="about-value">
            <span>03</span>

            <h3>
              Education
            </h3>

            <p>
              Supporting international students with education,
              university admissions, and language opportunities.
            </p>
          </div>


          <div className="about-value">
            <span>04</span>

            <h3>
              International Mobility
            </h3>

            <p>
              Providing guidance for individuals and families
              looking to establish new opportunities abroad.
            </p>
          </div>

        </div>


        <img
          className="why-us-image"
          src={whyUsImage}
          alt="Why Öz Istanbul"
        />

      </section>


      {/* WHY ÖZ ISTANBUL */}

      <section className="why-oz">

        <div className="shell why-oz-inner">

          <div className="why-oz-image"></div>

          <div className="why-oz-content">

            <p className="eyebrow">
              WHY ÖZ ISTANBUL
            </p>

            <h2>
              Experience That
              <br />
              <em>Creates Real Value.</em>
            </h2>

            <p className="why-oz-intro">
              We combine more than two decades of international
              experience with local expertise, strong business
              networks, and hands-on operational knowledge.
            </p>


            <div className="why-oz-points">

              <div className="why-oz-point">

                <span>01</span>

                <div>

                  <h3>
                    International Experience
                  </h3>

                  <p>
                    Our experience across Türkiye, Dubai, Europe,
                    the Middle East, and Asia gives us a broad
                    understanding of international business,
                    investment, and cross-border opportunities.
                  </p>

                </div>

              </div>


              <div className="why-oz-point">

                <span>02</span>

                <div>

                  <h3>
                    We Invest, Not Just Advise
                  </h3>

                  <p>
                    We are actively involved in the businesses
                    and investments we pursue. We develop,
                    operate, manage, and execute — not simply
                    recommend.
                  </p>

                </div>

              </div>


              <div className="why-oz-point">

                <span>03</span>

                <div>

                  <h3>
                    Strong International Network
                  </h3>

                  <p>
                    Our established network connects investors,
                    businesses, institutions, and opportunities
                    across borders.
                  </p>

                </div>

              </div>


              <div className="why-oz-point">

                <span>04</span>

                <div>

                  <h3>
                    Trust, Transparency &amp; Execution
                  </h3>

                  <p>
                    We believe strong businesses are built through
                    transparency, professionalism, reliable execution,
                    and long-term relationships.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MISSION */}

      <section className="about-mission">

        <div className="shell">

          <p className="eyebrow">
            OUR MISSION
          </p>

          <h2>
            To Make International
            <br />
            <em>Opportunities Accessible.</em>
          </h2>

          <p>
            We believe borders should not limit ambition. Our mission
            is to make international business, education, investment,
            and mobility more accessible through trusted relationships,
            transparent processes, and practical solutions.
          </p>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {
  const [contactStatus, setContactStatus] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('sending');

    const form = e.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xppzgnvo', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setContactStatus('success');
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    }
  };

  return (
    <main className="contact-page">

      {/* CONTACT HERO */}

      <section
        className="contact-page-hero"
        style={{
          backgroundImage: `url(${contactImage})`
        }}
      >

        <div className="shell contact-page-hero-inner">

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h1>
            Let’s Build
            <br />
            <span>What’s Next.</span>
          </h1>

          <p className="contact-hero-text">
            We are always open to new partnerships, opportunities,
            and conversations. Reach out to us — we’d be happy
            to hear from you.
          </p>

        </div>

      </section>


      {/* CONTACT INFORMATION */}

      <section className="contact-info-section">

        <div className="shell contact-info-grid">

          <div
  className="contact-info-card contact-info-link"
  onClick={() => window.location.href = 'tel:+905467270777'}
>
  <div className="contact-info-icon">
    <Phone size={21} />
  </div>
  <div>
    <span>Phone</span>
    <strong>+90 546 727 07 77</strong>
  </div>
</div>

<div
  className="contact-info-card contact-info-link"
  onClick={() => window.open('https://wa.me/905467270777', '_blank')}
>
  <div className="contact-info-icon whatsapp">
    <MessageCircle size={21} />
  </div>
  <div>
    <span>WhatsApp</span>
    <strong>+90 546 727 07 77</strong>
  </div>
</div>

<div
  className="contact-info-card contact-info-link"
  onClick={() => window.location.href = 'mailto:info@ozistanbul.com'}
>
  <div className="contact-info-icon">
    <Mail size={21} />
  </div>
  <div>
    <span>Email</span>
    <strong>info@ozistanbul.com</strong>
  </div>
</div>


          <div className="contact-info-card">

            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>Head Office</span>

              <strong>
                Istanbul, Türkiye
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* FORM + MAP */}

      <section className="contact-main">

        <div className="shell contact-main-grid">

          {/* FORM */}

          <div className="contact-form-area">

            <p className="eyebrow">
              SEND US A MESSAGE
            </p>

            <h2>
              Get in Touch
            </h2>

            <p className="contact-form-intro">
              Fill out the form below and our team will get back
              to you shortly.
            </p>


            <form
  className="contact-form"
  onSubmit={handleContactSubmit}
>

  <input
    type="text"
    name="name"
    placeholder="Your Name *"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email *"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject *"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message *"
    rows="6"
    required
  ></textarea>

  <button
    type="submit"
    className="button"
    disabled={contactStatus === 'sending'}
  >
    {contactStatus === 'sending'
      ? 'Sending...'
      : 'Send Message'}

    {contactStatus !== 'sending' && <Arrow />}
  </button>

  {contactStatus === 'success' && (
    <p className="form-success">
  Thank you for getting in touch. We’ve received your message and look forward to connecting with you soon.
</p>
  )}

  {contactStatus === 'error' && (
    <p className="form-error">
      Something went wrong. Please try again.
    </p>
  )}

</form>

          </div>


          {/* MAP + OFFICE */}

          <div className="contact-location">

            <div className="contact-map">

              <iframe
  title="Öz Istanbul World Business Point"
  src="https://www.google.com/maps?q=Öz%20Istanbul%20World%20Business%20Point%2C%2041.0109541%2C28.6553834&z=17&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>


            <div className="office-card">

              <div className="office-row">

                <div className="office-icon">
                  <Building2
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <div>

                  <h3>
                    Head Office
                  </h3>

                  <p>
                    Istanbul, Türkiye
                  </p>

                  <p>
                    <p>Mevlana Mh. Sultan Ahmet Cad. 7.Cadde No:1</p>
<p>34515 Esenyurt, Istanbul</p>
                  </p>

                </div>

              </div>


              <div className="office-row">

                <div className="office-icon">
                  <Clock
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="office-hours">

                  <div>
                    <span>
                      Monday – Friday
                    </span>

                    <strong>
                      09:00 – 18:00
                    </strong>
                  </div>

                  <div>
                    <span>
                      Saturday – Sunday
                    </span>

                    <strong>
                      Closed
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
/* =========================================================
   SERVICES PAGE
========================================================= */

const servicesPageItems = [
  {
    title: 'Real Estate Development',
    description:
      'Designing and developing modern living and working spaces for stronger communities.',
    image: realEstateImage,
    icon: Building
  },
  {
    title: 'Real Estate Investment',
    description:
      'Creating long-term value through strategic real estate investments in global markets.',
    image: constructionImage,
    icon: TrendingUp
  },
  {
    title: 'Education',
    description:
      'Investing in people through quality education and international learning opportunities.',
    image: educationImage,
    icon: GraduationCap
  },
  {
    title: 'International Trade',
    description:
      'Connecting markets and facilitating trade across borders through reliable global networks.',
    image: importExportImage,
    icon: Globe
  },
  {
    title: 'Immigration Services',
    description:
      'Guiding individuals and families through international mobility and relocation opportunities.',
    image: citizenshipResidencyImage,
    icon: FileUser
  },
  {
    title: 'Tourism & Travel',
    description:
      'Delivering memorable travel experiences and tailored tourism services worldwide.',
    image: tourismImage,
    icon: Plane
  },
  {
    title: 'Business & Investment',
    description:
      'Providing strategic support to help businesses grow, invest and succeed internationally.',
    image: businessInvestmentImage,
    icon: BriefcaseBusiness
  },
  {
    title: 'Translation & Documentation',
    description:
      'Bridging cultures with accurate, professional and reliable translation services.',
    image: officialTranslationImage,
    icon: Languages
  }
];


function ServicesPage() {
  return (
    <main className="services-page">

      {/* =====================================================
          SERVICES HERO
      ===================================================== */}

      <section
  className="services-page-hero"
  style={{
    backgroundImage: `url(${servicesBackground})`
  }}
>

        <div className="services-page-hero-overlay"></div>

        <div className="shell services-page-hero-inner">

          <p className="eyebrow">
            OUR SERVICES
          </p>

          <h1>
            Integrated Solutions
            <br />
            for a Global Future
          </h1>

          <p className="services-hero-text">
            Building businesses. Developing investments.
            <br />
            Creating opportunities.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="shell">

          <div className="services-intro-inner">

            <div className="services-side-line"></div>

            <div className="services-intro-content">

              <p className="eyebrow">
                OUR SERVICES
              </p>

              <h2>
                Diverse Industries. Real Opportunities.
              </h2>

              <p>
                At Öz Istanbul Group, we provide a wide range of
                services across key industries, combining international
                experience with local expertise to create real value
                for our clients, partners, and communities.
              </p>

            </div>

            <div className="services-side-line"></div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="services-grid-section">

        <div className="shell">

          <div className="services-page-grid">

            {servicesPageItems.map((service, index) => {

              const Icon = service.icon;

              return (
                <article
                  className="services-page-card"
                  key={service.title}
                >

                  <div className="services-page-card-image">

                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />

                  </div>

                  <div className="services-page-card-content">

                    <div className="services-page-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">

        <div className="services-cta-map">
          <Globe2 size={520} strokeWidth={0.5} />
        </div>

        <div className="shell services-cta-inner">

          <p className="eyebrow">
            LET&apos;S BUILD TOGETHER
          </p>

          <h2>
            Ready to Explore Opportunities?
          </h2>

          <p>
            Get in touch with our team to learn more about
            our services and how we can support your goals.
          </p>

          <a
            className="button"
            href="/contact"
          >
            Contact Us <Arrow />
          </a>

        </div>

      </section>

    </main>
  );
}
/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  const [homeStatus, setHomeStatus] = useState('');

  const handleHomeSubmit = async (e) => {
    e.preventDefault();
    setHomeStatus('sending');

    const form = e.currentTarget;

    try {
      const response = await fetch('https://formspree.io/f/xppzgnvo', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setHomeStatus('success');
      } else {
        setHomeStatus('error');
      }
    } catch {
      setHomeStatus('error');
    }
  };

  return (
    <main id="home">

      {/* HERO */}

      <section className="hero">

        <img
          className="hero-background"
          src={heroImage}
          alt=""
        />

        <div className="hero-shade"></div>

        <div className="shell hero-content">

          <p className="eyebrow light">
            Öz Istanbul WORLD BUSINESS POINT
          </p>

          <h1>
            Global business, Investment &amp; Consultancy Solutions in Türkiye
          </h1>

          <p className="hero-text">
            Investment, business, education and global solutions —
            powered by real experience and strong international
            networks.
          </p>

          <div className="hero-actions">

            <a
              className="button"
              href="#businesses"
            >
              Explore Our Services <Arrow />
            </a>

            <a
              className="play-link"
              href="#about"
            >
              <i>
                <Play
                  size={13}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </i>

              Discover Öz Istanbul
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="section about shell"
      >

        <div className="about-images">

          <div className="orange-block"></div>

          <img
            className="main-image"
            src={aboutImage}
            alt="Öz Istanbul global business and investment"
          />

          <div className="experience">

            <strong>
              20<sup>+</sup>
            </strong>

            <span>
              Years of
              <br />
              experience
            </span>

          </div>

        </div>


        <div className="about-copy">

          <p className="eyebrow">
            ABOUT ÖZ ISTANBUL GROUP
          </p>

          <h2>
            Welcome To Öz Istanbul{' '}
            <em>World Business Point</em>
          </h2>

          <p>
            Öz İstanbul Group is a global business platform built
            on experience, execution, and results. Originally
            operating as OZ Group since 2016, the company has been
            active in Türkiye under the Öz İstanbul brand since 2018,
            supported by over 20 years of international experience
            across Dubai and global markets. We are not a traditional
            consultancy. We are active operators. We invest, manage,
            and grow businesses across education, immigration, real
            estate, tourism, and international trade — providing our
            clients with direct access to proven systems, strong
            networks, and real opportunities.
          </p>

          <p>
            Our approach is defined by clarity, transparency,
            and performance. Every service we deliver is designed
            to create real value and long-term success. With a global
            vision and a strong local presence, we empower individuals
            and businesses to expand beyond borders — confidently
            and securely.
          </p>

          <a
            className="text-link"
            href="/about"
          >
            About Us <Arrow />
          </a>

        </div>

      </section>


      {/* CORE BUSINESSES */}

      <section
        id="businesses"
        className="section core"
      >

        <div className="shell">

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                OUR CORE BUSINESSES
              </p>

              <h2>
                We Build, Invest &amp; Operate
                <br />
                <em>— Not Just Advise</em>
              </h2>

            </div>

            <p>
              Our strength comes from real projects, real
              investments, and hands-on operational experience
              across Türkiye and international markets.
            </p>

          </div>


          <div className="service-grid">

            {coreServices.map((x, i) => (
              <ServiceCard
                key={i}
                item={x}
              />
            ))}

          </div>


          <div className="center">

           <a className="button" href="/services">
  Explore All Services <Arrow />
</a>

          </div>

        </div>

      </section>


      {/* CONSULTANCY */}

      <section
        id="consultancy"
        className="section consultancy"
      >

        <div className="shell">

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                OUR CONSULTANCY SERVICES
              </p>

              <h2>
                Consultancy Powered by
                <br />
                <em>Real Experience</em>
              </h2>

            </div>

            <p>
              Alongside our business operations, we provide
              professional consultancy services based on
              real-world expertise.
            </p>

          </div>


          <div className="consultancy-grid">

            {consultancy.map((x, i) => (

              <article
                className="consult-card"
                key={i}
              >

                <img
                  src={x[2]}
                  alt=""
                  loading="lazy"
                />

                <div>

                  <span>
                    0{i + 1}
                  </span>

                  <h3>
                    {x[0]}
                  </h3>

                  <p>
                    {x[1]}
                  </p>

                  

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL PRESENCE */}

      <section className="global">

        <div className="shell global-inner">

          <p className="eyebrow">
            GLOBAL PRESENCE · OPERATING WITHOUT BORDERS
          </p>

          <h2>
            We Actively Operate And
            <br />
            <em>Collaborate Across</em>
          </h2>

          <p className="global-description">
            Delivering opportunities, investments, and solutions
            on a global scale.
          </p>


          <div className="regions">

            {[
              [turkeyIcon, 'Türkiye'],
              [europeIcon, 'Europe'],
              [uaeIcon, 'Middle East'],
              [asiaIcon, 'Asia']
            ].map(([icon, name]) => (

              <div
                className="region-card"
                key={name}
              >

                <div className="region-icon">

                  <img
                    src={icon}
                    alt={name}
                  />

                </div>

                <span className="region-name">
                  {name}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="section process shell">

        <div className="section-heading centered">

          <p className="eyebrow">
            HOW IT WORKS
          </p>

          <h2>
            A Simple And Transparent Process Designed To Guide
            <br />
            <em>You From Start To Success.</em>
          </h2>

        </div>


        <div className="steps">

          {[
            {
              number: '01',
              title: 'Choose Service',
              icon: UsersRound
            },
            {
              number: '02',
              title: 'Consultation',
              icon: ClipboardList
            },
            {
              number: '03',
              title: 'Process',
              icon: FileCheck2
            },
            {
              number: '04',
              title: 'Application',
              icon: FileUser
            },
            {
              number: '05',
              title: 'Get Your Result',
              icon: UserRoundCheck
            }
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                className="step"
                key={item.number}
              >

                <b>
                  {item.number}
                </b>

                <div className="step-card">

                  <Icon className="step-icon" />

                  <span>
                    {item.title}
                  </span>

                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="contact"
      >

        <div className="shell contact-inner">

          <div>

            <p className="eyebrow light">
              START YOUR GLOBAL JOURNEY TODAY
            </p>

            <h2>
              Let’s build your next
              <br />
              <em>opportunity together.</em>
            </h2>

            <p>
              Whether you are looking to invest, study,
              relocate, or expand your business — we are
              here to guide every step.
            </p>

            <a href="tel:+905467270777">
              +90 546 727 07 77
            </a>

          </div>


          <form
  onSubmit={handleHomeSubmit}
>

  <input
    type="text"
    name="name"
    placeholder="Your Name*"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="WhatsApp Number*"
    required
  />

  <input
  type="email"
  name="email"
  placeholder="Email Address*"
  required
/>

<input
  type="text"
  name="subject"
  placeholder="Subject*"
  required
/>

<textarea
  name="message"
  placeholder="Message*"
  rows="4"
  required
></textarea>

  <button
    type="submit"
    className="button"
    disabled={homeStatus === 'sending'}
  >
    {homeStatus === 'sending'
      ? 'Sending...'
      : 'Send Message'}

    {homeStatus !== 'sending' && <Arrow />}
  </button>

  {homeStatus === 'success' && (
    <p className="form-success">
      Thank you. Your message has been sent successfully.
    </p>
  )}

  {homeStatus === 'error' && (
    <p className="form-error">
      Something went wrong. Please try again.
    </p>
  )}

</form>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">

      {/* FOOTER MAIN */}

      <div className="shell footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-brand-name">
            ÖZ ISTANBUL
          </div>

          <div className="footer-brand-subtitle">
            WORLD BUSINESS POINT
          </div>

          <p>
            Building businesses. Developing investments.
            Creating opportunities across Türkiye and
            global markets.
          </p>

          <div className="footer-socials">

  <a
    href="https://www.linkedin.com/company/ozistanbul"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="https://www.instagram.com/ozistanbulturkiye/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.youtube.com/@ozistanbulturkey"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <Youtube size={18} />
  </a>

  <a
    href="https://wa.me/905467270777"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <MessageCircle size={18} />
  </a>

</div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About Us
          </a>

          <a href="/services">
  Services
</a>

          <a href="/contact">
            Contact Us
          </a>

        </div>


        {/* SERVICES */}

        <div className="footer-column footer-services">

          <h3>
            Our Services
          </h3>

          <a href="/#consultancy">
            Citizenship &amp; Residency
          </a>

          <a href="/#consultancy">
            Study in Türkiye and Abroad
          </a>

          <a href="/#consultancy">
            Work &amp; Job Opportunities
          </a>

          <a href="/#consultancy">
            Company Formation
          </a>

          <a href="/#consultancy">
            Investment &amp; Project Consultancy
          </a>

          <a href="/#consultancy">
            Official Translation &amp; Documentation
          </a>

        </div>


        {/* CONTACT INFO */}

        <div className="footer-column footer-contact">

          <h3>
            Contact Info
          </h3>

          <a href="tel:+905467270777">
            <Phone size={18} />
            <span>
              +90 546 727 07 77
            </span>
          </a>

          <a href="mailto:info@ozistanbul.com">
            <Mail size={18} />
            <span>
              info@ozistanbul.com
            </span>
          </a>

          <div>
            <MapPin size={18} />
            <span>
              Istanbul, Türkiye
            </span>
          </div>

          <div>
            <Clock size={18} />
            <span>
              Mon – Fri: 09:00 – 18:00
            </span>
          </div>

        </div>


        {/* GLOBAL STATEMENT */}

        <div className="footer-global">
  <img
    src={ozIstanbulLogo}
    alt="Öz Istanbul"
    className="footer-logo-image"
  />
</div>
{/* TRUST ITEMS */}

<div className="footer-trust">

  <div>
    <Globe2 size={22} />

    <span>
      <strong>Global Reach</strong>
      Across Continents
    </span>
  </div>

  <div>
    <ShieldCheck size={22} />

    <span>
      <strong>Trusted Guidance</strong>
      Professional Support
    </span>
  </div>

  <div>
    <BarChart3 size={22} />

    <span>
      <strong>Real Opportunities</strong>
      For a Better Tomorrow
    </span>
  </div>

</div>
      </div>


      


      {/* COPYRIGHT */}

      <div className="footer-bottom">

        <div className="shell footer-bottom-inner">

          <p>
            © 2026 Öz Istanbul World Business Point A.Ş.
            All Rights Reserved.
          </p>

          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#">
              Terms of Service
            </a>

            <span>|</span>

            <a href="#">
              Sitemap
            </a>

          </div>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp size={21} />
          </button>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  const path = window.location.pathname;

  return (
    <>
      <Header />

      {path === '/about' ? (
        <AboutPage />
      ) : path === '/services' ? (
        <ServicesPage />
      ) : path === '/contact' ? (
        <ContactPage />
      ) : (
        <HomePage />
      )}

      <Footer />
    </>
  );
}


/* =========================================================
   START
========================================================= */

createRoot(
  document.getElementById('root')
).render(
  <App />
);