import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">resume: Senait Gerezgiher</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                Full stack developer with experience the MERN stack.

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/senait-gerezgiher-70801a204/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="DeWoody LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="my resume pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose),  API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;