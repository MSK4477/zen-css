//Q1
json1 = {
    'name': 'saravana',
    'age': '23'
  };
      
  let json2 = {
    'age': 23,
    'name': 'saravana'
  };
    let a=(json1==json2);
    console.log(a)
  


//Q2 finding the flgs of the country
var request=new XMLHttpRequest();
request.open("GET","https ://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);

for(let i=0;i<result.length;i++){
    console.log(result[i].flags);
}
}


//Q3print the country name,region,subregion,population
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);

for(let i=0;i<result.length;i++){
    console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
}
}