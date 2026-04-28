// app.js
//
// const express = require('express');
// const app = express();
//
// const PORT = process.env.PORT || 3000;
//
// // Root route → Portfolio page
// app.get('/', (req, res) => {
//   res.send(`
//       <html>
//             <head>
//                     <title>Samimullah Portfolio</title>
//                             <style>
//                                       body {
//                                                   font-family: Arial, sans-serif;
//                                                               background: #0f172a;
//                                                                           color: white;
//                                                                                       text-align: center;
//                                                                                                   padding: 50px;
//                                                                                                             }
//                                                                                                                       h1 {
//                                                                                                                                   color: #38bdf8;
//                                                                                                                                             }
//                                                                                                                                                       .card {
//                                                                                                                                                                   background: #1e293b;
//                                                                                                                                                                               padding: 20px;
//                                                                                                                                                                                           border-radius: 10px;
//                                                                                                                                                                                                       display: inline-block;
//                                                                                                                                                                                                                   margin-top: 20px;
//                                                                                                                                                                                                                             }
//                                                                                                                                                                                                                                     </style>
//                                                                                                                                                                                                                                           </head>
//                                                                                                                                                                                                                                                 <body>
//                                                                                                                                                                                                                                                         <h1>🚀 Welcome to Samimullah's Portfolio</h1>
//                                                                                                                                                                                                                                                                 <div class="card">
//                                                                                                                                                                                                                                                                           <p><strong>Role:</strong> DevOps Engineer</p>
//                                                                                                                                                                                                                                                                                     <p><strong>Skills:</strong> Docker, Kubernetes, AWS, Terraform, CI/CD</p>
//                                                                                                                                                                                                                                                                                               <p><strong>Goal:</strong> Build scalable & production-ready systems</p>
//                                                                                                                                                                                                                                                                                                       </div>
//                                                                                                                                                                                                                                                                                                             </body>
//                                                                                                                                                                                                                                                                                                                 </html>
//                                                                                                                                                                                                                                                                                                                   `);
//                                                                                                                                                                                                                                                                                                                   });
//
//                                                                                                                                                                                                                                                                                                                   // Health check route
//                                                                                                                                                                                                                                                                                                                   app.get('/health', (req, res) => {
//                                                                                                                                                                                                                                                                                                                     res.status(200).json({
//                                                                                                                                                                                                                                                                                                                         status: 'OK',
//                                                                                                                                                                                                                                                                                                                             uptime: process.uptime(),
//                                                                                                                                                                                                                                                                                                                                 timestamp: new Date(),
//                                                                                                                                                                                                                                                                                                                                   });
//                                                                                                                                                                                                                                                                                                                                   });
//
//                                                                                                                                                                                                                                                                                                                                   // Start server
//                                                                                                                                                                                                                                                                                                                                   app.listen(PORT, () => {
//                                                                                                                                                                                                                                                                                                                                     console.log(`Server is running on port ${PORT}`);
//                                                                                                                                                                                                                                                                                                                                     });
