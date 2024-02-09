function groupAnagram(strs) {
    let sorted = [];
    for (let a = 0; a < strs.length; a += 1 ) {
        for (let i = 0; i < strs.length; i += 1 ) {
            sorted.push(strs[a][i].split());
        }
    }
    
    console.log(sorted);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagram(strs);