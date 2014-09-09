(function() {
  setName('slap');
  setDescription('Slaps other players. Never gets tired.');

  send('hook_command', 'slap');

  this.onMessage = function(e) {
    var victim = e.args[0];
    var weapon = e.args.slice(1).join(' ') || 'a large trout';
    send(e.context, 'command', 'me', 'slaps ' + victim + ' around a bit with ' + weapon);
    propagate(e, 'none');
  };
}).call(this);
