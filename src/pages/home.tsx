import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('main')}</h1>
      <p>{t('sentence1')}</p>
    </div>
  );
};

export default Home;