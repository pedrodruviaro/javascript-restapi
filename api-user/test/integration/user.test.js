require("dotenv").config()
const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals")
const serviceUser = require("../../src/services/user")
const database = require("../../src/database")

describe("Users test", () => {
  beforeAll(async () => {
    this.transaction = await database.db.transaction()
  })

  afterAll(() => {
    this.transaction.rollback()
  })

  it("should create an user", async () => {
    const user = {
      email: "test@test.com",
      password: "123456",
    }

    const createdUser = await serviceUser.Create(
      user.email,
      user.password,
      this.transaction
    )

    this.id = createdUser.id

    expect(createdUser.email).toBe(user.email)
    expect(createdUser.password).toBe(user.password)
  })

  it("should update an user", async () => {
    const user = {
      id: this.id,
      email: "updatedemail@test.com",
      password: "123456",
    }

    const updatedUser = await serviceUser.Update(
      user.id,
      user.email,
      user.password,
      this.transaction
    )

    expect(updatedUser.email).toBe(user.email)
    expect(updatedUser.password).toBe(user.password)
  })

  it("should return a single user", async () => {
    const userId = this.id
    const user = await serviceUser.FindById(userId, this.transaction)

    expect(user.id).toBe(userId)
    expect(user).toHaveProperty("email")
  })

  it("should delete an user", async () => {
    const userId = this.id
    const response = await serviceUser.Delete(userId, this.transaction)

    expect(response).toBe(true)
  })
})
