import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../components/blobs.module.css';
import Script from 'next/script';
import { marked } from 'marked'; 
import hljs from 'highlight.js';
import hl from "highlight.js/styles/github.css";



export default function GoLang() {

    const markdown = `
        cd ~
        mkdir goscrape
        cd goscrape
        go mod init scraper
        touch main.go 
        go get github.com/gocolly/colly
  `;

    const markdown2 = `
        package main 
        import (
            "fmt"
            "github.com/gocolly/go"
        )

        func main() 
            fmt.Println("Hello")
            c := colly.NewCollector(colly.AllowedDomains("https://en.wikipedia.org"))

   `;

    const markdown3 = `
        package main 

        import (
            "fmt"
            "github.com/gocolly/go"
        )

        func main() 
            fmt.Println("Hello")
            c := colly.NewCollector(colly.AllowedDomains("en.wikipedia.org", "wikipedia.org"))

            c.Visit("https://en.wikipedia.org/wiki/Black_hole")

            c.OnRequest(func(h *colly.Request) {
                    fmt.Println("Visiting... ", r.URL)
            })

            c.OnHTML("div.mw-parser-output", func(h *colly.HTMLElement) {
                    fmt.Println(h.Text)
            })

    `;

    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <>
            <div className={styles.fullpage}>

                <div className={styles.container}>
                    <p>
                        In this post, you'll learn how to use Golang in order to retrieve information
                        from a website. This requires the module <a href="http://go-colly.org/">colly </a>
                        which allows you to create a "web scraper" object, which will essentially grab 
                        all of the necessary information from the DOM (Document Object Module). 
                        <br></br><br></br>
                        A great way to explain what the DOM is would be through this website you're on currently! 
                        Try "inspect element" on this page and look at the HTML that is shown. Hovering over each 
                        HTML element ("div", "title", "p", etc..) shows you where on the page that element is located. 
                        <br></br><br></br>
                        As for our general web scraping example, we'll be retrieving certain information from these
                        elements that are found on the HTML. All of the HTML on a page can be accessed through the DOM, 
                        which simply allows you to outline the entire page (document) and view each element (object). 
                        <br></br><br></br>
                        Basically, it allows you to simplify the act of accessing/inserting objects into a page. 
                        <br></br><br></br>
                        Now, with the HTML explanation out of the way, let's get into creating this Golang module. 
                        For those who aren't familiar with Golang, it's a language created by Google as a very "low-level" 
                        style comparable to C with structs, garbage collection, and memory safety. However, it's versatility
                        allows it to compete with more mainstream languages such as Python and JavaScript. 
                        <br></br><br></br>
                        Let's start with our directory structure! 
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>

                        <br></br><br></br>

                        <p>Now, go into your main.go file and import the colly module. We'll also set up our 
                        main function so that it prints out a general message. </p>

                        <div dangerouslySetInnerHTML={{ __html: marked(markdown2) }}></div>


                        <p>
                            This should allow you to print out the message which simply says "Hello". In order to 
                            run a go module, you simply go into your goscrape directory and type <strong>'go run .'</strong>. 
                            <br></br><br></br>
                            You can see we added the line in which we define the variable 'c' to be the colly object
                            instantiator. What this means is that the variable 'c' will be used subsequently to 
                            control the web scraper. 
                            <br></br><br></br>
                            We set 'c' to be a constructor within the colly library. <strong>colly.NewCollector</strong> simply refers 
                            to a function which creates an object called colly. NewCollector would be the constructor 
                            function in this case! 
                            <br></br><br></br>
                            NewCollector takes in some parameters, the most important being the <strong>AllowedDomain</strong> function, 
                            which takes in any URL as a whitelist of websites able to be accessed. In this example,
                            we chose then main Wikipedia website. You can now make web scrape calls to any page within
                            the Wikipedia domain and also extract their information. 
                            <br></br><br></br>
                            Let's now modify our existing code to allow for you to print out information from an article. 
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: marked(markdown3) }}></div>

                        <p>
                            Now, we managed to include a function which allows us to Visit the URL that we wish to 
                            scrape from. In our case, we could use theoretically any Wikipedia page to satisfy our 
                            example. I chose Black Holes since they're pretty interesting to pull information from 
                            and could be helpful in the future (maybe not)!
                            <br></br><br></br>
                            Within the "c.Visit" function call, we send our little 'c' web scraper minion to the 
                            specified URL. Then, we delegate another function "c.OnRequest" to run whenever our little
                            'c' minion requests something from the DNS. 
                            <br></br><br></br>
                            In the 'on request' function, we simply print out the URL of the website that our minion is 
                            visiting. Logging all of the information gathered from our web scraper minion is essential in 
                            understanding what exactly you're finding. 
                            <br></br><br></br>
                            For example, printing out the URL of the website in the console on every different Visit() 
                            would help you keep track of the progress. It also allows you to feel this sense of achievement
                            when you see the scraper bot performing as you wanted! 
                            <br></br><br></br>
                            Now, we want to be able to retrieve the summary information about Black Holes, since that's 
                            the purpose of this entire application! We'll start by using the .OnHTML() function call.
                            OnHTML([HTML element], func(h *colly.HTMLElement) {}) takes in any HTML element for the first
                            parameter, either using the element tag names or even their class names. 
                            <br></br><br></br>
                            Second, you want to decide what exactly to do with the element. In our example, we used the class 
                            'mw-parser-output' since that's where the summary information for Black Holes is located on that 
                            Wikipedia page! You can check this by going on the Black Hole wikipedia page and then going on 
                            inspect element to see for yourself. 
                            <br></br><br></br>
                            To print out the information from the element specified, you can simply call the print statement 
                            on the 'h' variable. 'h' is the HTML Element that is pulled from the OnHTML() function call. 
                            You can also pull a list of links that are referenced in the Wikipedia article and Visit() those 
                            URLs recursively.  
                            <br></br><br></br>
                            Now, run the go module again and see for yourself what is printed! You can even make things more 
                            exciting by trying to Visit() as many links as possible from the Black Hole page! Try printing out
                            all of those links and seeing where your little web scraper minion travels to. 
                            <br></br><br></br>

                        </p>
                </div>
            </div>
        
        </>

    );
}