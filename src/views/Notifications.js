import React from 'react';
import './Notifications.css';

function Notifications() {
  return (
    <div className="notifications-page">
      <h1 className="h1-notifications">Nosotros</h1>
      <p>Somos una empresa apasionada de innovar y crear soluciones tecnológicas para mejorar la vida de las personas.</p>
      <div className="team-container">
        <h2>Equipo</h2>
        <ul>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/418660755_1442660993286762_5366505715132812806_n.jpg?ccb=11-4&oh=01_Q5AaIJNJofR0U8CulEv8_vPVyqbFAT_Jebrb_iMKUbfZ-T_q&oe=666E29C8&_nc_sid=e6ed6c&_nc_cat=102" alt="Abel" />
            <h3>Abel Ccopa</h3>
            <p>6to ciclo-C24</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/419062471_343823002044062_5999420242615460474_n.jpg?ccb=11-4&oh=01_Q5AaIO7bgaXkUDPrEfLGHu31JtQSZBgqGX6BXrpkRq3s55JW&oe=666E2706&_nc_sid=e6ed6c&_nc_cat=105" alt="Cayo" />
            <h3>Cayo Phocco</h3>
            <p>6to ciclo-C24</p>
          </li>
          <li>
            <img src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/437978037_454388447316026_187726526764621580_n.jpg?ccb=11-4&oh=01_Q5AaIEUexIuh3kiQxcjdNKihUtaqpb5XHbGGh-24aDSQ3Z2Z&oe=666E6367&_nc_sid=e6ed6c&_nc_cat=109" alt="Karen" />
            <h3>Karen Ramos</h3>
            <p>6to ciclo-C24</p>
          </li>
        </ul>
      </div>
      <div className="mision-container">
        <h2>Misión</h2>
        <p>Nuestra misión es crear tecnologías que mejoren la vida de las personas y contribuyan a un futuro más sostenible. Creemos que la información es poder, y por eso nos esforzamos por proporcionarla de manera dinámica y accesible a todos. Nuestro objetivo es generar soluciones innovadoras que permitan a las personas tomar decisiones informadas y mejorar su calidad de vida.</p>
      </div>
      <div className="valores-container">
        <h2>Valores</h2>
        <ul>
          <li>
            <i className="fas fa-heart"></i>
            <p>Pasión por la innovación</p>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <p>Trabajo en equipo</p>
          </li>
          <li>
            <i className="fas fa-recycle"></i>
            <p>Sostenibilidad</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;