const db = new Array("Peter", "Mary")

export class RepositoryPessoa {
  getAll() {
    return db
  }

  getOne(index) {
    return db[index]
  }

  addOne(name) {
    db.push(name)
  }

  updateOne(index, name) {
    db[index] = name
  }

  deleteOne(index) {
    db.splice(index, 1)
  }
}
