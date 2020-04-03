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

const posts = [] as any;

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
