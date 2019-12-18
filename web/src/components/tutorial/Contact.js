import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'immutability-helper';

export default class Contact extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
          keyword: "",
          selectKey: -1,
          contactData: [{
              name: 'Abet',
              phone: '010-0000-0001'
          }, {
              name: 'Betty',
              phone: '010-0000-0002'
          }, {
              name: 'Charlie',
              phone: '010-0000-0003'
          }, {
              name: 'David',
              phone: '010-0000-0004'
          }]
      };
      
      // this. 객체 매핑
      this.handlerChange = this.handlerChange.bind(this);
      this.handlerClick = this.handlerClick.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
  }

  handlerChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  handlerClick(key) {
    this.setState({selectKey: key});
    console.log(`${key} is selected`);
  }

  handleCreate(contact) {

    console.log(contact);
    this.setState({
      // contactData: this.state.contactData.concat(contact),      
      contactData: update(this.state.contactData, { $push: [contact] })
    });
  }
  
  render() {
      const mapToComponents = (data) => {
        data.sort();
        data = data.filter((contact) => {
          return contact.name.toLowerCase()
            .indexOf(this.state.keyword.toLowerCase()) > -1;
        })
        return data.map((contact, i) => {
            return (<ContactInfo contact={contact} key={i} onClick={() => this.handlerClick(i)}/>);
        });
      };

      return (
          <div>
            <h1>Contacts</h1>
            <input name="keyword"
              placeholder="Search" 
              value={this.state.keyword}
              onChange={this.handlerChange}/>
            <div>{mapToComponents(this.state.contactData)}</div>
            <ContactDetails isSelected={this.state.selectKey != -1} 
              contact={this.state.contactData[this.state.selectKey]}/>
            <ContactCreate onCreate={this.handleCreate}/>
          </div>
      );
  }
}