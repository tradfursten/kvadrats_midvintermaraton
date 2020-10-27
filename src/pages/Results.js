import React from 'react';

import Layout from '../components/Layout';
import signups from '../../data/signUps.json';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Resultat</h2>
        <p>Inskickade resultat. Bra jobbat allihopa!</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Resultatlista</h3>
          <p>Resultaten kommer att publiceras så fort de kommer in.</p>

          <hr />
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
