import Slider from 'react-slick';
import React, {useRef} from 'react';
// import {Link} from 'react-router-dom';
import {Logo} from '../../ui/Logo/Logo';
import {Text} from '../../ui/Text/Text';
import {Divider} from '../../ui/Divider/Divider';
import {Container} from '../../ui/Container/Container';
import {PostCard} from '../../common/PostCard/PostCard';
import {BookCard} from '../../common/BookCard/BookCard';
import avatar from '../../../../../../public/avatar.png';
// import {posts} from '../../../../../../content/dist/posts';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {SubscribeForm} from '../../common/SubscribeForm/SubscribeForm';
import {PackageCard} from '../../common/PackageCard/PackageCard';
import {Socials} from '../../common/Socials/Socials';

import {Arrow} from '../../common/Arrow/Arrow';

import s from './MainPage.css';

import c from './config.json';

const posts = [
  {
    attributes: {
      title: 'Why encoding queryParams with base64 is potentially dangerous',
      date: '2015-05-28T22:40:32.169Z',
      image:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:
        "Using of query params is not a safe approach to share data with client's application. Why is it so and what does really happen when we use query params?",
    },
    body:
      'All of us know about URI, URL and even URN (URI that uses the urn schem). We use URI a lot every day, but what do we really know about it? Fortunately, we can use URI [tools.ietf.org](https://tools.ietf.org/html/rfc3986) **;-)** to find more about link transformations. First of all, let\'s read about URI Characters.\n\n> The URI syntax provides a method of encoding data, presumably for the  \n> sake of identifying a resource, as a sequence of characters.  \n\nLink will be transformed within **RFC 3986 URI Generic Syntax** and will be encode to **ABNF** notation.\n\n> This specification uses the Augmented Backus-Naur Form (ABNF)  \n> notation of [RFC2234], including the following core ABNF syntax rules  \n> defined by that specification: ALPHA (letters), CR (carriage return),  \n> DIGIT (decimal digits), DQUOTE (double quote), HEXDIG (hexadecimal  \n> digits), LF (line feed), and SP (space).\n\nThe ABNF notation defines its terminal values to be non-negative integers (codepoints) based on the US-ASCII coded character set. A URI is composed from a limited set of characters consisting of digits, letters, and a few graphic symbols. The latest definition is the most trouble shooting for us. If data for a URI component would conflict with a reserved\ncharacter\'s purpose as a delimiter, then the conflicting data must be percent-encoded before the URI is formed.  \n\nLet\'s check list of symbols\n\n> sub-delims  = "!" / "$" / "&" / "\'" / "(" / ")" / "*" / **"+"** / "," / ";" / "="  \n\nAnd let\'s do it again with base64 symboles list\n\n> Uppercase letters (indices 0-25): ABCDEFGHIJKLMNOPQRSTUVWXYZ  \n> Lowercase letters (indices 26-51): abcdefghijklmnopqrstuvwxyz  \n> Digits (indices 52-61): 0123456789  \n> Special symbols (indices 62-63): **+** /  \n\nIt seems like we find out potential errors! Focus your attention on "+" symbols. This symbol exist into two lists but with different meaning. Learn more about using "+" symbol into query string. We can do it on [w3.org](https://www.w3.org/Addressing/URL/uri-spec.html) page.\n\n> Within the query string, the plus sign is reserved as shorthand notation for a space.  \n> Therefore, real plus signs must be encoded.  \n> This method was used to make query URIs easier to pass in systems which did not allow spaces.  \n\nThe characters allowed in a URI are either reserved or unreserved (or a percent character as part of a percent-encoding). Reserved characters are those characters that sometimes have special meaning. For example, forward slash characters are used to separate different parts of a URL (or more generally, a URI). Unreserved characters have no such meanings. Using percent-encoding, reserved characters are represented using special character sequences. The sets of reserved and unreserved characters and the circumstances under which certain reserved characters have special meaning have changed slightly with each revision of specifications that govern URIs and URI schemes.\n\nAnother worlds we have two lists:\n\n- Reserved Characters [RFC 3986 section 2.2](https://tools.ietf.org/html/rfc3986#section-2.2)\n\n- Unreserved Characters [RFC 3986 section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)\n\nOther characters in a URI must be percent encoded.  \n\nThere is a source of many mistakes. Turn back and check base64 list symbols. We have only one concurrence and it is not safe anymore. Other encoder can bring more conflicts. Particular example can be provide using "qs" library. Just try execute.\n\n```javascript\nqs.parse(\'key=some+value\');\n```\n\nDon`t be surprised but you will receive:\n\n```javascript\n{ key: \'some value\' }\n```\n\nIt`s not that you expected. Conflict of meanings is the most trouble shooting while using base64 into URI. If you continue find information about this problem you will find soon [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6). Section four describe official way resolving conflicts. Let\'s see "Base 64 Encoding with URL and Filename Safe Alphabet" chapter and check "Table 2: The "URL and Filename safe" Base 64 Alphabet". There is no "+" symbol. Proceed reading\n\n> This encoding should not be regarded as the same as the "base64"  \n> encoding, and should not be referred to as only "base64".  Unless  \n> made clear, "base64" refer to the base 64 in the previous section.  \n\nOh no! Using multiple incompatible versions of base64 is not effective decision. If yor create simple project for one or two peoples there is no problem but what if your project will be using with multiple developers or links will be generating multiple managers or other maintainers will be supporting your code? Decision like this is not obviously for another people.  \n',
    bodyBegin: 8,
    frontmatter:
      "title: Why encoding queryParams with base64 is potentially dangerous\ndate: '2015-05-28T22:40:32.169Z'\nimage: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\ndescription: Using of query params is not a safe approach to share data with client's application. Why is it so and what does really happen when we use query params?",
    html:
      '<p>All of us know about URI, URL and even URN (URI that uses the urn schem). We use URI a lot every day, but what do we really know about it? Fortunately, we can use URI <a href="https://tools.ietf.org/html/rfc3986">tools.ietf.org</a> <strong>;-)</strong> to find more about link transformations. First of all, let\'s read about URI Characters.</p>\n<blockquote>\n  <p>The URI syntax provides a method of encoding data, presumably for the<br />\n  sake of identifying a resource, as a sequence of characters.  </p>\n</blockquote>\n<p>Link will be transformed within <strong>RFC 3986 URI Generic Syntax</strong> and will be encode to <strong>ABNF</strong> notation.</p>\n<blockquote>\n  <p>This specification uses the Augmented Backus-Naur Form (ABNF)<br />\n  notation of [RFC2234], including the following core ABNF syntax rules<br />\n  defined by that specification: ALPHA (letters), CR (carriage return),<br />\n  DIGIT (decimal digits), DQUOTE (double quote), HEXDIG (hexadecimal<br />\n  digits), LF (line feed), and SP (space).</p>\n</blockquote>\n<p>The ABNF notation defines its terminal values to be non-negative integers (codepoints) based on the US-ASCII coded character set. A URI is composed from a limited set of characters consisting of digits, letters, and a few graphic symbols. The latest definition is the most trouble shooting for us. If data for a URI component would conflict with a reserved\ncharacter\'s purpose as a delimiter, then the conflicting data must be percent-encoded before the URI is formed.  </p>\n<p>Let\'s check list of symbols</p>\n<blockquote>\n  <p>sub-delims  = "!" / "$" / "&amp;" / "\'" / "(" / ")" / "*" / <strong>"+"</strong> / "," / ";" / "="  </p>\n</blockquote>\n<p>And let\'s do it again with base64 symboles list</p>\n<blockquote>\n  <p>Uppercase letters (indices 0-25): ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />\n  Lowercase letters (indices 26-51): abcdefghijklmnopqrstuvwxyz<br />\n  Digits (indices 52-61): 0123456789<br />\n  Special symbols (indices 62-63): <strong>+</strong> /  </p>\n</blockquote>\n<p>It seems like we find out potential errors! Focus your attention on "+" symbols. This symbol exist into two lists but with different meaning. Learn more about using "+" symbol into query string. We can do it on <a href="https://www.w3.org/Addressing/URL/uri-spec.html">w3.org</a> page.</p>\n<blockquote>\n  <p>Within the query string, the plus sign is reserved as shorthand notation for a space.<br />\n  Therefore, real plus signs must be encoded.<br />\n  This method was used to make query URIs easier to pass in systems which did not allow spaces.  </p>\n</blockquote>\n<p>The characters allowed in a URI are either reserved or unreserved (or a percent character as part of a percent-encoding). Reserved characters are those characters that sometimes have special meaning. For example, forward slash characters are used to separate different parts of a URL (or more generally, a URI). Unreserved characters have no such meanings. Using percent-encoding, reserved characters are represented using special character sequences. The sets of reserved and unreserved characters and the circumstances under which certain reserved characters have special meaning have changed slightly with each revision of specifications that govern URIs and URI schemes.</p>\n<p>Another worlds we have two lists:</p>\n<ul>\n<li><p>Reserved Characters <a href="https://tools.ietf.org/html/rfc3986#section-2.2">RFC 3986 section 2.2</a></p></li>\n<li><p>Unreserved Characters <a href="https://tools.ietf.org/html/rfc3986#section-2.3">RFC 3986 section 2.3</a></p></li>\n</ul>\n<p>Other characters in a URI must be percent encoded.  </p>\n<p>There is a source of many mistakes. Turn back and check base64 list symbols. We have only one concurrence and it is not safe anymore. Other encoder can bring more conflicts. Particular example can be provide using "qs" library. Just try execute.</p>\n<pre><code class="javascript language-javascript">qs.parse(\'key=some+value\');\n</code></pre>\n<p>Don`t be surprised but you will receive:</p>\n<pre><code class="javascript language-javascript">{ key: \'some value\' }\n</code></pre>\n<p>It`s not that you expected. Conflict of meanings is the most trouble shooting while using base64 into URI. If you continue find information about this problem you will find soon <a href="https://tools.ietf.org/html/rfc3548#page-6">tools.ietf.org</a>. Section four describe official way resolving conflicts. Let\'s see "Base 64 Encoding with URL and Filename Safe Alphabet" chapter and check "Table 2: The "URL and Filename safe" Base 64 Alphabet". There is no "+" symbol. Proceed reading</p>\n<blockquote>\n  <p>This encoding should not be regarded as the same as the "base64"<br />\n  encoding, and should not be referred to as only "base64".  Unless<br />\n  made clear, "base64" refer to the base 64 in the previous section.  </p>\n</blockquote>\n<p>Oh no! Using multiple incompatible versions of base64 is not effective decision. If yor create simple project for one or two peoples there is no problem but what if your project will be using with multiple developers or links will be generating multiple managers or other maintainers will be supporting your code? Decision like this is not obviously for another people.  </p>',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  initialSlide: 0,
};

export const MainPage: React.FC = () => {
  const slider = useRef();

  return (
    <>
      <Container align="center" margin="normal" className={s.bio_container} wrap="nowrap">
        <Logo image={avatar} className={s.logo} width={80} />
        <Text mod="h4" align="justify">
          {c.MainPage.main.bio}
          <a target="_blank" className={s.bio_link} rel="noopener noreferrer" href={c.MainPage.header.facebook}>
            {'Viktor Kugay'}
          </a>
          {'.'}
        </Text>
      </Container>

      <Container align="start" margin="normal" className={s.latest_post} id="blog">
        <Text className={s.section_title} margin="normal" display="block" weight="700" mod="h1" align="left">
          {c.MainPage.main.latest.title}
        </Text>
        <PostCard
          mod="large"
          image={posts[0].attributes.image}
          title={posts[0].attributes.title}
          description={posts[0].attributes.description}
        />
      </Container>

      <Container>
        <Divider height="2" margin="16" />
      </Container>

      <Container wrap="wrap" justify="space-between" className={s.posts_container}>
        {posts.map((post, index) => (
          <PostCard
            mod="small"
            key={index}
            margin="normal"
            image={post.attributes.image}
            title={post.attributes.title}
            description={post.attributes.description}
          />
        ))}

        {/* <Link className={s.all_posts_link} to="/posts">
            <Text>{c.MainPage.main.posts.title}</Text>
            <ArrowForwardIcon />
          </Link> */}
      </Container>

      <div className={s.packages_background}>
        <Container wrap="wrap" justify="center" className={s.packages_container} id="projects">
          <Text className={s.section_title} mod="h2" weight="700">
            {c.MainPage.main.packages.packagesAndProjects}
          </Text>
          {c.MainPage.main.packages.items.map((item, index) => (
            <PackageCard key={index} title={item.title} description={item.description} color={item.color} />
          ))}
        </Container>
      </div>

      <Container wrap="wrap" justify="center" className={s.books_container} id="reads">
        <Text mod="h2" align="left" weight="700" className={s.books_title}>
          {c.MainPage.main.books.title}
        </Text>
        <Arrow className={s.prev_arrow} slider={slider} mod="prev" />
        <div className={s.slider_container}>
          <Slider ref={slider} {...settings}>
            {c.MainPage.main.books.items.map(({title, image, author, href, points, logo, color}, index) => (
              <BookCard
                key={index}
                title={title}
                author={author}
                image={image}
                color={color as any}
                logo={logo}
                href={href}
                points={points}
              />
            ))}
          </Slider>
        </div>
        <Arrow className={s.next_arrow} slider={slider} mod="next" />
      </Container>

      <Container className={s.newsletter_divider}>
        <Divider height="2" margin="16" />
      </Container>

      <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
        <SubscribeForm />
        <Socials />
      </Container>
    </>
  );
};
