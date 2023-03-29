import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to send message to your email here
    console.log(`Email: ${email}, Name: ${name}, Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ backgroundColor: '#8CB369', padding: '1rem' }}>
        <h2 style={{ color: '#F2E3C6' }}>Contact Us</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <label htmlFor="email" style={{ marginBottom: '0.5rem' }}>Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="name" style={{ marginBottom: '0.5rem' }}>Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="message" style={{ marginBottom: '0.5rem' }}>Message:</label>
        <textarea id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

        <button type="submit" style={{ backgroundColor: '#8CB369', color: '#F2E3C6', padding: '0.5rem', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
