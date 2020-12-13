export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNoti = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNoti;
  };
  
//   const App = () => {
//     const triggerNoti = useNotification("hello daisy", {
//       body: "hi"
//     });
//     return (
//       <div className="App" style={{ height: "1000vh" }}>
//         <button onClick={triggerNoti}>hi</button>
//       </div>
//     );
//   };