import { describe, expect, it } from "@jest/globals"
import { ServicesPeople } from "../src/services/people.js"

describe("First 'people' test", () => {
  const service = new ServicesPeople()

  it("Add new name to the list", () => {
    const name = "TestName"
    service.addOne(name)
    const names = service.getAll()

    expect(names[names.length - 1]).toBe(name)
  })

  it("Update a name in the list", () => {
    const name = "TestName"
    const index = 2

    service.updateOne(index, name)
    const names = service.getAll()

    expect(names[index]).toBe(name)
  })

  it("Delete a name in the list", () => {
    const index = 0

    const nameBefore = service.getOne(index)
    service.deleteOne(index)
    const nameAfter = service.getOne(index)

    expect(nameBefore).not.toBe(nameAfter)
  })
})
