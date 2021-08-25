const rewire = require("rewire")
const TeamCardsContainer = rewire("./TeamCardsContainer")
const mapStateToProps = TeamCardsContainer.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ allPlayers: 12345, lineupPlayers: "c466a48309794261b64a4f02cfcc3d64", substitutePlayers: "bc23a9d531064583ace8f67dad60f6bb", loading: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ allPlayers: 9876, lineupPlayers: "bc23a9d531064583ace8f67dad60f6bb", substitutePlayers: "c466a48309794261b64a4f02cfcc3d64", loading: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ allPlayers: 7588892, lineupPlayers: "c466a48309794261b64a4f02cfcc3d64", substitutePlayers: 9876, loading: "https://accounts.google.com/o/oauth2/revoke?token=%s" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ allPlayers: 12345, lineupPlayers: 9876, substitutePlayers: 12345, loading: "ponicode.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ allPlayers: 7588892, lineupPlayers: "bc23a9d531064583ace8f67dad60f6bb", substitutePlayers: "c466a48309794261b64a4f02cfcc3d64", loading: "ponicode.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
