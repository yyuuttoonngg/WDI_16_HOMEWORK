console.log('PT project');

var trainLines =[
    {
        lineName:'GlenWaverly',
        stations:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond','Kooyong','Tooronga']
    },
  
    {
       lineName:'Alamein',
       stations:['Flinders Street','Richmond','East Richmond','Burnley', 'Hawthorn', 'Glenferrie']
    },
    {
        lineName:'Sandringham',
        stations:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
    }
];

var lineNumber =trainLines.length;
var stationNumber=0;

//user input of starting station and ending station 
input1 = prompt('Please enter the origin station');
input2 = prompt('where is your destination?');


//return which line the selected station is on
function findStationsLine(input) {
    var linesStationOn = [];
    for(i=0; i<trainLines.length; i++){
        if(trainLines[i].stations.includes(input)){
            linesStationOn.push(trainLines[i].lineName);
        }
    }
    if (linesStationOn.length> 0){
        return linesStationOn;
    } else{
        input = prompt("Can't find station '" + input + "', Please enter a valid station name");
    }
}

//find if two entered stations are on the same line, only works if there is one intersection between two lines
function compareTwoStations(a,b){
    a = input1;
    b = input2;
    var linea =findStationsLine(a); 
    var lineb =findStationsLine(b);
    var lineSame=[];
    //when two stations are on different lines
    if (linea.length===1 && lineb.length===1 && linea.toString()!==lineb.toString()){
        //console.log('you need to change train lines')
       console.log(onTwoLines(a,b,linea,lineb));
    } else { 
        //the two stations are on the same line
        if(lineb.length>1){
            lineSame =linea.slice(0).toString(); 
        } else {
            lineSame =lineb.slice(0).toString();
        }     
        console.log(route(a,b,lineSame));
    }
        console.log('Total staions: '+ stationNumber);
}

//define the route from station a to b, print each station in between.
function route(a,b,line){
    //return the object contains the property of a certain line name
    findLine = trainLines.find(x => x.lineName ===line);
    indexa = findLine.stations.indexOf(a);
    indexb = findLine.stations.indexOf(b);
    var num;
    // always print from a to b, if in the array, a's index is greater than b, we need to reverse the array before printing it
     if (indexa<indexb){
       stationNumber += indexb - indexa;
       console.log(stationNumber);
       return findLine.lineName + ' LINE -- ' + findLine.stations.slice(indexa,indexb+1).join(' - ');
    }else{
       stationNumber += indexa - indexb;
       return findLine.lineName + ' LINE -- ' + findLine.stations.slice(indexb,indexa+1).reverse().join(' - ')
    } 
}

 //to find the intersection , this function only works if there is only 1 intersection between two give lines.
 function findIntersection(a,b){
    var stationArray1;
    var stationArray2;
    var intersection;
    for(i=0; i<trainLines.length; i++){
        if(trainLines[i].stations.includes(a)){
            stationArray1 = trainLines[i].stations;
        }
        if(trainLines[i].stations.includes(b)){
            stationArray2 = trainLines[i].stations;
        }
    }
    for(m=0; m<stationArray1.length; m++){
        for (n=0; n<stationArray2.length; n++ ){
            if(stationArray1[m]===stationArray2[n]){
                intersection = stationArray1[m];
            }
        }
    }
    return intersection;
}


//when starting and ending stations are on two different lines, print a to intersection, changeline, intersection to b, combine with 'change to'
function onTwoLines(a,b,linea,lineb){
    var intersection = findIntersection(a,b);
    route1 =route(a,intersection,linea.toString());
    route2= route(intersection,b,lineb.toString());
    return route1 +' - * CHANGE TO * - ' + route2;
}


compareTwoStations();