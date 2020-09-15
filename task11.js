function leapYear(year1,year2){
var leap_year_array=[];
  for(var i=year1;i<=year2;i++){
  if(i%400===0){
  leap_year_array.push(i);
  
  }
  else if(i%4===0 && i%100!=0){
  leap_year_array.push(i);
  }
  }
return leap_year_array;


}
module.exports=leapYear;
