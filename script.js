const getSumBtn = document.createElement("button");

getSumBtn.innerText="Count Price"
document.body.appendChild(getSumBtn);
let allMoneyList=document.querySelectorAll(".price")
let table=document.querySelector("table")

const getSum = () => {
//Add your code here
	let sum=0;
  for(let t of allMoneyList){
	  sum+=parseFloat(t.innerText);
}
	let tr=document.createElement("tr")
	tr.innerText=sum
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);

