import React from 'react';
import './form.css';

export default class Form extends React.Component {
state = {
      id: "",
      idError: "",
      fullName: "",
      fullNameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
  };

   change = e => {

        this.setState({
            [e.target.name]: e.target.value
        });
    };

  validate = () => {
       let isError = false;
       const errors = {
           idError: "",
           fullNameError: "",
           emailError: "",
           phoneError: ""

       };

       if (this.state.fullName.length < 4) {
           isError = true; 
           errors.fullNameError = " FullName needs to be at least 4 characters long";
           this.setState({

            fullName: ""
               })
       }
        else if(this.state.email.indexOf('@') == -1) {
           isError = true;
           errors.emailError = "Requires valid email";
             this.setState({
            email: ""
             });
       }

      else if(!this.state.phone.match(/^\d{10}$/)) {
           isError = true;
           errors.phoneError = "Requires valid 10-digit phone number";
          this.setState({
            phone: ""
               })
       }

      else {
            this.setState({
            successAdd:"Data added to the table",
            id: "",
            idError: "",
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            phone: "",
            phoneError: ""
        });
      }
           this.setState({
               ...this.State,
               ...errors
           });
    return isError;
   };

    onSubmit = (e) => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
              this.props.onSubmit(this.state);

        this.setState({
            id: "",
            idError: "",
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            phone: "",
            phoneError: "",
            
        });
    }

};
 render() {

 return (
        <div >
           
          <div className="Title">List of participants</div>
            <span className="successmessage">
            {this.state.successAdd}
            </span>
           <form className="form">
                <table className="FormTable">
                <tr className="AddNew">
                <td className="AddData">
                    <input
                        type = "text"
                        placeholder = "  Full name"
                        name="fullName"
                        value= {this.state.fullName}
                        onChange={e => this.change(e)}
                      

                        />

                </td>
                <td className="AddData">
                    <input
                        type = "email"
                        placeholder = "   E-mail address"
                        name="email"
                         value= {this.state.email}
                        onChange = {e => this.change(e)}
                       
                       />
                </td>
                <td className="AddData">
                    <input
                        type = "tel"
                        placeholder = "   Phone number"
                         name="phone"
                        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                         value= {this.state.phone}
                        onChange = {e => this.change(e) }
                      
                        />
                </td>
                <td className="ButtonData">
                    <button className = "button btn-primary" onClick = {e => this.onSubmit(e)}  >Add new</button>
                </td>
            </tr>
                        <tr>
                        <td className="errorcell"><span className="errormsg">{this.state.fullNameError}</span></td>
                        <td className="errorcell"><span className="errormsg">{this.state.emailError}</span></td>
                         <td className="errorcell"><span className="errormsg">{this.state.phoneError}</span></td>
                        </tr>

                </table>
            </form>
        </div>



    );
  }
}
