import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const fraseCerta = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planets">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ fraseCerta } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
