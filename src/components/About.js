import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or adipisicing elit. Rerum ipsa consequatur praesentium at, accusantium qui quisquam nisi dignissimos voluptatum dolor consequuntur distinctio, et excepturi corporis veniam alias quo debitis assumenda numquam asperiores tempora laboriosam reiciendis? Dolorum reprehenderit reiciendis saepe error repudiandae cupiditate, optio corporis pariatur quod corrupti labore repellendus nemo voluptatum provident a, aspernatur cum, consectetur ducimus ipsum natus minima enim quibusdam! Amet, deserunt architecto. Natus ratione corrupti quam, maxime consectetur error vero. Doloribus, a placeat similique veniam aliquid vitae. Iure amet repellat, dolorum sapiente, cupiditate ab qui tenetur perferendis aspernatur eaque eveniet voluptates nostrum velit nemo similique cum ea? 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa consequatur praesentium at, accusantium qui quisquam nisi dignissimos voluptatum dolor consequuntur distinctio, et excepturi corporis veniam alias quo debitis assumenda numquam asperiores tempora laboriosam reiciendis? Dolorum reprehenderit reiciendis saepe error repudiandae cupiditate, optio corporis pariatur quod corrupti labore repellendus nemo voluptatum provident a, aspernatur cum, consectetur ducimus ipsum natus minima enim quibusdam! Amet, deserunt architecto. Natus ratione corrupti quam, maxime consectetur error vero. Doloribus, a placeat similique veniam aliquid vitae. Iure amet repellat, dolorum sapiente, cupiditate ab qui tenetur perferendis aspernatur eaque eveniet voluptates nostrum velit nemo similique cum ea?
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. adipisicing elit. Rerum ipsa consequatur praesentium at, accusantium qui quisquam nisi dignissimos voluptatum dolor consequuntur distinctio, et excepturi corporis veniam alias quo debitis assumenda numquam asperiores tempora laboriosam reiciendis? Dolorum reprehenderit reiciendis saepe error repudiandae cupiditate, optio corporis pariatur quod corrupti labore repellendus nemo voluptatum provident a, aspernatur cum, consectetur ducimus ipsum natus minima enim quibusdam! Amet, deserunt architecto. Natus ratione corrupti quam, maxime consectetur error vero. Doloribus, a placeat similique veniam aliquid vitae. Iure amet repellat, dolorum sapiente, cupiditate ab qui tenetur perferendis aspernatur eaque eveniet voluptates nostrum velit nemo similique cum ea?
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}