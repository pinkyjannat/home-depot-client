import React from 'react';

const Blogs = () => {
    return (
        <div className=' container my-5 py-5'>

            <div class="row">
                <h2> How will you improve the performance of a React Application?</h2>
                <p> Optimizing performance in a React application
                    Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                    Lazy loading images in React. </p>
            </div>
            <div className="row">
                <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>setState , and React. useState create queues for React core to update the state object of a React component. So the process to update React state is asynchronous for performance reasons. That's why changes don't feel immediate.
               </p>
            </div>
            <h2>  What is a unit test? Why should write unit tests?</h2>
           
            <p>
              The purpose of a unit test in software engineering is to verify the behavior of a relatively small piece of software, independently from other parts. Unit tests are narrow in scope, and allow us to cover all cases, ensuring that every single part works correctly.
            </p>

        </div>
    );
};

export default Blogs;