import * as my_dongle from 'bleuio'
import 'regenerator-runtime/runtime'

const dongleToConnect='[0]40:48:FD:E5:2F:17'
//const sensorID = '0578E0'
document.getElementById('connect').addEventListener('click', function(){
  my_dongle.at_connect()
  document.getElementById("clearScreen").disabled=false;
  document.getElementById("connect").disabled=true;
  document.getElementById("sendDataForm").hidden=false;
})

document.getElementById("sendDataForm").addEventListener("submit", function(event){
    event.preventDefault()
    const sensorID = document.getElementById('sensorID').value
    getSensorData(sensorID)
    setInterval(function () {getSensorData(sensorID)}, 10000);

   
  });

  const getSensorData =((sensorID)=>{
    my_dongle.ati().then((data)=>{
        //make central if not
        if(JSON.stringify(data).includes("Peripheral")){
            console.log('peripheral')
            my_dongle.at_dual().then((x)=>{
                console.log('central now')
            })
        }        
    })
    .then(()=>{
        // connect to dongle
        my_dongle.at_getconn().then((y)=>{
            if(JSON.stringify(y).includes(dongleToConnect)){
                console.log('already connected')
            }else{
                my_dongle.at_gapconnect(dongleToConnect).then(()=>{
                    console.log('connected successfully')
                })
            }
        })
        .then(async()=>{
           return my_dongle.at_findscandata(sensorID,6).then((sd)=>{
                console.log('scandata',sd)
                let advData = sd[sd.length - 1].split(" ").pop()
                let positionOfID= advData.indexOf(sensorID);
                let tempHex = advData.substring(positionOfID+14, positionOfID+18)
                let temp = parseInt('0x'+tempHex.match(/../g).reverse().join(''))/10;

                let co2Hex = advData.substring(positionOfID+38, positionOfID+42)
                let co2 = parseInt('0x'+co2Hex);
                //console.log(temp,co2)
                return {
                    'CO2' :co2,
                    'Temp' :temp,                       
                  }
            })
        })
        .then((x)=>{
            console.log(x.CO2)
            console.log(x.Temp)
            var theVal = "L=1 SENSOR ID "+sensorID+"    TEMPERATURE " + x.Temp + ' °c    CO2 '+ x.CO2+' ppm';
            console.log('Message Send 1 ')
            // send command to show data
            my_dongle.at_spssend(theVal).then(()=>{
                console.log('Message Send '+theVal)
            })
        })
        
    })
})

document.getElementById('clearScreen').addEventListener('click', function(){
    my_dongle.ati().then((data)=>{
        //make central if not
        if(JSON.stringify(data).includes("Peripheral")){
            console.log('peripheral')
            my_dongle.at_central().then((x)=>{
                console.log('central now')
            })
        }
    })
    .then(()=>{
        // connect to dongle
        my_dongle.at_getconn().then((y)=>{
            if(JSON.stringify(y).includes(dongleToConnect)){
                console.log('already connected')
            }else{
                my_dongle.at_gapconnect(dongleToConnect).then(()=>{
                    console.log('connected successfully')
                })
            }
        })
        .then(()=>{
            // send command to clear the screen
            my_dongle.at_spssend('L=0').then(()=>{
                console.log('Screen Cleared')
            })
        })
        
    })
})