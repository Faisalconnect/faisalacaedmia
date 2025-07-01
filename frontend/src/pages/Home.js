import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#e6f2ff"/>
          <path d="M16 20L24 16L32 20V28C32 30.2091 30.2091 32 28 32H20C17.7909 32 16 30.2091 16 28V20Z" fill="#0056b3"/>
          <path d="M24 16V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Expert Solutions",
      description: "Comprehensive business solutions tailored to your specific needs and industry requirements."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#e6f2ff"/>
          <circle cx="24" cy="20" r="4" fill="#0056b3"/>
          <path d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32V34H16V32Z" fill="#0056b3"/>
        </svg>
      ),
      title: "Professional Team",
      description: "Experienced professionals dedicated to delivering excellence in every project we undertake."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#e6f2ff"/>
          <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="#0056b3"/>
          <path d="M16 24L20 28L16 32L12 28L16 24Z" fill="#0056b3"/>
          <path d="M32 24L36 28L32 32L28 28L32 24Z" fill="#0056b3"/>
        </svg>
      ),
      title: "Innovation Focus",
      description: "Cutting-edge technology and innovative approaches to solve complex business challenges."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#e6f2ff"/>
          <path d="M18 24L22 28L30 20" stroke="#0056b3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="12" stroke="#0056b3" strokeWidth="2"/>
        </svg>
      ),
      title: "Proven Results",
      description: "Track record of successful project delivery and satisfied clients across various industries."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Outstanding service and exceptional results. The professional platform team exceeded our expectations in every aspect.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO, Innovation Labs",
      content: "Their expertise and dedication to quality made our project a tremendous success. Highly recommended for any business.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Global Solutions",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed, on time and within budget.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className={`home-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title animate-fade-in-up">
              Professional Business Solutions
              <span className="text-primary"> That Drive Success</span>
            </h1>
            <p className="hero-description animate-fade-in-up">
              Transform your business with our comprehensive platform offering cutting-edge solutions, 
              expert consulting, and innovative technology to help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="hero-actions animate-fade-in-up">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item animate-fade-in-up">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Our Platform</h2>
            <p className="section-description">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-6">
                <div className="feature-card card animate-fade-in-up">
                  <div className="card-body">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="content-block animate-slide-in-left">
                <h2 className="block-title">Comprehensive Business Services</h2>
                <p className="block-description">
                  From strategic consulting to technology implementation, we provide end-to-end solutions 
                  that drive growth and efficiency for businesses of all sizes.
                </p>
                <ul className="feature-list">
                  <li>Strategic Business Consulting</li>
                  <li>Technology Solutions & Integration</li>
                  <li>Digital Transformation Services</li>
                  <li>Process Optimization & Automation</li>
                  <li>Performance Analytics & Reporting</li>
                </ul>
                <Link to="/services" className="btn btn-primary">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="services-visual animate-fade-in">
                <div className="visual-grid">
                  <div className="visual-item">
                    <div className="visual-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#0056b3"/>
                        <path d="M8 12L16 8L24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" fill="white"/>
                      </svg>
                    </div>
                    <span>Consulting</span>
                  </div>
                  <div className="visual-item">
                    <div className="visual-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#0066cc"/>
                        <rect x="8" y="12" width="16" height="12" rx="2" fill="white"/>
                        <path d="M12 8V12H20V8" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Development</span>
                  </div>
                  <div className="visual-item">
                    <div className="visual-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#004494"/>
                        <circle cx="16" cy="16" r="6" fill="white"/>
                        <circle cx="16" cy="16" r="2" fill="#004494"/>
                      </svg>
                    </div>
                    <span>Analytics</span>
                  </div>
                  <div className="visual-item">
                    <div className="visual-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#0056b3"/>
                        <path d="M10 14L16 10L22 14V22H10V14Z" fill="white"/>
                      </svg>
                    </div>
                    <span>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-4">
                <div className="testimonial-card card animate-fade-in-up">
                  <div className="card-body">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <p className="testimonial-content">"{testimonial.content}"</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">{testimonial.avatar}</div>
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-role">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join hundreds of satisfied clients who have achieved remarkable success with our platform. 
              Start your journey today and discover what we can accomplish together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;