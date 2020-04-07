// 409. Longest Palindrome
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    // return the longest odd number plus all even numbers
    let len = s.length,
        m = new Map(),
        oddAll = 0,
        cnt = 0,
        oddCnt = 0;
        ret = 0;

    if (len === 0) return 0;

    for (let i in s) {
        if (m.has(s[i])) {
            cnt = m.get(s[i]) + 1;
            m.set(s[i], cnt);
        } else {
            m.set(s[i], 1);
        }
    }

    const getEvenOdd = (val, idx, map) => {
        if (val % 2 === 0) {
            // console.log(`${idx}->${val} is even number`);
            ret += val;
        } else {
            // console.log(`${idx}->${val} is odd number`);
                oddCnt ++;
                oddAll += val;
        }
    }

    m.forEach(getEvenOdd);
    if (oddCnt != 0) ret += (oddAll - oddCnt + 1);
    return ret;

};

console.log(longestPalindrome("abccccdd"), 7);
console.log(longestPalindrome("abcceefgtyujjjaavbaaaannnhjueevvdddcccdd"), 31);
console.log(longestPalindrome("aaabbbcccddd"), 9)
console.log(longestPalindrome("bb"), 2);

let longStr = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.log(longestPalindrome(longStr), 983);