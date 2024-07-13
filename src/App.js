import React from 'react';

const SuccessPage = () => {
  return (
    <div className="container flex flex-col justify-around h-screen mx-auto">
      <div className="flex justify-center mt-5">
        <div className="col-7 col-sm-6 col-md-4 col-lg-3 flex items-center">
          <a href="https://chatcells.ai/" aria-label="Chatbase">
            <img src={`${process.env.PUBLIC_URL}/chatcells-logo.png`} alt="Chatcells Logo" className="w-16" />
          </a>
          <div className="text-black text-4xl ml-2">Chatcells</div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-sm-8 col-md-8 col-lg-8 text-center">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full">
              <i className="fa fa-check text-green-500 text-6xl p-4 font-thin" aria-hidden="true"></i>
            </div>
          </div>
          <h3 className="text-center text-green-600 mt-4">Congratulations</h3>
          <p className="text-center text-gray-600 text-lg">
            Your Chatcells has been successfully added to your workspace.<br />
            We are thrilled to have you onboard.
          </p>
          <div className="flex justify-center mt-3">
            <a 
              href="https://slack.com/signin#/signin"
              className="rounded-lg text-lg flex items-center bg-black text-white py-2 px-4"
              style={{ textDecoration: 'none' }}
            >
              Open Slack
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SuccessPage />
    </div>
  );
};

export default App;
