import React, {useEffect} from 'react';
import {useLocation} from 'react-router';
// import post from '../../../../../../content/dist/posts/post5.json';
import smoothScroll from 'smoothscroll';
import Prism from 'prismjs';
import {Container} from '../../ui/Container/Container';
import {SubscribeForm} from '../../common/SubscribeForm/SubscribeForm';
import {Socials} from '../../common/Socials/Socials';

import s from './PostPage.css';

const post = [] as any;

const createMarkup = (html: string) => {
  return {__html: html};
};

const scrollToArticle = () => {
  const scrollTo = document.getElementById('article');

  if (scrollTo) {
    smoothScroll(scrollTo);
  }
};

export const PostPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToArticle();

    Prism.highlightAll();
  }, [location]);

  return (
    <>
      <div id="article" className={s.container}>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
        <img src={post.attributes.image} className={s.image} alt="post_image" />
        <div dangerouslySetInnerHTML={createMarkup(post.html)} />
      </div>
      <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
        <SubscribeForm />
        <Socials />
      </Container>
    </>
  );
};
