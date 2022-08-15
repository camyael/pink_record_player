//guardando artistas con su cancion
const listaMusica = [
    {
        artista: 'Harry Styles',
        cancion: 'Little Freak',
        src: 'little-freak',
    },
    {
        artista: 'Taylor Swift',
        cancion: 'Mirrorball',
        src: 'mirrorball'
    },
    {
        artista: 'Sufjan Stevens',
        cancion: 'Fourth of July',
        src: 'fourth-of-july'
    },
    {
        artista: 'Lana del Rey',
        cancion: 'Summetime Sadness',
        src: 'summertime-sadness'
    },
    {
        artista: 'The 1975',
        cancion: 'Sincerity is Scary',
        src: 'sincerity-is-scary'
    },
    {
        artista: 'Phoebe Bridgers',
        cancion: 'Graceland Too',
        src: 'graceland-too'
    },
    {
        artista: 'The Smiths',
        cancion: 'Asleep',
        src: 'asleep'
    }
]

// obtiene los datos del array principal y los divido en arrays separadas
const songs = listaMusica.map((i)=>i.src)
const artista = listaMusica.map((i)=>i.artista)
const cancion = listaMusica.map((i)=>i.cancion)

//las voy a utilizar para avisar que cancion esta sonando

