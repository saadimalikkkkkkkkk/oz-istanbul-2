import React, { useState } from 'react';
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
import citizenshipBanner from './assets/turkish-citizenship-banner.png';
import investmentHero from './assets/investment-hero.png';

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
  Languages
} from 'lucide-react';


/* =========================================================
   CONSTANTS
========================================================= */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xppzgnvo';
const WHATSAPP_NUMBER = '905467270777';


/* =========================================================
   DATA
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
  ]
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
    image: realEstateImage,
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


/* =========================================================
   CITIZENSHIP INVESTMENT OPTIONS
========================================================= */

const citizenshipInvestmentOptions = [
  {
    number: '01',
    title: 'Real Estate Investment',
    amount: '$400,000',
    description:
      'Purchase qualifying real estate in Türkiye and maintain the investment for at least 3 years.',
    icon: Building
  },
  {
    number: '02',
    title: 'Bank Deposit',
    amount: '$500,000',
    description:
      'Deposit at least $500,000 in a Turkish bank and maintain the required investment period.',
    icon: BarChart3
  },
  {
    number: '03',
    title: 'Government Bonds',
    amount: '$500,000',
    description:
      'Invest in qualifying Turkish government bonds and maintain the investment for at least 3 years.',
    icon: ShieldCheck
  },
  {
    number: '04',
    title: 'Company Investment',
    amount: '$500,000',
    description:
      'Make a qualifying capital investment in a Turkish company under the applicable citizenship program.',
    icon: BriefcaseBusiness
  }
];


/* =========================================================
   SHARED COMPONENTS
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
      <span className="logo-mark">
        ÖZ
      </span>

      <span>
        ISTANBUL
        <small>
          WORLD BUSINESS POINT
        </small>
      </span>
    </a>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>

      {/* TOP BAR */}

      <div className="topbar">

        <div className="shell topbar-inner">

          <span>
            info@ozistanbul.com
          </span>

          <span>
            Istanbul, Türkiye
          </span>

          <span>
            +90 546 727 07 77
          </span>

        </div>

      </div>


      {/* NAVIGATION */}

      <div className="nav-shell shell">

        <Logo />


        <button
          type="button"
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <Menu
            size={27}
            strokeWidth={2}
          />
        </button>


        <nav className={open ? 'open' : ''}>

          <a
            href="/"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={closeMenu}
          >
            About
          </a>

<a
  href="/services"
  onClick={closeMenu}
>
  Services
</a>

<a
  href="/investment"
  onClick={closeMenu}
>
  Citizenship
</a>

<a
  href="/contact"
  onClick={closeMenu}
>
  Contact
</a>

        </nav>


        <a
          className="button nav-button"
          href="/contact"
          onClick={closeMenu}
        >
          Apply Now
          <Arrow />
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
          alt={item[0]}
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
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <main className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

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


      {/* =====================================================
          ABOUT STORY
      ===================================================== */}

      <section className="about-story">

        <div className="shell about-story-inner">

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


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

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


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

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

            <span>
              01
            </span>

            <h3>
              Global Business
            </h3>

            <p>
              Helping entrepreneurs and businesses establish,
              expand, and operate across international markets.
            </p>

          </div>


          <div className="about-value">

            <span>
              02
            </span>

            <h3>
              Investment
            </h3>

            <p>
              Connecting clients with carefully selected real
              estate, investment, and business opportunities.
            </p>

          </div>


          <div className="about-value">

            <span>
              03
            </span>

            <h3>
              Education
            </h3>

            <p>
              Supporting international students with education,
              university admissions, and language opportunities.
            </p>

          </div>


          <div className="about-value">

            <span>
              04
            </span>

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
          loading="lazy"
        />

      </section>


      {/* =====================================================
          WHY ÖZ ISTANBUL
      ===================================================== */}

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

                <span>
                  01
                </span>

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

                <span>
                  02
                </span>

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

                <span>
                  03
                </span>

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

                <span>
                  04
                </span>

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


      {/* =====================================================
          MISSION
      ===================================================== */}

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
   INVESTMENT PAGE
========================================================= */

function InvestmentPage() {
  return (
    <main className="investment-page">

      {/* =====================================================
          INVESTMENT HERO
      ===================================================== */}

      <section
        className="investment-hero"
        style={{
          backgroundImage: `url(${investmentHero})`
        }}
      >

        <div className="investment-hero-overlay"></div>

        <div className="shell investment-hero-inner">

          <div className="investment-hero-copy">

            <p className="eyebrow">
              TURKISH CITIZENSHIP BY INVESTMENT
            </p>

            <h1>
              Your Path to
              <br />
              <em>Turkish Citizenship.</em>
            </h1>

            <p>
              Invest in Türkiye and unlock new opportunities
              for yourself and your family. Our team guides
              you through the investment, documentation,
              and application process from start to finish.
            </p>

            <div className="investment-hero-actions">

              <a
                className="button"
                href="/contact"
              >
                Start Your Application
                <Arrow />
              </a>

              <a
                className="investment-text-link"
                href="#investment-options"
              >
                Explore Investment Options
                <Arrow />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTMENT OPTIONS
      ===================================================== */}

      <section
        id="investment-options"
        className="investment-options"
      >

        <div className="shell">

          <div className="investment-section-heading">

            <p className="eyebrow">
              INVESTMENT OPTIONS
            </p>

            <h2>
              Choose Your
              <br />
              <em>Investment Route.</em>
            </h2>

            <p>
              Türkiye offers several qualifying investment
              routes for investors seeking Turkish citizenship.
              Explore the main options below.
            </p>

          </div>


          <div className="citizenship-investment-grid">

            {citizenshipInvestmentOptions.map((option) => {

              const Icon = option.icon;

              return (
                <article
                  className="citizenship-investment-card"
                  key={option.number}
                >

                  <div className="citizenship-card-top">

                    <div className="citizenship-card-icon">

                      <Icon
                        size={34}
                        strokeWidth={1.7}
                      />

                    </div>

                    <span>
                      {option.number}
                    </span>

                  </div>


                  <h3>
                    {option.title}
                  </h3>


                  <div className="citizenship-card-amount">
                    {option.amount}
                  </div>


                  <p>
                    {option.description}
                  </p>


                  <a
                    href="/contact"
                    className="citizenship-card-link"
                  >
                    Discuss This Option
                    <Arrow />
                  </a>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY TURKISH CITIZENSHIP
      ===================================================== */}

      <section className="why-turkish-citizenship">

        <div className="shell">

          <div className="why-citizenship-heading">

            <p className="eyebrow">
              WHY CHOOSE TÜRKİYE
            </p>

            <h2>
              Why Turkish Citizenship
            </h2>

            <p>
              Turkish citizenship offers a combination of
              global mobility, investment opportunities and
              long-term benefits for you and your family.
            </p>

          </div>


          {/* =================================================
              BENEFIT CARDS
          ================================================= */}

          <div className="investment-benefits-grid">


            {/* =================================================
                01 — VISA FREE TRAVEL
            ================================================= */}

            <article className="investment-benefit-card">

              <div className="investment-benefit-icon">

                <Globe2
                  size={30}
                  strokeWidth={1.8}
                />

              </div>


              <div className="investment-benefit-content">

                <span className="investment-benefit-number">
                  01.
                </span>

                <h3>
                  Visa-Free Travel
                </h3>

                <p>
                  Visa-free or visa-on-arrival access to more than
                  110 countries, making international travel easier
                  for you and your family.
                </p>

                <a href="#investment-options">
                  Learn More
                  <Arrow />
                </a>

              </div>

            </article>


            {/* =================================================
                02 — STRATEGIC LOCATION
            ================================================= */}

            <article className="investment-benefit-card">

              <div className="investment-benefit-icon">

                <Building2
                  size={30}
                  strokeWidth={1.8}
                />

              </div>


              <div className="investment-benefit-content">

                <span className="investment-benefit-number">
                  02.
                </span>

                <h3>
                  Strategic Location
                </h3>

                <p>
                  Türkiye connects Europe, Asia and the Middle
                  East, providing access to major international
                  markets.
                </p>

                <a href="#investment-options">
                  Learn More
                  <Arrow />
                </a>

              </div>

            </article>


            {/* =================================================
                03 — STRONG INVESTMENT MARKET
            ================================================= */}

            <article className="investment-benefit-card">

              <div className="investment-benefit-icon">

                <TrendingUp
                  size={30}
                  strokeWidth={1.8}
                />

              </div>


              <div className="investment-benefit-content">

                <span className="investment-benefit-number">
                  03.
                </span>

                <h3>
                  Strong Investment Market
                </h3>

                <p>
                  A dynamic real estate and investment market
                  with opportunities across residential,
                  commercial and business sectors.
                </p>

                <a href="#investment-options">
                  Learn More
                  <Arrow />
                </a>

              </div>

            </article>


            {/* =================================================
                04 — FAMILY CITIZENSHIP
            ================================================= */}

            <article className="investment-benefit-card">

              <div className="investment-benefit-icon">

                <UsersRound
                  size={30}
                  strokeWidth={1.8}
                />

              </div>


              <div className="investment-benefit-content">

                <span className="investment-benefit-number">
                  04.
                </span>

                <h3>
                  Citizenship for Your Family
                </h3>

                <p>
                  The citizenship programme can extend to
                  eligible family members, helping you build
                  a future together in Türkiye.
                </p>

                <a href="#investment-options">
                  Learn More
                  <Arrow />
                </a>

              </div>

            </article>


            {/* =================================================
                05 — NO RESIDENCY REQUIREMENT
            ================================================= */}

            <article className="investment-benefit-card">

              <div className="investment-benefit-icon">

                <ShieldCheck
                  size={30}
                  strokeWidth={1.8}
                />

              </div>


              <div className="investment-benefit-content">

                <span className="investment-benefit-number">
                  05.
                </span>

                <h3>
                  No Residency Requirement
                </h3>

                <p>
                  Turkish citizenship by investment does not
                  require you to maintain a minimum period of
                  residence in Türkiye.
                </p>

                <a href="#investment-options">
                  Learn More
                  <Arrow />
                </a>

              </div>

            </article>


          </div>

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
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        }
      );

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

      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

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


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-info-section">

        <div className="shell contact-info-grid">


          {/* PHONE */}

          <a
            className="contact-info-card contact-info-link"
            href="tel:+902127270777"
          >

            <div className="contact-info-icon">
              <Phone size={21} />
            </div>

            <div>

              <span>
                Phone
              </span>

              <strong>
                +90 212 727 07 77
              </strong>

            </div>

          </a>


          {/* WHATSAPP */}

          <a
            className="contact-info-card contact-info-link"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <div className="contact-info-icon whatsapp">

              <MessageCircle
                size={21}
              />

            </div>

            <div>

              <span>
                WhatsApp
              </span>

              <strong>
                +90 546 727 07 77
              </strong>

            </div>

          </a>


          {/* EMAIL */}

          <a
            className="contact-info-card contact-info-link"
            href="mailto:info@ozistanbul.com"
          >

            <div className="contact-info-icon">

              <Mail
                size={21}
              />

            </div>

            <div>

              <span>
                Email
              </span>

              <strong>
                info@ozistanbul.com
              </strong>

            </div>

          </a>


          {/* HEAD OFFICE */}

          <div className="contact-info-card">

            <div className="contact-info-icon">

              <MapPin
                size={21}
              />

            </div>

            <div>

              <span>
                Head Office
              </span>

              <strong>
                Istanbul, Türkiye
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM + MAP
      ===================================================== */}

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
                autoComplete="name"
                required
              />


              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                autoComplete="email"
                required
              />


              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
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

                {contactStatus !== 'sending' && (
                  <Arrow />
                )}

              </button>


              {contactStatus === 'success' && (
                <p
                  className="form-success"
                  aria-live="polite"
                >
                  Thank you for getting in touch. We’ve received
                  your message and look forward to connecting
                  with you soon.
                </p>
              )}


              {contactStatus === 'error' && (
                <p
                  className="form-error"
                  aria-live="polite"
                >
                  Something went wrong. Please try again.
                </p>
              )}

            </form>

          </div>


          {/* MAP + OFFICE */}

          <div className="contact-location">


            {/* MAP */}

            <div className="contact-map">

              <iframe
                title="Öz Istanbul World Business Point"
                src="https://www.google.com/maps?q=Öz%20Istanbul%20World%20Business%20Point%2C%2041.0109541%2C28.6553834&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>


            {/* OFFICE CARD */}

            <div className="office-card">


              {/* OFFICE */}

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
                    Mevlana Mh. Sultan Ahmet Cad.
                    7.Cadde No:1
                    <br />
                    34515 Esenyurt, Istanbul
                  </p>

                </div>

              </div>


              {/* HOURS */}

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

function ServicesPage() {
  const [serviceStatus, setServiceStatus] = useState('');

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
          MAIN SERVICES GRID
      ===================================================== */}

      <section className="services-grid-section">

        <div className="shell">

          <div className="services-page-grid">

            {servicesPageItems.map((service) => {

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
          CONSTRUCTION & RENOVATION
      ===================================================== */}

      <section className="construction-section">

        <div className="shell">


          {/* -------------------------------------------------
              INTRODUCTION
          ------------------------------------------------- */}

          <div className="construction-intro">

            <div className="construction-intro-copy">

              <p className="eyebrow">
                WHAT WE DO
              </p>

              <h2>
                Construction &amp;
                <br />
                <em>Renovation</em>
              </h2>

              <h3>
                Building Better Spaces. Creating Lasting Value.
              </h3>

              <p>
                At Öz Istanbul World Business Point, we provide
                professional construction, renovation, refurbishment,
                and project management solutions for residential,
                commercial, and investment properties in Türkiye.
              </p>

              <p>
                From new construction and complete renovations to
                interior upgrades, property refurbishment, and
                commercial fit-outs, our team helps clients transform
                their ideas and properties into functional, modern,
                and valuable spaces.
              </p>

              <p>
                Whether you are building from the ground up,
                renovating an existing property, preparing an
                investment for sale or rental, or upgrading your
                business premises, we provide end-to-end support
                from planning to completion.
              </p>

              <a
                className="button"
                href="/contact"
              >
                Get in Touch
                <Arrow />
              </a>

            </div>


            <div className="construction-intro-image">

              <img
                src={constructionImage}
                alt="Construction and development in Türkiye"
                loading="lazy"
              />

              <div className="construction-image-label">

                <span>
                  BUILD
                </span>

                <span>
                  RENOVATE
                </span>

                <span>
                  TRANSFORM
                </span>

              </div>

            </div>

          </div>


          {/* -------------------------------------------------
              CONSTRUCTION SERVICES
          ------------------------------------------------- */}

          <div className="construction-services">

            <div className="construction-section-heading">

              <p className="eyebrow">
                OUR CONSTRUCTION &amp; RENOVATION SERVICES
              </p>

              <h2>
                From Concept
                <br />
                <em>To Completion.</em>
              </h2>

            </div>


            {/* =================================================
                SERVICE GRID
            ================================================= */}

            <div className="construction-service-grid">


              {/* =================================================
                  01 — NEW CONSTRUCTION
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={constructionImage}
                    alt="New Construction"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    01
                  </span>

                  <h3>
                    New Construction
                  </h3>

                  <p>
                    We support construction projects from initial
                    planning through completion.
                  </p>

                  <ul>
                    <li>Residential construction</li>
                    <li>Villas and private residences</li>
                    <li>Apartment buildings</li>
                    <li>Commercial buildings</li>
                    <li>Offices and business premises</li>
                    <li>Retail and showroom spaces</li>
                    <li>Mixed-use developments</li>
                    <li>Investment and development projects</li>
                    <li>Construction project coordination</li>
                    <li>Contractor and supplier coordination</li>
                    <li>Quality and progress monitoring</li>
                  </ul>

                  <p className="construction-card-note">
                    We work with qualified professionals and project
                    partners to help ensure construction is carried
                    out according to agreed requirements,
                    specifications, and applicable regulations.
                  </p>

                </div>

              </article>


              {/* =================================================
                  02 — PROPERTY RENOVATION
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={realEstateImage}
                    alt="Property Renovation"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    02
                  </span>

                  <h3>
                    Property Renovation
                  </h3>

                  <p>
                    Transform an existing property into a modern,
                    comfortable, and functional space.
                  </p>

                  <ul>
                    <li>Complete property renovation</li>
                    <li>Apartment renovation</li>
                    <li>Villa renovation</li>
                    <li>Office renovation</li>
                    <li>Shop and retail renovation</li>
                    <li>Restaurant and café renovation</li>
                    <li>Hotel and accommodation renovation</li>
                    <li>Structural and functional upgrades</li>
                    <li>Interior refurbishment</li>
                    <li>Exterior refurbishment</li>
                    <li>Property modernization</li>
                  </ul>

                  <p className="construction-card-note">
                    Whether you require a small upgrade or a complete
                    transformation, we can coordinate the renovation
                    process according to your property&apos;s needs.
                  </p>

                </div>

              </article>


              {/* =================================================
                  03 — INTERIOR RENOVATION
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={aboutImage}
                    alt="Interior Renovation and Fit-Out"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    03
                  </span>

                  <h3>
                    Interior Renovation &amp; Fit-Out
                  </h3>

                  <p>
                    Create interiors that reflect your lifestyle,
                    business identity, or investment goals.
                  </p>

                  <ul>
                    <li>Interior planning</li>
                    <li>Space optimization</li>
                    <li>Partition and wall works</li>
                    <li>Flooring</li>
                    <li>Ceiling systems</li>
                    <li>Painting and decoration</li>
                    <li>Lighting solutions</li>
                    <li>Doors and windows</li>
                    <li>Kitchen renovation</li>
                    <li>Bathroom renovation</li>
                    <li>Built-in furniture</li>
                    <li>Custom furniture solutions</li>
                    <li>Electrical works</li>
                    <li>Plumbing works</li>
                    <li>Heating and cooling infrastructure</li>
                    <li>Commercial fit-outs</li>
                  </ul>

                  <p className="construction-card-note">
                    We focus on practical layouts, modern aesthetics,
                    quality materials, and efficient use of space.
                  </p>

                </div>

              </article>


              {/* =================================================
                  04 — KITCHEN & BATHROOM
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={realEstateImage}
                    alt="Kitchen and Bathroom Renovation"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    04
                  </span>

                  <h3>
                    Kitchen &amp; Bathroom Renovation
                  </h3>

                  <p>
                    Kitchens and bathrooms are among the most
                    important areas when improving a property.
                  </p>

                  <ul>
                    <li>Complete kitchen renovation</li>
                    <li>Kitchen cabinets and countertops</li>
                    <li>Flooring and wall finishes</li>
                    <li>Plumbing upgrades</li>
                    <li>Electrical upgrades</li>
                    <li>Lighting installation</li>
                    <li>Bathroom modernization</li>
                    <li>Shower and bathtub installation</li>
                    <li>Sanitaryware installation</li>
                    <li>Tiles and wall coverings</li>
                    <li>Storage solutions</li>
                    <li>Fixtures and accessories</li>
                  </ul>

                  <p className="construction-card-note">
                    Our goal is to create spaces that are modern,
                    functional, durable, and easy to maintain.
                  </p>

                </div>

              </article>


              {/* =================================================
                  05 — ELECTRICAL & PLUMBING
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={constructionImage}
                    alt="Electrical and plumbing services"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    05
                  </span>

                  <h3>
                    Electrical &amp; Plumbing
                  </h3>

                  <p>
                    Reliable electrical, plumbing, heating and
                    cooling infrastructure for residential and
                    commercial properties.
                  </p>

                  <ul>
                    <li>Electrical installations</li>
                    <li>Electrical system upgrades</li>
                    <li>Lighting installation</li>
                    <li>Power and wiring systems</li>
                    <li>Plumbing installation</li>
                    <li>Water supply systems</li>
                    <li>Drainage systems</li>
                    <li>Bathroom plumbing</li>
                    <li>Kitchen plumbing</li>
                    <li>Heating systems</li>
                    <li>Cooling infrastructure</li>
                    <li>Maintenance and repair works</li>
                  </ul>

                  <p className="construction-card-note">
                    We coordinate essential building systems to
                    ensure reliable, functional, and efficient
                    infrastructure throughout the property.
                  </p>

                </div>

              </article>


              {/* =================================================
                  06 — EXTERIOR & FACADE
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={constructionImage}
                    alt="Exterior and facade renovation"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    06
                  </span>

                  <h3>
                    Exterior &amp; Facade Renovation
                  </h3>

                  <p>
                    Improve the appearance, protection and energy
                    performance of your property with professional
                    exterior renovation solutions.
                  </p>

                  <ul>
                    <li>Facade renovation</li>
                    <li>Exterior painting</li>
                    <li>Thermal insulation</li>
                    <li>Waterproofing</li>
                    <li>Roof and terrace improvements</li>
                    <li>Window replacement</li>
                    <li>Door replacement</li>
                    <li>Exterior flooring</li>
                    <li>Balcony renovation</li>
                    <li>Cladding and exterior finishes</li>
                    <li>Weather protection</li>
                    <li>Building appearance improvements</li>
                  </ul>

                  <p className="construction-card-note">
                    Our exterior renovation solutions are designed
                    to improve durability, functionality, appearance,
                    and long-term property value.
                  </p>

                </div>

              </article>


              {/* =================================================
                  07 — COMMERCIAL FIT-OUT
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={constructionImage}
                    alt="Commercial fit-out"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    07
                  </span>

                  <h3>
                    Commercial Fit-Out
                  </h3>

                  <p>
                    Complete interior solutions for businesses
                    looking to create professional, functional,
                    and welcoming commercial spaces.
                  </p>

                  <ul>
                    <li>Office fit-outs</li>
                    <li>Retail and showroom fit-outs</li>
                    <li>Restaurant and café fit-outs</li>
                    <li>Clinic and healthcare spaces</li>
                    <li>Hotel and accommodation interiors</li>
                    <li>Reception areas</li>
                    <li>Workstations and office layouts</li>
                    <li>Partition systems</li>
                    <li>Lighting and electrical works</li>
                    <li>Flooring and ceiling systems</li>
                    <li>Custom furniture</li>
                    <li>Branding and interior finishes</li>
                  </ul>

                  <p className="construction-card-note">
                    We help businesses transform empty or outdated
                    spaces into practical environments designed
                    around their operational and commercial needs.
                  </p>

                </div>

              </article>


              {/* =================================================
                  08 — PROPERTY REFURBISHMENT
              ================================================= */}

              <article className="construction-service-card">

                <div className="construction-service-image">

                  <img
                    src={realEstateImage}
                    alt="Property refurbishment and investment preparation"
                    loading="lazy"
                  />

                </div>


                <div className="construction-service-content">

                  <span>
                    08
                  </span>

                  <h3>
                    Property Refurbishment &amp; Investment Preparation
                  </h3>

                  <p>
                    Preparing properties for sale, rental, investment,
                    or long-term use through strategic refurbishment
                    and modernization.
                  </p>

                  <ul>
                    <li>Property condition assessment</li>
                    <li>Renovation planning</li>
                    <li>Interior modernization</li>
                    <li>Exterior improvements</li>
                    <li>Kitchen and bathroom upgrades</li>
                    <li>Flooring and painting</li>
                    <li>Lighting improvements</li>
                    <li>Electrical and plumbing upgrades</li>
                    <li>Furniture and furnishing solutions</li>
                    <li>Rental preparation</li>
                    <li>Sale preparation</li>
                    <li>Investment property improvement</li>
                  </ul>

                  <p className="construction-card-note">
                    Our objective is to improve the property&apos;s
                    functionality, presentation, and market appeal
                    while supporting stronger long-term investment value.
                  </p>

                </div>

              </article>

            </div>


            {/* =================================================
                OUR PROCESS
                IMPORTANT: THIS IS OUTSIDE THE SERVICE GRID
            ================================================= */}

            <section className="construction-process">

              <div className="construction-process-heading">

                <p className="eyebrow">
                  OUR PROCESS
                </p>

                <h2>
                  From Vision
                  <span>
                    {' '}to Completion.
                  </span>
                </h2>

                <p>
                  We manage every stage of your project with a
                  structured, transparent and professional approach
                  — from the first consultation to the final handover.
                </p>

              </div>


              <div className="construction-process-grid">


                {/* 01 */}

                <article className="process-step">

                  <span className="process-number">
                    01
                  </span>

                  <div className="process-icon">

                    <MessageCircle
                      size={24}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3>
                    Consultation
                  </h3>

                  <p>
                    We understand your requirements, goals, budget
                    and expectations before defining the right
                    direction for your project.
                  </p>

                </article>


                {/* 02 */}

                <article className="process-step">

                  <span className="process-number">
                    02
                  </span>

                  <div className="process-icon">

                    <ClipboardList
                      size={24}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3>
                    Planning
                  </h3>

                  <p>
                    Our team develops the project scope, planning,
                    specifications and execution strategy to create
                    a clear roadmap.
                  </p>

                </article>


                {/* 03 */}

                <article className="process-step">

                  <span className="process-number">
                    03
                  </span>

                  <div className="process-icon">

                    <Building2
                      size={24}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3>
                    Construction
                  </h3>

                  <p>
                    Experienced professionals and trusted partners
                    carry out the work while maintaining quality,
                    efficiency and attention to detail.
                  </p>

                </article>


                {/* 04 */}

                <article className="process-step">

                  <span className="process-number">
                    04
                  </span>

                  <div className="process-icon">

                    <ShieldCheck
                      size={24}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3>
                    Quality Control
                  </h3>

                  <p>
                    Every stage is reviewed to ensure that the work
                    meets the agreed specifications, standards and
                    quality expectations.
                  </p>

                </article>


                {/* 05 */}

                <article className="process-step">

                  <span className="process-number">
                    05
                  </span>

                  <div className="process-icon">

                    <FileCheck2
                      size={24}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3>
                    Completion
                  </h3>

                  <p>
                    Once the project is complete, we carry out final
                    checks and ensure everything is ready for handover.
                  </p>

                </article>

              </div>

            </section>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES CTA
      ===================================================== */}

      <section className="services-cta">

        <div className="services-cta-map">

          <Globe2
            size={520}
            strokeWidth={0.5}
          />

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
            Contact Us
            <Arrow />
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
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        }
      );

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


      {/* =====================================================
          HERO
      ===================================================== */}

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


          {/* CITIZENSHIP BANNER */}

          <div className="citizenship-banner">

            <a href="/investment">

              <img
                src={citizenshipBanner}
                alt="Turkish Citizenship by Investment from USD 400,000"
              />

            </a>

          </div>


          {/* HERO ACTIONS */}

          <div className="hero-actions">

            <a
              className="button"
              href="/services"
            >
              Explore Our Services
              <Arrow />
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


      {/* =====================================================
          ABOUT
      ===================================================== */}

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
            loading="lazy"
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
            <em>
              World Business Point
            </em>
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
            About Us
            <Arrow />
          </a>

        </div>

      </section>


      {/* =====================================================
          CORE BUSINESSES
      ===================================================== */}

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
                <em>
                  — Not Just Advise
                </em>
              </h2>

            </div>

            <p>
              Our strength comes from real projects, real
              investments, and hands-on operational experience
              across Türkiye and international markets.
            </p>

          </div>


          <div className="service-grid">

            {coreServices.map((item, index) => (
              <ServiceCard
                key={index}
                item={item}
              />
            ))}

          </div>


          <div className="center">

            <a
              className="button"
              href="/services"
            >
              Explore All Services
              <Arrow />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONSULTANCY
      ===================================================== */}

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
                <em>
                  Real Experience
                </em>
              </h2>

            </div>

            <p>
              Alongside our business operations, we provide
              professional consultancy services based on
              real-world expertise.
            </p>

          </div>


          <div className="consultancy-grid">

            {consultancy.map((item, index) => (

              <article
                className="consult-card"
                key={index}
              >

                <img
                  src={item[2]}
                  alt={item[0]}
                  loading="lazy"
                />


                <div>

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {item[0]}
                  </h3>

                  <p>
                    {item[1]}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GLOBAL PRESENCE
      ===================================================== */}

      <section className="global">

        <div className="shell global-inner">

          <p className="eyebrow">
            GLOBAL PRESENCE · OPERATING WITHOUT BORDERS
          </p>

          <h2>
            We Actively Operate And
            <br />
            <em>
              Collaborate Across
            </em>
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
                    loading="lazy"
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


      {/* =====================================================
          HOME PROCESS
      ===================================================== */}

      <section className="section process shell">

        <div className="section-heading centered">

          <p className="eyebrow">
            HOW IT WORKS
          </p>

          <h2>
            A Simple And Transparent Process Designed To Guide
            <br />
            <em>
              You From Start To Success.
            </em>
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

                  <Icon
                    className="step-icon"
                  />

                  <span>
                    {item.title}
                  </span>

                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          HOME CONTACT
      ===================================================== */}

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
              <em>
                opportunity together.
              </em>
            </h2>

            <p>
              Whether you are looking to invest, study,
              relocate, or expand your business — we are
              here to guide every step.
            </p>


            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
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
              autoComplete="name"
              required
            />


            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp Number*"
              autoComplete="tel"
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              autoComplete="email"
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

              {homeStatus !== 'sending' && (
                <Arrow />
              )}

            </button>


            {homeStatus === 'success' && (
              <p
                className="form-success"
                aria-live="polite"
              >
                Thank you. Your message has been sent successfully.
              </p>
            )}


            {homeStatus === 'error' && (
              <p
                className="form-error"
                aria-live="polite"
              >
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


      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}

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


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/ozistanbul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/ozistanbulturkiye/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>


            {/* YOUTUBE */}

            <a
              href="https://www.youtube.com/@ozistanbulturkey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>


            {/* WHATSAPP */}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
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


        {/* OUR SERVICES */}

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


        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>
            Contact Info
          </h3>


          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <MessageCircle size={18} />

            <span>
              +90 546 727 07 77
            </span>

          </a>


          <a
            href="mailto:info@ozistanbul.com"
          >

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

              <strong>
                Global Reach
              </strong>

              Across Continents

            </span>

          </div>


          <div>

            <ShieldCheck size={22} />

            <span>

              <strong>
                Trusted Guidance
              </strong>

              Professional Support

            </span>

          </div>


          <div>

            <BarChart3 size={22} />

            <span>

              <strong>
                Real Opportunities
              </strong>

              For a Better Tomorrow

            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

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

            <span>
              |
            </span>

            <a href="#">
              Terms of Service
            </a>

            <span>
              |
            </span>

            <a href="#">
              Sitemap
            </a>

          </div>


          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >

            <ChevronUp
              size={21}
            />

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

  let page;

  if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/services') {
    page = <ServicesPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else if (path === '/investment') {
    page = <InvestmentPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}


/* =========================================================
   START APPLICATION
========================================================= */

createRoot(
  document.getElementById('root')
).render(
  <App />
);