import Head from 'next/head';
import Link from 'next/link';
import contentful from '../lib/contentful';

function Home(props) {
  // see server.js file
  // server.get('/posts/:title', (req, res) => { ...
  //
  // we could use the id, but the best practice is to use words 
  // that people can comprehend.
  // 
  // fields.title is required and unique in Contentful
  const posts = props.data.map(post => (
    <li key={post.sys.id}>
      <Link href={`/posts/${post.fields.title}`}>
        <a>{post.fields.title}</a>
      </Link>
    </li>
  ));

  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>POSTS!!!</h1>
      <ul>
        {posts}
      </ul>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await contentful.getEntries({
    content_type: 'post',
    select: ['sys.id', 'fields.title'].join()
  });
  return { data: res.items };
}

export default Home;