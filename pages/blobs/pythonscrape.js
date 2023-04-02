import { React, useEffect } from 'react';
import { marked } from 'marked'; 
import hljs from 'highlight.js';
import styles from '../../components/blobs.module.css';

export default function PythonScrape() {
    const markdown = `
        pip install requests
    `;

    const markdown2 = `
        import requests

    # Define the API endpoint
        url = 'https://jsonplaceholder.typicode.com/posts'

    # Send a GET request to the API
        response = requests.get(url)

    # Check if the request was successful
        if response.status_code == 200:
        # Parse the JSON data
            data = response.json()

        # Print the first post's title
            print(data[0]['title'])
        else:
            print('Failed to fetch data')

    `;

    const markdown3 = `
        pip install wikipedia-api
    `;

    const markdown4 = `
        import wikipediaapi

    # Create a Wikipedia object for the English language
        wiki = wikipediaapi.Wikipedia('en')

    # Search for the Python (programming language) article
        page = wiki.page('Python_(programming_language)')

    # Check if the page exists
        if page.exists():
        # Print the article summary
            print(page.summary)
        else:
            print('Page not found')
    `;

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <>
        <div className={styles.mainwebsitepage}>
            <p>
                Web scraping is the process of extracting data from websites for various purposes, such as data analysis, content aggregation, 
                or price comparison. Python, a popular and beginner-friendly programming language, provides several libraries to make web 
                scraping easy and efficient. In this blog post, we'll explore how to use Python to perform simple web scraping using two 
                different approaches: API calls to a public endpoint and a specialized module for Wikipedia.
            </p>

            <h2>Understanding APIs</h2>
            <p>
                An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to 
                communicate with each other. Many websites offer public APIs to provide developers with access to their data in a structured 
                and machine-readable format, such as JSON or XML. Using APIs is often the preferred method for web scraping because it requires 
                less coding and provides more reliable and efficient access to data.
            </p>
            <h2>Making API Calls with Python</h2>
            <p>
                To make API calls with Python, you can use the requests library, which simplifies the process of sending HTTP requests and 
                handling their responses. First, you'll need to install the requests library using pip:
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} style={{overflowX: 'auto'}}></div>

            <p>
                Next, let's write a simple Python script to fetch data from a public API. For this example, we'll use the JSONPlaceholder API, 
                which provides sample data for testing and prototyping.
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown2) }} style={{overflowX: 'auto', backgroundColor: 'white'}}></div>
            

            <p>
                In this script, we first import the requests library and define the API endpoint URL. We then send a GET request to the API 
                using requests.get(), which returns a Response object. We check if the request was successful by comparing the status_code 
                attribute to 200 (HTTP status code for success). If the request is successful, we parse the JSON data using the json() method 
                and print the title of the first post. If the request fails, we print an error message.
            </p>

            <h2>Web Scraping Wikipedia with Python</h2>

            <p>
            <strong>Introducing the Wikipedia Library:</strong><br></br><br></br>
            <t></t>Python has a dedicated library called wikipedia-api that makes it easy to interact with the Wikipedia API. This library 
            provides a simple and user-friendly interface to fetch Wikipedia content and metadata in various languages.
            <br></br><br></br>
            <strong>Installing the Wikipedia Library:</strong><br></br><br></br>
            To get started, you'll need to install the wikipedia-api library using pip:
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown3) }} style={{overflowX: 'auto'}}></div>

            <p>
                Let's write a Python script to fetch the summary of a Wikipedia article. For this example, we'll search for the article on 
                "Python (programming language)".
            </p>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown4) }} style={{overflowX: 'auto'}}></div>

            <p>
                In this script, we first import the wikipediaapi library and create a Wikipedia object for the English language. We then search 
                for the desired article using the page() method, which returns a Page object. We check if the page exists using the `exists() method, and if it does, 
                we print the article summary. If the page doesn't exist, we print an error message.
            </p>
        </div>
        
        </>

    );

}