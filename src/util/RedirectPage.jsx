import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/search');
  }, [navigate]);
  return <div></div>;
};

export default React.memo(RedirectPage);
