module.exports = {

  status: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Retrieving fan dimmer status...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.getStatus().then(result => {
        return res.json({ device: device, result: result })
      }, reason => {
        return res.serverError(reason)
      })
    })
  },

  refresh: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Sending fan dimmer refresh command...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.refresh()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  on: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan dimmer ON...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.turnOn()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  off: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan dimmer OFF...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.turnOff()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  level: (req, res) => {
    var insteonId = req.params.insteonId
    var level = req.params.level
    console.log(`[${insteonId}] Setting dimnmer level to ${level}%...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.setLevel(level)
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  brighten: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Brightening fan dimmer...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.brighten()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  dim: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Lowering fan dimmer...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan controller with Insteon ID ${insteonId} not found` })
      }
      device.dim()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  fanOff: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan off...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan with Insteon ID ${insteonId} not found` })
      }
      device.fanOff()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  fanLow: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan to low...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan with Insteon ID ${insteonId} not found` })
      }
      device.fanLow()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  fanMedium: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan to medium...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan with Insteon ID ${insteonId} not found` })
      }
      device.fanMedium()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  },

  fanHigh: (req, res) => {
    var insteonId = req.params.insteonId
    console.log(`[${insteonId}] Turning fan to high...`)
    Fan.findOne({ insteonId: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      if (!device) {
        return res.notFound({ error: `Fan with Insteon ID ${insteonId} not found` })
      }
      device.fanHigh()
      return res.json({ insteon_id: insteonId, command: req.options.action })
    })
  }
}
