//guardando artistas con su cancion


// songs.push("little-freak")
// songs.push("mirrorball")

const listaMusica = [
    {
        artista: 'Harry Styles',
        cancion: 'Little Freak',
        audio: 'little-freak'
    },
    {
        artista: 'Taylor Swift',
        cancion: 'Mirrorball',
        audio: 'mirrorball'
    },
    {
        artista: 'Sufjan Stevens',
        cancion: 'Fourth of July',
        audio: 'fourth-of-july'
    },
    {
        artista: 'Lana del Rey',
        cancion: 'Summetime Sadness',
        audio: 'summertime-sadness'
    },
    {
        artista: 'The 1975',
        cancion: 'Sincerity is Scary',
        audio: 'sincerity-is-scary'
    },
    {
        artista: 'Phoebe Bridgers',
        cancion: 'Graceland Too',
        audio: 'graceland-too'
    },
    {
        artista: 'The Smiths',
        cancion: 'Asleep',
        audio: 'asleep'
    }
]

// obtiene los datos del array principal y los divido en arrays separadas
const songs = listaMusica.map((i)=>i.audio)
const artista = listaMusica.map((i)=>i.artista)
const cancion = listaMusica.map((i)=>i.cancion)

//las voy a utilizar para avisar que cancion esta sonando

