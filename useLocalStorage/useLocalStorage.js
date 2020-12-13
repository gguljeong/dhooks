export const useLocalStorage = (key) => {
  const element = useRef();
  const [msg, setMsg] = useState();
  const localStorage = window.localStorage;
  const getData = (key) => {
    setMsg(localStorage.getItem(key));
  };
  const setData = (key) => {
    console.log(element.current.value, key);
    localStorage.setItem(key, element.current.value);
  };
  return { element, msg, setData, getData };
};

// const App = () => {
//   const { element, msg, setData, getData } = useLocalStorage("daisy");
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <div>
//         <input ref={element} />
//         <button onClick={setData}>set</button>
//       </div>
//       <button onClick={getData}>get</button>
//       <div>{msg}</div>
//     </div>
//   );
// };