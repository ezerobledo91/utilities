import { useEffect, useState } from "react";

const useSearch = (input, data = [], properties) => {
  const [items, setItems] = useState(data);
  useEffect(() => {
    let finded = [];
    for (let i = 0; i < data.length; i++) {
      for (let index = 0; index < properties.length; index++) {
        const property = properties[index];
        if (data[i][property] !== null && data[i][property] !== undefined) {
          if (
            data[i][property]
              .toString()
              .toUpperCase()
              .indexOf(input.toUpperCase()) > -1
          ) {
            finded.push(data[i]);
            break;
          }
        }
      }
    }

    if (input === "") setItems(data);
    setItems(finded);
    // eslint-disable-next-line
  }, [input, data]);

  return items;
};

export default useSearch;
