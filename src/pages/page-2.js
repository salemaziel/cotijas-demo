import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

import Pillz from '../components/pillz';

const SecondPage = () => (
	<Layout>
		<Seo title="Page two" />
		<Pillz />
	</Layout>
);

export default SecondPage;
