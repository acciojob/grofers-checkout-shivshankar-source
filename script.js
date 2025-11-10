const getSumBtn = document.createElement("button");
getSumBtn.innerText="Count Price"
document.body.appendChild(getSumBtn);
let allMoneyList=document.querySelectorAll(".price")

const getSum = () => {
//Add your code here
	let sum=0;
  for(let t of allMoneyList){
	  sum+=parseFloat(t.innerText);
}
	return sum;
};

getSumBtn.addEventListener("click", getSum);

