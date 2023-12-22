import React from 'react';

import contents from '@/constants/certificates/certificates.json';
import { CertificateCard } from '@/components/pages/about';

const CertificatesContent = () => {
  return (
    <div className='w-full flex flex-col'>
      {contents.map((content, index) => (
        <CertificateCard
          key={content.name}
          index={index}
          name={content.name}
          organization={content.organization}
          issueDate={content.issueDate}
          credentialUrl={content.credentialUrl}
          icon={content.icon}
        />
      ))}
    </div>
  );
};

export default CertificatesContent;
