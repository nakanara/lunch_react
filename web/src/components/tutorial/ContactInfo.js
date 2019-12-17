import React from 'react';


/**
 * export default 를 하단에서 return 해도 되며,
 * 상단 class 선언에서 export default class .. 해도 동일한 기능임.
 */
export default class ContactInfo extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>{this.props.contact.name} {this.props.contact.phone}</div>
    )
  }
}