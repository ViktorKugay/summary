import cn from 'classnames';
import resources from './config.json';
import React, {useContext} from 'react';
import {Text} from '../../ui/Text/Text';
import JsxParser from 'react-jsx-parser';
import {Divider} from '../../ui/Divider/Divider';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {notifierContext} from '../../../context/notifier/notifierContext';

import avatar from './avatar.png';

import s from './SummaryPage.css';

export const SummaryPage: React.FC = () => {
  const {setInfoMessage} = useContext(notifierContext);

  const handleCopied = () => {
    setInfoMessage('Текст скопирован');
  };

  return (
    <div className={s.root}>
      <div className={s.header}>
        <img src={avatar} className={s.avatar} />
        <div className={s.header_title}>
          <Text color="white" mod="h1" weight="500" className={s.header_name}>
            {resources.MainPage.header.name}
          </Text>
          <Text color="white" mod="h4" weight="200" className={s.header_description}>
            {resources.MainPage.header.description}
          </Text>
        </div>
      </div>

      <main className={s.main}>
        <div className={s.content}>
          <Text mod="h4" whiteSpace="preWrap" className={s.content_description}>
            {resources.MainPage.content.description}
          </Text>
          <div className={s.content_experience}>
            <Text mod="h3" weight="500">
              {'Опыт работы'}
            </Text>
            <Divider margin="16" />
            {resources.MainPage.content.experience.map(({date, name, features}, index) => (
              <div className={s.experience_item} key={index}>
                <Text mod="h4" weight="500" className={s.experience_date}>
                  {date}
                </Text>
                <div className={s.experience_description}>
                  <Text mod="h4" weight="600" className={s.experience_name}>
                    {name}
                  </Text>
                  <ul className={s.experience_features}>
                    {features.map((feature, index) => (
                      <li className={s.experience_feature} key={index}>
                        <JsxParser jsx={feature} components={{Text}} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={s.content_education}>
            <Text mod="h3" weight="500">
              {'Образование'}
            </Text>
            <Divider margin="16" />
            {resources.MainPage.content.education.map(({date, name, features}, index) => (
              <div className={s.education_item} key={index}>
                <Text mod="h4" weight="500" className={s.education_date}>
                  {date}
                </Text>
                <div className={s.education_container}>
                  <Text mod="h4" weight="600" className={s.experience_name}>
                    {name}
                  </Text>
                  <ul className={s.education_features}>
                    {features.map((feature, index) => (
                      <li className={s.education_feature} key={index}>
                        <JsxParser jsx={feature} components={{Text}} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.sidebar}>
          <div className={s.personal}>
            <Text mod="h3" className={s.sidebar_title}>
              {resources.MainPage.sidebar.title}
            </Text>
            <Divider margin="12" />
            <Text mod="h4" weight="600" color="main" className={cn(s.sidebar_address)}>
              {'Адрес'}
            </Text>
            <CopyToClipboard text={resources.MainPage.sidebar.address} onCopy={handleCopied}>
              <Text mod="h4" className={cn(s.sidebar_item, s.sidebar_address)}>
                {resources.MainPage.sidebar.address}
              </Text>
            </CopyToClipboard>
            <Text mod="h4" weight="600" color="main" className={cn(s.sidebar_address)}>
              {'Телефон'}
            </Text>
            <CopyToClipboard text={resources.MainPage.sidebar.phone} onCopy={handleCopied}>
              <Text mod="h4" className={cn(s.sidebar_item, s.sidebar_phone)}>
                {resources.MainPage.sidebar.phone}
              </Text>
            </CopyToClipboard>
            <Text mod="h4" weight="600" color="main" className={cn(s.sidebar_address)}>
              {'Email'}
            </Text>
            <CopyToClipboard text={resources.MainPage.sidebar.email} onCopy={handleCopied}>
              <Text mod="h4" className={cn(s.sidebar_item, s.sidebar_email)}>
                {resources.MainPage.sidebar.email}
              </Text>
            </CopyToClipboard>
            <Text mod="h4" weight="600" color="main" className={cn(s.sidebar_address)}>
              {'GitHub'}
            </Text>
            <a href={resources.MainPage.sidebar.github} target="_blank" rel="noopener noreferrer">
              <Text mod="h4" className={cn(s.sidebar_github)}>
                {resources.MainPage.sidebar.github.replace('https://', '')}
              </Text>
            </a>
            <Text mod="h4" weight="600" color="main" className={cn(s.sidebar_address)}>
              {'LinkedIn'}
            </Text>
            <a href={resources.MainPage.sidebar.linkedIn} target="_blank" rel="noopener noreferrer">
              <Text mod="h4" className={cn(s.sidebar_item, s.linked_in)}>
                {resources.MainPage.sidebar.linkedIn.replace('https://', '')}
              </Text>
            </a>
          </div>
          <div className={s.skills}>
            <Text mod="h3">{'Технологии'}</Text>
            <Divider margin="12" />
            <ul className={s.skills_container}>
              {resources.MainPage.sidebar.skilles.map((skill, index) => (
                <li key={index}>
                  <Text mod="h4" className={s.skill_item}>
                    {skill}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.languages}>
            <Text mod="h3">{'Языки'}</Text>
            <Divider margin="12" />
            {resources.MainPage.sidebar.languages.map(({name, type}, index) => (
              <div className={s.language_item} key={index}>
                <Text mod="h4">{`${name} - ${type}`}</Text>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
