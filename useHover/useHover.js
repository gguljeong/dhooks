export const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

//   const App = () => {
//     const sayHello = () => console.log("hello");
//     const title = useHover(sayHello);
  
//     return (
//       <div className="App">
//         <div ref={title}>Hi</div>
//       </div>
//     );
//   };