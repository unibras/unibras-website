import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css';

const FORM_CARRY_ID = process.env.FORM_CARRY_ID;

class Contact extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired
  }

  state = {
    name: '',
    phone: '',
    email: '',
    message: '',
    inProgress: null,
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { inProgress } = this.state;
    if (inProgress) {
      return;
    }
    this.setState({inProgress: true});

    const url = `https://formcarry.com/s/${FORM_CARRY_ID}`;
    const { name, phone, email, message } = this.state;
    const data = { name, phone, email, message };

    fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          name: '',
          phone: '',
          email: '',
          message: '',
          inProgress: false,
        });
      })
      .catch(e => console.error('error', e));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { page } = this.props;
    const { inProgress } = this.state;
    const { contact } = page;

    return (
      <div className={classnames(this.props.className, 'Contact')}>
        <div className="Contact__Description">
          <h3 className="Contact__Description-Title">{contact['contact-description-title']}</h3>
          <p className="Contact_Description-Paragraph">
            {contact.intro}<br />
            {contact.address}<br />
            {contact.city}, {contact.state}, {contact.country}<br />
            {contact.zip}
          </p>
          <p>
            {contact.phone}<br />
            {contact.skype}<br />
            {contact.email}
          </p>
        </div>
        <div className="Contact__Form-Container">
          <h3 className="Contact__Description-Title">{contact['contact-form-title']}</h3>
          { inProgress === false &&
            <p className="Contact_Description-Paragraph">{contact['success-message']}</p>
          }
          { inProgress !== false &&
            <form  className="Contact__Form" onSubmit={this.onSubmit}>
              <label className="Contact__Form-Label"htmlFor="name">
                {contact['name-label']}
              </label>
              <input
                id="name"
                name="name"
                className="Contact__Form-Field"
                type="text"
                onChange={this.onChange}
              />

              <label className="Contact__Form-Label" htmlFor="phone">
                {contact['phone-label']}
              </label>
              <input
                id="phone"
                name="phone"
                className="Contact__Form-Field"
                type="tel"
                onChange={this.onChange}
              />

              <label className="Contact__Form-Label" htmlFor="email">
                {contact['email-label']}
              </label>
              <input
                id="email"
                name="email"
                className="Contact__Form-Field"
                type="email"
                onChange={this.onChange}
              />

              <label className="Contact__Form-Label" htmlFor="message">
                {contact['message-label']}
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="Contact__Form-Field"
                onChange={this.onChange}
              />

              <button className="Contact__Form-Submit" type="submit" disabled={inProgress}>
                {contact['send-label']}
              </button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default Contact;
