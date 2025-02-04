import database from "../src/database.js"
import services from "../src/services/user.js"
import { describe, it, expect, beforeAll, afterAll } from "@jest/globals"

describe("Users tests", () => {
  let transaction
  let userId

  beforeAll(async () => {
    transaction = await database.db.transaction()
  })

  afterAll(() => {
    transaction.rollback()
  })

  it("should create a user", async () => {
    const values = {
      name: "Test",
      email: "test@test.com",
      password: "123456",
    }

    const user = await services.create(
      values.name,
      values.email,
      values.password,
      transaction
    )

    userId = user.id

    expect(user).toBeDefined()
    expect(user.email).toBe(values.email)
    expect(user.password).toBe(values.password)
  })

  it("should return a user", async () => {
    let id = userId
    const user = await services.getById(id, transaction)

    expect(user).toBeDefined()
    expect(id).toBe(user.id)
  })

  it("shoud update a user", async () => {
    let id = userId

    const body = {
      name: "test updated",
      email: "tes@email.com",
      password: "123456s",
    }

    const updatedUser = await services.update(
      id,
      body.name,
      body.email,
      body.password,
      transaction
    )

    expect(updatedUser.name).toBe(body.name)
  })

  it("should delete a user", async () => {
    let id = userId

    const beforeDelete = await services.getById(id, transaction)
    await services.destroy(id, transaction)
    const user = await services.getById(id)

    expect(beforeDelete.id).toBe(id)
    expect(user).toBeNull()
  })
})
