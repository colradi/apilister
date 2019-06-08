
var DEBUG = false;
var old_console = console.log;
// ENABLE/DISABLE Console Logs
var _address = "";

/*
Since apilist URL was limited to 10k users, JJ and Jason developed a new script able to scrap the blockchain and provide a new reliable 
source of the token holders, in a json file.
apislit_holdersFromFile.js reads that file and returns the data
*/
/**
 * Downloads all the voters for a given SR/candidate (@param address) and returns packed on an object, along with the number
 * of voters (@total) and total number of votes (@totalVotes)
 * @param full_path Path to the json file containing the holders data
 * @return  { "total": total, "totalVotes": totalVotes, "data": url_configs}
 */
function getHoldersFromFile(full_path){
    //if(!DEBUG){   console.log = function() {}      }
    
    var holders = require(full_path); 
    console.log("APILISTER.getHoldersFromFile( " + full_path + ")");
    var x =  { "total": holders.data.length, "data": holders.data}; //Formato a devolver

    //console.log(contents);
    return x;
}

/**
 * Downloads all the voters for a given SR/candidate (@param address) and returns all the data ready for Tronair
 * standards (fields  'wallet' and  'amount' of the database):
 * { "size": 2, "balance": 23000, "data" : [ ["2TNMmbyyhtakakkpccrUbAkNHuYCEapKnpm", 20000],
                                                ["3TKzYHV4gy72rvVUKBzHuYdS87cguRq4rux",  3000]] } 
 * @param full_path Path to the json file containing the holders data
 * @return  { "total": total, "totalVotes": totalVotes, "data": url_configs}
 */
function getHoldersFromFileTronairFormat(full_path){
    var holders = require(full_path); 
    
    var sum = 0;
    var tmp = holders.data.map(function (target){ 
        
        sum+= target.balance;
        //console.log(target.address);
        return [target.address, target.balance]; 
    });
    return { "size": tmp.length, "balance": sum, "data": tmp};
}

module.exports.getHoldersFromFile = getHoldersFromFile;
module.exports.getHoldersFromFileTronairFormat = getHoldersFromFileTronairFormat;

//TEST:
//getHolders("TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP").then(x => { checkHolders(x);  });
//getHoldersTronairFormat("TE96WxFUvmCfjKD4sncr6KQ7pYsxYcgEXR").then(x => { checkHolders(x);  }); //aardvarkcoin

/* function checkHolders(info){
    //console.log(arr.length);
    //console.log({arr});
    console.log(JSON.stringify(info));
} 
 */
