import { DogServices } from "../services/dog.js"

export class DogController {
  getAll(req, res) {
    const services = new DogServices()
    const dogs = services.getAll()

    return res.status(200).json({ dogs })
  }

  getOne(req, res) {
    const services = new DogServices()

    const { index } = req.params
    const dog = services.getOne(index)

    if (!dog) {
      return res.status(404).json({ msg: "Dog not found" })
    }

    return res.status(200).json({ dog })
  }

  createOne(req, res) {
    const { name } = req.body

    const services = new DogServices()
    services.createOne(name)

    return res.status(201).json({ msg: "Dog Created" })
  }

  updateOne(req, res) {
    const { name } = req.body
    const { index } = req.params

    const services = new DogServices()
    services.updateOne(index, name)
    const dog = services.getOne(index)

    return res.status(201).json({ dog })
  }

  deleteOne(req, res) {
    const { index } = req.params

    const services = new DogServices()
    services.deleteOne(index)

    return res.status(200).json({ msg: "Dog deleted" })
  }
}
