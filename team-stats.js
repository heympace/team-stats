// Team Stats
// project using objects

// my sports ball team object!
const team = {
    // array of players
    _players: [
      {
        firstName: 'Matt',
        lastName: 'Besler',
        age: 31
      },
      {
        firstName: 'Ike',
        lastName: 'Opara',
        age: 29
      },
      {
        firstName: 'Graham',
        lastName: 'Zusi',
        age: 32
      }
    ],
    // array of games
    _games: [
      {
        opponent: 'Seattle Sounders',
        teamPoints: 1,
        opponentPoints: 0 
      },
      {
        opponent: 'San Jose Earthquakes',
        teamPoints: 5,
        opponentPoints: 1 
      },
      {
        opponent: 'Houston Dynamo',
        teamPoints: 2,
        opponentPoints: 4 
      }
    ],
    // return array of players
    get players() {
      return this._players;
    },
    // return array of games
    get games() {
      return this._games;
    },
    
    // method to create + add new player
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      /* add new player to players array */
      this._players.push(player);
    },
    
    // method to create + add single game stats
    addGame(opponentName, teamPoints, opponentPoints) {
      const game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      /* add new game to games array */
      this._games.push(game);
    }
    
  };
  
  // add players
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  // print to check added team mates
  console.log(team.players);
  
  // add game stats
  team.addGame('Columbus Crew', 0, 0);
  team.addGame('Minnesota United', 4, 1);
  team.addGame('Real Salt Lake', 2, 0);
  
  // print to check added games
  console.log(team.games);