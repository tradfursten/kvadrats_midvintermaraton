import React from 'react';
import { Link } from 'gatsby';


import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Tack för ditt resultat</h2>
        <p>Snart kommer du kunna se dig själv på resultatlistan</p>
        <Link to="/Participants" className="button primary">Anmälda deltagare</Link>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
