function gameObject() {
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                },
                'Brook Lopez': {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },
                'Mason Plumlee': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                },
                'Jason Terry': {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },

                'Bismak Biyombo': {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },

                'Desagna Diop': {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },

                'Ben Gordon': {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },

                'Brendan Haywood': {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                },
            }
        },
    }
    return game;
}

function numPointsScored(player) {
    const game = gameObject();
    for (team in game) {
        for (person in game[team]['players']) {
            if (person === player) {
                return game[team]['players'][person].points;
            }
        }
    }
}

function shoeSize(player) {
    const game = gameObject();
    for (team in game) {
        for (person in game[team]['players']) {
            if (person === player) {
                return game[team]['players'][person].shoe;
            }
        }
    }
}

function teamColors(teamInput) {
    const game = gameObject();
    for (team in game) {
        if (game[team].teamName === teamInput) {
            return game[team]['colors'];
        }
    }
}

function teamNames() {
    const game = gameObject();
    const names = [];
    for (team in game) {
        names.push(game[team].teamName);
    }
    return names;
}

function playerNumbers(teamInput) {
    const game = gameObject();
    for (team in game) {
        if (game[team].teamName === teamInput) {
            const jerseyNumbers = [];
            for (player in game[team].players) {
                jerseyNumbers.push(game[team].players.number);
            }
            return jerseyNumbers;
        }
    }
}

function playerStats(playerInput) {
    const game = gameObject();
    for (team in game) {
        for (person in game[team]['players']) {
            if (person === player) {
                return game[team]['players'][person];
            }
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    const shoeList = [];
    const reboundList = [];
    for (team in game) {
        for (person in game[team]['players']) {
            shoeList.push(game[team]['players'][person]['shoe']);
            reboundList.push(game[team]['players'][person]['rebounds']);
        }
    }
    // today i learned Math.max() needs actual numbers, not an array. spreading the array fixes this
    return(reboundList[shoeList.indexOf(Math.max(...shoeList))]);
}

function mostPointsScored() {
    const game = gameObject();
    const pointsList = [];
    const allNames = [];
    for (team in game) {
        const playersWithStats = game[team]['players'];
        const namesAsKeys = Object.keys(playersWithStats);
        allNames.push(...namesAsKeys);
        for (var i = 0; i < namesAsKeys.length; i++) {
            pointsList.push(playersWithStats[namesAsKeys[i]]['points']);
        }
    }
    return allNames[pointsList.indexOf(Math.max(...pointsList))];
}

function winningTeam() {
    const game = gameObject();
    const pointsPerTeam = [];
    const teams = [];
    var i = 0;
    for (team in game) { //maybe should have used a regular for loop since im indexing anyways
        pointsPerTeam.push(0);
        teams.push(game[team]['teamName']);
        for (person in game[team]['players']) {
            pointsPerTeam[i] += game[team]['players'][person]['points'];
        }
        i++;
    }
    return teams[pointsPerTeam.indexOf(Math.max(...pointsPerTeam))];
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    for (team in game) {
        const teamPlayers = Object.keys(game[team]['players']);
        for (playerName of teamPlayers) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const stealsList = [];
    const allNames = [];
    for (team in game) {
        const playersWithStats = game[team]['players'];
        const namesAsKeys = Object.keys(playersWithStats);
        allNames.push(...namesAsKeys);
        for (var i = 0; i < namesAsKeys.length; i++) {
            stealsList.push(playersWithStats[namesAsKeys[i]]['steals']);
        }
    }
    const longestName = playerWithLongestName();
    const hasMostSteals = allNames[stealsList.indexOf(Math.max(...stealsList))];
    return (longestName === hasMostSteals);
}
