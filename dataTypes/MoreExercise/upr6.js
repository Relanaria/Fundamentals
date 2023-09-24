function generateChessboard(n) {
  let chessboard = '<div class="chessboard">\n';

  for (let i = 0; i < n; i++) {
    chessboard += " <div>\n";

    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        chessboard += '   <span class="black"></span>\n';
      } else {
        chessboard += '   <span class="white"></span>\n';
      }
    }

    chessboard += " </div>\n";
  }

  chessboard += "</div>";

  console.log(chessboard);
}

generateChessboard(3)


