const heroes = 
{
    collectionName: 'Super heroes',
    count: 12,
    embedded: {
        episode_data: [
            {episode:'1',season:'1'},
            {episode:'2',season:'1'},
            {episode:'3',season:'1'},
            {episode:'4',season:'1'}
        ]
    },
    characters: {
        byEpisode: [
            {1: [{name:'Dean',power:'math'},{name:'Fleur',power:'sales'}]},
            {2: [{name:'Lia',power:'medicine'},{name:'Sophie',power:'chemistry'}]},
        ]
    },
    data: 
    [
    {name: 'Hulk', strength: 90000},
    {name: 'Spider-Man', strength: 25000},
    {name: 'Hawk Eye', strength: 136},
    {name: 'Thor', strength: 100000},
    {name: 'Black Widow', strength: 136},
    {name: 'Vision', strength: 5000},
    {name: 'Scarlet Witch', strength: 60},
    {name: 'Mystique', strength: 120},
    {name: 'Namora', strength: 75000},
    {name: 'Captain America', strength: 362},
    {name: 'Deadpool', strength: 1814},
    {name: 'Black Panther', strength: 1814},
    ]
};

// console.log(heroes.data.filter(x=>x.name.includes('Deadpool')).map(x=>x.strength
// ));

console.log(heroes.characters.byEpisode.forEach())