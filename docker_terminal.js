window.docker = (function(docker) {
  docker.terminal = {
    startTerminalForContainer: function(host, token) {
      var term = new Terminal();
      term.open();

      var wsUri = "ws://" + 
        host + 
        "/v1/exec/?token=" + 
        token;

      var websocket = new WebSocket(wsUri);
      websocket.onopen = function(evt) { onOpen(evt) };
      websocket.onclose = function(evt) { onClose(evt) };
      websocket.onmessage = function(evt) { onMessage(evt) };
      websocket.onerror = function(evt) { onError(evt) };

      term.on('data', function(data) {
        websocket.send(btoa(data));
      });

      function onOpen(evt) { 
        term.write("Session started");
      }  

      function onClose(evt) { 
        term.write("Session terminated");
      }  

      function onMessage(evt) { 
        term.write(atob(evt.data));
      }  

      function onError(evt) { 
      }  
    }
  };

  return docker;
})(window.docker || {});

$(function() {
  $("[data-docker-terminal-token]").each(function(i, el) {
    var token = $(el).data('docker-terminal-token');
    var host = $(el).data('docker-terminal-host');
    docker.terminal.startTerminalForContainer(host, token);
  });
});
