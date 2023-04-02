import React from 'react';


export default function Timeline() {
    return (
        <>
            <div>
                <h2>World Timeline Project (conceptual phase)</h2>
                <br></br>
                <p>
                    As humans, we all carry within us a blueprint of similar conscious behavior, however, there are experiences
                    that lead us into different "categories" of humanity. 
                    <br></br><br></br>
                    From the year 10000 BCE to now, the intermingling of cultures and different conscious behavior shaped the 
                    unique nature of this globe. We as humans have all evolved together, but in different ways. 
                    <br></br><br></br>
                    The purpose of this project as a whole is to remind people that our timeline is a shared one, and in no 
                    way are we separated and classified any differently than human. 
                    <br></br>
                </p>
                <br></br>
                <h4>Technology Breakdown:</h4>
                <ul>
                    <li>MongoDB / PlanetScale: Using a database such as MongoDB would provide easy access to different "documents",
                        or historical event entries. 
                        <ul>
                        <li>Use API key with Python/JS to create functionality (GET, SET, POST, etc..)</li>
                        </ul>
                    </li>
                    <br></br>
                    <li>Use some sort of 3-D rendering to create navigable objects which lead you throughout a 'chain' of events.</li>
                </ul>
                <br></br><br></br>
                <h4>Progress!</h4>
                <ul>
                    <li style={{margin: '1rem 0'}}>Decided on creating a MongoDB database based on major advancements. Each document within the overall Mongo database 
                        would circulate around said advancement. 
                    </li>
                    <li style={{margin: '1rem 0'}}>Each era would lead into a chain of events which would lead into the next era. Certain events would yield a dead end. 
                        For example, wars between countries which have outcomes present today wouldn't necessarily lead into the next era. 
                        They would've been changed concurrently, which would make it part of the existing era. 
                    </li>
                    <li style={{margin: '1rem 0'}}> 
                        Historical events will be compiled primarily through use of the Wikipedia API. However, each entry will be 
                        changed according to personal research as well. Strict auditing and inclusion of personal beliefs will make 
                        the timeline both personal and truthful. 
                    </li>
                    <li style={{margin: '1rem 0'}}>
                        Historical and Biblical events (such as Moses splitting the Red Sea) will be included in the timeline. However, they 
                        might have more opinionated entries as opposed to clearly documented and factual events. 
                    </li>
                </ul>

            </div>
        
        </>

    );
}