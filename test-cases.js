const testCases = [
    // Тест с уникальными значениями очков
    [
        { "id": 1, "name": "Ivan", "scorePoints": 4500 },
        { "id": 2, "name": "Petr", "scorePoints": 3600 },
        { "id": 3, "name": "Vadim", "scorePoints": 3433 },
        { "id": 4, "name": "Olga", "scorePoints": 2356 }
    ],
    // Тест с одинаковыми значениями очков
    [
        { "id": 1, "name": "Ivan", "scorePoints": 4500 },
        { "id": 2, "name": "Petr", "scorePoints": 4500 },
        { "id": 3, "name": "Vadim", "scorePoints": 4500 },
        { "id": 4, "name": "Olga", "scorePoints": 4500 }
    ],
    // Тест с отрицательными значениями очков
    [
        { "id": 1, "name": "Ivan", "scorePoints": -100 },
        { "id": 2, "name": "Petr", "scorePoints": -50 },
        { "id": 3, "name": "Vadim", "scorePoints": -200 },
        { "id": 4, "name": "Olga", "scorePoints": -300 }
    ],
    // Тест с минимальным количеством игроков (1 игрок)
    [
        { "id": 1, "name": "Ivan", "scorePoints": 4500 }
    ],
    // Тест с двумя игроками с разными очками
    [
        { "id": 1, "name": "Ivan", "scorePoints": 4500 },
        { "id": 2, "name": "Petr", "scorePoints": 3600 }
    ],
    // Тест с нулевыми значениями очков
    [
        { "id": 1, "name": "Ivan", "scorePoints": 0 },
        { "id": 2, "name": "Petr", "scorePoints": 0 },
        { "id": 3, "name": "Vadim", "scorePoints": 0 },
        { "id": 4, "name": "Olga", "scorePoints": 0 }
    ],
    // Пустой массив игроков
    []
];

testCases.forEach((players, index) => {
    console.log(`Test Case #${index + 1}`);

    let scorePoints = [];
    let maxScore;

    for (let i in players) {
        scorePoints[i] = players[i].scorePoints;
        maxScore = Math.max(...scorePoints);

        const bestPlayers = players.filter(player => player.scorePoints === maxScore); // все лучшие игроки
        const bestPlayer = bestPlayers[0];   // выбираем первого

        if (bestPlayer) {
            console.log(`${bestPlayer.name}: ${bestPlayer.scorePoints}`);
        } else {
            console.log('We do not have the best player!');
        }
        return;
    }

    if (players.length === 0) {
        console.log('No players in the array.');
    }

    console.log('\n');
});
