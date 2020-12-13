# @nooks/use-scroll

React Hook to get and set items in local storage

## Installation

#### yarn

`yarn add @dhooks/use-localstorage`

#### npm

`npm i @dhooks/use-localstorage`

## Usage

```js
import React from "react";
import useLocalStorage from "@dhooks/use-localstorage";

const App = () => {
  const { element, msg, setData, getData } = useLocalStorage("key");
  return (
    <div className="App">
      <div>
        <input ref={element} />
        <button onClick={setData}>set</button>
      </div>
      <button onClick={getData}>get</button>
      <div>{msg}</div>
    </div>
  );
};
```
