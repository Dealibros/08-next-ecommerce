// export default function getLocalStorage(key) {
//   try {

//     return JSON.parse(window.localStorage[key])
//   }catch(err){
//     return undefined;
//   }
//   }

//   export default function setLocalStorage(key, value) {
//      if(typeof window !=="undefined"){
//        window.localStorage.setItem(key, JSON.stringify(value));
//      }
//     }

//     export function Home(){
//   const myDarkMode = getLocalStorage("darkMode") || false;

//   const [darkMode, setDarkMode] = useState('myDarkMode');

//   function clickHandler() {

//     const newDarkMode = !getLocalStorage('darkMode'));

//     setLocalStorage('darkMode', newDarkMode);
//     setDarkMode(newDarkMode);
//   }
//   return (
//     <div>
//       <div>Local Storage Test</div>
//       <div>{JSON.stringify(undefined, true, false)}</div>

//       <div>dark mode : {JSON.stringify(darkMode)}</div>
//       <button onClick={clickHandler}>dark mode</button>
//     </div>
//   );
// }
