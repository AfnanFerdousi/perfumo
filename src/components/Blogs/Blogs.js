import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center d-inline-block borderClass my-3'>FAQ</h2>
            <div class="accordion my-5" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What Are The Differences Between Javascript and Nodejs?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                        Javascript is a programming lanauge. It is running in any web browser with a proper browser engine. And node js is an interpreter and enviroment for Js with specifig usefull libraies Wich javascript Developers can user sepratley. JavaScript is mainly used for client side activity, like possible validation or refreshing the page in a specfig interval or provide some dynamic changes in the web pages without the client refreshing the page. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What Is The Purpose Of Json Web Token (JWT) And How Does It Work?When Should You Use Nodejs and When Should You Use MongoDB?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p>
                        JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Every jwt contains encoded json Objects including a set of Claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. Jwt can be used for authorization or authentication.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What Are The Differences Between SQL and NoSQL Databases?
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                        sql has Relational database management systems. while NoSql has Non relional Or distributed database system. Sql databases have fixed ot static predifined schema, and Nosql Has Dynamic Schema. SQL database is not suited for hierachical data storage. while NoSql Database are bet suited for hierachical data storage.
                        </p>
                    </div>
                    </div>
                </div>
                </div>                        
        </div>
    );
};

export default Blogs;