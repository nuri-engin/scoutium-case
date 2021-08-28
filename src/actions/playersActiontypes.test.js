const playersActiontypes = require("./playersActiontypes")
// @ponicode
describe("playersActiontypes.addLineupPlayer", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            playersActiontypes.addLineupPlayer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.togglePlayersCompleted", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.togglePlayersCompleted("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.togglePlayersCompleted("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.togglePlayersCompleted("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.togglePlayersCompleted(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.handleConfirmationDone", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.handleConfirmationDone()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.updateLineupPlayerSubMin", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(12345, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(12345, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(7588892, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(9876, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(12345, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            playersActiontypes.updateLineupPlayerSubMin(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.removeLineupPlayer", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            playersActiontypes.removeLineupPlayer(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.removeFromAllPlayer", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            playersActiontypes.removeFromAllPlayer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("playersActiontypes.addToAllPlayers", () => {
    test("0", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            playersActiontypes.addToAllPlayers(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
