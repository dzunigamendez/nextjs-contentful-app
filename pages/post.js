import Head from 'next/head';
import Link from 'next/link';
import contentful from '../lib/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function Post(props) {
  return (
    <div>
      <Head>
        <title>{props.data.fields.title}</title>
      </Head>
      <h1>{props.data.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(props.data.fields.content)}}></div>
      <Link href="/">
        <a href="/">Posts</a>
      </Link>
    </div>
  );
}

Post.getInitialProps = async (context) => {
  const { title } = context.query;

  const res = await contentful.getEntries({
    content_type: 'post',
    select: ['sys.id', 'fields.title', 'fields.content'].join(),
    'fields.title': title
  });

  return { data: res.items[0] };
}

export default Post;