## Group By Property Function

Groups objects in an array that have the same value in a specific key

## Function: 
    const generateGroupsbyProperty = (originalArray, groupTo) => {
    const newArray = [...new Set(originalArray.map((a) => a[groupTo]))].map(
        (groupName) => {
            return {
                [groupTo]: groupName,
                items: originalArray.filter((i) => i[groupTo] === groupName)
            };
        }
    );
    return newArray;
    };
### Example  [CodeSandbox](https://codesandbox.io/s/group-by-property-function-qvokly)
