import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Compass, Target } from 'lucide-react'

const slides = [
  { image: '/reference/spiral-air-duct.jpg', alt: 'Spiral air duct systems', label: 'Spiral air duct' },
  { image: '/reference/insulated-fire-rated-duct.jpg', alt: 'Insulated fire rated ductwork', label: 'Insulated fire rated ductwork' },
  { image: '/reference/kitchen-exhaust.jpg', alt: 'Kitchen exhaust ductwork', label: 'Kitchen exhaust ductwork' },
]

export default function ContentSection() {
  const [slide, setSlide] = useState(0)
  const current = slides[slide]
  const changeSlide = (direction: number) => setSlide((slide + direction + slides.length) % slides.length)

  return (
    <>
      <section className="reference-slider" aria-label="Featured smoothAir products">
        <img src={current.image} alt={current.alt} />
        <button className="slider-arrow left" type="button" onClick={() => changeSlide(-1)} aria-label="Previous featured product"><ChevronLeft size={28} aria-hidden="true" /></button>
        <button className="slider-arrow right" type="button" onClick={() => changeSlide(1)} aria-label="Next featured product"><ChevronRight size={28} aria-hidden="true" /></button>
        <div className="slider-caption">{current.label}</div>
        <div className="slider-tabs"><Link to="/products">Products</Link><Link to="/projects">Projects</Link></div>
        <div className="slider-dots" aria-label="Choose featured product">
          {slides.map((item, index) => <button key={item.image} className={index === slide ? 'active' : ''} type="button" onClick={() => setSlide(index)} aria-label={item.label} aria-current={index === slide} />)}
        </div>
      </section>
      <main className="reference-content">
        <section className="welcome-row">
          <div><h1>Welcome to smoothAir</h1><p>smoothAir Climate Systems LLC. is one of the most prominent manufacturers and suppliers of ducting in the UAE. Our primary principle is based on offering customers high-quality, customized ducting solutions, all delivered on time.</p></div>
          <aside className="brochure"><img src="/reference/brochure.jpg" alt="smoothAir brochure" /><div><h2>e - Brochure</h2><Link to="/downloads">Download here!</Link></div></aside>
        </section>
        <section className="about-panel">
          <div className="about-copy"><h2>About smoothAir</h2><p>smoothAir specializes in manufacturing centralized air conditioning duct equipment. Our work is guided by disciplined quality processes and a commitment to dependable HVAC solutions.</p><h2>Products and Services</h2><p>We manufacture and supply centralized air conditioning duct equipment such as volume control dampers, access doors, classified fire dampers and motorized fire &amp; smoke dampers for domestic and industrial air conditioning systems.</p><p>Made from high-grade galvanized iron sheets, our ducting is manufactured to meet the highest international standards and specifications. Backed by expert technical and marketing teams, smoothAir is growing as one of the most trusted names in the air conditioning industry of the UAE.</p></div>
          <aside className="vision-column"><div><h3><Target size={16} aria-hidden="true" /> Vision</h3><p>To be recognized as a market leader of sustainable solutions that create value and exceed customer expectation in ducting.</p></div><div><h3><Compass size={16} aria-hidden="true" /> Mission</h3><p>Commitment to satisfy customer demand for ducting, using our knowledge, experience, dedication and adherence to the best quality standards.</p></div></aside>
        </section>
      </main>
    </>
  )
}
