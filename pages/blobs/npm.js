import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../components/blobs.module.css';
import Script from 'next/script';
import { marked } from 'marked'; 
import hljs from 'highlight.js';
import hl from "highlight.js/styles/github.css";


export default function NPM() {

    const expressCode = `
        import express from 'express'
        import path from 'path'
        const PORT = 3000;

        const app = express();
        const path = path();

        app.get('/', function(req, res) {
            res.end("Jesus is watching...");
        });

        app.listen(PORT, () => {
            console.log("--> Listening on port " + PORT);
        });
    `;

    const expressSample = `
        app.use(function(req, res) {
            res.redirect('/');
        });
    `;

    const expressRouting = `
        app.get('/class', function(req, res) {
            const hello = req.query.hello;
            const genesis = req.query.genesis;
            console.log(hello + " : " + genesis);

            res.end("Jesus is watching...");
        });
    `;

    const packageExample = `
        {
            "name": "basic",
            "version": "1.0.0",
            "description": "Anything",
            "main": "main.js",
            "scripts": {
                "start": "node main.js"
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "dependencies": {
                "express": "^4.18.2",
                "path": "^0.12.7"
            }
        }
    `;

    const htmlExample = `
        <!DOCTYPE html>

        <html>

            <head>
                <title>Website</title>
                <meta charset="utf-8">
                <link rel='stylesheet' href='main.css'>
            </head>

            <body>
                <h1>We did it!</h2>
            </body>

        </html>
    `;

    const cssExample = `
        *, html {
            text-align: center;
            background-color: green;
        }

        h1 {
            font-size: 25px;
            color: purple; 
            text-align: center;
        }
    `;

    const example = `
        app.use(express.static('public'))

        app.listen(PORT, () => {
            console.log("--> Listening on port " + PORT);
        });
    `;

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return(
    <>
    <div className={styles.fullpage}>
    <p>
    Let's learn how to use express within JavaScript in order to route different 
    files onto the web. 
    <br></br><br></br>
    I would describe a common use case for doing this, but the evidence is apparent in 
    quite literally all websites. All websites route their static pages using some form of 
    routing on the server-side. 
    <br></br><br></br>
    A server-side file is usually written in JavaScript or TypeScript, and uses some form of 
    routing (a.k.a express) to send those static pages (usually HTML/CSS files...) to the 
    web. 
    <br></br><br></br>
    Let's talk about something like a portfolio website for example: 
    <br></br><br></br>
    When you go on any such website (mine for example http://sbpatel.dev), you notice that 
    the URL is custom made. In my case, sbpatel.dev was a domain that was bought from 
    Google. So, you create my portfolio website on your own computer, and then use a service to host 
    and maintain your files online. 
    <br></br><br></br>
    I personally use Vercel to host my website, so that it is always up no matter when I want to 
    access the page. It also allows for anyone in the world to access the page, which is also the 
    benefit that people who want to host a public page need. 
    <br></br><br></br>
    So! Let's begin by talking about how to create such a project on your computer. You can begin by 
    downloading the Node Package Manager (npm) on your computer. 
    <br></br><br></br>
    Here's a link to access that: <a href='https://docs.npmjs.com/downloading-and-installing-node-js-and-npm'>NPM</a>
    <br></br><br></br>
    Once npm is downloaded, go on your terminal and create a new project folder by typing...
    <br></br><br></br>
    <div dangerouslySetInnerHTML={{ __html: marked("`mkdir website`") }}></div>
    <br></br><br></br>
    Then go into your website folder by typing...
    <br></br><br></br>
    <div dangerouslySetInnerHTML={{ __html: marked("`cd website`") }}></div>
    <br></br><br></br>
    Lastly, go into your terminal and type in...
    <br></br><br></br>
    <div dangerouslySetInnerHTML={{ __html: marked("`npm init -y`") }}></div>
    <br></br><br></br>
    Which will create the structure for your node project, and the ability to use JavaScript 
    in your project! 
    <br></br><br></br>
    Create a new file called 'main.js' and then create the template to host information on a webpage. 
    </p>
    
    <div dangerouslySetInnerHTML={{ __html: marked(expressCode) }}></div>

    <p>
    The code above imports the express object from the express module 
    found within the node modules folder. 
    <br></br><br></br>
    We also import the path object from the path module so that we can specify 
    the public folder from our relative directory and route it to the 
    development server. 
    <br></br><br></br>
    Our development server will be run using the port 3000, which we conveniently 
    labeled as a constant (const) called 'PORT'. 
    <br></br><br></br>
    In order to run our development server, we use the function listen() which is 
    a method found within the const 'app'. The only arguments needed for the listen is a 
    mandatory PORT integer, which specifies which port on your computer you'll be routing
    the files to, as well as an optional callback function which will return once upon 
    successful listening to the port. 
    <br></br><br></br>
    Notice how the function call for listen() is called AFTER the call to get(). Does this 
    mean that you have to wait for the program to send a GET request to the URL before actually
    listening to the port (which generates the URL 'localhost:3000')
    <br></br><br></br>
    The answer is NO and YES. The listen() function is usually the one that is placed at the end because it will 
    always attempt to listen to the port whenever it gets the chance. However, the other functions such as get() 
    and post() will need to be run in synchronous order. The best way to test this is to include the code block 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(expressSample) }}></div>

    <p>
    This will essentially reroute the entire page back to the index. Place them before and after different
    routing calls (get(), post(), use(), etc..) to understand the interpretation of the JavaScript compiler.
    <br></br><br></br>
    Lastly, let's review the get() function call. Get() has two arguments: URL (string) and callback (function).
    The URL should be relative to the entire project, so by using '/' as the argument, you refer to the index page, 
    or the index.html in most cases. 

    <br></br><br></br>
    Our callback function has two arguments as well, namely, req (request) and res (response). The request object
    refers to the URL, so you can pull various parameters that are embedded within the URL. 
    <br></br><br></br>
    An example of this would be if you ever see a URL like this: http://google.com/class?hello=76&genesis=74
    <br></br><br></br>
    You can refer to the 'http' as the protocol (named Hyper-Text Transfer Protocol) and 'google.com' as the domain. 
    Then, you can say that /class is a page within the domain 'google.com' and that there are two parameters in the 
    URL: hello and genesis. You can say that hello = 76 and genesis = 74. 
    <br></br><br></br>
    If you wanted to pull a similar route and the values of those parameters, you'd write this route function: 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(expressRouting) }}></div>

    <p>
    You can pull the 'hello' parameter from the URL by calling 'req.query.hello' which would be the 
    'query' object within the 'req' object. We're pulling the 'hello' key from the object and that in turn 
    gives us the value of 76. 
    <br></br><br></br>
    Our 'res' object is used to interact with the DOM as well as the routing system. In this case, we 
    use the end() method within the 'res' object to send a blob of text while also signaling throughout the
    connection that "this is the last command". You can't use the 'res' object again after using the end() method,
    so make sure to use it wisely. 
    <br></br><br></br>
    You can also check out the send() function for the 'res' object, which achieves the same thing we're trying to do, 
    but I just happened to use the end() function because I'm cooler. 
    <br></br><br></br>
    Let's find out how to run this entire program! Since you have run the original 
    <br></br><br></br>
    npm init -y 
    <br></br><br></br>
    command, you should have a package.json file in your directory. The package.json file should look something like this: 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(packageExample) }}></div>

    <p>
    Now, go into your terminal, 'cd' (change directory) into your website directory, and type 'npm start'
    <br></br><br></br>
    This should run the development server on port 3000, so when you go on your favorite browser, 
    go onto https://localhost:3000 and it should show the text sent within the end() method on the 'res' object!
    <br></br><br></br>
    Cool! Now you know how to manipulate and send text to the internet on a local domain! If you were to host 
    your website directory on something like Google or Vercel, you could forever keep this project running 
    on the internet! 
    <br></br><br></br>
    Now, let's transition into our next mission. Creating a neat looking website using templating and document structured
    tools such as HTML and CSS. We'll also be able to send those static files through an express route. 
    <br></br><br></br>
    Go into your website directory and create another folder called 'public'. In the 'public' folder, create a 
    file called 'index.html'. You'll now get to learn the most important tool for web developers. This and of course
    JavaScript, but the DOM is not possible without HTML. 
    <br></br><br></br>
    Our general structure for the HTML file is: 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(htmlExample) }}></div>

    <p>
    In which everything is embedded within tags. Our overall tag is "html" and you can see that this 'element' 
    is not closed yet since there is no corresponding tag for it such as "/html". Most elements have a closing tag 
    like that, but others such as "link" don't require one! 
    <br></br><br></br>
    So we can say that our "html" element contains two other elements: "head" and "body", both of which are
    essential in the makings of any HTML file. 
    <br></br><br></br>
    For the sake of brevity, we won't cover the essentials of HTML too intensely in this tutorial, but 
    a link to Mozilla Developers website will do the job just fine! 
    <br></br><br></br>
    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>Mozilla Developer Docs!</a>
    <br></br><br></br>
    To make our wordings look "pretty", go into our public folder and create another folder called 'css'.
    Make a file called 'main.css' and place these lines into the file: 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(cssExample) }}></div>

    <p>
    We use words called 'selectors' to assign style values to those elements. Selectors refer to elements in 
    the HTML document, so the 'h2' would refer to the "h2" tag in the "body" element. You can also understand that
    the 'html' selector refers to the "html" element in the HTML. 
    <br></br><br></br>
    We use 'text-align' to move all of the text to a different position on the rendered document (a.k.a the webpage).
    We use this specifically to move it to the center. 
    <br></br><br></br>
    Using the 'background-color' key to quite literally assign a background color to the rendered webpage.
    Our choice would be green, but you could pick any color by typing it out, or being more specific and giving the
    RGB code values.
    <br></br><br></br>
    In using the 'color' key for the 'h2' selector, we change only the color of the 'h2' element, but not the color 
    of the surrounding document. 
    <br></br><br></br>
    Now, go back into our main.js file and make these adjustments: 
    </p>

    <div dangerouslySetInnerHTML={{ __html: marked(example) }}></div>

    <p>
    These two functions should be the ONLY functions on the entire main.js file. 
    By doing so, you'll be able to send the entire 'public' folder to the hosted port.
    <br></br><br></br>
    Run it by typing 'npm start' into the terminal. Now behold what your https://localhost:3000 shows you!
    You can continuously make adjustments to the HTML file and also the CSS file in conjunction to improve your 
    webpage. You can imitate something like Facebook's user page (without the functionality, of course) with ease!
    Ok, probably not that easy, but something pretty similar! 
    </p>
    </div>
    </>
    );
};