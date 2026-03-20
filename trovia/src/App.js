import React, { useState } from 'react'
import './App.css'
import Masonry from './components/Masonry/Masonry'
import ClickSpark from './ClickSpark'

const itinerary = [
  { day: 1, title: "Delhi → Kullu", desc: "Overnight Volvo bus journey. Scenic mountain roads begin.", emoji: "🚌" },
  { day: 2, title: "Arrival in Kullu → Manali", desc: "Hotel check-in, explore Mall Road, relax & enjoy local food.", emoji: "🌄" },
  { day: 3, title: "Manali Local Sightseeing", desc: "Hadimba Temple, Old Manali cafes, riverside walk.", emoji: "🌲" },
  { day: 4, title: "Manali → Solang Valley", desc: "Paragliding, zipline, snow views. Overnight stay.", emoji: "🏔️" },
  { day: 5, title: "Solang → Jobra → Chika Camp", desc: "Trek starts (~2–3 hrs). First campsite experience.", emoji: "🥾" },
  { day: 6, title: "Chika → Balu Ka Ghera", desc: "Riverside trekking, open valley landscapes, camp under stars.", emoji: "🌿" },
  { day: 7, title: "Hampta Pass Crossing 🔥", desc: "Cross Hampta Pass — snow, dramatic views, descend to Shea Goru.", emoji: "❄️" },
  { day: 8, title: "Shea Goru → Chandratal Lake", desc: "Visit the Moon Lake 🌙 — one of the most beautiful spots on earth.", emoji: "🌊" },
  { day: 9, title: "Return to Manali", desc: "Drive back, rest, shopping & memories.", emoji: "🔙" },
  { day: 10, title: "Manali → Delhi", desc: "Return journey. Trip ends with lifetime memories.", emoji: "🏁" },
]

const included = [
  "Volvo AC bus (Delhi ↔ Manali)",
  "9 Nights accommodation (hotel + camps)",
  "All meals during trek",
  "Expert trek guide & support staff",
  "Camping equipment & tents",
  "First aid & safety gear",
  "Chandratal Lake visit",
  "Forest permits & fees",
]

const excluded = [
  "Personal travel insurance",
  "Adventure activities (paragliding, zipline)",
  "Personal expenses & tips",
  "Meals in Manali (Days 2–4)",
  "Any medical emergencies",
]

const masonryItems = [
  { id: "1",  img: "https://picsum.photos/id/1015/600/900", url: "#", height: 400 },
  { id: "2",  img: "https://picsum.photos/id/1011/600/750", url: "#", height: 250 },
  { id: "3",  img: "https://picsum.photos/id/1020/600/800", url: "#", height: 600 },
  { id: "4",  img: "https://picsum.photos/id/1018/600/700", url: "#", height: 350 },
  { id: "5",  img: "https://picsum.photos/id/1033/600/850", url: "#", height: 500 },
  { id: "6",  img: "https://picsum.photos/id/1043/600/600", url: "#", height: 300 },
  { id: "7",  img: "https://picsum.photos/id/1047/600/750", url: "#", height: 420 },
  { id: "8",  img: "https://picsum.photos/id/1055/600/800", url: "#", height: 380 },
  { id: "9",  img: "https://picsum.photos/id/1060/600/700", url: "#", height: 420 },
  { id: "10", img: "https://picsum.photos/id/1067/600/900", url: "#", height: 600 },
  { id: "11", img: "https://picsum.photos/id/1074/600/750", url: "#", height: 450 },
  { id: "12", img: "https://picsum.photos/id/1080/600/800", url: "#", height: 520 },
  { id: "13", img: "https://picsum.photos/id/1015/600/900", url: "#", height: 400 },
  { id: "14", img: "https://picsum.photos/id/1011/600/750", url: "#", height: 400 },
  { id: "15", img: "https://picsum.photos/id/1020/600/800", url: "#", height: 400 },
]

export default function App() {
  const [openDay, setOpenDay] = useState(null)

  return (
    <ClickSpark
      sparkColor='#00FFFF'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">🏔️ Trovia</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#includes">Includes</a>
          <a href="#book" className="nav-cta">Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-masonry-bg">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">⭐ Most Popular Trek 2025</div>
          <h1 className="hero-title">Kullu Manali<br /><span>& Hampta Pass</span></h1>
          <p className="hero-sub">Chase the mountains, live the adventure</p>
          <div className="hero-stats">
            <div className="stat"><span>📅</span><strong>10 Days</strong><small>Duration</small></div>
            <div className="stat"><span>📍</span><strong>Himachal Pradesh</strong><small>Location</small></div>
            <div className="stat"><span>💰</span><strong>₹7,999</strong><small>Per Person</small></div>
          </div>
          <a href="#book" className="hero-btn">Explore & Book →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-text">
            <h2>About This Trek</h2>
            <p>
              The <strong>Kullu Manali & Hampta Pass Trek</strong> is one of India's most iconic Himalayan adventures.
              Starting from the lush green valleys of Kullu and Manali, this journey takes you through dense forests,
              alpine meadows, and dramatic snow-covered passes before ending at the ethereal <strong>Chandratal Lake</strong> — the Moon Lake.
            </p>
            <p>
              Whether you're a first-time trekker or a seasoned adventurer, this trip offers the perfect blend of
              culture, thrill, and natural beauty. From paragliding in Solang Valley to camping under a blanket of stars,
              every day brings a new unforgettable experience.
            </p>
            <div className="highlights">
              <div className="highlight-item">🌙 Chandratal Lake Visit</div>
              <div className="highlight-item">❄️ Cross Hampta Pass</div>
              <div className="highlight-item">🪂 Paragliding in Solang</div>
              <div className="highlight-item">⛺ Star Camp Nights</div>
              <div className="highlight-item">🛕 Hadimba Temple</div>
              <div className="highlight-item">🍜 Local Himalayan Food</div>
            </div>
          </div>
          <div className="about-card">
            <h3>Quick Info</h3>
            <ul>
              <li><span>🗓️ Duration</span><strong>10 Days / 9 Nights</strong></li>
              <li><span>📍 Region</span><strong>Himachal Pradesh</strong></li>
              <li><span>🧗 Difficulty</span><strong>Moderate</strong></li>
              <li><span>📏 Max Altitude</span><strong>4,270m (Hampta Pass)</strong></li>
              <li><span>👥 Group Size</span><strong>8 – 20 People</strong></li>
              <li><span>🌡️ Best Season</span><strong>June – September</strong></li>
              <li><span>💰 Price</span><strong>₹14,999 / person</strong></li>
            </ul>
            <a href="#book" className="quick-book-btn">Reserve Your Spot</a>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="itinerary" id="itinerary">
        <div className="section-inner">
          <h2>Day-by-Day Itinerary</h2>
          <p className="section-sub">Every day is a new adventure — here's what to expect</p>
          <div className="timeline">
            {itinerary.map((item) => (
              <div
                key={item.day}
                className={`timeline-item ${openDay === item.day ? 'open' : ''}`}
                onClick={() => setOpenDay(openDay === item.day ? null : item.day)}
              >
                <div className="timeline-header">
                  <div className="timeline-left">
                    <span className="day-emoji">{item.emoji}</span>
                    <div>
                      <span className="day-label">Day {item.day}</span>
                      <span className="day-title">{item.title}</span>
                    </div>
                  </div>
                  <span className="toggle-icon">{openDay === item.day ? '▲' : '▼'}</span>
                </div>
                {openDay === item.day && (
                  <div className="timeline-body">{item.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES / EXCLUDES */}
      <section className="includes" id="includes">
        <div className="section-inner">
          <h2>What's Included</h2>
          <p className="section-sub">Everything you need for a safe and memorable trek</p>
          <div className="inc-grid">
            <div className="inc-box">
              <h3>✅ Included</h3>
              <ul>{included.map((i) => <li key={i}>✔ {i}</li>)}</ul>
            </div>
            <div className="inc-box excluded">
              <h3>❌ Not Included</h3>
              <ul>{excluded.map((i) => <li key={i}>✘ {i}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="book">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready for the Adventure?</h2>
            <p>Limited spots available. Book now and secure your place on this epic Himalayan journey.</p>
            <div className="cta-price">₹14,999 <span>per person</span></div>
          </div>
          <div className="cta-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>Select Batch</option>
              <option>June 2025</option>
              <option>July 2025</option>
              <option>August 2025</option>
              <option>September 2025</option>
            </select>
            <button className="cta-btn">🏔️ Book My Trek Now</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>🏔️ <strong>Trovia</strong> — Explore the Himalayas with us</p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>© 2025 Trovia. All rights reserved.</p>
      </footer>

    </ClickSpark>
  )
}
