function solve(word, text) {
    const wordLower = word.toLowerCase();
    const textLower = text.toLowerCase().split(" ");
    let check = false;

    for (const words of textLower) {
        if (words === wordLower) {
            console.log(wordLower);
            return;
        } 
    }

    console.log(`${wordLower} not found!`);
}


solve("javascript", "JavaScript is the best programming language");
