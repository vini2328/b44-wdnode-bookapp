// 


// const fs=require("fs");

// const quote2 ="Live more worry less";

//  for(let i=1;i<=10;i++){
// fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
    
//     console.log(`completed writing text- ${i} in backup`);
// })
// };


const [, , nooffiles]=process.argv;
const fs=require("fs");

const quote2 ="Live more worry less";


for(let i=1;i<=10;i++){
    fs.writeFile(`./backup/node-${i}.text`,quote2,(err)=>{
        
        console.log(`completed writing text- ${i} in backup`);
    })
    };
    