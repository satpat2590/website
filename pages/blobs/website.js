import { React, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked'; 
import hljs from 'highlight.js';
import styles from '../../components/blobs.module.css';



export default function Website() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const markdown = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>Welcome to My Portfolio</h1>
    </header>
    <main>
        <section>
        <h2>About Me</h2>
        <p>Hi, I'm John Doe, a web developer with experience in HTML, CSS, and JavaScript.</p>
        </section>
        <section>
        <h2>Projects</h2>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
        </section>
        <section>
        <h2>Contact</h2>
        <p>Email: john@example.com</p>
        </section>
    </main>
    <footer>
        <p>© 2023 John Doe. All rights reserved.</p>
    </footer>
    <script src="scripts.js"></script>
    </body>
    </html>
    `;

    const markdown2 = `
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
      
      header {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 1rem;
      }
      
      h1, h2 {
        margin-bottom: 0.5rem;
      }
      
      p {
        margin-bottom: 1rem;
      }
      
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      
      footer {
        text-align: center;
        margin-top: 2rem;
      }    
    `;

    const markdown3 = `
    <section>
        <h2>Contact</h2>
        <p>Email: john@example.com</p>
        <button id="contact-btn">Send me a message</button>
    </section>
    `;

    const markdown4 = `
    document.addEventListener('DOMContentLoaded', function() {
        const contactBtn = document.getElementById('contact-btn');
        
        contactBtn.addEventListener('click', function() {
          alert('Thanks for reaching out! I will get back to you soon.');
        });
    });
    `;

    return(
        <>
        <div className={styles.mainwebsitepage}>
            <h1>Simple Website Creation</h1>
            <p style={{margin: '1rem 1rem'}}>
                Today, we're going to learn about creating a simple portfolio website using three fundamental web technologies: HTML, 
                CSS, and JavaScript. We'll start with an overview of each technology and then dive into creating our portfolio website with 
                code examples.
            </p>
            <h2>HTML (HyperText Markup Language)</h2>
            <p style={{margin: '1rem 1rem'}}>
                HTML is the backbone of web content. It's used to structure content on the web by defining elements such as headings, 
                paragraphs, lists, images, and links. HTML uses tags to define these elements, and each tag has a specific meaning and purpose.
            </p>
            <h2>CSS (Cascading Style Sheets)</h2>
            <p style={{margin: '1rem 1rem'}}>
                CSS is used for styling HTML elements. It allows us to control the layout, color, font, and other visual aspects of a website. 
                CSS helps us separate the presentation from the content, making it easier to maintain and update the website's appearance.
            </p>
            <h2>JavaScript</h2>
            <p style={{margin: '1rem 1rem'}}>
                JavaScript is a programming language that adds interactivity and dynamic content to websites. With JavaScript, we can 
                manipulate HTML elements, handle user input, and communicate with servers to fetch or store data.
            </p>

            <p style={{margin: '1rem 1rem'}}>
                Now that we have a basic understanding of these three technologies, let's create a simple portfolio website.
            </p>
            <h2>Create the HTML Structure</h2>
            <p style={{margin: '1rem 1rem'}}>
                Create a new file called index.html and add the following code:
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} style={{overflowX: 'auto'}}></div>

            <p style={{margin: '1rem 1rem'}}>
                Here, we've created a basic HTML structure for our portfolio website. We've defined a header, a main content area with three 
                sections (About Me, Projects, and Contact), and a footer. We've also linked a CSS file (styles.css) and a JavaScript file 
                (scripts.js) to our HTML document.
            </p>

            <h2>Style the Website with CSS</h2>

            <p style={{margin: '1rem 1rem'}}>Create a new file called styles.css and add the following code:</p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown2) }} style={{overflowX: 'auto'}}></div>

            <p style={{margin: '1rem 1rem'}}>
                In this CSS file, we've applied some basic styling to our HTML elements. We've set a font family, adjusted the line-height,
                and styled the header, headings, paragraphs, list, and footer. This styling will make our website look more visually 
                appealing and organized.
            </p>

            <h2>Add Interactivity with JavaScript</h2>

            <p style={{margin: '1rem 1rem'}}>
                While our website doesn't require much interactivity for this simple example, let's add a small JavaScript feature to 
                demonstrate its capabilities. We'll create a button that, when clicked, displays an alert with a custom message.
            </p>

            <p style={{margin: '1rem 1rem'}}>
                Modify the index.html file by adding a button within the "Contact" section:
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown3) }} style={{overflowX: 'auto'}}></div>

            <p style={{margin: '1rem 1rem'}}>Now, create a new file called scripts.js and add the following JavaScript code:</p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown4) }} style={{overflowX: 'auto'}}></div>

            <p style={{margin: '1rem 1rem'}}>
                Here, we've added an event listener for the DOMContentLoaded event, which ensures that our JavaScript code runs only after the
                HTML document has been fully loaded. We then get a reference to our button using document.getElementById() and add a click 
                event listener to it. When the button is clicked, an alert with a custom message is displayed.
            </p>

            <p style={{margin: '1rem 1rem'}}>
                Now, open the index.html file in your web browser, and you should see your simple portfolio website. You can experiment with 
                modifying the HTML, CSS, and JavaScript files to customize the appearance and functionality of your website.
            </p>

            <p style={{margin: '1rem 1rem'}}>
                In conclusion, we've created a basic portfolio website using HTML for structuring content, CSS for styling, and JavaScript for 
                adding interactivity. This project serves as an excellent starting point for learning the fundamentals of web development. As 
                you gain more experience, you can explore more advanced features and techniques to create more sophisticated websites and web 
                applications. Good luck, and happy coding!
            </p>
        </div>
        </>

    );
};