let fs = require('fs');
let data = fs.readFileSync('data.json');
let words = JSON.parse(data);
console.log(words);


let express = require('express');

let app = express();

let server = app.listen(3000, listening);

function listening(){
    console.log("listening...");
}

app.use(express.static('website'));

app.get('/add/:word/:score?',addWord);

function addWord(request, response){
    let data = request.params;
    let word = data.word;
    let score = Number(data.score);
    let reply;
    if(!score){
        reply = {
            msg: "Score is Required"
        }
    }else{
        words[word]=score;
        let data = JSON.stringify(words,null,2);
        fs.writeFile('data.json',words,finished);

        function finished(err){
            console.log('all set.');
        }
    }
}