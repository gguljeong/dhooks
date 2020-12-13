export const useFullScreen = () => {
    const element = useRef();
    const triggerFull = () => {
      if (element.current) {
        element.current.requestFullscreen();
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
    };
    return { element, triggerFull, exitFull };
  };
  
//   const App = () => {
//     const { element, triggerFull, exitFull } = useFullScreen();
//     return (
//       <div className="App" style={{ height: "1000vh" }}>
//         <div ref={element}>
//           <img src="https://img.sportsworldi.com//content/image/2020/08/05/20200805521419.jpg" />
//           <button onClick={exitFull}>exit full</button>
//         </div>
//         <button onClick={triggerFull}>make full</button>
//       </div>
//     );
//   };