var lengthOfLastWord = function(string) {
    list = []
    list = string.trim().split(/\s+/)
    return list[list.length - 1].length
};

string = "aku cinta kamuu  "
x = "   fly me   to   the moon"
// console.log(x.split(/\s+/))
console.log(lengthOfLastWord(string))
console.log(lengthOfLastWord(x))