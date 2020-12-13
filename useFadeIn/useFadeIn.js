export const useFadeIn = (duration = 3, delay = 0) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//   const fadeInH1 = useFadeIn();
//   const fadeInH2 = useFadeIn(5, 3);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hi</h1>
//       <h2 {...fadeInH2}>Bye</h2>
//     </div>
//   );
// };