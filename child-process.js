// const {exec,execFile,spawn,fork} = require("child_process");
// const { dirname } = require("path");
// const {fileURLToPath} = require('url')

import {exec,execFile,spawn,fork} from "child_process"
import { dirname } from "path";
import {fileURLToPath} from 'url'
import path from "path";

// exec('ls -lh', (error,stdout,stderr) => {
//     if(error) {
//         console.error(`error: ${error.message}`)
//     }

//     if(stderr) {
//         console.error(`stderr: ${stderr}`)
//     }

//     console.log(`stdout:\n${stdout}`)
// })


// const _dirname = dirname(fileURLToPath(import.meta.url))
// const fileProcessorPath = path.resolve(_dirname,'execFileProcessor.js');

// execFile('node',[fileProcessorPath],(error,stdout,stderr) => {
//     if(error) {
//         console.error(`error: ${error.message}`)
//     }

//     if(stderr) {
//                 console.error(`stderr: ${stderr}`)
//             }
        
//             console.log(`stdout:\n${stdout}`)
// });

// const spawnedChild = spawn('find',['.']);

// spawnedChild.stdout.on('data',(data)=>{
//     console.log(`stdout: ${data}`)
// })

// spawnedChild.stderr.on("data",(data) => {
//     console.error(`stderr: ${data}`)
// })

// spawnedChild.on("error",(error) => {
//     console.error(`error: ${error}`)

// })
 
// spawnedChild.on("close",(code) => {
//     console.log(`Exited with code: ${code}`)

// })