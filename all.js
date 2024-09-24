async function all(promises) {
    if (!promises) return {};
    
    let obj = {};
    let err;

    for (const [key, value] of Object.entries(promises)) {
        if (typeof value !== "object" || value === null || !('then' in value)) {
            obj[key] = value;
            continue;
        }

        try {
            obj[key] = await value;
        } catch (error) {
            err = error;
            break;
        }
    }

    if (err) throw err;
    return obj;
}