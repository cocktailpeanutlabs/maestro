module.exports = {
//  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      path: "app",
      venv: "env",
      env: { },
      message: [
        "python maestro-ollama.py --prompt \"write a minimal web app that takes a video and compresses it using ffmpeg. Use python's ffmpeg library and make it as simple as possible.\""
      ],
      on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
//  }, {
//    method: "local.set",
//    params: {
//      url: "{{input.event[0]}}"
//    }
//  }, {
//    method: "proxy.start",
//    params: {
//      uri: "{{local.url}}",
//      name: "Local Sharing"
//    }
  }]
}
