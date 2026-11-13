"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Check,
  ChevronDown, Cross, Heart, Instagram, Menu, Play, Radio, Send, X,
  Youtube, Facebook, MapPin, Phone, Mail, Clock3, Sparkles
} from "lucide-react";
import { events, gallery, sermons, site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } }
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function ChurchSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prayerName, setPrayerName] = useState("");
  const [prayerMessage, setPrayerMessage] = useState("");
  const [prayerStatus, setPrayerStatus] = useState("");

  const nav = [
    ["Our story", "#about"], ["Sermons", "#sermons"], ["Gatherings", "#events"],
    ["Gallery", "#gallery"], ["Leadership", "#leadership"]
  ];

  function submitPrayer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.prayerFormUrl) {
      setPrayerStatus("The church prayer-request form has not been connected yet. Please use the church's verified contact details once they are added.");
      return;
    }
    setPrayerStatus("Your prayer request is ready to be sent. Please use the connected church form.");
    window.open(site.prayerFormUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        A place to grow in faith, hope and the life of Christ
        <a href="#about">Discover our church <ArrowUpRight size={13} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Divine Life home">
          <span className="brand-mark"><Cross size={23} strokeWidth={1.45} /></span>
          <span><strong>DIVINE LIFE</strong><small>GIVING CHURCH WORLDWIDE</small></span>
        </a>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#visit">Plan a visit <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <div className="mobile-nav">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#visit" onClick={() => setMenuOpen(false)}>Plan a visit <ArrowUpRight size={15} /></a>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="eyebrow light"><span /> CHRIST COVENANT CHURCH</div>
            <h1>A life shaped<br />by <em>His presence.</em></h1>
            <p>A family of faith, growing together in the Word, living in love, and sharing the life of Christ with the world.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#about">Discover our church <ArrowUpRight size={16} /></a>
              <a className="play-link" href="#sermons"><span><Play size={14} fill="currentColor" /></span> Explore messages</a>
            </div>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span>FAITH · FELLOWSHIP · PURPOSE</span>
          <a href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </div>
        <div className="hero-vertical">DIVINE LIFE — CHRIST COVENANT CHURCH</div>
      </section>

      <section className="welcome section-pad" id="about">
        <div className="welcome-left">
          <SectionLabel>WELCOME HOME</SectionLabel>
          <h2>More than a place<br />to gather. <em>A place<br />to belong.</em></h2>
        </div>
        <div className="welcome-right">
          <p className="lead">We believe the life of Christ transforms hearts, strengthens families and gives every person a place in God's story.</p>
          <p>At Divine Life - Giving Church Worldwide, our desire is to create a welcoming community where people can encounter God, discover purpose and grow through the truth of His Word.</p>
          <a className="text-link" href="#visit">Come worship with us <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-mark">“</div>
        <blockquote>Rooted in Christ. Growing in grace.<br /><em>Giving His life to the world.</em></blockquote>
        <span>THE HEART OF DIVINE LIFE</span>
      </section>

      <section className="sermons section-pad" id="sermons">
        <div className="section-heading">
          <div><SectionLabel>THE WORD THAT BUILDS</SectionLabel><h2>Messages for your <em>journey.</em></h2></div>
          <a className="text-link" href="#livestream">Explore the message library <ArrowUpRight size={16} /></a>
        </div>
        <div className="sermon-grid">
          {sermons.map((sermon, i) => (
            <article className="sermon-card" key={sermon.title}>
              <div className="sermon-image" style={{ backgroundImage: `url(${sermon.image})` }}>
                <span className="sermon-number">0{i + 1}</span>
                <span className="sermon-play"><Play size={17} fill="currentColor" /></span>
              </div>
              <div className="sermon-meta">{sermon.category} <span>·</span> {sermon.date}</div>
              <h3>{sermon.title}</h3>
              <div className="sermon-footer"><span>{sermon.speaker}</span><span>{sermon.duration}</span></div>
              {sermon.videoUrl ? <a className="card-hit" href={sermon.videoUrl} target="_blank" rel="noreferrer" aria-label={`Watch ${sermon.title}`} /> : null}
            </article>
          ))}
        </div>
        <p className="content-note">Featured sermon spaces are ready for the church's approved video links and teaching archive.</p>
      </section>

      <section className="events section-pad" id="events">
        <div className="events-top">
          <div><SectionLabel>GROW TOGETHER</SectionLabel><h2>Life is better<br /><em>in community.</em></h2></div>
          <p>There is a place for you here. Join us as we worship, learn, pray and encourage one another in faith.</p>
        </div>
        <div className="event-list">
          {events.map((event, i) => (
            <article className="event-row" key={event.title}>
              <div className="event-index">0{i + 1}</div>
              <div className="event-date"><strong>{event.day}</strong><span>{event.time}</span></div>
              <div className="event-info"><h3>{event.title}</h3><p>{event.description}</p></div>
              <span className="event-tag">{event.tag}</span>
              <ArrowUpRight className="event-arrow" size={20} />
            </article>
          ))}
        </div>
        <p className="content-note">Service times and programme dates should be confirmed by the church before publication.</p>
      </section>

      <section className="leadership" id="leadership">
        <div className="leadership-photo" />
        <div className="leadership-content">
          <SectionLabel>SPIRITUAL LEADERSHIP</SectionLabel>
          <h2>Led with faith.<br /><em>Built on the Word.</em></h2>
          <p className="lead">Apostle Uzoh Atisele</p>
          <p>We are grateful for the spiritual leadership and guidance that help our church family stay grounded in Christ and committed to the work of the Kingdom.</p>
          <a className="text-link" href="#visit">Connect with the church <ArrowUpRight size={16} /></a>
          <span className="leader-caption">APOSTLE UZOH ATISELE · CHRIST COVENANT CHURCH</span>
        </div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading">
          <div><SectionLabel>OUR CHURCH FAMILY</SectionLabel><h2>Moments that bring<br /><em>us together.</em></h2></div>
          <p className="gallery-intro">A glimpse of worship, fellowship and life in community. Replace these sample images with photographs from your church.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((src, i) => <div className={`gallery-photo gallery-photo-${i + 1}`} key={src} style={{ backgroundImage: `url(${src})` }} />)}
        </div>
      </section>

      <section className="livestream" id="livestream">
        <div className="live-icon"><Radio size={23} /></div>
        <SectionLabel>WORSHIP WITH US, WHEREVER YOU ARE</SectionLabel>
        <h2>Stay connected<br />to the <em>gathering.</em></h2>
        <p>Join the church online for worship and the Word. The official livestream destination will appear here once connected.</p>
        {site.livestreamUrl ? <a className="button button-gold" href={site.livestreamUrl} target="_blank" rel="noreferrer"><Play size={15} fill="currentColor" /> Watch live</a> : <span className="setup-pill">Official livestream link to be added</span>}
      </section>

      <section className="giving section-pad" id="giving">
        <div className="giving-symbol"><Heart size={27} strokeWidth={1.3} /></div>
        <div className="giving-copy">
          <SectionLabel>GENEROSITY & WORSHIP</SectionLabel>
          <h2>Giving is an expression<br />of <em>the heart.</em></h2>
          <p>Your generosity supports the work of the church and helps us serve people and communities. Use only the church's verified giving channel.</p>
        </div>
        <div className="giving-action">
          {site.givingUrl ? <a className="button button-dark" href={site.givingUrl} target="_blank" rel="noreferrer">Give securely <ArrowUpRight size={16} /></a> : <span className="setup-pill dark-pill">Verified giving link to be added</span>}
          <small>Giving details will be published after confirmation by church leadership.</small>
        </div>
      </section>

      <section className="prayer section-pad" id="prayer">
        <div className="prayer-copy">
          <SectionLabel>WE WOULD LOVE TO PRAY WITH YOU</SectionLabel>
          <h2>You don't have<br />to carry it <em>alone.</em></h2>
          <p>Whatever is on your heart, prayer matters. Share your request with the church when the official prayer channel is connected.</p>
          <div className="prayer-verse">“Cast all your anxiety on him because he cares for you.” <span>1 Peter 5:7</span></div>
        </div>
        <form className="prayer-form" onSubmit={submitPrayer}>
          <label>Your name<input value={prayerName} onChange={e => setPrayerName(e.target.value)} placeholder="How should we address you?" required /></label>
          <label>Your prayer request<textarea value={prayerMessage} onChange={e => setPrayerMessage(e.target.value)} placeholder="Share what you would like us to pray about..." rows={4} required /></label>
          <button className="button button-dark" type="submit">Send prayer request <Send size={15} /></button>
          {prayerStatus && <p className="form-status" role="status">{prayerStatus}</p>}
          <small>Your request is not transmitted or stored until the church connects an official prayer form.</small>
        </form>
      </section>

      <section className="visit" id="visit">
        <div className="visit-bg" />
        <div className="visit-content">
          <SectionLabel>YOUR PLACE IS HERE</SectionLabel>
          <h2>We can't wait<br />to <em>welcome you.</em></h2>
          <p>Whether it's your first visit or you're finding your way back, there's room for you in our church family.</p>
          <a className="button button-gold" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home">
              <span className="brand-mark"><Cross size={23} strokeWidth={1.45} /></span>
              <span><strong>DIVINE LIFE</strong><small>GIVING CHURCH WORLDWIDE</small></span>
            </a>
            <p>Christ Covenant Church<br />A community growing in the life of Christ.</p>
          </div>
          <div className="footer-col"><strong>EXPLORE</strong><a href="#about">Our story</a><a href="#sermons">Sermons</a><a href="#events">Gatherings</a><a href="#gallery">Gallery</a></div>
          <div className="footer-col"><strong>GET INVOLVED</strong><a href="#leadership">Leadership</a><a href="#prayer">Prayer request</a><a href="#giving">Giving</a><a href="#livestream">Watch online</a></div>
          <div className="footer-col" id="contact-details"><strong>CONTACT</strong>
            {site.address ? <span><MapPin size={14} />{site.address}</span> : <span className="muted-contact">Church address to be added</span>}
            {site.phone ? <a href={`tel:${site.phone}`}><Phone size={14} />{site.phone}</a> : <span className="muted-contact">Phone to be added</span>}
            {site.email ? <a href={`mailto:${site.email}`}><Mail size={14} />{site.email}</a> : <span className="muted-contact">Email to be added</span>}
            <div className="socials">
              {site.socialLinks.facebook && <a href={site.socialLinks.facebook} aria-label="Facebook"><Facebook size={16} /></a>}
              {site.socialLinks.instagram && <a href={site.socialLinks.instagram} aria-label="Instagram"><Instagram size={16} /></a>}
              {site.socialLinks.youtube && <a href={site.socialLinks.youtube} aria-label="YouTube"><Youtube size={16} /></a>}
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Divine Life - Giving Church Worldwide</span><span>CHRIST COVENANT CHURCH · BUILT ON FAITH</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}