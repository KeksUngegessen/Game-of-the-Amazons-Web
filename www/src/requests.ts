// Port range: 40910-40920
const webserviceUrl: string = "https://webengineering.ins.hs-anhalt.de:40918/"

// player requests

export async function createPlayer(player: { name: string, controllable: boolean }): Promise<player | undefined> {
    try {
        let response: Response = await fetch(webserviceUrl + "players/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(player)
        })
        if (response?.ok) return await response.json()
        else console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllPlayers(): Promise<player[] | undefined> {
    try {
        let response: Response = await fetch(webserviceUrl + "players/")
        if (response?.ok) {
            const data: { players: player[] } = await response.json()
            return data.players
        } else console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}

export async function deletePlayer(id: number): Promise<void> {
    try {
        let response: Response = await fetch(webserviceUrl + `players/${id}`, {
            method: "DELETE"
        })
        if (!response?.ok) console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}


// game requests

export async function createGame(game: { maxTurnTime: number, players: number[], initialBoard: board },): Promise<game | undefined> {
    try {
        let response: Response = await fetch(webserviceUrl + `games/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(game)
        })
        if (response?.ok) return await response.json()
        else console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}

export async function getGame(id: number): Promise<game | undefined> {
    try {
        let response: Response = await fetch(webserviceUrl + `games/:${id}`)
        console.log(response)
        if (response?.ok) return await response.json()
        else console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllGames(): Promise<game[] | undefined> {
    try {
        let response: Response = await fetch(webserviceUrl + "games/")
        if (response?.ok) {
            const data: { games: game[] } = await response.json()
            return data.games
        } else console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}

export async function deleteGame(id: number): Promise<void> {
    try {
        let response: Response = await fetch(webserviceUrl + `games/${id}`, {
            method: "DELETE"
        })
        if (!response?.ok) console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}


// turn request

export async function createTurn(gameId: number, turn: turn): Promise<void> {
    try {
        let response: Response = await fetch(webserviceUrl + `move/${gameId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(turn)
        })
        if (!response?.ok) return console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}


// reset request

export async function reset(confirmed: boolean): Promise<void> {
    if (!confirmed) return
    try {
        let response: Response = await fetch(webserviceUrl + `reset/`, {
            method: "DELETE",
        })
        if (!response?.ok) console.log(`Request failed: ${response.status} ${response.statusText}`)
    } catch (error) {
        console.log(error)
    }
}