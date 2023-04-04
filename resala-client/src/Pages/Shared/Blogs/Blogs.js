import React from 'react';

const Blogs = () => {
    return (
        <section className='mx-6 my-6'>
            <div className='my-4'>
                <p className='text-3xl font-bold my-2 text-slate-600'>Q: What are the different ways to manage a state in a react application?
                </p>
                <p>
                    <span className='text-xl font-bold text-slate-600'>The Four Kinds of React State to Manage</span> <br />
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps: <br />

                    <span className='text-xl font-bold text-slate-600'>1. Local state</span> <br />
                    <span className='text-xl font-bold text-slate-600'>2. Global state</span> <br />
                    <span className='text-xl font-bold text-slate-600'>3. Server state</span> <br />
                    <span className='text-xl font-bold text-slate-600'>4. URL state</span> <br />
                    Let's cover each of these in detail: <br />

                    <span className='text-xl font-bold text-slate-600'>Local (UI) state –</span> Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                    <span className='text-xl font-bold text-slate-600'>Global (UI) state –</span>Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global. <br />

                    <span className='text-xl font-bold text-slate-600'>Server state –</span> Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                    <span className='text-xl font-bold text-slate-600'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='my-4'>
                <p className='text-3xl font-bold my-2 text-slate-600'>Q: How does prototypical inheritance work?
                </p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is <span className='text-xl font-bold text-slate-600'>a method by which an object can inherit the properties and methods of another object.</span> Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='my-4'>
                <p className='text-3xl font-bold my-2 text-slate-600'>Q: What is a unit test? Why should we write unit tests?
                </p>
                <p>
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                </p>
                <br />
                <p>
                    <span className='text-xl font-bold text-slate-600'>They enable you to catch bugs early in the development process.</span> Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex
                </p>
            </div>
            <div className='my-4'>
                <p className='text-3xl font-bold my-2 text-slate-600'>Q: What are the difference in React VS Angular VS Vue?
                </p>
                <p className='text-xl font-bold my-4 text-slate-600'>React VS Angular VS Vue</p>
                <p>
                    <span className='text-xl font-bold text-slate-600'>Angular vs Vue</span> <br />
                    But now a question comes – which one is better, Vue or Angular? As we have seen a comparison between Angular JS vs React JS in the above section, let’s understand how Vue and Angular differ from each other and which one is a better framework for you. <br />

                    <span className='font-bold text-slate-600'>1.Angular</span> is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. <br />
                    <span className='font-bold text-slate-600'>2.Angular</span> is Google’s matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You. <br />
                    While comparing Vue JS vs Angular, Vue is known for its clean architecture and its elegant designs. On the other hand, Angular is considered for many organizations due to its vast functionality and high performance.
                </p> <br />
                <p>
                    <span className='text-xl font-bold text-slate-600'>React vs Vue</span> <br />
                    While Talking about Vue JS vs React, both front-end tools are used to build web applications for enterprises. However, both open-source tools have their own use cases; we will explore comprehensive differences - React JS vs Vue JS. <br />

                    <span className='font-bold text-slate-600'>1.Vue</span> is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps. <br />
                    <span className='font-bold text-slate-600'>2.Vue JS</span> is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM.
                </p>
            </div>
        </section>
    );
};

export default Blogs;