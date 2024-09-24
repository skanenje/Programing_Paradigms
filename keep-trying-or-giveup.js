const retry = (count, cb) => {
    let i = 0
    return async function again(...args) {
        return await cb(...args).catch(err => {
            if (i >= count) throw err
            i++
            return again(...args)
        })
    }
}

const timeout = (delay, cb) => {
    return async (...args) => {
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => reject(new Error('timeout')), delay);
        });
        
        try {
            const result = await Promise.race([cb(...args), timeoutPromise]);
            clearTimeout(timeoutId);
            return result;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }
}