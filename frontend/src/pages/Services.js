import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized', 'Fast Loading']
    },
    {
      title: 'Consulting',
      description: 'Expert advice and strategic guidance for your business needs.',
      features: ['Strategic Planning', 'Process Optimization', 'Technology Assessment', 'Growth Strategy']
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance for your existing projects.',
      features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Performance Optimization']
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional solutions tailored to your business needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="mt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <CheckCircle size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;