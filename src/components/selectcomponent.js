import '../scss/home.scss';
import '../scss/select.scss';
import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';


  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '0',
    }),
    menu: (provided, state) => ({
        ...provided,
        borderRadius: '0',
        marginTop:5
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        width:0
    }), 
  }

class SelectComponent extends Component {
    constructor(props){
        super();
    }

    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.selectChangedCallback(selectedOption.value);
    }
    render() {
    const { selectedOption } = this.state;

    return (
        <AsyncSelect
        styles={customStyles}
        className={'select-container'}
        value={selectedOption}
        onChange={this.handleChange}
        cacheOptions defaultOptions loadOptions={this.props.promiseOptions}
        placeholder={'Select Voice'}
        theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#ffefc1",
              primary: "#f2c12e"
            }
          })}
        />
    );
    }
}

export default SelectComponent;