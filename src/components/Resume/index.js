import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Senait Gerezgiher</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                FULL STACK WEB-DEVELOPER
                <p class="mt-5">
                <a href="https://www.linkedin.com/in/senait-gerezgiher-70801a204/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Senait-LinkedIn"/></a>
                </p>
                
                <p class="mt-5">
                <a href="https://github.com/senait77"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Senait-Github"/></a>
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
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose),  API's (third-party, RESTful, server-side), Templating (Handlebars), GraphQL
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;