let employes=[]


const show = () => {

    document.getElementById("data").innerHTML=" "

    employes.map((ele,i)=>{

     let td1=document.createElement("td");
     td1.innerHTML=ele.id  

     let td2=document.createElement("td");
     td2.innerHTML=ele.name 

     let td3=document.createElement("td");
    let img=document.createElement("img")
    img.src=ele.img
     td3.append(img)

     let td4=document.createElement("td");
     td4.innerHTML=ele.mobile 


     
     let td5=document.createElement("td");
     td5.innerHTML=ele.course 

       
     let td6=document.createElement("td");
     td6.innerHTML=ele.city 



     
     let td7=document.createElement("button")
     td7.innerHTML="DELETE"
     td7.addEventListener("click",()=>{
        employes.splice(i,1)
       show();

     })
     
     const delete_all=()=>{
      document.getElementById("data").innerHTML=" "
     }
   



    
     let tr=document.createElement("tr")
     tr.append(td1,td2,td3,td4,td5,td6,td7)
     td7.setAttribute("class","del")
     document.getElementById("data").append(tr)
     document.getElementById("delete").addEventListener("click",delete_all)
     

 })


}



const employedata = (e) => {
    e.preventDefault()
 
  let id=document.getElementById("id").value
  let name=document.getElementById("name").value
  let img=document.getElementById("img").value
  let mobile=document.getElementById("mobile").value
  let course=document.getElementById("course").value
  let city=document.getElementById("city").value

  
 
 
 let employe={
     id:id,
     name:name,
     img:img,
     mobile:mobile,
     course:course,
     city:city
    
 }

 employes.push(employe)
show()

 }

document.getElementById("form").addEventListener("submit",employedata)













































































//     for(let i=0; i<products.length; i++){
//         let img = document.createElement("img")
//         img.src = employes[i].img
//  }