function gramophone(band, album, song){

    let bandName = band.length;
    let albumName = album.length;
    let songName = song.length;

    let duration = (bandName * albumName) * songName / 2;
    let rotation = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);

}

gramophone('Rammstein', 'Sehnsucht', 
'Engel' )