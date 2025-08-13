import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact | My Website</title>
      </Head>
      <Header />
      <main>
        <h1>Contact</h1>
        <p>Get in touch with me:</p>
        <ul>
          <li>Email: [your email]</li>
          <li>Phone: [your phone number]</li>
          <li>Social media: [your social media links]</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;