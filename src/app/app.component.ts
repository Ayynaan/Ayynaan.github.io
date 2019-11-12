import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
footerInfo = [{name:"Github Username:", value:"Ayynaan"},{name:"Personal Email:", value:"To be requested personally"},{name:"Discord:", value:"Humana"},{name:"Test", value:"Proven"}];
Computer_Skills = ["SQL Database Knowledge","Moderate Python Knowledge","Proficient in HTML/JS/CSS","Knowledge in Office 365","AWS Architecture","Azure Webserver Usage","Utilization of Bootstrap Js"];
Professional_Experience = [{},{},{},{}];
Soft_Skills = ["Customer Service Troubleshooting Ability.","Public Speaking Acumen.","Personal Ability to parse language into shorter terms.","Interpersonal Teamwork Proficiency","Personal Affinity to properly communicate with workers, team-members."];
Specific_Skillset = [{name:"Web Technology:", types: "HTML/CSS3/JS6, XML, Apache, ECMA6, Python, JQuery"},{name:"IDEs",types:"Notepad++, Webstorm, Brackets, Visual Studio Code, Pycharm"},{name:"CI/CD", types:"GIT, TRAVIS, SVN, Perforce"},{name:"Database",types:"MySQL, MS-SQL, Oracle"},{name:"OS",types:"Windows 98/XP/Vista/8/10"},{name:"JS Libraries",types:"JQuery, Angular, Bootstrap"}];
headerInfo = {name: "Eric Stanton",address: "315 S Ray St. New Castle Pa, 16101.",email:"ews1004@sru.edu",phonenumber:"724-556-0688"};
schooling = {school: "Slippery Rock University", degree: "Bachelors of Computer Science/ I.T Minor", date: "5/5/2020"};
}
