/* Descizione
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image

Todo:
- Stampare in console tutti gli elementi del team e le loro proprietà. */

const team = [
    {
        name: 'Federico',
        role: 'Web developer apprentice',
        image: 'https://picsum.photos/200'
    },
    
    {
        name: 'Giuseppe',
        role: 'Videomaker',
        image: 'https://picsum.photos/200'
    },

    {
        name: 'Pablo',
        role: 'Salesman',
        image: 'https://picsum.photos/200'
    },

    {
        name: 'Fabio',
        role: 'Senior software developer',
        image: 'https://picsum.photos/200'
    },

    {
        name: 'Matteo',
        role: 'Junior web developer',
        image: 'https://picsum.photos/200'
    }
]

// console.log(team);

for (let i = 0; i < team.length; i++){
    // console.log(team[i]);

    console.log(`Componente del team n.${i+1}`);

    const teamObjects = team[i];
    for (const key in teamObjects){
        console.log(key + ':' + teamObjects[key]);
    }

    console.log(`
    `);

}