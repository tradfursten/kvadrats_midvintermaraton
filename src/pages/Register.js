import React from 'react';
import { Link } from 'gatsby';


import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Skicka in resultat</h2>
        <p>Profit</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Registreringen öppnar den 24:e december</h3>
          <p>
            Registreringen öppnar den 24:e december och är öppen till den 1:a januari.
            <br/>
            Men du kan anmäla dig nu och ange vilken sträcka du satsar på och vilken tid du hoppas klå: <Link to ="/SignUp">Anmälan</Link>.
          </p>
          <form name="raceResultForm" method="POST" action="/Register_success" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="raceResultForm" />
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
								<input type="text" name="name" id="name" defaultValue="" placeholder="Namn" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="email" id="email" defaultValue="" placeholder="Epost" />
							</div>
              <div className="col-6 col-12-xsmall">
								<select name="distance" id="distance">
									<option value="">- Sträcka -</option>
									<option value="5k">5 km</option>
									<option value="10k">10 km</option>
									<option value="21k">Halvmarathon</option>
									<option value="42k">Marathon</option>
								</select>
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="text" pattern="(\d?\d:)?\d\d:\d\d" name="time" id="time" defaultValue="" placeholder="Tid (HH:MM:SS)" />
							</div>
              <div className="col-6 col-12-xsmall">
								<input type="text" name="name" id="link" defaultValue="" placeholder="Länk till aktivitet (frivilligt)" />
							</div>
              <div className="col-12">
								<input type="submit" value="Skicka in anmälan" className="primary" />
                  </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
