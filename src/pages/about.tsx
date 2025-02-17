import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('about')}</h1>
      <p>{t('sentence2')}</p>
    </div>
  );
};

export default About;