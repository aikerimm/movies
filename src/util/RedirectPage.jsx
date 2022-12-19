import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/search');
  }, [navigate]);
  return <div className='redText'></div>;
};

export default React.memo(RedirectPage);
