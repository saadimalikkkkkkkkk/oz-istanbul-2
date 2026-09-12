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

import {
  UsersRound,
  ClipboardList,
  FileCheck2,
  FileUser,
  UserRoundCheck
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
    `${IMG}/2024/09/05-3.jpg`
  ],
  [
    'Business & Investment',
    'Helping investors start and grow businesses in Türkiye with expert support and strategic guidance.',
    `${IMG}/2024/09/06-2.jpg`
  ],
  [
    'Project Dev & Partnerships',
    'Collaborating on real estate and business projects with global partners for growth and success.',
    `${IMG}/2024/09/01-8.jpg`
  ],
  [
    'Global Business Operations',
    'Active across Türkiye, Europe, Middle East and Asia, building strong international partnerships.',
    `${IMG}/2024/09/02-7.jpg`
  ]
];


const consultancy = [
  [
    'Citizenship & Residency by Investment',
    'Professional consultancy for legal pathways in Türkiye, and global programs.',
    `${IMG}/2026/04/compressed_Citizenship-Residency-by-Investment.webp`
  ],
  [
    'Study in Türkiye and Abroad',
    'University placement, language education, and full student support services.',
    `${IMG}/2026/04/compressed_Study-in-Turkiye-and-Abroad.webp`
  ],
  [
    'Work & Job Opportunities Abroad',
    'Structured and legal employment solutions across different countries.',
    `${IMG}/2026/04/compressed_Work-Job-Opportunities-Abroad.webp`
  ],
  [
    'Company Formation & Business Setup',
    'Full support to start and grow businesses in Türkiye, Europe and globally.',
    `${IMG}/2026/04/compressed_Company-Formation-Business-Setup.webp`
  ],
  [
    'Investment & Project Consultancy',
    'Expert guidance for real estate, construction, and business investments.',
    `${IMG}/2026/04/compressed_Investment-Project-Opportunities.webp`
  ],
  [
    'Official Translation & Documentation Services',
    'Certified translation of diplomas, transcripts, passports and legal papers.',
    `${IMG}/2026/04/compressed_Legal-Translation-Documentation.webp`
  ]
];


/* =========================================================
   COMPONENTS
========================================================= */

function Arrow() {
  return <ArrowUpRight className="arrow" size={17} strokeWidth={2} />;
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
>
  <Menu size={27} strokeWidth={2} />
</button>


        <nav className={open ? 'open' : ''}>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/#businesses">
            Services <b>⌄</b>
          </a>

          <a href="/#contact">
            Contact
          </a>

        </nav>


        <a
          className="button nav-button"
          href="/#contact"
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
          onError={(e) =>
            e.currentTarget.parentElement.classList.add('fallback')
          }
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
function ScrollServiceList() {
  const servicesRef = useRef(null);

  const services = [
    'Construction & Development',
    'Real Estate Investment',
    'Education',
    'International Trade',
    'Tourism',
    'Immigration & Global Mobility',
    'Business & Investment',
  ];

  useEffect(() => {
    const items = servicesRef.current?.querySelectorAll(
      '.scroll-service'
    );

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
        threshold: 0.2,
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
              transitionDelay: `${index * 0.08}s`,
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

        <div className="about-page-hero-overlay"></div>

        <div className="about-page-hero-inner">

          <h1>
            ABOUT <span>ÖZ ISTANBUL</span>
          </h1>

        </div>

      </section>


      {/* =====================================================
         ABOUT INTRODUCTION
         IMAGE LEFT / TEXT RIGHT
      ===================================================== */}

      <section className="about-story">

        <div className="shell about-story-inner">

          {/* =================================================
             LEFT IMAGE
          ================================================= */}

          <div className="about-story-visual">

            <img
  className="about-main-image"
  src={aboutLeftImage}
  alt="Öz Istanbul Group"
/>

          </div>


          {/* =================================================
             RIGHT CONTENT
          ================================================= */}

          <div className="about-story-content">

            <p className="eyebrow">
              ABOUT ÖZ ISTANBUL GROUP
            </p>

            <h2>
              Welcome To Öz Istanbul
              <br />
              World Business Point
            </h2>


            <div className="about-story-text">

              <p>
                Öz İstanbul Group is a global business platform built
                on experience, execution, and results.
              </p>

              <p>
                Originally operating as OZ Group since 2016, the
                company has been active in Türkiye under the Öz İstanbul
                brand since 2018, supported by over 20 years of
                international experience across Dubai and global markets.
              </p>

              <p>
                We are not a traditional consultancy. We are active
                operators.
              </p>

              <p>
                We invest, manage, and grow businesses across education,
                immigration, real estate, tourism, and international
                trade — providing our clients with direct access to
                proven systems, strong networks, and real opportunities.
              </p>

              <p>
                Our approach is defined by clarity, transparency,
                and performance.
              </p>

              <p>
                Every service we deliver is designed to create real
                value and long-term success.
              </p>

              <p>
                With a global vision and a strong local presence,
                we empower individuals and businesses to expand
                beyond borders — confidently and securely.
              </p>

              <p>
                We don't follow opportunities. We create them.
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
   HOME PAGE
========================================================= */

function HomePage() {
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


          <div className="hero-actions">

            <a
              className="button"
              href="#contact"
            >
              Explore Our Services <Arrow />
            </a>

            <a
  className="play-link"
  href="#about"
>
  <i>
    <Play size={13} fill="currentColor" strokeWidth={0} />
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

            <a
              className="button outline"
              href="#consultancy"
            >
              Explore All Services <Arrow />
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

                  <a href="#contact">
                    Read More <Arrow />
                  </a>

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
            <em>Collaborate Across</em>
          </h2>

          <p className="global-description">
            Delivering opportunities, investments, and solutions
            on a global scale.
          </p>


          <div className="regions">


            <div className="region-card">

              <div className="region-icon">
                <img
                  src={turkeyIcon}
                  alt="Türkiye"
                />
              </div>

              <span className="region-name">
                Türkiye
              </span>

            </div>


            <div className="region-card">

              <div className="region-icon">
                <img
                  src={europeIcon}
                  alt="Europe"
                />
              </div>

              <span className="region-name">
                Europe
              </span>

            </div>


            <div className="region-card">

              <div className="region-icon">
                <img
                  src={uaeIcon}
                  alt="Middle East"
                />
              </div>

              <span className="region-name">
                Middle East
              </span>

            </div>


            <div className="region-card">

              <div className="region-icon">
                <img
                  src={asiaIcon}
                  alt="Asia"
                />
              </div>

              <span className="region-name">
                Asia
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
         PROCESS
      ===================================================== */}

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


      {/* =====================================================
         CONTACT
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
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            <input
              placeholder="Your Name*"
            />

            <input
              placeholder="WhatsApp Number*"
            />

            <input
              placeholder="Email Address*"
            />


            <select defaultValue="">

              <option
                value=""
                disabled
              >
                Choose a service
              </option>

              <option>
                Investment
              </option>

              <option>
                Education
              </option>

              <option>
                Business setup
              </option>

            </select>


            <button className="button">
              Send Message <Arrow />
            </button>

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
  return (
    <footer>

      <div className="shell footer-top">

        <Logo />


        <p>
          Real business. Real results.
          Global opportunities.
        </p>


        <div>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About Us
          </a>

          <a href="/#businesses">
            Services
          </a>

          <a href="/#contact">
            Contact Us
          </a>

        </div>

      </div>


      <div className="shell copyright">

        © 2026 Öz Istanbul World Business Point A.Ş.
        All Rights Reserved.

      </div>

    </footer>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <>
      <Header />

      {isAboutPage ? (
        <AboutPage />
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
