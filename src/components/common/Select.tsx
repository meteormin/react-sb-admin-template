import React, { ChangeEvent, Component } from 'react';

export interface SelectProps {
  id: string;
  label?: string;
  name: string;
  selectedValue?: any;
  options: Option[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => any;
  readOnly?: boolean;
}

export interface Option {
  name: string;
  value: string | number;
}

class Select extends Component<SelectProps, SelectProps> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      id: '',
      name: '',
      options: [],
      label: '',
      selectedValue: 0,
      onChange: (e: ChangeEvent<HTMLSelectElement>) => e,
    };
  }

  componentDidMount() {
    this.setState(this.props);
  }

  componentDidUpdate(prevProps: Readonly<SelectProps>) {
    if (prevProps.selectedValue !== this.props.selectedValue) {
      this.setState(this.props);
    }

    if (prevProps.options !== this.props.options) {
      this.setState(this.props);
    }
  }

  onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedValue: e.target.options[e.target.selectedIndex].value,
    });

    if (this.state.onChange) {
      this.state.onChange(e);
    }
  };

  makeLabel() {
    if (this.state.label) {
      return (
        <label
          key={'label' + this.state.id}
          htmlFor={this.state.id}
          className="form-label"
        >
          {this.state.label}
        </label>
      );
    }
    return null;
  }

  makeOptions() {
    if (this.state.options) {
      return this.state.options.map((option, key) => {
        return (
          <option
            key={key + option.name}
            value={option.value}
            disabled={this.props.readOnly}
          >
            {option.name}
          </option>
        );
      });
    }

    return null;
  }

  render() {
    return (
      <div key={'div' + this.state.id} className="form-group">
        {this.makeLabel()}
        <select
          className="form-select"
          id={this.state.id}
          onChange={this.onChange}
          value={this.state.selectedValue}
        >
          {this.makeOptions()}
        </select>
      </div>
    );
  }
}

export default Select;
