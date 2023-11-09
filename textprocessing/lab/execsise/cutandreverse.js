function solve(str){
    
    let firstHalf = str.substring(0, str.length / 2).split("").reverse();
    let secoundHalf = str.substring(str.length / 2, str.length).split("").reverse();
    console.log(firstHalf.join(""));
    console.log(secoundHalf.join(""));

}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')