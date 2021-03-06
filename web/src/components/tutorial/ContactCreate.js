import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    const contactData = localStorage.contactData;

    if(contactData) {
      this.setState({
        contactData : JSON.parse(contactData)
      })
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if(JSON.stringify(prevState.contactData) !== JSON.stringify(this.state.contactData)) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    const context = {
      name : this.state.name,
      phone: this.state.phone,
    }

    this.props.onCreate(context);

    this.setState({
      name: '',
      phone: '',
    });

    this.nameInput.focus();
  }

  handleKeyPress(e){
    if(e.charCode === 13) { // enter
      this.handleClick();
    }
  }

  render(){
    return (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={(ref) => this.nameInput = ref}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />          
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    )
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
};


ContactCreate.defaultProps = {
  onCreate: () => { console.error('onCreate not defined'); }
}