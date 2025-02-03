import { RepositoryPessoa } from "../repository/pessoa.js"

const repo = new RepositoryPessoa()

export class ServicesPeople {
  getAll() {
    return repo.getAll()
  }

  getOne(index) {
    return repo.getOne(index)
  }

  addOne(name) {
    return repo.addOne(name)
  }

  updateOne(index, name) {
    return repo.updateOne(index, name)
  }

  deleteOne(index) {
    return repo.deleteOne(index)
  }
}
