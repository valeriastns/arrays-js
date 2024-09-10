/*Задача:
 выведите в консоль игрока с максимальным значением scorePoints.
 Используйте цикл, обращение к свойству через точку и метод глобального объекта Math,
 позволяющий найти большее число из всех возможных.
*/

const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    }, 
    ];
    
    let scorePoints = [];
    let maxScore;

     for (let i in players) {
        scorePoints[i] = players[i].scorePoints;
       // console.log(scorePoints);
        maxScore = Math.max(...scorePoints)
    };

    console.log(maxScore);


