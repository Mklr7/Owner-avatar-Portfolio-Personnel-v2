import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Ce que je propose</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
            Design Web   <br /> Personnalisé
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Design Web Personnalisé </h3>
              <p className="services__modal-description">
              Service avec plus de 1 ans d'expérience. Fournir de la qualité pour
                travailler auprès des clients et des entreprises.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Création de sites web sur mesure avec une attention particulière à l'esthétique 
                  et à l'expérience utilisateur.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Conception de maquettes uniques et attrayantes pour représenter
                   l'image de marque de tes clients.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Intégration de technologies de pointe pour offrir des fonctionnalités innovantes et une navigation fluide.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Développement  <br /> E-commerce
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Développement E-commerce</h3>
              <p className="services__modal-description">
              Service avec plus de 1 ans d'expérience. Fournir de la qualité pour
                travailler auprès des entreprises.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Personnalisation des fonctionnalités pour répondre aux besoins spécifiques des commerçants en ligne,
                   tels que les paiements sécurisés, la gestion des stocks et la mise en place de systèmes de coupons.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Développement d'une interface utilisateur intuitive et conviviale, permettant aux visiteurs de naviguer facilement à travers les produits et de passer des commandes en toute simplicité.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Construction de boutiques en ligne robustes et sécurisées, utilisant des plateformes comme Prestashop.
                  </p>
                </li>
                

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
            Intégration d'IA <br /> dans les Sites Web 
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Intégration d'IA dans les Sites Web</h3>
              <p className="services__modal-description">
              Service avec plus de 1 ans d'expérience. Fournir de la qualité pour
                travailler auprès des clients et  entreprises.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Développement et intégration de fonctionnalités d'intelligence artificielle pour améliorer l'interaction utilisateur,
                   la personnalisation du contenu et l'automatisation des tâches.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implémentation de chatbots intelligents pour fournir un support client 24/7 et
                   améliorer l'engagement des utilisateurs.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Utilisation de l'IA pour l'analyse des données et la génération de recommandations personnalisées,
                   améliorant ainsi l'expérience utilisateur et la conversion.
                  </p>
                </li>
                
                

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Marketing  <br /> Digital
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Marketing Digital</h3>
              <p className="services__modal-description">
              Service avec plus de 1 ans d'expérience. Fournir de la qualité pour
                travailler auprès des entreprises.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Analyse des besoins et des objectifs du client pour élaborer une stratégie de marketing digital personnalisée.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Définition d'un plan d'action détaillé comprenant des tactiques telles que le référencement organique (SEO), la publicité payante (SEM), le marketing sur les réseaux sociaux, le marketing par e-mail, etc.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Création et gestion de profils professionnels sur des plateformes sociales populaires comme Facebook, Twitter, Instagram, LinkedIn, etc.
                  </p>
                </li>
                

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
