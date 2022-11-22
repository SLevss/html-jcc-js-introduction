function getOccurrences(strings) {
    let strArr = Array.from(strings);
    const occurrences = {};
    strArr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    return occurrences;
}

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let occurrences = getOccurrences(str1.toLowerCase());
    let arrayFromSTR2 = Array.from(str2.toLowerCase());
    for (let i = 0; i < arrayFromSTR2.length; i++) {
        if (occurrences[arrayFromSTR2[i]] == undefined) {
            return false;
        }
        if (--occurrences[arrayFromSTR2[i]] < 0) {
            return false;
        }
    }
    return true;
}

let str1 = 'yellow';
console.log(`yellow - weloly ${isAnagram(str1, 'weloly')}`);
console.log(`yellow - leloyw ${isAnagram(str1, 'leloyw')}`);
console.log(`yellow - wolley ${isAnagram(str1, 'wolley')}`);
console.log(`yellow - weloyl ${isAnagram(str1, 'weloyl')}`);

console.log(`yellow - weloll ${isAnagram(str1, 'weloll')}`);
console.log(`yellow - leloy ${isAnagram(str1, 'leloy')}`);
console.log(`yellow - wollet ${isAnagram(str1, 'wollet')}`);
console.log(`yellow - weloyo ${isAnagram(str1, 'weloyo')}`);

