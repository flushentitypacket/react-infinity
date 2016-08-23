import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

export default class InfinityScroll extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    offset: PropTypes.number,
    children: PropTypes.any,
  };

  render() {
    const { load, offset = 0, children, ...containerProps } = this.props;
    return (
      <div {...containerProps} >
        {children}
        <Waypoint
          bottomOffset={offset * -1}
          onEnter={load}
        />
      </div>
    );
  }
}
