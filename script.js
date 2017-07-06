bar1_value=33;
bar2_value=54;
bar3_value=42;

var init_value;
function checkfun(get_value)
{

	var progress_bar = document.getElementById("progressbar").value;

	var increase_bar_value=get_value;
	design(progress_bar,parseInt(increase_bar_value));
}
function design(bar,bar_val)
{
	
	var currentValue=bar_val;

	if(bar == "progress_bar1")
	{
		 bar1_value=bar1_value+currentValue;
	bar1_value=	 (bar1_value>100)?100:bar1_value;
	bar1_value=	 (bar1_value<0)?0:bar1_value;
		 currentValue=bar1_value;
		
	}
	if(bar == "progress_bar2")
	{
		bar2_value=bar2_value+currentValue;
	bar2_value=	 (bar2_value>100)?100:bar2_value;
	
	bar2_value=	 (bar2_value<0)?0:bar2_value;
		 currentValue=bar2_value;
	}
	if(bar == "progress_bar3")
	{
		bar3_value=bar3_value+currentValue;
	bar3_value=	 (bar3_value>100)?100:bar3_value;
	bar3_value=	 (bar3_value<0)?0:bar3_value;
		 currentValue=bar3_value;
	}
	
var progressBar=	document.getElementById(bar);
var prcText=currentValue+"%";
progressBar.style.width=prcText;
progressBar.innerText=prcText;

if(currentValue<100){
progressBar.style.background="#12b9d4";
}else{
progressBar.style.background="rgb(212, 18, 90)";
}


}