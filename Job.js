var job = prompt("What do you do?");
var name= prompt("What is your name");

    if(job.toLowerCase() == 'teach'){
var subject = prompt("Which subject do you teach  " + name +' ?') ;
if(subject=='mathematics'){
    alert("you ARE HIRED " + name)}
    else{
        alert("We want a Mathematics Teacher")
    }
}

    
    else{
        alert("we want to hire a Teacher, Sorry.")
    }
