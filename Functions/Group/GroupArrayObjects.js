const carsArray = [
    {
        model: "5p",
        brand: "Ford",
        motor: "1.6"
    },
    {
        model: "3p",
        brand: "Volkswagen",
        motor: "1.5"
    },
    {
        model: "5p",
        brand: "Volkswagen",
        motor: "1.5"
    },
    {
        model: "3p",
        brand: "Volkswagen",
        motor: "1.5"
    },
    {
        model: "3p",
        brand: "Tesla",
        motor: "Electric"
    },
    {
        model: "3p",
        brand: "Ford",
        motor: "1.5"
    }
];

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

const newArrayGroup = generateGroupsbyProperty(carsArray, "brand");
console.table(newArrayGroup);
