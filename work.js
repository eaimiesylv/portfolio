const projects = [  
{    imgSrc: "images/a.png",    frontend: "React",    backend: "Laravel",    cicd: "Github Action",    url: "www.aaerlaw.com" ,

detail:"This web application is tailor to solved issues relating to Court case"}, 
{    
	imgSrc: "images/b.png",    frontend: "React",    backend: "Laravel",    cicd: "Github Action",    url: "www.excapture.com" , 
	detail:"This web application is use to manage Real estate" 

},  
{    

	imgSrc: "images/c.png",    frontend: "VUE",    backend: "Laravel",    cicd: "Github Action",    url: "www.majestylearningfields.com" ,
	detail:"This is an e-learning platform as well as a result computation site" 

},  
{    
	imgSrc: "images/d.png",    frontend: "Javascript/Bootstrap/Jquery",    backend: "PHP",    url: "https://hofaco.sch.ng", 
	detail:"This is a site that is use to compute students result"  

}];




let workContent = "";

projects.forEach((project) => {
	
  workContent += `
  <div class='row bgcol'>
		<div class='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
				<img src='${project.imgSrc}' class='img-fluid' alt='Work'>
		</div>
		<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 work_detail'>
			<h4>Technology</h4>
			<ul>
			  <li>FrontEnd: ${project.frontend}</li>
			  <li>BackEnd: ${project.backend}</li>
			  <li>CI/CD: ${project.cicd ? project.cicd : "N/A"}</li>
			  <li>URL: <a href='${project.url}'>Visit Site</a></li>
			</ul>
			<p style="color:white">${project.detail}</p>
		  
		</div>	
	</div>
  `;
});
   
   
const skills=[
{skill:"HTML5"},{skill:"CSS 3"},{skill:"BootStrap"},{skill:"Javascript"},{skill:"JQuery"},{skill:"PHP"},{skill:"JQuery"},
{skill:"JQuery"},{skill:"Laravel"},{skill:"Vue"},{skill:"Vuex"}];


let allSkill="";
skills.forEach((mySkill)=>{
	
	allSkill += `
	  <li class="list-group-item">${mySkill.skill}</li>`;
});

