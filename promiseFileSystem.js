const fs = require('fs').promises;

// readfile  using promise
async function readFile(){
    try{
        let readfiles = await fs.readFile('primiseWriteFile.txt','utf-8')
        console.log(readfiles);       
    }catch(err){
        console.log(err);
        
    }
}

readFile()




// write file using promise 
async function writeFile(){

        let writeFiles = await fs.writeFile('primiseWriteFile.txt','hello this is promise file system!!22')
      
    
}

writeFile()


