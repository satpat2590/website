import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked'; 
import hljs from 'highlight.js';



export default function CStructs() {

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const codeblock = `
        struct Person {
            int age; 
            char* first_name; 
            char* last_name;
        }

        struct OneBedroomApartment {
            Person owner; 
            int size; 
            char* description; 
        }
    `;

    const codeblock2 = `
        struct Person {
            int age; 
            char* first_name; 
            char* last_name;
            Person(first, last, age) { this.age = age; this.first_name = first; this.last_name = last; }
        }

        struct OneBedroomApartment {
            Person owner; 
            int size; 
            char* description; 
            OneBedRoomApartment(owner, size, desc) { this.owner = owner; this.size = size; this.description = desc; }
        }

        int main () {
            Person sat = new Person(22, 'Satyam', 'Patel');
            OneBedroomApartment newroom = new OneBedroomApartment(sat, 24000, 'Beautiful luxury apartment')

            println("First-name: %s\\nLast-name: %s\\nAge: %d\\nApartment Description: %s\\n", newroom.owner.first_name, newroom.owner.last_name, newroom.owner.age, newroom.description);
        }
    `;

    return(
        <>
        <div>
            <div>
                <p>
                    Structs are used in almost every programming language as a way to group various 
                    types together in a single "object". Structs contain fields which refer to various types, 
                    either primitive types such as int, bool, char. Sometimes, structs also make use of other 
                    defined types. 
                    <br></br><br></br>
                    For example, if you define a struct in C and you also have another struct which is defined, 
                    you can simply embed them within one another. 
                    <br></br><br></br>
                    Here's an interesting way of looking at this: 
                </p>

                <div dangerouslySetInnerHTML={{ __html: marked(codeblock) }}></div>

                <p>
                    The Person struct takes in an age, first name, and a last name. This defines a singular person, 
                    so let's just say it is me! I am Satyam Patel and my age is 22. With this, I am a defined struct,
                    and I can just call myself 'sat' (my variable name). 
                    <br></br><br></br>
                    So I can now say that I am known fully to the C programming language as 'Person sat'. Just as 
                    you can have a numerical variable called num referred to as 'int num'. See how structs really are? 
                    It's no different from creating your own type! 
                    <br></br><br></br>
                    The example above also shows the Person struct inside of the OneBedroomApartment struct. The reason
                    why the struct name is so long is because I wanted to simulate a singular person living within the 
                    house. 
                    <br></br><br></br>
                    Now this struct takes in the size in square meters of the entire apartment as well as the owner of the 
                    apartment. We could have simply used 'char* owner' instead of 'Person owner' to get the name of the 
                    person living within the apartment. However, if you ever needed to find the age of the person, it would 
                    be impossible to see through just the name alone! 
                    <br></br><br></br>
                    Imagine if there was a restriction on the tenant's age and evidence of employment necessary to rent.
                    Adding an 'int age' and 'bool evidence' into the House struct would be seemingly pointless. 
                    By utilizing the Person as something with many different forms of 'meta-data', you're able to find 
                    new and interesting characteristics that can be added as a field! 
                    <br></br><br></br>
                    This technique can be used in realistically any object, and is the basis for creating C Structs! 
                </p>

                <div dangerouslySetInnerHTML={{ __html: marked(codeblock2) }}></div>
            </div>





        </div>
        
        </>

    );
}