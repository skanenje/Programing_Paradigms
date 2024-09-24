const hasCity = (country, arr) => {
    return (city) => {
        let res = '';
        for (let val of arr) {
            if (val === city) {
                res = `${city} is a city from ${country}`;
                return res;
            }
        }
        res = `${city} is not a city from ${country}`;
        return res;
    };
};