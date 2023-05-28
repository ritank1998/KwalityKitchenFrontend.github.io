const redirect=()=>{
    var ele = document.myform.plan.value;
    console.log(ele);
    alert("You have select the "+" "+ ele +" "+ "Plan");
    if(ele == "Monthly"){
        window.open("monthly.html" , "_self");
        
    }
    else if(ele == "daily"){
        alert("welcome daily");
    }
    else{
        window.open("weekindex.html" , "_self");
        
    }
};
