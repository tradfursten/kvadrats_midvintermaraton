import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/Layout';
import signups from '../../data/signUps.json';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Anmälda deltagare</h2>
        <p>Om du inte har anmält dig redan, gör det</p>
        <Link to="/SignUp" className="button primary">Anmälan</Link>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Anmälda</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Namn</th>
                  <th>Distans</th>
                  <th>Tid</th>
                </tr>
              </thead>
              <tbody>{signups
              .map(s => {
                return <tr>
                  <td>{s.name}</td>
                  <td>{s.distance}</td>
                  <td>{s.time}</td>
                  </tr>

                
              })}</tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
