// Internal libraries
import React from 'react';

// Import components
import ErrorCode from '../../components/errorCode/ErrorCode';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Return from '../../components/return/Return';

// Import styles
import styles from './NotFound.module.css';

// Create NotFound component
export default function NotFound() {
  return (
    <main className={styles.not_found}>
      <div className={styles.error_code}>
        <ErrorCode 
          code={404}
        />
      </div>
      <div className={styles.error_message}>
        <ErrorMessage
          message={`Oups! La page que vous demandez n'existe pas`} 
        />
      </div>
      <div className={styles.return}>
        <Return
          message={`Retourner sur la page d'accueil`} 
        />
      </div>      
    </main>
  );
}