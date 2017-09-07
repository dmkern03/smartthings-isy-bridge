module.exports = (sails) => {
  var Insteon = require('home-controller').Insteon
  var settings
  var client
  return {
    client: () => {
      return client
    },

    configure: () => {
      settings = require('js-yaml')
                 .safeLoad(require('fs')
                 .readFileSync(process.env.CONFIG_FILE, 'utf8'))
                 .hub
    },

    defaults: () => {
    },

    initialize: (cb) => {
      client = new Insteon()
      console.log(`Connecting to Insteon Hub (2245) at ${settings.host}:${settings.port}...`)
      client.httpClient(settings, () => {
        console.log(`Connected to Insteon Hub (2245) at ${settings.host}:${settings.port}`)
        console.log(`Retrieving Insteon Hub (2245) information...`)
        client.info()
        .then(hubInfo => {
          client.insteon_id = hubInfo.id
          console.log(`Retrieved Insteon Hub (2245) information`)
          return cb()
        })
      })
    }
  }
}
