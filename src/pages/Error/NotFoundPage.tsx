import React from 'react';
import Error from './Error';

const NotFoundPage = () => {
  return (
    <Error
      code={404}
      name={'not found page'}
      message={'존재하지 않는 페이지'}
    />
  );
};

export default NotFoundPage;
