
const fs = require('fs')

// readfile
// fs.readFile('write.txt','utf-8')
//   .then(data=> console.log(data))
//   .catch(err=> console.log(err))
  

// write file
writeData = 'here is your write file'
fs.writeFile('writeAysnc.txt',writeData,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Successfully created data!!");
        console.log(fs.readFileSync("writeAysnc.txt", "utf8"));
        
    }
})



// readFile
fs.readFile('text.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
        
    }else{
        console.log(data);
        
    }
})


//write file
fs.writeFile('write.txt',' this is hello world! asyns file this read DATA',{flag:'a'},(error)=>{
    if(error){
        console.log(error);
        
    }else{
        console.log("file create successfully!");
        
    }
})


   


