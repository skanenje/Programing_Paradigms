const pyramid = (str, num) => {
    let results = "";
    let maxwidth = ((num * 2) - 1) * str.length;
 
    for (let i = 1; i <= num; i++) {
        let linecounts = (i * 2) - 1;
        let linewidth = linecounts * str.length;
        let spaces = (maxwidth - linewidth) / 2;
 
        let addspace = repeat(" ", spaces);
        let addstr = repeat(str, linecounts);
 
        results += addspace + addstr;
 
        if (i != num) {
            results += "\n";
        }
    }
    return results;
};
 
const repeat = (str, count) => {
    let result = "";
    while (count > 0) {
        result += str;
        count--;
    }
    return result;
};
 
console.log(pyramid("*", 5));