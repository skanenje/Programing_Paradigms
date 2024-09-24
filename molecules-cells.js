const  RNA=(item)=>{
    item=item.toUpperCase()
     console.log(item)
     let b=""
     for(var i=0;i<item.length;i++){
        if (item[i] == "G"){
           b+="C"
        }else if(item[i] == "C"){
            b+="G"
        }else if(item[i] == "T"){
            b+="A"
        }else if(item[i] == "A"){
            b+="U"
        }
     }

     return b
}


const DNA=(item)=>{
item=item.toUpperCase()
let b=""
for(var i=0;i<item.length;i++){
   if (item[i] == "C"){
      b+="G"
   }else if(item[i] == "G"){
       b+="C"
   }else if(item[i] == "A"){
       b+="T"
   }else if(item[i] == "U"){
       b+="A"
   }
}

return b
}