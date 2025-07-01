import React, { useState } from 'react';
import { contactAPI, handleApiError } from '../services/api';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await contactAPI.submit(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div>
        <section className="hero">
          <div className="container">
            <h1>Thank You!</h1>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any questions or inquiries.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Information */}
            <div>
              <h2>Get in Touch</h2>
              <p className="mb-5">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p className="text-gray">info@platform.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p className="text-gray">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p className="text-gray">
                      123 Business Street, Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <div className="card-body">
                  <h3>Send us a Message</h3>
                  
                  {error && (
                    <div className="alert alert-error">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input form-textarea"
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary w-full"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="spinner mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;