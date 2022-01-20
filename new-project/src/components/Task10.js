import React, { Component } from 'react';
import { render } from 'react-dom';
import "./Task4.css";


// class Task10 extends Component {
//   render() {
//     return (
//       <Register />
//     );
//   }
// }

// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }

class Task10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      image: null,
      password: null,
      errors: {
        fullName: '',
        image: null,
        password: '',
      }

      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }






  handleimageChange = e => {
    this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
  }

  handleChangeVideo = e => {
    this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;

      default:
        break;
    }

    // this.setState({errors, [name]: value});
  }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if(validateForm(this.state.errors)) {
//       console.info('Valid Form')
//     }else{
//       console.error('Invalid Form')
//     }
//   }



  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} >

            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}<br/><br/>
            </div>

                
            
                <label >Gender
                <select value={this.state.value} onChange={this.handleChange} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>  
                            </label>
               <br/>


                <div className='dropdown'>
                
              <label htmlFor="dropdown">Dropdown</label>

              <select >
                <option value="dropdown">--Click Here--</option>
                <option value="React">REACT</option>
                <option value="python">PYTHON</option>
                <option value="angular">ANGULAR</option>
                <option value="vue">VUE</option>
                <option value="wordpress">WORDPRESS</option>
            </select>
            
            </div><br/>

            
            <div className='checkbox'>
              <label htmlFor="checkbox">FAVORITE SUBJECT</label><br/>
              
              <input type="checkbox" id="subject" name={this.state.subject} value="Tamil" />Tamil<br/>
              <input type="checkbox" id="subject" name="subject" value="English" />English<br/>
              <input type="checkbox" id="subject" name="subject" value="Maths" />Hindi<br/>
              <input type="checkbox" id="subject" name="subject" value="Science" />Kannada<br/>
              <input type="checkbox" id="subject" name="subject" value="Others" />Others<br/>
             
            </div><br/><br/>


                
            <div className='image' value="image">

            <input type="file" id="img" name="img" accept="image/*" onChange={this.handleimageChange}/>

            <img  className="image" src={this.state.img} alt="img"/>


            </div>
            <br/><br/>
            <div className='videocontain'>
            <input type="file" id="video" name="video"  accept=".mp4" onChange={this.handleChangeVideo}/>

            <video  className="videocontain" controls src={this.state.video} alt="video"></video>
            
            
            </div><br/><br/>



            <div className='submit'><br/>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Task10;