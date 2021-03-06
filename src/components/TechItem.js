import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete}){

  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>  );
}

TechItem.prototype = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired, 
}

export default TechItem;