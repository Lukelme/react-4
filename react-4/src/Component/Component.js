import React from 'react';


const Componente = (props) => {
  return (
    <div>
        <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </div>
  );
};

export default Componente;
