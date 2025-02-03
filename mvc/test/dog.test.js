import { describe, expect, it } from "@jest/globals"
import { DogServices } from "../src/services/dog.js"

describe("Dog tests", () => {
  it("Add new dog to the list", () => {
    const dog = "Aristeu"
    const services = new DogServices()

    services.createOne(dog)
    const dogs = services.getAll()

    expect(dogs[dogs.length - 1]).toBe(dog)
  })

  it("Update a dog from list", () => {
    const index = 1
    const name = "Aristeu"

    const services = new DogServices()
    const dogBeforeUpdate = services.getOne(index)
    services.updateOne(index, name)
    const dogAfterUpdate = services.getOne(index)

    expect(dogBeforeUpdate).not.toBe(dogAfterUpdate)
  })

  it("Delete a dog from list", () => {
    const index = 0

    const services = new DogServices()

    const dogInIndex = services.getOne(index)

    services.deleteOne(index)

    const dogInIndexAfterDelete = services.getOne(index)

    expect(dogInIndex).not.toBe(dogInIndexAfterDelete)
  })
})
