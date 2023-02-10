import React from 'react';
import PropTypes from 'prop-types';
import PaginationDot from './PaginationDot';

 const styles = {
      root: {
        position: 'relative',
        bottom: 8,
        right: 8,
        display: 'flex',
        flexDirection: 'row',
        // marginLeft:'40%'
      },
    };

class Pagination extends React.Component {
  handleClick = (event, index) => {
    this.props.onChangeIndex(index);
  };

  render() {
    let { index, dots, propStyle } = this.props;

    const children = [];
    if(propStyle === undefined){
      propStyle = styles;
    }

   

    for (let i = 0; i < dots; i += 1) {
      children.push(
        <PaginationDot key={i} index={i} active={i === index} onClick={this.handleClick} />,
      );
    }

    return <div style={propStyle.root}>{children}</div>;
  }
}

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;