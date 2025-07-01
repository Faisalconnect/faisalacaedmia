import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contentAPI, handleApiError } from '../services/api';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const Home = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await contentAPI.getAll({ limit: 3 });
      setContent(response.data.content || []);
    } catch (error) {
      console.error('Error fetching content:', handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: CheckCircle,
      title: 'Professional Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and drive results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of expertise to every project.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients across industries.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient processes and dedicated teams ensure timely project completion.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Outstanding service and exceptional results. The team exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Director, Innovation Labs',
      content: 'Professional, reliable, and innovative. Highly recommend their services.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Manager',
      content: 'Great communication and delivery. They understood our needs perfectly.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Professional Platform</h1>
          <p>
            We provide exceptional services and solutions for your business needs. 
            Our team is dedicated to delivering high-quality results that exceed expectations.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/services" className="btn btn-secondary btn-lg">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Get Started <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
            <p>We combine expertise, innovation, and dedication to deliver outstanding results</p>
          </div>
          <div className="grid grid-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card">
                  <div className="card-body text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Content Section */}
      {content.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Latest Insights</h2>
              <p>Stay updated with our latest articles and resources</p>
            </div>
            <div className="grid grid-3">
              {content.map((item) => (
                <div key={item._id} className="card">
                  {item.featuredImage && (
                    <img 
                      src={item.featuredImage} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link 
                      to={`/blog/${item.slug}`}
                      className="btn btn-primary btn-sm mt-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/blog" className="btn btn-outline">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4">"{testimonial.content}"</p>
                  <div>
                    <h5 className="text-primary">{testimonial.name}</h5>
                    <p className="text-sm text-gray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-white">Ready to Get Started?</h2>
          <p className="text-white opacity-90 mb-5">
            Contact us today to discuss how we can help your business grow and succeed.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;