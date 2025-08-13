import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';

function BlogPage() {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      description: 'This is a brief description of Blog Post 1.',
      date: '2023-02-20',
    },
    {
      title: 'Blog Post 2',
      description: 'This is a brief description of Blog Post 2.',
      date: '2023-02-25',
    },
    // Add more blog posts here...
  ];

  return (
    <div>
      <Head>
        <title>Blog | My Website</title>
      </Head>
      <Header />
      <main>
        <h1>Blog</h1>
        <ul>
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;