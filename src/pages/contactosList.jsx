import { useState } from "react";
import CardsContact from "../components/CardsContact";
import FormContact from "../components/FormContact";
import { contactos } from "../models/contactos.class";

import "../style/scroll.css";

const ContactosList = () => {
  const [contact, setContact] = useState(contactos);

  function AgregarContacto(item) {
    const temp = [...contact];
    temp.push(item);
    setContact(temp);
  }

  function EliminarContacto(item) {
    const contactos = contact.filter((v) => v.id !== item.id);

    setContact(contactos);
  }

  function CambiarEstado(item) {
    const index = contact.indexOf(item);
    const contactos = [...contact];

    contactos[index].estado = !item.estado;

    setContact(contactos);
  }

  return (
    <div
      className="container  d-flex flex-row"
      style={{ background: "#F6F6F6", height: "100vh" }}
    >
      <div className="col-12 col-sm-6 d-flex justify-content-start align-items-center flex-column scroll">
        {contact.map((item) => {
          return (
            <CardsContact
              contactos={item}
              key={item.id}
              Eliminar={EliminarContacto}
              Estado={CambiarEstado}
            />
          );
        })}
      </div>
      <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center flex-column">
        <FormContact Agregar={AgregarContacto} />
      </div>
    </div>
  );
};

export default ContactosList;
