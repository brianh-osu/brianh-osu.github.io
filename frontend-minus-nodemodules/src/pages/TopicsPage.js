import React from "react";
import {Link} from 'react-router-dom'; 
//HomePage() function replaces the A6 index.html file 

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav className = "webdev">
                <a href = "#web development concepts">About Web Servers </a>
                <a href = "#optimizing images">Optimizing Images </a>
                <a href = "#css">CSS </a>
                <a href = "#forms">Forms </a>
                <a href = "#express">Node, npm, Express </a>
                <a href = "#Java">JavaScript </a>
                <a href = "#dom">DOM </a>

            </nav>
            <article className="HomePageArticles" id='web development concepts'> 
                <h3>About Web Servers</h3>
                <p>I created a new file in VS Code called
                    'index.html' which is the default name for a home page. Then, I set up my SSH with Putty and accessed the server using FileZilla. Finally, I transferred
                    a copy of the a1-hsiangb folder to the public_html folder of the web server. Let me try to explain in terms of how it relates to websites and servers.
                    We created the file 'index.html' which creates a file (containing a script) and upload it in the web browser. The browser (Chrome) then sends a 
                    HTTP request to the web server (i,e. Apache Server is the server that OSU Engineering is using) and the server sends back the document in an HTTP 
                    response to the browser. Finally, the browser interprets the HTML document ('index.html') and displays its contents (what you are reading now). 
                </p>
                <p> Within the web dev/inspector tools on the Network tab
                we can see the request URL (local copy URL), the request method (GET), and the connection status (green meaning connection was established). The file details on the web server shows a lot
                more information within the request and response headers. 
                </p>
                
                <p>
                    The status will show 200 is if client was successfully established. In this case, 'favicon.io' file shows 200 because it exists even though we didn't create it.
                    The file favicon.io is referring to the OSU favorites icon in the browser tab. 
                    Status 404 means there was an error. Our URL does page does not contain main.css and main.js files hence the 404 status.
                </p>
                <p> 
                Here is my URL: https://web.engr.oregonstate.edu/~hsiangb/a1-hsiangb/ 
                The scheme is "https", the domain name is "oregonstate.edu", the subdomain name is "web.engr.", and the path to resources is "/~hsiangb/a1-hsiangb/".
                </p>
            
            
                <h3>Frontend Design</h3>
                <p>
                    Frontend design is what the user sees. It's not only a presentation of the information presented in a visually appropriate way, but it's also 
                    a demonstration of the kind of experience that we want users to feel. Frontend is a core aspect of the user experience (UX). Therefore, we 
                    want our website to be as usable as possible.
                </p>
                <p>
                    According to Key Lime Interactive, a theory of usability is presented in the form of the <strong>five E's for usability</strong>:
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>A usable website will help users meet their goal. If the user visited your site/app with a problem in mind, will they be able to
                            find a solution. If the user had inquiry, will they find the appropriate answer?</dd>
                            <p></p>
                        <dt><strong>Efficient</strong></dt>
                        <dd>The user should be able to reach their goal in the least number of steps? (Time is money!)</dd>
                            <p></p>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Will the user be able to view your site/app easily, considering they've never used it before? Is it a chore for users to figure out 
                            how to use the site?</dd>
                            <p></p>
                        <dt><strong>Error-free</strong></dt>
                        <dd>The user should not run into bugs or issues. Has accessibility and availability been considered? Are there too many obstacles the 
                            user has to go through to achieve the goal?</dd>
                            <p></p>
                        <dt><strong>Enjoyable (Engaging)</strong></dt>
                        <dd>The site/app should be engaging, avoiding boredom and clutter.</dd>
                    </dl>
                </p>
                <p>
                    The purpose of page layout tags is to allow HTML code to be shown in a presentable manner for flow of information and content. 
                    Visually the tags do not do much beside section the content into blocks and provide a line break before and after it the content.
                    The look will depend on the styles we apply to them using CSS. Aside from the visual aspect, this gives developers a way to 
                    look at the code and determine what kind of information they are working with. Examples of page layout tags include: header, nav,
                    main, section, article, footer, div, as well as aside, figure, and blockquote. 
                </p>
                <p>
                    The Anchor element &lt;a&gt; uses the "href" attribute to create a hyperlink to web pages and other contents
                    (images, local files, and any other URL). Within the opening and closing &lt;a&gt; tags should be text describing where the link
                    navigates the user to.
                </p>
            </article>
            <article className="HomePageArticles" id='optimizing images'>
                <h3>Optimizing Images and Cascading Stylesheets </h3>
                    <p>
                        There are 6 specifications to provide images in optimal criteria. 
                        <ol>Descriptive file name: File names should be descriptive and concise, providing information like who, what, when,
                            and whereas much as possible. This will benefit SEO (search engine optimization) and help out search bots to crawl accurately. 
                        </ol>
                        <ol>
                            Small file size: Files should be as small as possible to reduce load time. High resolution images should be only 
                            reserved for high resolution devices. We can use image compression tools to size our files accordingly. 
                        </ol>
                        <ol>Exact dimensions: Cropping the size of the image to fit the space of your website will save loading time.</ol>
                        <ol>Correct file format: Online photos are usually JPG; line-art images like logos and icons are usually GIF or PNG format.</ol>
                        <ol>Reduced resolution: Older monitors rendered at 72ppi, whereas modern ones can render up to 300+ ppi (pixels per inch). 
                            Higher resolutions as well are more available, so providing multiple image sizes is becoming a standard. 
                        </ol>
                        <ol>Color mode: RGB for PNG, JPG, and WebP type; Indexed for GIF type. </ol>
                        The file formats GIF and PNG are both suitable for line art. GIF shines in allowing animation support, while PNG files have true transparency. 
                        JPG and WebP file types are both suitable for photos. Both file types compress images down to smaller file size, but WebP 
                        is usually much smaller than JPEG. 
                    </p>
            </article>
            <article className="HomePageArticles" id='css'>
                <h3>CSS (Cascading Style Sheets) </h3>
                    <p>
                        Style sheets allow us to reinvent the HTML document. All of its components can be redesigned to improve usability, adhere to 
                        brand requirements, or to simply add a more visually appealing touch to the content. HTML elements are predefined with style,
                        which the CSS language can override. 
                    </p>
                    <p>
                        There are 5 ways to incorporate style: 
                        <ol>You can use an external stylesheet file with CSS rules, and link it (using &lt;link&gt;) to the global &lt;head&gt; area of a website. </ol>
                        <ol>You can also embed style directly into HTML or JavaScript files, but are not preferred as they should be treated as one-off style changes.
                            With that being said, you can embed within a <style></style> tag.
                        </ol>
                        <ol>You can also embed inline within an element using an attribute and value. </ol>
                        <ol>Additionally, you can embed in JavaScript template literals within a JavaScript function. </ol>
                        <ol>Finally, you can embed In regular JavaScript. </ol>
                    </p>
            </article>
            <article className = "HomePageArticles" id='forms'> 
                <h3>Forms </h3>
                    <p>
                        Forms allow us to collect data from the user. Any time you create a new account, log into an online portal, or upload a file, this is all using forms. 
                        The 6 major goals of accessible forms are to:
                        <ol>Provide clear instructions above the form and in the labels. </ol>
                        <ol>Let users know the context for why you're gathering the data, and which fields are required before moving on. </ol>
                        <ol>Set the first field to autofocus, so users can immediately begin typing without using the keyboard to tab over or mouse to click.</ol>
                        <ol>Add tab indexing to complex forms, so the order to complete the form is apparent. </ol>
                        <ol>Ensure validation messages are readable on the screen (such as completion or missing information messages). </ol>
                    </p>
                    <p> 
                        Let's discuss some of the major tags for forms. 
                        <dl>
                            <dt><strong>&lt;form&gt;</strong></dt>
                            <dd>
                                Firstly we have <strong>&lt;form&gt;</strong> tag itself, with 2 primary attributes. The first is <strong>action</strong> which tells us where the form should be sent. The destination
                                swill be a URL specified within the <strong>action</strong> attribute. If <strong>action</strong> is not defined, then the form is submitted to the same URL destination from which 
                                it was downloaded. The value can be either a relative URL or absolute URL. The second attribute we can use is <strong>method</strong> which species the HTTP method to be used in the HTTP 
                                request we are going to send once the form is submitted. It can either be values <strong>GET</strong> or <strong>POST</strong>. If no value is entered, it defaults to <strong>GET</strong>.
                            </dd>
                            <p></p>
                            <dt><strong>&lt;label&gt;</strong></dt>
                            <dd>
                                &lt;label&gt; tells us what we are to enter, it helps the user understand the purpose for data entry. We can use <strong>for=""</strong> attribute to match up with the form control's 
                                <strong> id="" </strong>. 
                            </dd>
                            <p></p>
                            <dt><strong>&lt;fieldset&gt; and &lt;legend&gt;</strong></dt>
                            <dd>
                                These two tags help give the form some separation and provides a logical structure for users. <strong>&lt;fieldset&gt;</strong> has a default gray border and some padding, and the 
                                <strong>&lt;legend&gt;</strong> title or name is placed on top of the border.
                            </dd>
                            <p></p>
                            <dt><strong>&lt;input&gt;</strong></dt>
                            <dd>
                                The input tag is used to get the user's data entry. It should include the attribute <strong>type=""</strong> to indicate what kind of input type we want to collect from the user (whether 
                                it is a email, checkbox, or radio type). <strong>type='email'</strong> indicates that the user should enter an email. We can specify what is required from the user such as 
                                accepting only certain keys and formatting (a common example is using the <strong>pattern</strong> attribute to validate the data like so: pattern="[^ @]+@[^ @]+.[a-z]+" ). 
                                We also have a <strong>type="checkbox"</strong> which must be followed up with <strong>name=""</strong> and <strong>value=""</strong> attributes. Checkbox will look like square check boxes by
                                default, and can allow for multiple selection. We also have a <strong>type="radio"</strong> type which we can use to allow users to pick one of a set of values. By default they look like circular
                                options to click on, only allowing 1 selection. 
                            </dd>
                            <p></p>
                            <dt><strong>&lt;select&gt; with &lt;options&gt;</strong></dt>
                            <dd>
                                The select and option tag pairing will visually look like a drop-down list where users can select a choice. Within the select tag, &lt;option&gt; tags are used to specify the values for 
                                users to pick from. 
                            </dd>
                            <p></p>
                            <dt><strong>&lt;textarea&gt;</strong></dt>
                            <dd>
                                The <strong>&lt;textarea&gt;</strong> tag allows users to type out a response up to a specified minimum and maximum length requirement. 
                            </dd>
                            <p></p>
                            <dt><strong>&lt;button&gt;</strong></dt>
                            <dd>
                                Finally, we have the <strong>&lt;button&gt;</strong> tag which visually looks like a submission button to indicate a certain action. It performs the <strong>action=""</strong> specified by
                                the &lt;form&gt; tag. 
                            </dd>
                        </dl>
                    </p>
                    <p>
                        There are some recommendations for form styles. Common ones to use include fieldset, legend, label, input types, :focus, :required, :valid, :invalid:, ::placeholder, :disabled, and :enabled.
                    </p>
            </article>
            <article className = "HomePageArticles" id='express'>
                    <h3>Node, npm, and Express: </h3>
                    <p>We can use Node, npm, and Express to improve our web development experience. </p>
                    <ul><strong>Node.js</strong> is an app within JavaScript that makes it efficient for building network applications.</ul>
                    <ul><strong>npm</strong> stands for Node Package Manager, which allows us to install and manage dependencies for projects. </ul>
                    <ul><strong>Express.js</strong> is a web application framework for Node, giving a set of features for web and mobile applications, which are easy to use and customize. </ul>
                    <p>These three technologies streamline our web dev experience by providing a fast and flexible platform for building web applications. Node gives us code within JS, npm gives us access to a large
                        library of packages, and Express allows us to easily create and configure web applications. </p>
            </article>
            <article className="HomePageArticles" id='Java'>
                    <h3>JavaScript: </h3>
                    <p>
                        The main data types include number, Boolean, string, symbol, special values (<strong>undefined</strong> and <strong>null</strong>), and an object.
                    </p>
                    <p>
                        JavaScript objects are a set of name-value pairs. The names of the pairs are called <strong>properties</strong> of the object. We can perform 
                        4 actions with objects with an abbreviation CRUD. We can create, read, update, and delete. If we use the method Object.keys() and pass the object to the method,
                        we can return or print the names of the properties in the object (in the form of an <strong>array</strong>). An array is an object whose property names are the strings 
                        '0', '1', '2', etc. We can access elements of an array using a 0-based integer index. The values within the array can be of any JavaScript type. Arrays created using 
                        <strong>const</strong> cannot be reassigned to another value, but we can still modify the elements of the array. There are a few properties we can use with array to return
                        certain values, such as: .length() to return the number of elements in the array; .push() to add elements to the end of the array; .pop() to remove and 
                        return the last element in the array; .includes() to return a Boolean value based on if the value exists in the array or not. <strong>JSON</strong> stands for 
                        JavaScript Object Notation which is a popular format for exchanging data between applications. With JSON, we can map an object in a program to a string in the 
                        JSON format, and also create an object in a program from a string in the JSON format. The 2 main methods we use for JSON in JavaScript are: JSON.stringify() to create a 
                        JSON string from JavaScript object, and JSON.parse() to create a JavaScript object from a JSON string. 
                    </p>
                    <p>
                        In JavaScript we can set up <strong>conditionals</strong> using <strong>if</strong> and <strong>switch</strong> statements. The basic <strong>if</strong> statement 
                        will execute if the provided expression evaluates to true. There's also other forms of conditional such as if-then-else, else-if, and else we can use. <strong>Switch statements </strong> 
                        are similar where we can use <strong>if-then-else</strong> statements to compare the same variable to different values. Another tool we can use is the 
                        Conditional (<strong>Ternary</strong>) Operator. The syntax follows as such: " condition ? expression1: expression2 ". First, the condition is evaluated. Second, 
                        if it is true, then expression1 is evaluated and its value is returned. If expression1 did not evaluate/return, then expression2 is evaluated and the value is returned. In JavaScript we can 
                        also make use of <strong>loops </strong>. Loops will continue to execute a body of code while the expression remains True. That is the basic usage for a <strong>while loop. </strong>We can also loop using <strong>do while</strong> and 
                        <strong> for</strong> loops.
                    </p>
                    <p>
                        <strong>Object-oriented programming </strong>is a model that centers around data (objects) rather than function and logic. Other types of programming will have you first 
                        declare a class and then create objects that are instances of those classes. JavaScript on the other hand allows you to create objects without declaring classes.
                    </p>
                    <p>
                        <strong>Functional programming</strong> is creating functions for immutable variables. According to Medium.com, functional programming's application will flow through pure functions. 
                        On the other hand, object-oriented programming will usually share its methods with objects. 
                    </p>

            </article>
            <article className="HomePageArticles" id='dom'>
                <h3>DOM: Document Object Model </h3>
                <p>
                    Developers update the <strong>DOM </strong>of a page using JavaScript and Express because we can dynamically create 
                    applications that update the data and style of the page without having to refresh it. If we wanted to make 
                    changes in the HTML text we would have to manually reload the page.
                </p>
            </article>
        </>
    );
}
export default TopicsPage; 

