import React from 'react';

import Layout from '../components/Layout';
import results from '../../data/results.json';
import Distance from '../components/Distance';

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
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Namn</th>
                  <th>Distans</th>
                  <th>Tid</th>
                  <th>Länk</th>
                </tr>
              </thead>
              <tbody>{results
              .map(s => {
                return <tr>
                  <td>{s.name}</td>
                  <td><Distance d={s.distance}/></td>
                  <td>{s.time}</td>
                  <td><a href={s.link}>{s.link}</a></td>
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
