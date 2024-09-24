async function getJSON(path, params = {}) {
    const formatted_params = new URLSearchParams(params).toString();
    const url = `${path}${formatted_params ? '?' + formatted_params : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    const json = await response.json();
    
    if (json.error) {
        throw new Error(json.error);
    }
    
    if (json.data !== undefined) {
        return json.data;
    }
    
    return json; // Return the entire JSON if neither error nor data is present
}