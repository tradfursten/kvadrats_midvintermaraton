import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Anmälan</h2>
        <p>Så du inte glömmer bort dig!</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Anmäl dig!</h3>
          <p>
            Loppet går av stapeln mellan den 25:e december och 1:a januari. Men du kan redan nu anmäla dig.
            Skriv in vilken sträcka du tänker springa och vilken tid du satsar på.
          </p>
          <form name="signupForm" method="POST" action="/SignUp_success" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="signupForm" />
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
