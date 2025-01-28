import {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter.jsx';
import useNotification from '../hooks/useNotification.jsx';
import useLocalStorage from '../hooks/useLocalStorage.jsx';
import {validateUserInfo} from '../utils/functionUtils.js';

export default function SignUpPage() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const {updateNotification} = useNotification();
   const {isValid, error} = validateUserInfo(username, email, password);
   const userDataArr = [];
   const [name, setName] = useLocalStorage('userHook', userDataArr);
   let timeOutId = null;

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (timeOutId) {
         clearTimeout(timeOutId);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const isPasswordValid = await bcrypt.compare(password, hashedPassword);
      const userData = {
         _id: uuid(),
         username,
         email,
         hashedPassword,
         matchedPassword: isPasswordValid
      }
      try {
         if (!isValid) {
            return updateNotification("error", error);
         }

        await updateNotification('success', 'Signed up successfully!');
         userDataArr.push(userData);
         setName(userDataArr);

          timeOutId =  setTimeout(() => {
            location.reload();
         }, 5000);

      } catch(err) {
         return updateNotification("error", err.message);
      }
   }

   useEffect(() => {

   }, [userDataArr]);

   return (
      <section className='h-screen mt-8'>
         <div className='max-w-sm border shadow bg-gray-200 mx-auto p-8'>
            <h2 className='text-2xl font-head text-center uppercase font-semibold pt-5'>Sign up</h2>
            <form onSubmit={handleSubmit}
                  className='space-y-5 max-w-sm mx-auto pt-8'>
               <input type="text" name="username" id="username"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder='Full name'
                      className='w-full bg-gray-50 focus:outline-none px-5 py-3'
               />
               <input type="text" name="email" id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                      className='w-full bg-gray-50 focus:outline-none px-5 py-3'
               />
               <input type="password" name="password" id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                      className='w-full bg-gray-50 focus:outline-none px-5 py-3'
               />

               <PasswordStrengthMeter password={password} />
               <button type='submit'
                       className='w-full mt-5 uppercase font-semibold bg-gray-600 text-white hover:bg-gray-400 hover:text-gray-800 py-3 rounded-md'
               >Sign up
               </button>
            </form>

            <p className='my-5 italic text-sm text-center'>Already have an account?&nbsp;
               <a href='#' className='text-gray-600 hover:text-gray-900 px-1 capitalize font-semibold underline'>Sign in</a>.
            </p>
         </div>
      </section>
   );
}