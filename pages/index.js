// import ReactGA from 'react-ga4';
// import Meta from "../components/SEO/Meta";
// import Ubuntu from "../components/ubuntu";

// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
// ReactGA.initialize(TRACKING_ID);

// function App() {
//   return (
//     <>
//       <Meta />
//       <Ubuntu />
//     </>
//   )
// }

// export default App;


import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";
import Ubuntu from "../components/ubuntu";

// Fetch the Tracking ID from environment variables
const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;

// Check if TRACKING_ID is defined before initializing
if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID);
} else {
    console.error('GA_MEASUREMENT_ID is not defined');
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  );
}

export default App;