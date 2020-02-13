var argv = require('yargs').argv;
var lodash = require('lodash');
const csv =require("csvtojson");
var format = require('string-format')

var reqd = ['Name', 'AirportID', 'City', 'Country', 'IATA' ,'ICAO' ,'Latitude','Longitude','Altitude','Timezone','Tzdatabase','type'];
var given;
if(argv.s){
    given = Object.keys(argv).filter(function(x){
        return reqd.includes(x);
    });
}

var givenJson ={};
given.forEach(function(item, index){
    givenJson[item] = argv[item].toString();
})

console.log("Query: ");
console.log(givenJson);

const csvFilePath="airports.csv";

csv().fromFile(csvFilePath).then((jsonObj)=>{
    var filtered;
    filtered  = lodash.filter(jsonObj,givenJson);
    console.log('Found '+filtered.length+' items.');
    var totalNumber;
    if(argv.Number)
        totalNumber=argv.Number;
    else
        totalNumber=5;

    console.log('First '+totalNumber+' entries')
    filtered.forEach(function(item,index){
        if(index<totalNumber){
            var msg = format('Name:{Name} AiportID:{AirportID} City:{City} Country:{Country} IATA:{IATA} ICAO:{ICAO} Latitude:{Latitude} Longitude:{Longitude} Altitude:{Altitude} Timezone:{Timezone} Tzdatabase:{Tzdatabase} type:{type}', item);
            console.log(msg);
        }
    });
})