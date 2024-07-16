import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('contacts')}</h1>
      <p>{t('sentence3')}</p>
    </div>
  );
};

export default Contacts;