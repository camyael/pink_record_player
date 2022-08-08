//guardando artistas con su cancion


// songs.push("little-freak")
// songs.push("mirrorball")

const listaMusica = [
    {
        artista: 'Harry Styles',
        cancion: 'little-freak'
    },
    {
        artista: 'Taylor Swift',
        cancion: 'mirrorball'
    },
    {
        artista: 'Sufjan Stevens',
        cancion: 'fourth-of-july'
    },
    {
        artista: 'Lana del Rey',
        cancion: 'summertime-sadness'
    },
    {
        artista: 'The 1975',
        cancion: 'sincerity-is-scary'
    },
    {
        artista: 'Phoebe Bridgers',
        cancion: 'graceland-too'
    },
    {
        artista: 'The Smiths',
        cancion: 'asleep'
    }
]

const songs = listaMusica.map((i)=>i.cancion)

console.log(songs)