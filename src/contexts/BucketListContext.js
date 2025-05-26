// src/context/BucketListContext.js
import React, { createContext, useContext, useState } from "react";

const BucketListContext = createContext();

export const BucketListProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState([]);

  const addToBucketList = (place) => {
    setBucketList((prev) => {
      if (!prev.some(item => item.name === place.name)) {
        return [...prev, place];
      }
      return prev;
    });
  };

  return (
    <BucketListContext.Provider value={{ bucketList, addToBucketList }}>
      {children}
    </BucketListContext.Provider>
  );
};

export const useBucketList = () => useContext(BucketListContext);
