import React from 'react';

const Blogs = () => {
    return (
        <div className='p-3 ms-4 me-3'>
            <>
                <h5>Difference between javascript and nodejs.</h5>
                <p>Jav Javascript is a programming language that is used for writing scripts on the website. Whereas NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. Javascript is basically use in client-side. and nodejs on the server-side</p>
                <br/>
                <h5>Differences between sql and nosql databases.</h5>
                <p>SQL databases display data in form of tables so it is known as table-based database  but NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores. NoSQL is better for unstructured data like documents or JSON.</p>
                <br/>
                <h5>What is the purpose of jwt and how does it work?</h5>
                <p>JWT is json web token. It is used in the security purpose. It is used to transmit information between server and client securely.  </p>
                <p>When a user login in jwt provide a access token to the client. If the user have a valid token then jwt allow the user to login. If the token expired jwt logged out the user and user needs to login again with new token.</p>
            </>
        </div>
    );
};

export default Blogs;