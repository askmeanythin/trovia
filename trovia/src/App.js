import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import ElectricBorder from './ElectricBorder'

import './App.css'
import Masonry from './components/Masonry/Masonry'
import ClickSpark from './ClickSpark'
import TextType from './TextType'


import img1 from './components/phots/1.jpg'
import img2 from './components/phots/2.jpg'
import img3 from './components/phots/3.jpg'
import img4 from './components/phots/4.jpg'
import img5 from './components/phots/5.jpg'
import img6 from './components/phots/6.jpg'
import img7 from './components/phots/7.jpg'
import img8 from './components/phots/8.jpg'
import img9 from './components/phots/9.jpg'
import img10 from './components/phots/10.jpg'
import img11 from './components/phots/11.jpg'
import img12 from './components/phots/12.jpg'
import img13 from './components/phots/13.jpg'
import video1 from './components/phots/video1.mp4'
import routeMap from './components/phots/routemap.jpg'


gsap.registerPlugin(MotionPathPlugin)


const itinerary = [
  { day: 1, title: 'Delhi → Kullu', desc: 'Overnight Volvo bus journey. Scenic mountain roads begin.', emoji: '🚌' },
  { day: 2, title: 'Arrival in Kullu → Manali', desc: 'Hotel check-in, explore Mall Road, relax & enjoy local food.', emoji: '🌄' },
  { day: 3, title: 'Manali Local Sightseeing', desc: 'Hadimba Temple, Old Manali cafes, riverside walk.', emoji: '🌲' },
  { day: 4, title: 'Manali → Solang Valley', desc: 'Paragliding, zipline, snow views. Overnight stay.', emoji: '🏔️' },
  { day: 5, title: 'Solang → Jobra → Chika Camp', desc: 'Trek starts (~2–3 hrs). First campsite experience.', emoji: '🥾' },
  { day: 6, title: 'Chika → Balu Ka Ghera', desc: 'Riverside trekking, open valley landscapes, camp under stars.', emoji: '🌿' },
  { day: 7, title: 'Hampta Pass Crossing 🔥', desc: 'Cross Hampta Pass — snow, dramatic views, descend to Shea Goru.', emoji: '❄️' },
  { day: 8, title: 'Shea Goru → Chandratal Lake', desc: 'Visit the Moon Lake 🌙 — one of the most beautiful spots on earth.', emoji: '🌊' },
  { day: 9, title: 'Return to Manali', desc: 'Drive back, rest, shopping & memories.', emoji: '🔙' },
  { day: 10, title: 'Manali → Delhi', desc: 'Return journey. Trip ends with lifetime memories.', emoji: '🏁' },
]

const included = [
  'Volvo AC bus (Delhi ↔ Manali)',
  '9 Nights accommodation (hotel + camps)',
  'All meals during trek',
  'Expert trek guide & support staff',
  'Camping equipment & tents',
  'First aid & safety gear',
  'Chandratal Lake visit',
  'Forest permits & fees',
]

const excluded = [
  'Personal travel insurance',
  'Adventure activities (paragliding, zipline)',
  'Personal expenses & tips',
  'Meals in Manali (Days 2–4)',
  'Any medical emergencies',
]

const masonryItems = [
  { id: '1', img: img1, url: '#', height: 400 },
  { id: '2', img: img2, url: '#', height: 300 },
  { id: '3', img: img3, url: '#', height: 600 },
  { id: '4', img: img4, url: '#', height: 350 },
  { id: '5', img: img5, url: '#', height: 500 },
  { id: '6', img: img6, url: '#', height: 300 },
  { id: '7', img: img7, url: '#', height: 420 },
  { id: '8', img: img8, url: '#', height: 380 },
  { id: '9', type: 'video', src: video1, height: 420 },
  { id: '10', img: img10, url: '#', height: 600 },
  { id: '11', img: img11, url: '#', height: 450 },
  { id: '12', img: img12, url: '#', height: 520 },
  { id: '13', img: img13, url: '#', height: 400 },
  { id: '14', img: 'https://picsum.photos/id/1011/600/750', url: '#', height: 400 },
  { id: '15', img: 'https://picsum.photos/id/1020/600/800', url: '#', height: 400 },
]

// interactive places for the map
const MAP_PLACES = [
{
  id: 'delhi',
  name: 'Delhi',
  day: 'Day 1',
  emoji: '🏙️',
  desc: [
    '🕒 Time: Evening departure',
    '🎯 Activity: Group meetup, briefing, board overnight Volvo',
    '🍜 Food: Dinner at pickup point or snacks',
    '✨ Vibe: City hustle to mountain journey'
  ],
  x: '5%',
  y: '49%'
},

{
  id: 'kullu',
  name: 'Kullu',
  day: 'Day 2',
  emoji: '🌄',
  desc: [
    '🕒 Time: Morning arrival',
    '🎯 Activity: Scenic drive, Beas river views',
    '🍜 Food: Paratha + chai at local dhaba',
    '✨ Vibe: Fresh and peaceful valley'
  ],
  x: '24%',
  y: '39%'
},

{
  id: 'manali',
  name: 'Manali',
  day: 'Day 2-3',
  emoji: '🏔️',
  desc: [
    '🕒 Time: Full day exploration',
    '🎯 Activity: Mall Road, cafés, Hadimba Temple',
    '🍜 Food: Momos, pizza, trout, coffee',
    '✨ Vibe: Chill + lively town'
  ],
  x: '36%',
  y: '45%'
},

{
  id: 'solang',
  name: 'Solang Valley',
  day: 'Day 4',
  emoji: '🪂',
  desc: [
    '🕒 Time: Morning to afternoon',
    '🎯 Activity: Paragliding, zipline, snow fun',
    '🍜 Food: Maggi, tea, snacks',
    '✨ Vibe: Adventure and thrill'
  ],
  x: '47%',
  y: '30%'
},

{
  id: 'jobra',
  name: 'Jobra',
  day: 'Day 5',
  emoji: '🥾',
  desc: [
    '🕒 Time: Morning start',
    '🎯 Activity: Drive + trek to Chika',
    '🍜 Food: Packed lunch',
    '✨ Vibe: Trek begins'
  ],
  x: '55%',
  y: '50%'
},

{
  id: 'chika',
  name: 'Chika Camp',
  day: 'Day 5',
  emoji: '⛺',
  desc: [
    '🕒 Time: Evening',
    '🎯 Activity: Camp setup, relax, stargazing',
    '🍜 Food: Hot dinner',
    '✨ Vibe: Peaceful camping'
  ],
  x: '65%',
  y: '50%'
},

{
  id: 'balu',
  name: 'Balu Ka Ghera',
  day: 'Day 6',
  emoji: '🌿',
  desc: [
    '🕒 Time: Full day trek',
    '🎯 Activity: River crossings, valley walk',
    '🍜 Food: Packed + campsite meals',
    '✨ Vibe: Raw nature'
  ],
  x: '65%',
  y: '30%'
},

{
  id: 'hampta',
  name: 'Hampta Pass',
  day: 'Day 7',
  emoji: '❄️',
  desc: [
    '🕒 Time: Early morning',
    '🎯 Activity: Snow trek, reach summit',
    '🍜 Food: Energy snacks',
    '✨ Vibe: Tough but epic'
  ],
  x: '75%',
  y: '10%'
},

{
  id: 'sheagoru',
  name: 'Shea Goru',
  day: 'Day 7-8',
  emoji: '🏞️',
  desc: [
    '🕒 Time: Afternoon',
    '🎯 Activity: Descend into Lahaul valley',
    '🍜 Food: Warm camp meals',
    '✨ Vibe: Cold desert feel'
  ],
  x: '75%',
  y: '25%'
},

{
  id: 'chandratal',
  name: 'Chandratal Lake',
  day: 'Day 8',
  emoji: '🌙',
  desc: [
    '🕒 Time: Morning visit',
    '🎯 Activity: Walk, photos, relax',
    '🍜 Food: Light meals',
    '✨ Vibe: Magical highlight'
  ],
  x: '92%',
  y: '60%'
}
];

const PLACE_ORDER = ['delhi','kullu','manali','solang','jobra','chika','balu','hampta','sheagoru','chandratal']



export default function App() {
  const [activePlace, setActivePlace] = useState(null)
  const carRef = useRef(null)
  const carProgressRef = useRef(0)
  const handlePlaceHover = (place) => {
  setActivePlace(place)
  const idx = PLACE_ORDER.indexOf(place.id)
  if (idx === -1 || !carRef.current) return
  const targetProgress = idx / (PLACE_ORDER.length - 1)

  gsap.to({ val: carProgressRef.current }, {
    val: targetProgress,
    duration: 1.4,
    ease: 'power2.inOut',
    onUpdate() {
      carProgressRef.current = this.targets()[0].val
      gsap.set(carRef.current, {
        motionPath: {
          path: '#routePath',
          align: '#routePath',
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: this.targets()[0].val,
        }
      })
    }
  })
}





  return (
    <ClickSpark
      sparkColor="#00FFFF"
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
          <a href="#book" className="nav-cta">
            Book Now
          </a>
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
          <h1 className="hero-title">Kullu Manali</h1>
          <p className="hero-sub">Chase the mountains, live the adventure</p>
          <div className="hero-stats">
            <div className="stat"><span>📅</span><strong>10 Days</strong><small>Duration</small></div>
            <div className="stat"><span>📍</span><strong>Himachal Pradesh</strong><small>Location</small></div>
            <div className="stat"><span>💰</span><strong>₹7,999</strong><small>Per Person</small></div>
          </div>
          <div className="hero-buttons">
            <a href="#itinerary" className="hero-btn explore-btn">Explore</a>
            <a href="#book" className="hero-btn book-btn">Book Now</a>
          </div>
        </div>
      </section>



      {/* ABOUT */}
<section className="about" id="about">
  <div className="section-inner">

    {/* LEFT: Trip Info */}
    <div className="about-text">
      <div className="about-badge">🏔️ Featured Trek</div><br></br>
      
      <TextType
        as="h2"
        text={[
          "About The Trek",
          "About The Leader",
        ]}
        typingSpeed={55}
        deletingSpeed={30}
        pauseDuration={2000}
        showCursor
        cursorCharacter="|"
        cursorBlinkDuration={0.5}
        loop
        className="about-typetext"
      />
      <p>
        The <strong>Kullu Manali &amp; Hampta Pass Trek</strong> is one of India's most iconic
        Himalayan adventures. Starting from the lush green valleys of Kullu and Manali, this journey
        takes you through dense forests, alpine meadows, and dramatic snow-covered passes before
        ending at the ethereal <strong>Chandratal Lake</strong> — the Moon Lake.
      </p>
      <p>
        Whether you're a first-time trekker or a seasoned adventurer, this trip offers the perfect
        blend of culture, thrill, and natural beauty. From paragliding in Solang Valley to camping
        under a blanket of stars, every day brings a new unforgettable experience.
      </p>

      {/* Highlights */}
      <div className="highlights">
        <div className="highlight-item">🌙 Chandratal Lake Visit</div>
        <div className="highlight-item">❄️ Cross Hampta Pass</div>
        <div className="highlight-item">🪂 Paragliding in Solang</div>
        <div className="highlight-item">⛺ Star Camp Nights</div>
        <div className="highlight-item">🛕 Hadimba Temple</div>
        <div className="highlight-item">🍜 Local Himalayan Food</div>
      </div>

      {/* Trip Stats Row */}
      <div className="about-stats-row">
        <div className="about-stat">
          <span className="about-stat-num">10</span>
          <span className="about-stat-label">Days</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-num">4,270m</span>
          <span className="about-stat-label">Max Altitude</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-num">65km</span>
          <span className="about-stat-label">Trek Distance</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-num">20</span>
          <span className="about-stat-label">Max Group</span>
        </div>
      </div>

      {/* Quick Info List */}
      <div className="about-quick-info">
        <div className="quick-info-item"><span>🗓️</span><div><label>Duration</label><strong>10 Days / 9 Nights</strong></div></div>
        <div className="quick-info-item"><span>📍</span><div><label>Region</label><strong>Himachal Pradesh, India</strong></div></div>
        <div className="quick-info-item"><span>🧗</span><div><label>Difficulty</label><strong>Moderate</strong></div></div>
        <div className="quick-info-item"><span>🌡️</span><div><label>Best Season</label><strong>June – September</strong></div></div>
        <div className="quick-info-item"><span>👥</span><div><label>Group Size</label><strong>8 – 20 People</strong></div></div>
        <div className="quick-info-item"><span>💰</span><div><label>Price</label><strong>₹14,999 / person</strong></div></div>
        <div className="quick-info-item"><span>🚌</span><div><label>Transport</label><strong>Volvo AC Bus (Delhi ↔ Manali)</strong></div></div>
        <div className="quick-info-item"><span>🏕️</span><div><label>Stay</label><strong>Hotels + Mountain Camps</strong></div></div>
      </div>
    </div>

    {/* RIGHT: Trip Leader Card */}
    <ElectricBorder
      color="#8ab8d8"
      speed={1.2}
      chaos={0.15}
      thickness={2}
      style={{ borderRadius: '24px' , padding: '8px',}}
    >
      <div className="leader-card">

        <div className="leader-card-top">
          <div className="leader-avatar-wrap">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Trip Leader"
              className="leader-avatar"
            />
            <span className="leader-verified">✔ Verified</span>
          </div>
          <div className="leader-intro">
            <div className="leader-role">Your Trip Leader</div>
            <h3 className="leader-name">Arjun Thakur</h3>
            <div className="leader-location">📍 Manali, Himachal Pradesh</div>
            <div className="leader-rating">
              ⭐⭐⭐⭐⭐ <span>4.9 / 5</span>
              <small>(312 reviews)</small>
            </div>
          </div>
        </div>

        <p className="leader-bio">
          Born and raised in the Himalayas, Arjun has spent over 12 years guiding trekkers across
          Himachal Pradesh and Ladakh. His calm demeanor, deep knowledge of mountain terrain, and
          genuine care for every group member makes him the backbone of every Trovia expedition.
        </p>

        {/* Leader Stats */}
        <div className="leader-stats">
          <div className="leader-stat">
            <span className="leader-stat-num">180+</span>
            <span className="leader-stat-label">Treks Led</span>
          </div>
          <div className="leader-stat">
            <span className="leader-stat-num">2,400+</span>
            <span className="leader-stat-label">Trekkers</span>
          </div>
          <div className="leader-stat">
            <span className="leader-stat-num">12 yrs</span>
            <span className="leader-stat-label">Experience</span>
          </div>
          <div className="leader-stat">
            <span className="leader-stat-num">0</span>
            <span className="leader-stat-label">Incidents</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="leader-certs">
          <h4>🎖️ Certifications & Training</h4>
          <ul>
            <li>🏔️ Basic & Advanced Mountaineering (NIM Uttarkashi)</li>
            <li>🏥 Wilderness First Responder (WFR Certified)</li>
            <li>🗺️ High Altitude Trekking Guide (IMF)</li>
            <li>🌦️ Mountain Weather & Safety Training</li>
            <li>🧗 Rock Climbing & Rappelling Certified</li>
          </ul>
        </div>

        {/* Specialties */}
        <div className="leader-specialties">
          <span>❄️ Snow Treks</span>
          <span>🏕️ Camping</span>
          <span>🗺️ Navigation</span>
          <span>🚑 First Aid</span>
          <span>📸 Photography</span>
          <span>🍳 Camp Cooking</span>
        </div>

        {/* Languages */}
        <div className="leader-languages">
          <span>🗣️ Speaks:</span>
          <strong>Hindi &nbsp;|&nbsp; English &nbsp;|&nbsp; Pahari</strong>
        </div>

        <a href="#book" className="leader-cta">
          🏔️ Trek with Arjun
        </a>

      </div>
    </ElectricBorder>
    </div>
  </section>


      {/* ITINERARY + INTERACTIVE MAP */}
      <section className="itinerary" id="itinerary">
        <div className="itinerary-inner">
          {/* LEFT: either list of days OR place detail card */}
          <div className="itinerary-left">
            <h2>Day-by-Day Itinerary</h2>
            <p className="section-sub">
              {activePlace
                ? `Details for ${activePlace.name}`
                : "Every day is a new adventure — here's what to expect"}
            </p>

            {activePlace ? (
              <div className="place-detail-card">
                <button className="place-detail-close" onClick={() => setActivePlace(null)}>
                  ✕
                </button>
                <div className="place-detail-header">
                  <span className="place-detail-emoji">{activePlace.emoji}</span>
                  <div>
                    <div className="place-detail-day">{activePlace.day}</div>
                    <h3 className="place-detail-title">{activePlace.name}</h3>
                  </div>
                </div>
                <div>
                  {Array.isArray(activePlace.desc)
                    ? activePlace.desc.map((line, i) => (
                        <p key={i} style={{ margin: '4px 0' }}>
                          {line}
                        </p>
                      ))
                    : (
                      <p>{activePlace.desc}</p>
                    )
                  }
                </div>
              </div>
            ) : (
              <div className="timeline simple-timeline">
                {itinerary.map((item) => (
                  <div key={item.day} className="simple-timeline-row">
                    <span className="simple-day-label">Day {item.day}</span>
                    <span className="simple-title">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: map image with clickable hotspots */}
          <div className="itinerary-map-wrap">
            <div className="itinerary-map-clickable">
            <img src={routeMap} alt="Trip Route Map" className="itinerary-map-img" />

            {/* SVG overlay with path + car */}
            <svg
              viewBox="0 0 1000 600"
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                pointerEvents: 'none', overflow: 'visible'
              }}
            >
              {/* Invisible road path — car follows this */}
              <path
                id="routePath"
                d="M50,294 C120,260 180,230 240,234 C290,238 330,260 360,270
                  C400,282 440,200 470,180 C500,162 530,290 550,300
                  C590,310 630,310 650,300 L650,180
                  C690,120 720,80 750,60 L750,150
                  C800,220 870,300 920,360"
                fill="none"
                stroke="transparent"
                strokeWidth="10"
              />

              {/* Car emoji — starts at Delhi */}
              <text
                ref={carRef}
                fontSize="60"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ userSelect: 'none' }}
                x="50" y="294"
              >🚘</text>
            </svg>

            {MAP_PLACES.map((place) => (
              <React.Fragment key={place.id}>
                <button
                  className="map-hotspot"
                  style={{ left: place.x, top: place.y }}
                  aria-label={`Hover for ${place.name}`}
                  onMouseEnter={() => handlePlaceHover(place)}
                  onClick={() => setActivePlace(place)}
                />

                  {/* Overlay card */}
                  <div className="map-hotspot-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{place.emoji}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.7, fontWeight: 600 }}>{place.day}</div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{place.name}</h3>
                      </div>
                    </div>
                    <div style={{ margin: '0.5rem 0 1rem 0' }}>
                      {Array.isArray(place.desc)
                        ? place.desc.map((line, i) => (
                            <p
                              key={i}
                              style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.4,
                                margin: '2px 0',
                                opacity: 0.9
                              }}
                            >
                              {line}
                            </p>
                          ))
                        : (
                          <p style={{ fontSize: '0.9rem', lineHeight: 1.4, opacity: 0.9 }}>
                            {place.desc}
                          </p>
                        )
                      }
                    </div>
                    <a href="#book" className="btn" style={{ fontSize: '0.85rem' }}>
                      View Details →
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDES / EXCLUDES */}
      <section className="includes" id="includes">
        <div className="includes-inner">

          <div className="includes-header">
            <div className="includes-badge">📋 Trip Details</div>
            <h2>What's Included</h2>
            <p className="section-sub">Everything you need for a safe and memorable trek</p>
          </div>

          <div className="inc-grid">

            {/* INCLUDED */}
            <div className="inc-box inc-yes">
              <div className="inc-box-header">
                <span className="inc-icon">✅</span>
                <h3>Included</h3>
              </div>
              <ul>
                {included.map((item) => (
                  <li key={item}>
                    <span className="inc-check">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT INCLUDED */}
            <div className="inc-box inc-no">
              <div className="inc-box-header">
                <span className="inc-icon">❌</span>
                <h3>Not Included</h3>
              </div>
              <ul>
                {excluded.map((item) => (
                  <li key={item}>
                    <span className="inc-cross">✘</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom note */}
          <div className="includes-note">
            💡 Have questions about what's covered?&nbsp;
            <a href="#book">Contact us before booking →</a>
          </div>

        </div>
      </section>


      {/* CTA */}
<section className="cta" id="book">
  <div className="cta-inner">

    {/* LEFT */}
    <div className="cta-text">
      <div className="cta-badge">🏔️ Limited Spots</div>
      <h2>Ready for the<br />Adventure?</h2>
      <p>Secure your spot on this epic Himalayan journey before it's full. Hundreds of trekkers have trusted us — now it's your turn.</p>

      <div className="cta-price">
        ₹7,999 <span>per person</span>
      </div>

      {/* Trust badges */}
      <div className="cta-trust">
        <div className="trust-item">✅ Instant Confirmation</div>
        <div className="trust-item">🔒 Secure Booking</div>
        <div className="trust-item">💯 100% Safe Trek</div>
        <div className="trust-item">🔄 Easy Cancellation</div>
      </div>

    </div>

    {/* RIGHT: Form */}
    <div className="cta-form-card">
      <div className="cta-form-header">
        <h3>Book Your Trek</h3>
        <p>Fill in your details and we'll get back within 24 hrs</p>
      </div>

      <div className="cta-form">
        <div className="cta-input-wrap">
          <span>👤</span>
          <input type="text" placeholder="Your Full Name" />
        </div>
        <div className="cta-input-wrap">
          <span>📧</span>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="cta-input-wrap">
          <span>📱</span>
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="cta-input-wrap">
          <span>👥</span>
          <input type="number" placeholder="No. of Persons" min="1" max="20" />
        </div>
        <div className="cta-input-wrap">
          <span>🗓️</span>
          <select>
            <option>Select Batch</option>
            <option>June 2026</option>
            <option>July 2026</option>
            <option>August 2026</option>
            <option>September 2026</option>
          </select>
        </div>

        <button className="cta-btn">🏔️ Book My Trek Now</button>

        <p className="cta-note">
          🔒 Your data is safe. No spam, ever.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          🏔️ <strong>Trovia</strong> — Explore the Himalayas with us
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>© 2025 Trovia. All rights reserved.</p>
      </footer>
    </ClickSpark>
  )
}
