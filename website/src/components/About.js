import Footer from './Footer';

import {API_DOMAIN} from '../constants';
import {fetcher} from '../utils/commonFunctions';

import {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import useSWR from 'swr';

function About() {
  const {data} = useSWR(`${API_DOMAIN}/website_data.json`, fetcher, {
    suspense: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <></>;
}

export default About;
