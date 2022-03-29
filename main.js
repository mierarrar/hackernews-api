const axios = require("axios")
const fs = require("fs");

const write = (filename, dataToWrite) => {
    return new Promise((res, rej) => {
      fs.writeFile(filename, dataToWrite, (err) => {
        if (err) rej(err);
        res("writing completed");
      });
    });
  };

for (let i = 0; i < 20; i++){
    axios
    .get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then((res)=>{
            id = res.data[i]
            return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((val)=>{
                var dataNew = JSON.stringify(val.data);
                m = val.data;
                console.log(m)
                
                write("id.txt", dataNew)
            })
    
    })
}




