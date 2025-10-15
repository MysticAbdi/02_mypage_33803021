 var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>My Page</title>
  <style>
    body {
      background-color: #51e2f5;
      color: #0b2b40;
    }
    h1 {
      color: #ffffff;
    }
    h2 {
      color: #f7f9fa;
    }
  </style>
</head>
<body>
  <h1>Hi, I'm Abdikarin Mohamed</h1>
  <h2>About Me</h2>
  <p>
    I'm a Computer Science student at Goldsmiths University, passionate about technology,
    creativity, and building things that make an impact. I enjoy exploring how code can
    solve real-world problems and bring ideas to life.
  </p>
  <p>
    When I'm not coding, you'll probably find me on the football pitch, training for a
    marathon, or learning something new.
  </p>
  <p>
    I love challenges that push me to grow both personally and professionally and I'm
    constantly learning new ways to improve my technical and problem-solving skills.
  </p>
</body>
</html>`);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
