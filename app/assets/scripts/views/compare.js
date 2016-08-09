'use strict';
import React from 'react';
import { connect } from 'react-redux';

var Compare = React.createClass({
  displayName: 'Compare',

  propTypes: {
  },

  render: function () {
    console.log('thi', this.props.params);
    return (
      <section className='inpage'>
        <header className='inpage__header'>
          <div className='inner'>
            <div className='inpage__headline'>
              <h1 className='inpage__title'>Compare page</h1>
              <div className='inpage__introduction'>
                <p>Good things come to those who wait...</p>
              </div>
            </div>
          </div>
        </header>
        <div className='inpage__body'>

          <section className='fold fold--filled'>
            <div className='inner'>
              <header className='fold__header'>
                <h1 className='fold__title'>Our data</h1>
              </header>
              <div className='fold__body'>
                let's compare some locations
              </div>
            </div>
          </section>

        </div>
      </section>
    );
  }
});

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function selector (state) {
  return {
  };
}

function dispatcher (dispatch) {
  return {
  };
}

module.exports = connect(selector, dispatcher)(Compare);
