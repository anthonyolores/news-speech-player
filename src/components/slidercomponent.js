/* eslint-disable react/prop-types */
import '../scss/home.scss';
import '../scss/slider.scss';
import React, { Component } from 'react';
import { Slider, Handles, Tracks, Rail} from 'react-compound-slider';


const sliderStyle = {  // Give the slider some width
  position: 'relative',
  width: '100%',
}

const railStyle = { 
  position: 'absolute',
  width: '100%',
  height: 5,
  marginTop: 35,
  backgroundColor: '#ddd',
}

const toolTipStyle = {
  fontFamily: 'Roboto', 
  fontSize: '0.9em', 
  marginTop: -25,
  marginLeft: -10,
  width:80,
  textAlign: 'left'
};

const handleStyle = {
  position: 'absolute',
  marginTop: 31,
  marginLeft: -10,
  zIndex: 2,
  width: 13,
  height: 13,
  border: 0,
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '50%',
  backgroundColor: '#f2c12e',
  color: '#333'
};

const trackStyle = {
  position: 'absolute',
  height: 5,
  zIndex: 1,
  marginTop: 35,
  backgroundColor: '#f2c12e',
  cursor: 'pointer'
};

function Track({ source, target, getTrackProps }) { // your own track component
    return (
      <div
        style={{
          ...trackStyle,
          left: `${source.percent}%`,
          width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
      />
    )
  }



export function Handle({ // your handle component
    handle: { id, value, percent}, 
    getHandleProps,
    label
  }) {
    return (
      <div
        style={{
          left: `${percent}%`,
          ...handleStyle
        }}
        {...getHandleProps(id)}
      >
        <div style={toolTipStyle}>
          {label + ' ' + value}
        </div>
      </div>
    )
  }

class SliderComponent extends Component {
    constructor(props){
        super();
    }
    render() {
      return (
        <div className="slider-container">
            <Slider
                rootStyle={sliderStyle}
                domain={[this.props.min, this.props.max]}
                step={this.props.step}
                mode={1}
                values={[this.props.default]}
                onChange={this.props.sliderChangedCallback}>
                <div style={railStyle} />
                <Rail>
                    {({ getRailProps }) => (  // adding the rail props sets up events on the rail
                        <div style={railStyle} {...getRailProps()} /> 
                    )}
                </Rail>                        
                <Handles>
                {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        label={this.props.label}
                        />
                    ))}
                    </div>
                )}
                </Handles>
                <Tracks right={false}>
                {({ tracks, getTrackProps }) => (
                    <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                        <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                        />
                    ))}
                    </div>
                )}
                </Tracks>                        
            </Slider>    
        </div>
      );
    }
  }
  
  export default SliderComponent;