
import './App.css';
import RouterDiver from './router/Router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleAllShoppingList } from './store/Action';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleAllShoppingList())
  }, [])

  return (
    <div>
      <RouterDiver />
    </div>
  );
}

export default App;

// port:5432

// *#30856:*
// In negative paid amounts copied, check two things that is the rendering mehtod where copied text is show and maybe there's some static  sign appeared if it's cleared then apply one conditions in the coiped text before displaying, the funtions twice check the amount after text cpoied and save final vlaue in the state or where our last amount is shown, here conditions would check from the main state where data comes from directly api or DB
// const [amonutState,setAmountState] = useState('');
// const handleCopiedText = (coipedText:String) =>{
// used here conditions to check the existing values from code  and database and save final results in setAmountState('final Vlaue')
// }


// *#30839:*
// In this issue API is not working when going offline just create static data by the help of state and, creating data in global state and when user is back to online and api refreshes data it seem like dont found any data  beceause states does not contain real data form the API, this can handle by focusing in the network status call api when  there is network avaibale in the devices,,
// const netWorkStatus // this containe the level of network updates
// useEffect(()=>{
//   const subscribse = () =>{
//     if(netWorkStatus.availabel)
//     {
// // execute other work 
// // 1 getting those data which are showing (soft created data)
// // 2 calling APIs 
// // 3 save API Data 
//     }
//     else
//     {
//       // return save data in apis when network is availavble
//     }}
//   return(()=>{
//     subscribse();
//   });
// },[netWorkStatus]);


// *30854:*
// This requires to examine whole page ans change the data manually on each of imports, add imports {call all requirements} like this. also remove unwanted imports from the pages. Call sinlge import and call all it's instant by adding thier names. Next Remove all Underscore by selecting and replace unnecessaory imports by checking if they are needy to use or not 

// *30860:*
// when user is offline sotred the payment  and it's detail in state or asynstorage with all data and  requirements, stop naivagtion that help user not move between screens and when user is offline-mode show error with red dot and state deduct connectivity allow funtions to make api call and proceed further flow after the getting reponse and laslty remove error with help of getting notice on states. for that we are able to show  requester and requestee name on both possibilities i.e: online & offline


// *30870:*
// In this issue using of boolen values in  autoCorrect property or more built-in props in the TextInput of react native which allow user to select accordingly and also use uesRef hooks to check the correction in if user type interact with suggestion then show selected value and make naivagtion with testInput values on the click of next-button with params in side the navigation's functions.
// <TextInput desired props which allow to interact with user />