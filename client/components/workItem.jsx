import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  company: PropTypes.string,
  role: PropTypes.string,
};

const WorkItem = ({ title, imgSrc, company, role }) => {
  const divStyle = {
    background: `url('${imgSrc}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='work-item' style={divStyle}>
      <div className='work-item__info'>
        <h3 className="work-item__title">{title}</h3>
        <p>- {company} ({role})</p>
      </div>
    </div>
  );
}

WorkItem.propTypes = propTypes;

export default WorkItem;
