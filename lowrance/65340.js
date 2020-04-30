const debug = require('debug')('n2k-signalk-65340')

module.exports = [
  {
    node: 'steering.autopilot.state',
    value: function(n2k) {
      debug('n2k.fields:: %j' + n2k.fields)
      var mode = Number(n2k.fields['Autopilot Mode']);
      if ( mode == 'Standby' )
        return 'standby';
      else if ( mode == 'Wind Mode')
        return 'wind';
      else if ( mode == 'Track Mode')
        return 'route';
      else if ( mode == 'Auto')
        return 'auto';
      else
        return 'standby';
    },
    // filter: function(n2k) { return n2k.fields['command'] === '0x84' }
  }
]
