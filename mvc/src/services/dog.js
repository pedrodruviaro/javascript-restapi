const dogs = ["pippo", "chico"]

export class DogServices {
  getAll() {
    return dogs
  }

  getOne(index) {
    return dogs[index]
  }

  createOne(name) {
    dogs.push(name)
  }

  updateOne(index, name) {
    dogs[index] = name
  }

  deleteOne(index) {
    dogs.splice(index, 1)
  }
}
