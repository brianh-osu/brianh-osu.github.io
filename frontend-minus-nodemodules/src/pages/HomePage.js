import React from "react";
import {Link} from 'react-router-dom'; 
//HomePage() function replaces the A6 index.html file 

function HomePage() {
    return (
        <div className="">
            <h2>Home Page</h2>
            <p>This website was created using React. There are several pages you can browse through by clicking the navigation above. This page describes the technologies 
                used in this website below. 
            </p>
            <article className="HomePageArticles" id="topics page">
                <h3>Topics Page</h3>
                    <p>
                        The Topics page is an informational page that describes the various topics that we've learned throughout this course.
                        The concepts discussed range from the background and history of web development, to CSS and style sheets, and finally to 
                        JavaScript and Express. This page was originally our home page, and it originally was created using 
                        simple HTML. Not much has changed about it besides adding more topics as we progress throughout this quarter, and changing 
                        a few syntax and elements due to creating this app using React. 
                    </p>
            
                <h3>Gallery Page</h3>
                    <p>
                        The Gallery page was a page developed originally using Node/Express, and forced us to get familiar with using properties for 
                        images in CSS. The latest version of the page was our introduction to React and its technologies. We used the 
                        react-image-gallery package to convert the existing gallery into a slideshow. We also learned about creating components 
                        which would help clean up code and help facilitate the flow for building a React app. 
                    </p>
                <h3>Staff Page</h3>
                    <p>
                        The Staff page was initially developed using Node/Express to cover topics of DOM manipulation.
                        We dynamically created an HTML table of the data by manipulating the DOM tree, and used calls to the browser and Express 
                        server. This served as our introduction to API, by utilizing the random user generator. 
                    </p>
                <h3>Order Page</h3>
                    <p>
                        The Order page was created in Node/Express and one of our first introductions into tables, inputs, buttons, and form elements.
                        It's also our first introduction to using the map function in order to map and pull the data from a separate
                        js file for data. Our data and components are organized in separate areas (folders), and eventually the site 
                        was converted into React. 
                    </p>
                <h3>Log Page</h3>
                    <p>
                        The Log page is the latest page added to this app. It's really a culmination of everything we've learned throughout 
                        the quarter. The page uses React, useState, and useEffect. It defines a useState, then defines a way to retrieve
                        the log of documents in the database (MongoDB), update the document, and delete the document. We use useEffect 
                        to load all the documents. Our LogTable pulls the rows from LogRow component, which pulls from our schema (Mongoose
                        schema). Our controller uses Express which takes advantage of app.use() method as well as .get(), .put(), and 
                        .delete() methods. Our model uses React which is the foundation for how we create, update, and delete our documents
                        as mentioned earlier. 
                    </p>
            </article>
        </div>
    );
}
export default HomePage; 

