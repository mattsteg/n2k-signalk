module.exports = [
  {
    node: 'steering.autopilot.state',
    value: function(n2k) {
      var mode = Number(n2k.fields['Pilot Mode']);
      var subMode = Number(n2k.fields['Sub Mode']);
      if ( mode == 64 && subMode == 0 )
        return 'standby';
      else if ( mode == 70 && subMode == 0 )
        return 'wind';
      else if ( (mode == 74 || mode == 129) && subMode == 0 )
        return 'route';
      else if ( mode == 66 && subMode == 0 )
        return 'auto';
      else
        return 'standby';
    },
    filter: function(n2k) { return n2k.fields['command'] === '0x84' }
  }
]
