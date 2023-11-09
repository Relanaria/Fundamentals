function solve(str) {
    console.log(str.split(/(?=[A-Z])/).join(", "))
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
