document.addEventListener('DOMContentLoaded',function (){
document.querySelector('form').onsubmit = function () {
    const sensor_name = document.querySelector('#name').value;
    const sensor_id = document.querySelector('#id').value;
    if (sensor_name == "temperature-transducer") {
        if(sensor_id == "0" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname = data[0].name;
                const intype = data[0].type;
                const inunit = data[0].unit;
                const inrange = data[0].range;
                const inplant = data[0]["plant-site"]; 
                const invalue = data[0].value;
                document.querySelector('#answer1').innerHTML =`sensor= ${inname}`;
                document.querySelector('#answer2').innerHTML =`type= ${intype}`;
                document.querySelector('#answer3').innerHTML =`unit= ${inunit}`;
                document.querySelector('#answer4').innerHTML =`range= ${inrange}`;
                document.querySelector('#answer5').innerHTML =`plant-size= ${inplant}`;
                document.querySelector('#answer6').innerHTML =`value= ${invalue}`;
            })
                return false;
            }

        if(sensor_id == "1" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname1 = data[1].name;
                const intype1 = data[1].type;
                const inunit1 = data[1].unit;
                const inrange1 = data[1].range;
                const inplant1 = data[1]["plant-site"]; 
                const invalue1 = data[1].value;
                document.querySelector('#answer1').innerHTML =`sensor       = ${inname1}`;
                document.querySelector('#answer2').innerHTML =`type         = ${intype1}`;
                document.querySelector('#answer3').innerHTML =`unit         = ${inunit1}`;
                document.querySelector('#answer4').innerHTML =`range        = ${inrange1}`;
                document.querySelector('#answer5').innerHTML =`plant-size   = ${inplant1}`;
                document.querySelector('#answer6').innerHTML =`value        = ${invalue1}`;
            })
                return false;
            }
                            
        if(sensor_id == "2" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname2 = data[2].name;
                const intype2 = data[2].type;
                const inunit2 = data[2].unit;
                const inrange2 = data[2].range;
                const inplant2 = data[2]["plant-site"]; 
                const invalue2 = data[2].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname2}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype2}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit2}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange2}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant2}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue2}`;
            })
                return false;
            }
        }

    if (sensor_name == "pressure-transducer") {
        if(sensor_id == "0" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname3 = data[0].name;
                const intype3 = data[0].type;
                const inunit3 = data[0].unit;
                const inrange3= data[0].range;
                const inplant3 = data[0]["plant-site"]; 
                const invalue3 = data[0].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname3}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype3}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit3}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange3}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant3}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue3}`;
            })
                return false;
            }

        if(sensor_id == "1" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname4 = data[1].name;
                const intype4 = data[1].type;
                const inunit4 = data[1].unit;
                const inrange4= data[1].range;
                const inplant4 = data[1]["plant-site"]; 
                const invalue4 = data[1].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname4}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype4}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit4}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange4}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant4}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue4}`;
            })
                return false;
            }
                
        if(sensor_id == "2" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname5 = data[2].name;
                const intype5 = data[2].type;
                const inunit5 = data[2].unit;
                const inrange5= data[2].range;
                const inplant5 = data[2]["plant-site"]; 
                const invalue5 = data[2].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname5}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype5}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit5}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange5}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant5}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue5}`;
            })
                return false;
            }  
        }

    if (sensor_name == "level-transducer") {
        if(sensor_id == "0" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname6 = data[0].name;
                const intype6 = data[0].type;
                const inunit6 = data[0].unit;
                const inrange6= data[0].range;
                const inplant6 = data[0]["plant-site"]; 
                const invalue6 = data[0].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname6}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype6}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit6}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange6}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant6}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue6}`;
            })
                return false;
            }

        if(sensor_id == "1" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname7 = data[1].name;
                const intype7 = data[1].type;
                const inunit7 = data[1].unit;
                const inrange7= data[1].range;
                const inplant7 = data[1]["plant-site"]; 
                const invalue7 = data[1].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname7}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype7}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit7}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange7}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant7}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue7}`;
            })
                return false;
            }
        
        if(sensor_id == "2" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const inname8 = data[2].name;
                const intype8 = data[2].type;
                const inunit8 = data[2].unit;
                const inrange8= data[2].range;
                const inplant8 = data[2]["plant-site"]; 
                const invalue8 = data[2].value;
                document.querySelector('#answer1').innerHTML =`sensor = ${inname8}`;
                document.querySelector('#answer2').innerHTML =`type = ${intype8}`;
                document.querySelector('#answer3').innerHTML =`unit = ${inunit8}`;
                document.querySelector('#answer4').innerHTML =`range = ${inrange8}`;
                document.querySelector('#answer5').innerHTML =`plant-size = ${inplant8}`;
                document.querySelector('#answer6').innerHTML =`value = ${invalue8}`;
            })
                return false;
            }
        }

        if (sensor_name == "flow-transducer"){
            if(sensor_id == "0" ){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const inname9 = data[0].name;
                    const intype9 = data[0].type;
                    const inunit9 = data[0].unit;
                    const inrange9 = data[0].range;
                    const inplant9 = data[0]["plant-site"]; 
                    const invalue9 = data[0].value;
                    document.querySelector('#answer1').innerHTML =`sensor = ${inname9}`;
                    document.querySelector('#answer2').innerHTML =`type = ${intype9}`;
                    document.querySelector('#answer3').innerHTML =`unit = ${inunit9}`;
                    document.querySelector('#answer4').innerHTML =`range = ${inrange9}`;
                    document.querySelector('#answer5').innerHTML =`plant-size = ${inplant9}`;
                    document.querySelector('#answer6').innerHTML =`value = ${invalue9}`;
                })
                    return false;
                }
    
            if(sensor_id == "1" ){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const inname10 = data[1].name;
                    const intype10 = data[1].type;
                    const inunit10 = data[1].unit;
                    const inrange10 = data[1].range;
                    const inplant10 = data[1]["plant-site"]; 
                    const invalue10 = data[1].value;
                    document.querySelector('#answer1').innerHTML =`sensor = ${inname10}`;
                    document.querySelector('#answer2').innerHTML =`type = ${intype10}`;
                    document.querySelector('#answer3').innerHTML =`unit = ${inunit10}`;
                    document.querySelector('#answer4').innerHTML =`range = ${inrange10}`;
                    document.querySelector('#answer5').innerHTML =`plant-size = ${inplant10}`;
                    document.querySelector('#answer6').innerHTML =`value = ${invalue10}`;
                })
                    return false;
                }
                                
            if(sensor_id == "2" ){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const inname11 = data[2].name;
                    const intype11 = data[2].type;
                    const inunit11 = data[2].unit;
                    const inrange11 = data[2].range;
                    const inplant11 = data[2]["plant-site"]; 
                    const invalue11 = data[2].value;
                    document.querySelector('#answer1').innerHTML =`sensor = ${inname11}`;
                    document.querySelector('#answer2').innerHTML =`type = ${intype11}`;
                    document.querySelector('#answer3').innerHTML =`unit = ${inunit11}`;
                    document.querySelector('#answer4').innerHTML =`range = ${inrange11}`;
                    document.querySelector('#answer5').innerHTML =`plant-size = ${inplant11}`;
                    document.querySelector('#answer6').innerHTML =`value = ${invalue11}`;
                })
                    return false;
                }
                else{
                    alert("Can't find the information you are looking for? please type again 😓😓")
                    return false;
                    }
            }    
        
    else{
        alert("Can't find the information you are looking for? please type again 😓😓")
        return false;
        }
    }
});


            
             
            


