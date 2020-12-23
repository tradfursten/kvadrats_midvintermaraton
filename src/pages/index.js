import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/img01.jpg';
import pic2 from '../assets/images/img02.jpg';
import pic3 from '../assets/images/img03.jpg';
import config from '../../config';
import { Link } from 'gatsby';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>24:e december - 1:a januari</h1>
        <h2>
          Kvadrats Midvintermaraton
        </h2>
        <p>
          Hör upp alla <a href="https://kvadrat.se">kvadratare</a>! Ut och kut!
        </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Vadå då?
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Läs mer
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Motivationsboost</h2>
          <p>
            Under vintermånaderna behöver vi all pepping som går att uppgringa för
            att hålla igång löpningen.
            <br />
            Vad är inte mer perfekt än att ta sig ut för en virituell löputmaning när julmaten börjar ha lagt sig till rätta.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Fokuserat</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Styrkande</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-running major style3">
              <span className="label">Aktivt</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Olika distanser
          </h2>
          <p>
            Välj mellan <em>5</em>, <em>10</em>,<em>21</em> eller <em>42</em> kilometer. Du väljer själv bana och starttid.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Registrera resultat
          </h2>
          <p>
            Du väljer om du vill länka till en aktivitet på strava, garmin eller liknande.
            Eller om du nöjer dig med att registrera tiden.
          </p>
        </div>
      </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Vad är ett virtual run?</h2>
          <p>
            Ett virtual run är ett löpevent som du kan vara med på oavsett vars du är. Du väljer själv distans och starttid. När du är färdig rapporterar du in ditt resultat.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link to="/SignUp" className="button fit primary">Anmälan</Link>
          </li>
        </ul>
      </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
