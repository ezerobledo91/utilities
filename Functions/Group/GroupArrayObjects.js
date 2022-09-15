const generatGroups = (originalArray, groupTo) => {
    const newArray = [...new Set(originalArray.map((a) => a[groupTo]))].map((groupName) => {
        return {
            [groupTo]: groupName,
            items: originalArray.filter((i) => i[groupTo] === groupName),
        }
    })
    return newArray
}

