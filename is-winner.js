async function isWinner(countryName) {
    let err = false;
    
    // Try fetching the winner, with error flagging
    const country = await db.getWinner(countryName).catch(() => err = true);
    
    // If error occurred or no country was found
    if (err || !country) return `${countryName} never was a winner`;

    // Check if the country is from the wrong continent
    if (country.continent !== 'Europe') {
        return `${countryName} is not what we are looking for because of the continent`;
    }
    
    // Fetch the results with no error handling (assuming getResults won't fail)
    const results = await db.getResults(country.id);
    
    // Check if there are fewer than 3 wins
    if (results.length < 3) {
        return `${countryName} is not what we are looking for because of the number of times it was champion`;
    }
    
    // Manually concatenate years and scores with trailing comma removal
    let years = '';
    let scores = '';
    
    for (const result of results) {
        years += `${result.year}, `;
        scores += `${result.score}, `;
    }
    
    // Slice off the trailing ', ' for clean output
    return `${countryName} won the FIFA World Cup in ${years.slice(0, -2)} winning by ${scores.slice(0, -2)}`;
}