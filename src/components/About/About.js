import React from 'react';
import me from '../../images/me.jpeg';

export default function About() {
  return (
    <div className="about">
      <img
        className="about__author"
        src={me}
        alt="Orlando Jara"
      />
      <div className="about__info">
        <p className="about__greeting">¡Hola! Soy Orlando Jara,</p>
        <p className="about__content">
          Un apasionado desarrollador y amante del cine. He desarrollado esta
          app utilizando React, y se conecta a la API de TMDb para ofrecer
          información en tiempo real sobre los títulos más populares, los
          estrenos, y mucho más. Mi objetivo es ofrecerte una experiencia simple
          e intuitiva para que puedas encontrar las películas de tu interés. Si
          tienes alguna sugerencia o solo quieres compartir tus pensamientos
          sobre la app, ¡no dudes en contactarme! Puedes enviarme un{' '}
          <a
            className="about__social"
            href="mailto:devjara11@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            correo
          </a>{' '}
          o seguirme en{' '}
          <a
            className="about__social"
            href="https://www.linkedin.com/in/orlando-jara/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Linkedin
          </a>
          . ¡Me encantaría saber tu opinión! Gracias por usar la app, y espero
          que la disfrutes.
        </p>
      </div>
    </div>
  );
}
