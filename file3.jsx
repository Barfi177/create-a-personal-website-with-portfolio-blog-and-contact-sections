import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Head>
        <title>My Website</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to my website!</h1>
        <p>This is my personal website, showcasing my portfolio, blog, and contact information.</p>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;