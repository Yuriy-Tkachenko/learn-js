function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}