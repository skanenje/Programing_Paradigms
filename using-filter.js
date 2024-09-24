const filterShortStateName = (arr) => arr.filter(item => item.length < 7);

const filterStartVowel = (arr) => arr.filter(item => 'aeiou'.includes(item[0].toLowerCase()));

const filter5Vowels = (arr) => arr.filter(item => (item.match(/[aeiou]/gi) || []).length >= 5);

const filter1DistinctVowel = (arr) => arr.filter(item => {
    const vowels = new Set(item.toLowerCase().match(/[aeiou]/g) || []);
    return vowels.size === 1;
});

const multiFilter = (arr) => arr.filter(objFilter);

const objFilter = (obj) => {
    // Capital length >= 8
    const capitalCondition = obj.capital.length >= 8;
    
    // Name doesn't start with a vowel
    const nameCondition = !'aeiou'.includes(obj.name[0].toLowerCase());
    
    // Tag has at least one vowel
    const tagCondition = /[aeiou]/i.test(obj.tag);
    
    // Region is not "South"
    const regionCondition = obj.region !== "South";
    
    // All conditions must be true
    return capitalCondition && nameCondition && tagCondition && regionCondition;
}