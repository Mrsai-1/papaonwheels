import './Contact.css'
import {useRef,useState,useEffect} from "react"
import call from './images/call_9572935.png'
import Email from './images/email_1782765.png'
import clock from './images/clock_818149.png'
import location from './images/location_1483285.png'
// import './Contact.scss'
function Contact(){

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const [formData, setFormData] = useState({name: '',
  message: ''});
  const [formDirty, setFormDirty] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (formDirty) {
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formDirty]);


  const handleSubmit=(event) =>{
    event.preventDefault();


    if (!formData.name.trim() ||!formData.message.trim()) {
      setFormError('Please fill in all fields.');
      return;
    }
    
    setFormError('');
    console.log(formData)
    setFormDirty(false);

    setFormData({});
    // Clear input fields
    input1Ref.current.value = '';
    input2Ref.current.value = '';
    input3Ref.current.value = '';
    setShowAlert(true);
    setAlertMessage(`Thanks for contacting us. We'll get back to you as soon as possible.`);

    fetch("http://localhost:4444/feedbacks", {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(formData)
	})
	.then(response =>response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setFormDirty(true);
  };
  
  const handleAlertClose = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  function openEmail(){
    window.open('mailto:papaofficial@gmail.com');
  }
  function openMobile(){
    window.open('tel:8106189484');
  }


    return(
        <>
        <br></br>
        <div className='container-fluid Contact-label'>
        <h5 className='fs-2 fw-bold '>Contact Us</h5>
        <p className='fs-6 fw-bold'>Home / Contact</p>
        </div>
       
      <br></br>
        <div className='container'>
          
            <div className='row'>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={location} alt="" className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>ADDRESS</h4>
                <p className='text-justify text-center fs-5 fw-bold'>2nd floor, 35/274, Plot No, 5-5, 35/264/2, Prashanti Nagar, Shakti Puram, Kukatpally, Telangana 500072</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={Email} alt="" onClick={openEmail} className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>EMAIL</h4>
                <p className='text-justify text-center fs-5 fw-bold'>papaofficial24@gmail.com</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                    <img src={call} alt="" onClick={openMobile} className='text-center assers'/>
                    <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>PHONE</h4>
                    <p className='text-justify text-center fs-5 fw-bold'>+91 8106189484</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={clock} alt="" className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>TIMING</h4>
                <p className='text-center text-justify fs-5 fw-bold'>Mon-Sat from 10am-7pm</p>

                </div>
                </div>
                <br></br>
                </div>

<div className="container" >
  <div className="row justify-content-center align-itams-center" >
    <div className='col-sm-7 col-md-7 col-xs-7 col-lg-7' style={{display:'none'}}>
                <div className='container-form'>
                {showAlert &&  <AlertBox message={alertMessage} onClose={handleAlertClose} />}
                {formError && <div className="alert alert-danger">{formError}</div>}


        <form id="contact-form"  onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"  ref={input1Ref} value={formData.name} onChange={handleChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required ref={input2Ref} onChange={handleChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" ref={input3Ref} value={formData.message} onChange={handleChange} ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>

                <div className='iframe-container col-md-5 col-xs-5 col-sm-5 col-lg-5' style={{width:'100%'}} >
    <iframe src="https://maps.google.com/maps?q=2nd+floor%2C+35%2F274%2C+Plot+No%2C+5-5%2C+35%2F264%2F2%2C+Prashanti+Nagar%2C+Shakti+Puram%2C+Kukatpally%2C+Telangana+500072&t=k&z=9&ie=UTF8&iwloc=&output=embed" title="papaLocation" className='w-100' width="400" height="250" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
    </div>
    </div>
    {/* <HoverEffect /> */}
        </>
        
    )
}



function AlertBox({ message, onClose }){
  
  return(
    <div className="alert alert-success alert-dismissible" role="alert">
    {message}
    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
  </div>
  )
}

// function HoverEffect(){
//   return(
//     <>
//     <div className="all">
// <div className="lefter">
//   <div className="text">Hosting</div>
// </div>
// <div className="left">
//   <div className="text">Web Design</div>
// </div>
// <div className="center">
//   <div className="explainer"><span> <h5>Contact Us</h5>
//         </span></div>
//   <div className="text">Frontend Development</div>
//   </div>
// <div className="right">
//   <div className="text">Backend Development</div>
// </div>
// <div className="righter">
//   <div className="text">SEO</div>
// </div>
// </div>

// </>
//   )
// }





export default Contact