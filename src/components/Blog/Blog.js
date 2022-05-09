import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Question and Answer</h1>
      <div className="mx-auto w-75">

        {/* first questions ans */}
        
      <div className=" border border-dark mt-5">
          <h3>Difference between Javascript and Node.JS</h3>
        <table class="table table-hover">
            <thead/>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Javascript</th>
              <th scope="col">Node JS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Javascript can only be run in the browsers.</td>
              <td>Node.Js is mostly used in server side .</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Javascript is used in frontend development.</td>
              <td>We can run Javascript outside the browser with the help of Node.JS.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
              <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
            </tr>
          </tbody>
        </table>
      </div>
        {/* Second questions ans */}

      <div className=" border border-dark mt-5">
          <h3>Differences between sql and NoSql databases</h3>
        <table class="table table-hover">
            <thead/>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Sql</th>
              <th scope="col">NoSql</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sql databases have fixed or static or predefined schema.</td>
              <td>NoSql databases are best suited for hierarchical data storage.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sql databases are not suited for hierarchical data storage.</td>
              <td>NoSql databases are not so good for complex queries .</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Sql is Vertically Scalable .</td>
              <td>Horizontally scalable.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Sql databases are best suited for complex queries.</td>
              <td>NoSql databases are not best option for complex queries. But can make the job done.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Sql databases define data in tables.</td>
              <td>NoSql databases define data like document.</td>
            </tr>
          </tbody>
        </table>
      </div>
        {/* third questions ans */}

      <div className=" border border-dark mt-5">
          <h3>When should you use Node.Js and when should you use mongodb</h3>
        <table class="table table-hover">
            <thead/>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Node.Js</th>
              <th scope="col">Mongodb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Real time applications like online games, chat rooms can be created using node.js .</td>
              <td>MongoDB is a document-based non-relational database management system. It’s also called an object-based system. It was designed to supplant the MySQL structure as an easier way to work with data.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Node.Js can be used in the development of sockets only servers like chat and apps.</td>
              <td>MongoDB is also free to use and open source .</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Node.js is the best option for a completely cloud based application development.</td>
              <td>MongoDB is a well-established, non-relational database system offering improved flexibility and horizontal scalability .</td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>
    </div>
  );
};

export default Blog;
