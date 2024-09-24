const queryServers = async (serverName, q) => {
    const mainUrl = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    
    const result = await Promise.race([
      getJSON(mainUrl),
      getJSON(backupUrl)
    ]);
    
    return result;
  };
  
  // Main gougleSearch function
  const gougleSearch = async (q) => {
    const servers = ['web', 'image', 'video'];
    
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 80);
    });
    
    try {
      const results = await Promise.race([
        Promise.all(servers.map(server => queryServers(server, q))),
        timeoutPromise
      ]);
      
      if (results instanceof Error) {
        throw results;
      }
      
      return {
        web: results[0],
        image: results[1],
        video: results[2]
      };
    } catch (error) {
      if (error.message === 'timeout') {
        throw error;
      }
      // Handle other potential errors
      console.error('An error occurred:', error);
      throw error;
    }
  };