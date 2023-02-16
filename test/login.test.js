// import { app } from "../index.js"
const request = require("supertest")
describe("Test Log in route", () => {
    it("Should log in a user",  async () => {
        const res = await request("http://localhost:8080")
        .post('/auth/login')
        .send({
            email: "test@test.com", 
            password: "test"
        })
        expect(JSON.stringify(res.text)).toEqual(JSON.stringify({
            email: "test@test.com", 
            password: "test"
        }))
    })
})