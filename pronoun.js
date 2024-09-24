function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    // Split the string into words, removing punctuation
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    const result = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            result[word].count++;

            // Look for the next non-pronoun word
            if (i + 1 < words.length && !pronouns.includes(words[i + 1])) {
                const nextWord = words[i + 1];
                if (!result[word].word.includes(nextWord)) {
                    result[word].word.push(nextWord);
                }
            }
        }
    }

    return result;
}