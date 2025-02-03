import { ServicesPeople } from "../services/people.js"

export class ControllerPeople {
  getAll(req, res) {
    try {
      const services = new ServicesPeople()
      const names = services.getAll()

      res.status(200).json({ names })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }

  getOne(req, res) {
    try {
      const services = new ServicesPeople()
      const name = services.getOne(Number(req.params.index))

      if (!name) {
        res.status(404).json({ msg: "Name not found" })
      }

      res.status(200).json({ name })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }

  updateOne(req, res) {
    try {
      const services = new ServicesPeople()
      const names = services.updateOne(req.params.index, req.body.name)

      res.status(200).json({ names })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }

  addOne(req, res) {
    try {
      const services = new ServicesPeople()
      const name = services.addOne(req.body.name)

      res.status(201).json({ name })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }

  deleteOne(req, res) {
    try {
      const services = new ServicesPeople()
      services.deleteOne(req.params.index)
      res.status(200).json({ ok: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }
}
