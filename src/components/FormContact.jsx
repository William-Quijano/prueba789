import { useRef } from "react";
import PropTypes from "prop-types";

const FormContact = ({ Agregar }) => {
  const nameRef = useRef("");
  const telefonoRef = useRef("");
  const emailRef = useRef("");

  function AgregarContactos(e) {
    e.preventDefault();

    const contact = {
      id: new Date().getTime(),
      name: nameRef.current.value,
      telefono: telefonoRef.current.value,
      email: emailRef.current.value,
      estado: true,
    };

    Agregar(contact);
  }

  return (
    <>
      <form
        onSubmit={AgregarContactos}
        style={{ background: "white", width: "70%" }}
      >
        <h4 className="m-5">Formulario Agregar Contacto</h4>
        <div className="form-group m-5">
          <label htmlFor="name">Name</label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="form-group m-5">
          <label htmlFor="telefono">Telefono</label>
          <input
            ref={telefonoRef}
            id="telefono"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group m-5">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            type="text"
            className="form-control"
          />
        </div>
        <div
          className="form-group d-flex justify-content-center
        "
        >
          <input
            type="submit"
            className="btn btn-primary btn-block mb-2"
            value="Agregar"
          />
        </div>
      </form>
    </>
  );
};

FormContact.propTypes = {
  Agregar: PropTypes.func.isRequired,
};

export default FormContact;
