import defaulAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstance = defaulAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

// const App = () => {
//     const { loading, error, data, refetch } = useAixos({
//       url:
//         "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
//     });
//     console.log(loading, error, JSON.stringify(data));
//     return (
//       <div className="App" style={{ height: "1000vh" }}>
//         <h1>{data && data.status}</h1>
//         <h2>{loading && "loading"}</h2>
//         <button onClick={refetch}>Refetch</button>
//       </div>
//     );
//   };
