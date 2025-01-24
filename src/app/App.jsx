import {Fragment, useEffect} from 'react';
import HeadingComponent from '../components/HeadingComponent.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';


export default function App() {

   useEffect(() => {
      document.title = 'GFG | Custom Hooks';
   }, []);

   return (
      <Fragment>
         <HeadingComponent />
         <SignUpPage />
      </Fragment>

   );
}