export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]); // didMount, willUpdate
    return setTitle;
  };

//   const App = () => {
//     const titleUpdator = useTitle("Loading...");
//     setTimeout(() => titleUpdator("home"), 2000); //  왜 여기서 titleUpdator를 호출하지??
  
//     return (
//       <div className="App"></div>
//     );
//   };