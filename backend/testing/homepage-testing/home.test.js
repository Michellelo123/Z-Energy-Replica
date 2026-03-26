import request from  "supertest";
import {describe, it, expect } from "vitest"
import app from "./home.js"


describe("GET /home", ()=>{
    it("should return data to render", async ()=>{
        const response = await request(app)
        .get("/home")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            expect.objectContaining({description: "Here is data"
        })
    )
})
})