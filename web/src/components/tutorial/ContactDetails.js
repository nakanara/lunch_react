import React from 'react';

export default class ContactDetails extends React.Component {
  render(){

    const details = (
    <div>
      <p>{this.props.isSelected} </p>
      <p>{this.props.contact.name}</p>
      <p>{this.props.contact.phone}</p>
    </div>
    );
    const blank = (<div>Not Selected</div>);

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected? details: blank}
      </div>
    )
  }
}

/**
 * 기본 Props 정의
 */
ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  }
};