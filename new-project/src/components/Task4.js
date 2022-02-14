import React, { Component } from "react";    
import "./Task4.css";
    
class Task4 extends Component {    
    constructor(props) {    
        super(props);    
        this.state = { 
            img:'',
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
        // console.log(name, value)  
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault(); 

    
        if (this.handleFormValidation()) {    
        
            console.log(this.state)
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
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
    
export default Task4;




















// import React, { Component } from "react";    
// import "./Task4.css";
    
// class Task4 extends Component {    
//     constructor(props) {    
//         super(props);    
//         this.state = {    
//             studName: '',    
//             emailId: '',    
//             dob: '',    
//             gender: 'select',    
//             phoneNumber: '',    
//             city: 'select',
//             checkbox:'',    
//             formErrors: {}    
//         };    
    
//         this.initialState = this.state;    
//     } 
    
    
//     handleimageChange = e => {
//         this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
//       }

//       handleChangeVideo = e => {
//         this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
//       }


//     handleFormValidation() {    
//         const { studName, emailId, dob, gender, phoneNumber, city, checkbox } = this.state;    
//         let formErrors = {};    
//         let formIsValid = true;    
    
//         //Student name     
//         if (!studName) {    
//             formIsValid = false;    
//             formErrors["studNameErr"] = "Name is required.";    
//         }    
    
//         //Email    
//         if (!emailId) {    
//             formIsValid = false;    
//             formErrors["emailIdErr"] = "Email id is required.";    
//         }    
//         else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
//             formIsValid = false;    
//             formErrors["emailIdErr"] = "Invalid email id.";    
//         }    
    
//         //DOB    
//         if (!dob) {    
//             formIsValid = false;    
//             formErrors["dobErr"] = "Date of birth is required.";    
//         }    
//         else {    
//             var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
//             if (!pattern.test(dob)) {    
//                 formIsValid = false;    
//                 formErrors["dobErr"] = "Invalid date of birth";    
//             }    
//         }    
    
//         // //Gender    
//         // if (gender === '' || gender === "select") {    
//         //     formIsValid = false;    
//         //     formErrors["genderErr"] = "Select gender.";    
//         // }    
    
//         //Phone number    
//         if (!phoneNumber) {    
//             formIsValid = false;    
//             formErrors["phoneNumberErr"] = "Phone number is required.";    
//         }    
//         else {    
//             var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
//             if (!mobPattern.test(phoneNumber)) {    
//                 formIsValid = false;    
//                 formErrors["phoneNumberErr"] = "Invalid phone number.";    
//             }    
//         }    
    
//         //City    
//         if (city === '' || city === "select") {    
//             formIsValid = false;    
//             formErrors["cityErr"] = "Select city.";    
//         }
        

//         //checkbox
//         if (!checkbox) {    
//             formIsValid = false;    
//             formErrors["checkboxerr"] = "Checkbox is required.";    
//         }


    
//         this.setState({ formErrors: formErrors });    
//         return formIsValid;    
//     }    
    
//     handleChange = (e) => {    
//         const { name, value } = e.target;    
//         this.setState({ [name]: value });    
//     }    
    
//     handleSubmit = (e) => {    
//         e.preventDefault();    
    
//         if (this.handleFormValidation()) {    
//             alert('You have been successfully registered.')    
//             this.setState(this.initialState)    
//         }    
//     }    


//     //Validation Checkbox
    
//         state = {
//           checkbox: "",
//           checkboxValid: false,
//           errorMsg: {},
//           selectedCheckBox: 0
//         };
      
//         validateForm = () => {
//           const { checkboxValid } = this.state;
//           this.setState({
//             formValid: checkboxValid
//           });
//         };
      
//         updateCheckbox = ({ name, checked }) => {
//           this.setState(
//             (prev) => ({
//               checkbox: checked,
//               selectedCheckBox: checked
//                 ? prev.selectedCheckBox + 1
//                 : prev.selectedCheckBox - 1
//             }),
//             this.validateCheckbox
//           );
//         };
      
//         validateCheckbox = () => {
//           const { checkbox } = this.state;
//           let checkboxValid = true;
//           let errorMsg = { ...this.state.errorMsg };
//           if (this.state.selectedCheckBox < 2) {
//             checkboxValid = false;
//             errorMsg.checkbox = "Please select atleast 2 checkbox";
//           }
//           this.setState({ checkboxValid, errorMsg }, this.validateForm);
//         };







    
//     render() {    
    
//         const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, cityErr, checkboxerr } = this.state.formErrors;    
    
//         return (    
//             <div className="formDiv">  
//             <h3 style={{ textAlign: "center" }} >Form Submission</ h3>   
            
//             <div className='image' value="image">

//             <input type="file" id="img" name="img" accept="image/*" onChange={this.handleimageChange}/>

//             <img  className="image" src={this.state.img} alt="img"/>


//             </div>
//             <br/><br/>
//             <div className='videocontain'>
//             <input type="file" id="video" name="video"  accept=".mp4" onChange={this.handleChangeVideo}/>

//             <video  className="videocontain" controls src={this.state.video} alt="video"></video>
            
            
//             </div><br/><br/>




                  
//                 <div>    
//                     <form onSubmit={this.handleSubmit}>    
//                         <div>    
//                             <label htmlFor="studName">Name</label>    
//                             <input type="text" name="studName"    
//                                 value={this.state.studName}    
//                                 onChange={this.handleChange}    
//                                 placeholder="Your name.."    
//                                 className={studNameErr ? ' showError' : ''} />    
//                             {studNameErr &&    
//                                 <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
//                             }    
    
//                         </div>  <br/>  
//                         <div>    
//                             <label htmlFor="emailId">Email Id</label>    
//                             <input type="text" name="emailId"    
//                                 value={this.state.emailId}    
//                                 onChange={this.handleChange}    
//                                 placeholder="Your email id.."    
//                                 className={emailIdErr ? ' showError' : ''} />    
//                             {emailIdErr &&    
//                                 <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
//                             }    
    
//                         </div>  <br/>  
//                         <div>    
//                             <label htmlFor="text">Birth Date</label>    
//                             <input type="text" name="dob"    
//                                 value={this.state.dob}    
//                                 onChange={this.handleChange}    
//                                 placeholder="DD/MM/YYYY.."    
//                                 className={dobErr ? ' showError' : ''} />    
//                             {dobErr &&    
//                                 <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
//                             }    
//                         </div> <br/>   
//                         <div className='gender' onChange={this.handleSubmit} >
            
//                         <label>Gender</label>
                        
                        
//                         <input type="radio" value="Male" name="gender" /> Male
//                         <input type="radio" value="Female" name="gender" /> Female
//                         <input type="radio" value="Other" name="gender" /> Other
            
            
//             </div><br/>   
//                         <div>    
//                             <label htmlFor="phoneNumber">Phone Number</label>    
//                             <input type="text" name="phoneNumber"    
//                                 onChange={this.handleChange}    
//                                 value={this.state.phoneNumber}    
//                                 placeholder="Your phone number.."    
//                                 className={phoneNumberErr ? ' showError' : ''} />    
//                             {phoneNumberErr &&    
//                                 <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
//                             }    
//                         </div> <br/>   
//                         <div>    
//                             <label htmlFor="city">Dropdown</label>    
//                             <select name="city"    
//                                 value={this.state.city}    
//                                 onChange={this.handleChange}    
//                                 className={cityErr ? ' showError' : ''} >    
//                                 <option value="select">--Select--</option>    
//                                 <option value="React">REACT</option>
//                                 <option value="python">PYTHON</option>
//                                 <option value="angular">ANGULAR</option>
//                                 <option value="vue">VUE</option>
//                                 <option value="wordpress">WORDPRESS</option>   
//                             </select>    
//                             {cityErr &&    
//                                 <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
//                             }    
//                         </div>  <br/>  

                        

//                         <div className="checkbox"  onChange={this.handleSubmit}>
//         <label htmlFor="checkbox">Checkbox</label>
//         {/* <ValidationMessage
//           valid={this.state.checkboxValid}
//           message={this.state.errorMsg.checkbox}
//         /> */}<br/>
//         <input
//           type="checkbox"
//           name="business"
//           onChange={(e) => this.updateCheckbox(e.target)}
//         />
//         Tamil
//         <br></br>
//         <input
//           type="checkbox"
//           name="health"
//           onChange={(e) => this.updateCheckbox(e.target)}
//         />
//         English
//         <br></br>
//         <input
//           type="checkbox"
//           name="society"
//           onChange={(e) => this.updateCheckbox(e.target)}
//         />
//         Hindi
//         <br></br>
//         <input
//           type="checkbox"
//           name="society"
//           onChange={(e) => this.updateCheckbox(e.target)}
//         />
//         Kannada
//         <br></br>
//         <input
//           type="checkbox"
//           onChange={(e) => this.updateCheckbox(e.target)}
//         />
//         Others
//         <br></br>
//         <div
          
//             className="button"
//             type="submit"
//             disabled={!this.state.formValid}>
          
//           <br /><input type="submit" value="Submit" />
//           <b style={{ fontSize: "14px" }}>
//            {}
//           </b>
//         </div>
//       </div>


                    
//                     </form>    
//                 </div>    
//             </div >    
//         )    
//     }    
// }    
    
// export default Task4;


// //     constructor(props) {
// //         super(props)

// //         this.state={
            
// //             img:"",
// //             video:"",
// //             username:"",
// //             dropdown:"",
// //             gender:"",
// //             checkbox:"",
// //             // imageerror:"",
// //             // videoerror:"",
// //             // usernameerror:"",
// //             // dropdownerror:"",
// //             // gendererror:"",
// //             // checkboxerror:""
// //         }
// //     }

    
// //     handleimageChange = e => {
// //         this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
// //       }

// //       handleChangeVideo = e => {
// //         this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
// //       }


// //     handleUsernameChange =(event) => {
// // this.setState({
// //     username: event.target.value
// // })
// //     }



// //     handleDropdownchange = event => {
// //          this.setState({
// //              Dropdown: event.target.value
// //          })
// //         }


// //      handleSubmit = event => {
// //          event.preventDefault();
// //         //  console.log(this.state.handleChangeImage);
// //         //  console.log(this.state.video);
// //         //  console.log(this.state.gender);
// //         //  console.log(this.state.username);
// //         //  console.log(this.state.dropdown);
// //         //  console.log(this.state.checkbox);
        
// //         //  alert( `${this.state.handleimageChange}` `${this.state.video}` `${this.state.username}` `${this.state.gender}` `${this.state.dropdown}` `${this.state.checkbox}`  )

// //      };
     
// //     render ()  
// //     {
// //             const {username, Dropdown} =this.state;
// //             const handleimageChange = this.handleimageChange;
// //             const handleChangeVideo = this.handleChangeVideo;
// //             const onChangeValue = this.onChangeValue;
// //             const {imageChange, removeSelectedImage} = this.state;

// //         return (
// //             <form onSubmit={this.handleSubmit}>
// //             <div className='image' value="image">

// //             <input type="file" id="img" name="img" accept="image/*" onChange={this.handleimageChange}/>

// //             <img  className="image" src={this.state.img} alt="img"/>


// //             </div>
// //             <br/><br/>
// //             <div className='videocontain'>
// //             <input type="file" id="video" name="video"  accept=".mp4" onChange={this.handleChangeVideo}/>

// //             <video  className="videocontain" controls src={this.state.video} alt="video"></video>
            
            
// //             </div>


// //             <br/>
// //             <br/>
// //             <br/>
            
            
// //             <div className='username'>
// //             <label>Username</label>
// //             <input type='text' name="username" 
// //             onChange={this.handleUsernameChange}/>   

             
            
// //             </div><br/>


// //             <div className='gender' onChange={this.handleSubmit} >
            
// //             <h3>Gender</h3>
            
// //             <input type="radio" value="Male" name="gender" /> Male
// //             <input type="radio" value="Female" name="gender" /> Female
// //             <input type="radio" value="Other" name="gender" /> Other
            
            
// //             </div><br/>

// //             <div className='dropdown' onChange={this.handleSubmit}>
// //             <h3>Dropdown</h3>
// //             <select>
           
// //                 <option value="dropdown">Click Here</option>
// //                 <option value="React">REACT</option>
// //                 <option value="python">PYTHON</option>
// //                 <option value="angular">ANGULAR</option>
// //                 <option value="vue">VUE</option>
// //                 <option value="wordpress">WORDPRESS</option>
// //             </select>

            

// //             </div><br/>

// //             <div>
// //             <h4>Select Your Favorite Subject</h4>
// //             <div className="checkbox" value="checkbox" onChange={this.handleSubmit}>
// //            <select>
// //               <input type="checkbox" id="subject" name={this.state.subject} value="Tamil" />Tamil<br/>
// //               <input type="checkbox" id="subject" name="subject" value="English" />English<br/>
// //               <input type="checkbox" id="subject" name="subject" value="Maths" />Hindi<br/>
// //               <input type="checkbox" id="subject" name="subject" value="Science" />Kannada<br/>
// //               <input type="checkbox" id="subject" name="subject" value="Others" />Others<br/>
// //               </select>
              
              
// //             </div>
// //           </div><br/>



// //             <input type='Submit'
// //             className="btn btn-primary my-3" value={"Submit"}/>
// //             </form>
// //         )
// //     }
// // }

// // export default Task4;

