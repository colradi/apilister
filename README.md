## apilister
Apilister is a small library that allows you to easily:
- Get the list of voters for a given SR (Super Representant) or candidate on the Tron Blockchain
- Get the list of token holders for a given token on the Tron Blockchain

It pulls the data from [apilist.tronscan.org](https://apilist.tronscan.org/)

Since apilist.tronscan.org provides the information in a http-paginated way, **apilister** uses a _pool of Promises_ (package [es6-promise-pool](https://www.npmjs.com/package/es6-promise-pool)) to concurrent download all the paginated urls.
 
**{ address, number_votes }**
## Installation
`npm install apilister`

## Usage

To retrieve the voters list for candidate TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP , normally you would have pointed your browser to [https://apilist.tronscan.org/api/vote?sort=-votes&limit=40&start=0&candidate=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP](https://apilist.tronscan.org/api/vote?sort=-votes&limit=40&start=0&candidate=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP)

With **apilister** you just need to do:
```javascript
var apilister = require("apilister");
var voters_list = apilister.getVoters('TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP'); 
	
voters_list.then( function(info){ 
		console.log("Number of voters: " + info.total);
		console.log("Total number of votes: " + info.totalVotes );
		console.log("Actual data: " + info.data);
	} );
```
To retrieve the holders list (<font color="red">ONLY THE FIRST 10K HOLDERS !!</font>) of the token issued by the address TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP, you would have pointed your browser to [https://apilist.tronscan.org/api/tokenholders?sort=-balance&limit=50&start=0&count=true&address=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP](https://apilist.tronscan.org/api/tokenholders?sort=-balance&limit=10000&start=0&count=true&address=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP)

Now instead you just need to do:
```javascript
var apilister = require("apilister");
var holders_list = apilister.getHolders('TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP'); 

holders_list.then( function(info){ 
		console.log("Number of holders " + info.total);
		console.log("Actual data: " + info.data );
	} );
```
A new method has been added in orther to read the holders list from a json file instead of the apilist URL.
The forma of such a json file is ... (yet to be decided 07/06/2019)
```javascript
	var holders = apilister.getHoldersFromFile("/home/user/holdersABC.json");
	console.log(JSON.stringify(holders));
```


## Tronair specific methods
There are a couple of methods that probably you wont be insterested in. They are used by tronair because they return the 
information ready for sqlite insertion:

Methods **getVotersTronairFormat** and **getHoldersTronairFormat**
```javascript
getHoldersTronairFormat("TMykaWQe9YinNb36yE5k4MH9VUEGyKgQQA").then(info => { console.log(JSON.stringify(info);  });
```

would printout:

```
	{ "size":12,          //length of array 'data'
	  "balance":32462,    //sum of all partial balances
	  "data":[
			["TKQon5B1HGVYn9h5CAbAaJcdPnbp3A3fja",25000],
			["TABjBtiB9zv3Cdvf4emTMYQuG7iJX42cBg",5346],
			["TSTQnv1U3Y73iAdP6QeAxUmYtWzw3mzxc7",1000],
			["TKKRECX1ioPP85hPb3hBXKbr3uhrwdM16F",497],
			["TECYPERwwWu3wAWCt2CrZT6y18RxXYwzM6",283],
			["TLvzBRbfF5C28adK5kNBY1dJ1ngMcvagxR",150],
			["TTTUCXMthAkmJvtUyzDkuePNCffgNVdqwa",108],
			["TM6zXroav7NcwzhPCqW1CMGEpZU6cxvQTU",50],
			["TTrNGPcDisAB2H1AbNRCb5Eu9EKJwgdMgC",23],
			["TJPXMPMwP2DZuH34u6BzMEMuFZqWUVZCx8",3],
			["TJJR9U6cmHNTnjbdjs34ig8bwb4aaDohtf",1],
			["TB4f4UoPufmwxJrc4DLENVCspqjwSCd4fY",1]
		]
	}
```

## Credits
https://t.me/colradi

https://t.me/CommunityNode


### Community Node
Community Node is a Tron SR candidate 

http://www.communitynode.org/
