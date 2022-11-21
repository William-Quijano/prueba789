import React from "react";
import PropTypes from "prop-types";

const CardsContact = ({ contactos, Eliminar, Estado }) => {
  const color = contactos.estado ? 'btn-secondary' : 'btn-primary';
  return (
    <>
      <div className="card my-2" style={{ width: "18rem" }}>
        <div className="card-header">Contacto {contactos.id}</div>
        <div className="card-body">
          <p className="card-text">
            <strong>Nombre:</strong> {contactos.name}
          </p>
          <p className="card-text">
            <strong>Telefono:</strong> {contactos.telefono}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {contactos.email}
          </p>
          <p className="card-text">
            <strong>Estado:</strong>
            <span style={{ color: contactos.estado ? "green" : "red" }}>
              {contactos.estado ? " Conectado" : " Desconectado"}
            </span>
          </p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button onClick={()=>{Eliminar(contactos)}} className="btn btn-danger btn-block">Eliminar</button>
          <button onClick={()=>{Estado(contactos)}} className={`btn ${color} btn-block ms-1`}>{contactos.estado ? " Desconectar" : " Activar"}</button>

        </div>
      </div>
    </>
  );
};

CardsContact.propTypes = {
  contactos: PropTypes.object,
  Eliminar: PropTypes.func.isRequired,
  Estado: PropTypes.func.isRequired
};

export default CardsContact;
