import React, { Component } from "react";    
import "./Task4.css";
    
class Task9 extends Component {    
    constructor(props) {    
        super(props);    
        this.state = { 
            image:'',
            video:'',   
            name: '',    
            emailId: '',    
            dob: '',    
            gender: '',    
            phoneNumber: '',    
            dropdown: 'select',
            checkbox:'',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    } 
    
    //image and video
    handleimageChange = e => {
        this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
      }

      handleChangeVideo = e => {
        this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
      }


    handleFormValidation() {    
        const { name, emailId, dob, gender, phoneNumber, dropdown, checkbox } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        // name     
        if (!name) {    
            formIsValid = false;    
            formErrors["nameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }       
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
          
    
        //Gender    
        if (gender == '' ) {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select Gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
           
    
        //dropdown    
        if (dropdown === '' || dropdown === "select") {    
            formIsValid = false;    
            formErrors["dropdownErr"] = "Select dropdown.";    
        }
        

        //checkbox
        if (checkbox == '') {    
            formIsValid = false;    
            formErrors["checkboxErr"] = "Checkbox is required."; 
           
        }
        
        


        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {
        const { name, value } = e.target;    
        this.setState({ [name]: value });  
        console.log(name, value)  
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault(); 

    
        if (this.handleFormValidation()) {    
        
            console.log(this.state)
            // alert('You have been successfully registered.')    
            // this.setState(this.initialState)    
        }    
    }    


    //Validation Checkbox
    
        // state = {
        //   checkbox: "",
        //   checkboxValid: false,
        //   errorMsg: {},
        //   selectedCheckBox: 0
        // };
      
        // validateForm = () => {
        //   const { checkboxValid } = this.state;
        //   this.setState({
        //     formValid: checkboxValid
        //   });
        // };
      
        // updateCheckbox = ({ name, checked }) => {
        //   this.setState(
        //     (prev) => ({
        //       checkbox: checked,
        //       selectedCheckBox: checked
        //         ? prev.selectedCheckBox + 1
        //         : prev.selectedCheckBox - 1
        //     }),
        //     this.validateCheckbox
        //   );
        // };
      
        // validateCheckbox = () => {
        //   const { checkbox } = this.state;
        //   let checkboxValid = true;
        //   let errorMsg = { ...this.state.errorMsg };
        //   if (this.state.selectedCheckBox < 2) {
        //     checkboxValid = false;
        //     errorMsg.checkbox = "Please select atleast 2 checkbox";
        //   }
        //   this.setState({ checkboxValid, errorMsg }, this.validateForm);
        // };

    

    
    render() {    
    
        const { nameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, dropdownErr, checkboxErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">  
            <h3 style={{ textAlign: "center" }} >Form Submission</ h3>   
            
            <div className='image' value="image">

            <input type="file" id="img" name="img" accept="image/*" onChange={this.handleimageChange}/>

            <img  className="image" src={this.state.img} alt="img"/>


            </div>
            <br/><br/>
            <div className='videocontain'>
            <input type="file" id="video" name="video"  accept=".mp4" onChange={this.handleChangeVideo}/>

            <video  className="videocontain" controls src={this.state.video} alt="video"></video>
            
            
            </div><br/><br/>




                  
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="name">Name</label>    
                            <input type="text" name="name"    
                                value={this.state.name}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={nameErr ? ' showError' : ''} />    
                            {nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>    
                            }    
    
                        </div>  <br/>  
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>  <br/>  
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div> <br/>   
                        <div className='gender' onChange={this.handleSubmit} >
                        <label>Gender</label>
                        
                        
                        <input type="radio" value="Male" name="gender"    
                        onChange={this.handleChange}    
                        className={genderErr ? ' showerror' : ''} /> Male
                        <input type="radio" value="Female" name="gender"   
                        onChange={this.handleChange}    
                        className={genderErr ? ' showerror' : ''}  /> Female
                        <input type="radio" value="Other" name="gender"    
                        onChange={this.handleChange}    
                        className={genderErr ? ' showerror' : ''} /> Other

                        {genderErr &&    
                            <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                        }
            
            
            </div><br/>   
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div> <br/>   
                        <div>    
                            <label htmlFor="dropdown">Dropdown</label>    
                            <select name="dropdown"    
                                value={this.state.dropdown}    
                                onChange={this.handleChange}    
                                className={dropdownErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="React">REACT</option>
                                <option value="python">PYTHON</option>
                                <option value="angular">ANGULAR</option>
                                <option value="vue">VUE</option>
                                <option value="wordpress">WORDPRESS</option>   
                            </select>    
                            {dropdownErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dropdownErr}</div>    
                            }    
                        </div>  <br/>  

                        

<div>
        <label htmlFor="checkbox">Checkbox</label><br/>
        <input type="checkbox"  value="Tamil" onChange={this.handleChange}
         className={checkboxErr ? ' showerror' : ''} name = "checkbox"/> Tamil<br/>

        <input type="checkbox" value="English"   
        onChange={this.handleChange}    
        className={checkboxErr ? ' showerror' : ''} name = "checkbox"/> English    <br></br>
        
        <input type="checkbox" value="Hindi"    
        onChange={this.handleChange}    
        className={checkboxErr ? ' showerror' : ''} name = "checkbox"/> Hindi       <br></br>
        
        <input type="checkbox"  value="Kannada"    
        onChange={this.handleChange}    
        className={checkboxErr ? ' showerror' : ''} name = "checkbox"/> Kannada       <br></br>
        
        <input type="checkbox" value="Others"    
        onChange={this.handleChange}    
        className={checkboxErr ? ' showerror' : ''} name = "checkbox"/>  Others       <br></br>
        
        {checkboxErr &&    
            <div style={{ color: "red", paddingBottom: 10 }}>{checkboxErr}</div>    
        }
        
        </div>
        <div className="button" type="submit"
        disabled={!this.state.formValid}>
          
      <br /><input type="submit" value="Submit" />
      <b style={{ fontSize: "14px" }}>

          </b>
        </div>
      
                    </form>    
                </div>    
            </div>    
        )    
    }    
}    
    
export default Task9;