import React from 'react';


export default function Lutron() {
    return (
        <>
            <div>
                <h2>Device Diagnostics Capstone Project</h2>
                <p>
                    For my Junior/Senior year Capstone project, I was lucky enough to get to work with Lutron Electronics
                    on a project to optimize the flow of diagnostic data from Lutron end devices. 
                    <br></br><br></br>
                    My team and I originally worked on ways to extract the data from the devices, and we stumbled upon 
                    Google's OpenThread library, which is a great way to connect various end devices to a network in order
                    to facilitate instruction handling and data transfer. 
                    <br></br><br></br>
                    Using OpenThread's CLI, we were able to partake in early testing to retrieve mock data from simulated end 
                    devices, which we ended up doing with C++ and Python scripting. From there, we needed an abstracted way to 
                    mimic an entire data transfer flow, so we began to create our full technology stack. 
                    <br></br><br></br>
                    For basic diagnostic information retrieval, we used C/C++ and the OpenThread library to collect aggregated
                    information from the end nodes. Then, we decided upon using Amazon's Kinesis data stream to connect our 
                    backend to the cloud. 
                    <br></br><br></br>
                    Kinesis transfers were handled using C++ files, however, we had an issue about memory usage. Our diagnostic
                    data was large in size, especially if the process were to be automated in the future. So, we decided to 
                    encrypt our data in CBOR (Concise Binary Object Representation), which reduced our overall size and added a layer
                    of efficiency in future Kinesis data transfer processes. 
                    <br></br><br></br>
                    Once we connected the AWS Kinesis functionality to the overall system, we decided to utilize an AWS Lambda in order
                    to convert our data from CBOR to Base64 encoded data. This step is essential as we have also decided to use an AWS DynamoDB
                    cloud store in order to "immortalize" our data. CBOR data would be hard to store within a key-value store, so decoding prior is essential. 
                    <br></br><br></br> 
                    From our cloud storage, we only had the problem of data visualization to worry about, before it would be considered
                    for an actual application. Our team chose using ReTool, which provided an easy way to access the DynamoDB client. 
                    <br></br><br></br>
                    Finally! After connecting all of the pieces, we ended up creating a fully autonomous application which would collect
                    diagnostic data from simulated nodes and then pass them along the data transfer protocol in order to format them 
                    as visually useful pieces of data. 
                </p>
            </div>
        
        </>

    );
}