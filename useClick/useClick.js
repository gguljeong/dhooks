export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (typeof onClick !== "function") {
        return;
      }
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };

//   const App = () => {
//     const sayHello = () => console.log("hello");
//     const title = useClick(sayHello);
  
//     return (
//       <div className="App">
//         <div ref={title}>Hi</div>
//       </div>
//     );
//   };