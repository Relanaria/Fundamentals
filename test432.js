let pattern = /([a-zA-Z]+)([0|1?\d|20]{1,2})/gm;
let string = "aSd2&5s@1";
let final = string.split(/[0|1?\d|20]{1,2}/);

final.forEach((x) => {



if(x !== ""){
    console.log(x)
}}
);

