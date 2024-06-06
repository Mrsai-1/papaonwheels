import './About.css'
import lagori from './images/lagori.png'

function About(){
    return(
        <><br></br>
       <div className='About-display'>
          <AboutLabel/>
        </div>
        <br></br>
        <AboutContent/>

        <div className='About-display'>
             <VisionLabel/>
        </div>
        <br></br>
        <VsionContent/>

        <div className='About-display'>
             <MisionLabel/>
        </div>
        <br></br>
        <MisionContent/>
        </>
    )
}

function AboutLabel(){
    return(
        <>
        <div className='About-Label'>
           <div className='text-center text-responsive About-Content' >About Us</div>
        </div>
        
        </>
    )
}

function AboutContent(){
    return(
        <div className='about_content container About-Text'>
<div className='text-center text-responsive '><p className='lead welcomeText'>Welcome to Papa Toys! </p><p className='aboutText'>Bringing Joy to Children Since 2012 At Papa Toys, we believe in the magic of play. Established in 2012, our company has been dedicated to creating and offering a diverse range of high-quality toys that spark imagination, creativity, and endless hours of fun. From educational toys that stimulate young minds to action figures that bring their favorite characters to life, we have something special for every child</p></div> 
</div>
    )
}


function VisionLabel(){
    return(
        <>
        <div className='About-Label'>
           <div className='text-center text-responsive About-Content'>Our Vision</div>
        </div>
        
        </>
    )
}


function VsionContent(){
    return(
        <div className='about_content container'>
            <div className='row About-Text'>
            <div className='text-center text-responsiv col-sm-6 col-xs-6 col-md-6 col-lg-6' >
                <p  className='aboutText'>Our vision is to spark curiosity, ignite creativity, and inspire a lifelong love of learning in every child who visits us. Whether they're discovering fascinating facts about animals, diving into fantastical stories, or unleashing their creativity through interactive games and activities, we're here to fuel their imagination and empower them to dream big.</p>
                </div> 

<div className='col-sm-6 col-xs-6 col-md-6 col-lg-6'>
<img src={lagori} alt='our vision' className='w-100'/>
</div>
            </div>
            </div>

    )
}

function MisionLabel(){
    return(
        <>
        <div className='About-Label'>
           <div className='text-center text-responsive About-Content'>Our Mision</div>
        </div>
        
        </>
    )
}

function MisionContent(){
    return(
        <div className='about_content container'>
            <div className='row About-Text'>
       <div className='col-sm-6 col-xs-6 col-md-6 col-lg-6'>
            <img src={lagori} alt='our vision' className='w-100'/>
      </div>


<div className='text-center text-responsiv col-sm-6 col-xs-6 col-md-6 col-lg-6' >
                <p  className='aboutText'>Our mission is to enrich the lives of children through the power of play. We are passionate about designing toys that not only entertain but also inspire learning and development. Every toy we create is crafted with care, ensuring safety, durability, and most importantly, joy.</p>
                </div> 
            </div>
            </div>

    )
}




export default About