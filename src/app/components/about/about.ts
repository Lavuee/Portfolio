import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  name = "Lavin Lee Agustin";
  about = "ABOUT ME";
  aboutMe = "I am Lavin Lee Agustin, a Computer Science student dedicated to becoming a skilled programmer.";
  aboutMe1 = "I am in the process of continuously learning programming languages such as Java, Python, HTML, JavaScript, and TypeScript, which serve as the foundation of my journey in software development.";
  aboutMe2 = "I also possess a creative talent in architectural sketching and floor planning, showcasing my eye for detail and design.";
  aboutMe3 = "One of my key strengths is my ability to adapt quickly to different environments, allowing me to embrace challenges and continuously improve as I pursue my goal of becoming a professional programmer.";
  personalInfoTitle = "PERSONAL INFORMATION";
  age = 20;
  gender = 'Female';
  dateOfBirth = "November 05, 2004";
  placeOfBirth = "Nueva Vizcaya";
  contactNumber = "09634669406";
  address = "22 fatima st. Aurora Hill, Baguio City";

  educationTitle = "EDUCATION";
  college = "August 2024 - Present | Bachelor of Science in Computer Science | University of Baguio | Baguio City";
  highSchool = "June 2016 - July 2023 | Saint Catherine's School | Nueva Vizcaya";
  elementary = "June 2010 - July 2016 | Sto. Domingo Elementary School | Nueva Vizcaya";

  awardsTitle = "AWARDS AND RECOGNITION";
  secondRunnerUp = "Variety Show (Cultural Dance) | History of Cordillera Event | University Hall, Baguio City | May 04, 2024";
  withHonor = "Academic Distinction | Saint Catherine's School | June 2023";
  withHonor2 = "Academic Distinction | Saint Catherine's School | June 2022";
}
