// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white shadow-lg shadow-teal-500/50 rounded-lg p-8 mt-5 border-t-4 border-teal-500">
//         <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">
//           About This App
//         </h1>

//         <p className="text-lg text-gray-600 mb-6 text-center">
//           Welcome to the MERN Authentication App. This application is designed
//           to provide a secure and seamless authentication experience using
//           modern web technologies.
//         </p>

//         <h2 className="text-2xl font-semibold text-teal-600 mb-4">
//           Technologies Used
//         </h2>
//         <ul className="list-disc list-inside text-left text-gray-600 mb-8">
//           <li>
//             <strong>MongoDB:</strong> For storing user information securely.
//           </li>
//           <li>
//             <strong>Express.js:</strong> To handle the backend server and API
//             routes.
//           </li>
//           <li>
//             <strong>React.js:</strong> For creating the interactive and
//             responsive frontend.
//           </li>
//           <li>
//             <strong>Node.js:</strong> For running the server-side JavaScript
//             code.
//           </li>
//           <li>
//             <strong>Tailwind CSS:</strong> For styling the UI with a modern and
//             responsive design.
//           </li>
//         </ul>

//         <h2 className="text-2xl font-semibold text-teal-600 mb-4">Features</h2>
//         <ul className="list-disc list-inside text-left text-gray-600 mb-8">
//           <li>
//             <strong>JWT (JSON Web Tokens):</strong> Securely manage user
//             sessions with JWT tokens.
//           </li>
//           <li>
//             <strong>Cookie Validation:</strong> Use HTTP cookies to validate
//             user sessions across requests.
//           </li>
//           <li>
//             <strong>Google OAuth:</strong> Sign up and sign in with your Google
//             account for a quick and easy authentication process.
//           </li>
//           <li>
//             <strong>Account Management:</strong> Features like deleting your
//             account and signing out securely.
//           </li>
//         </ul>

//         <p className="text-lg text-gray-600 text-center mb-4">
//           This application is built to demonstrate a secure and efficient way to
//           manage user authentication in modern web applications.
//         </p>

//         <div className="text-center">
//           <a
//             href="/"
//             className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-transform transform hover:-translate-y-1"
//           >
//             Go to Home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg p-8 mt-5 shadow-[0_4px_6px_rgba(13,138,121,0.2),0_-2px_4px_rgba(13,138,121,0.1),0_2px_4px_rgba(13,138,121,0.2),0_0_10px_rgba(13,138,121,0.15)]">
        <h1 className="text-4xl font-bold text-cyan-700 text-center mb-8">
          About This App
        </h1>

        <p className="text-lg text-gray-600 mb-6 text-center">
          Welcome to the MERN Authentication App. This application is designed
          to provide a secure and seamless authentication experience using
          modern web technologies.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-left text-gray-600 mb-8">
          <li>
            <strong>MongoDB:</strong> For storing user information securely.
          </li>
          <li>
            <strong>Express.js:</strong> To handle the backend server and API
            routes.
          </li>
          <li>
            <strong>React.js:</strong> For creating the interactive and
            responsive frontend.
          </li>
          <li>
            <strong>Node.js:</strong> For running the server-side JavaScript
            code.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> For styling the UI with a modern and
            responsive design.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Features</h2>
        <ul className="list-disc list-inside text-left text-gray-600 mb-8">
          <li>
            <strong>JWT (JSON Web Tokens):</strong> Securely manage user
            sessions with JWT tokens.
          </li>
          <li>
            <strong>Cookie Validation:</strong> Use HTTP cookies to validate
            user sessions across requests.
          </li>
          <li>
            <strong>Google OAuth:</strong> Sign up and sign in with your Google
            account for a quick and easy authentication process.
          </li>
          <li>
            <strong>Account Management:</strong> Features like deleting your
            account and signing out securely.
          </li>
        </ul>

        <p className="text-lg text-gray-600 text-center mb-4">
          This application is built to demonstrate a secure and efficient way to
          manage user authentication in modern web applications.
        </p>

        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-transform transform hover:-translate-y-1"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
