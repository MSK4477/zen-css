//Q1 for the given JSON iterate over all loops(for in,for)

//iterating JSON using for in loop 
var arr={'age':'23','name':'saravana'};
  

for (var i in arr){
    console.log(i,arr[i])
     }



     //iterating JSON using for  loop 
    
var n=[{ "name":"saravana", "age": "23" }, { "name": "sana", "age": "20" }]
for(let i=0;i<n.length;i++){
    console.log(n[i].name,n[i].age)
}