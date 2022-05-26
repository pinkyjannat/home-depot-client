import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/HDy4XHK/279700558-611540847085852-7502855561085930823-n.jpg" class="max-w-sm rounded-lg shadow-2xl" alt=" my pp"/>
    <div>
      <h1 class="text-5xl font-bold">Hi, I am Jannatul Ferdous</h1>
      <p class="py-6">I completed My Bsc in Agricultural Engineering From Bangladesh Agricultural University.Then I Again attended York University ,Toronto For a web development certification. After that i find out "programming Hero web course ". I learned so many things during my web development journey. </p>
      <h3 className='py-5'>List of technologies i used for couple months:</h3>
      <ol className=" text-xl">
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Bootstrap and React-Bootstrap</li>
          <li>TailwindCss and DaisyUI</li>
          <li>JavaScript and ES6</li>
          <li>React for front end development</li>
          <li>Express and Node for backend development</li>
          <li>FireBase and JWT token for aunthentication</li>
          <li>MongoDb for Database</li>
          <li>Git and GitHub for version control</li>
          <li>Netlify and Heroku for deployment</li>
          <li>Jira and slack for project management</li>
      </ol>
      <p>Three exiciting project that i done before:
      <li><a className="text-blue-700" href="https://auth-mentalhealth.web.app/"> Mental Health</a></li>
      <li><a className="text-blue-700" href="https://nexus-f0563.web.app/"> Nexus wareHouse</a></li>
      <li><a className="text-blue-700"  href="https://cosmic-semifreddo-deb029.netlify.app/"> Toronto Spa</a></li>
      </p>
      <p>My email:jannatPinky92@gmail.com</p>
    </div>
  </div>
</div>
    );
};

export default MyPortfolio;