export const useBeforeLeave = (onLeave) => {
  if (typeof onLeave !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

// const App = () => {
//   const begForLife = () => console.log("pls don't leave");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// };