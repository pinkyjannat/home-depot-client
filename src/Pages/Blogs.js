import React from 'react';

const Blogs = () => {
    return (
        <div className=' container my-5 py-5'>

          
                <h2> How will you improve the performance of a React Application?</h2>
                <p> Optimizing performance in a React application
                    Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                    Lazy loading images in React. </p>
            
                <h2>What are the different ways to manage a state in a React application?</h2>
                <p>
                Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant component
            
                </p>
          
           
            <h2>  What is a unit test? Why should write unit tests?</h2>
            <p>
              The purpose of a unit test in software engineering is to verify the behavior of a relatively small piece of software, independently from other parts. Unit tests are narrow in scope, and allow us to cover all cases, ensuring that every single part works correctly.
            </p>
            <h2>How does prototypical inheritance work?</h2>
            <p>
            Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype
            </p>

            <h2> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly.</p>
        </div>
       
    );
};

export default Blogs;