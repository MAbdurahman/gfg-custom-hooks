import {Fragment, useEffect, useState} from 'react';
import HeadingComponent from '../components/HeadingComponent.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';


export default function App() {
   const [location, setLocation] = useState('');

   useEffect(() => {
      document.title = 'GFG | Custom Hooks';
      setLocation('/sign-up');
   }, []);

   return (
      <Fragment>
         <HeadingComponent />
         <SignUpPage />
      </Fragment>

   );
}