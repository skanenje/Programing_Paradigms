const slice = (input, ...args) => {
    if (typeof input === 'string') {
        let str = input;
        let start = args[0] !== undefined ? args[0] : 0;
        let end = args[1] !== undefined ? args[1] : str.length;

        // Handle negative indices
        if (start < 0) {
            start = str.length + start;
        }
        if (end < 0) {
            end = str.length + end;
        }

        return str.substring(start, end);
    } else if (Array.isArray(input)) {
        let arr = input;
        let start = args[0] !== undefined ? args[0] : 0;
        let end = args[1] !== undefined ? args[1] : arr.length;

        // Handle negative indices
        if (start < 0) {
            start = arr.length + start;
        }
        if (end < 0) {
            end = arr.length + end;
        }

        let res = [];
        for (let i = start; i < end && i < arr.length; i++) {
            res.push(arr[i]);
        }

        return res;
    }
    return undefined;
}