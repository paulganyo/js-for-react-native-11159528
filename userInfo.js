//task 3
// userInfo.js

/**
 * Creates user profiles from original names and modified names.
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profiles.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('Both arrays must be of the same length');
    }
    
    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const originalNames = ["Ernest", "Gideon", "Sylvester", "Harmony", "Bryan"];
const modifiedNames = ["ERNEST", "gideon", "SYLVESTER", "harmony", "BRYAN"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
