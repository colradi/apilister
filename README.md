
### Community Node
Tron SR candidate
https://tronscan.org/#/address/TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP/voters
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

To retrieve the voters list for candidate TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP , you would point your browser to [https://apilist.tronscan.org/api/vote?sort=-votes&limit=40&start=0&candidate=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP](https://apilist.tronscan.org/api/vote?sort=-votes&limit=40&start=0&candidate=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP).
With **apilister** you just need to do:
```javascript
var apilister = require("apilister");
var voters_list = apilister.getVoters('TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP'); 
	
voters_list.then( function(info){ 
		console.log("Number of voters: " + info.total);
		console.log("Total number of votes: " + info.total_votes );
		console.log("Actual data: " + info.data);
	} );
```
To retrieve the holders list of the token issued by the address TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP, you would point your browser to [https://apilist.tronscan.org/api/tokenholders?sort=-balance&limit=10000&start=0&count=true&address=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP](https://apilist.tronscan.org/api/tokenholders?sort=-balance&limit=10000&start=0&count=true&address=TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP).
Now instead you just need to do:
```javascript
var apilister = require("apilister");
var holders_list = apilister.getHolders('TDGy2M9qWBepSHDEutWWxWd1JZfmAed3BP'); 

holders_list.then( function(info){ 
		console.log("Number of holders " + info.total);
		console.log("Actual data: " + info.data );
	} );
```



## Credits
https://t.me/colradi
https://t.me/CommunityNode
