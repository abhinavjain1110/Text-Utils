import React from 'react'
import "./index.css";

export default function About(props) {

    /* const [myStyle,setmyStyle] = useState(
        {
        color: 'white',
        backgroundColor: 'black'
    })*/
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white'
    }
  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        <div className='accordion' id='accordionExample'>
        <div classNameName="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count, character count or anything related to it. </strong> 
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.Thus it is suitable for writing text with word count or character limit.</strong>
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>This word counter software works in any web such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count in facebook, blog, books, excel document, pdf document, essays, etc.</strong> 
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}
