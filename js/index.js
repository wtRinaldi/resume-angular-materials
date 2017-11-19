var app = angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.controller('resumeController', function($scope) {
  $scope.jobs = [
     {
      employer: "LiquidHub -",
      title: " UI Developer",
      dates: "August 2016 - November 2017",
      location: "Malvern, PA",
      description: [
        'Contract position at premier Index Fund Management Company located in Malvern, PA',
				'Collaborated with business specialist and product owners to determine application needs',
				'Developed complex financial web applications using JavaScript, AngularJS, HTML, CSS, and Java',
				'Created J-unit, cucumber, and jasmine test to cover all new code',
				'Created reports on code metrics for coverage and page performance'
		  ]
     },
     {
      employer: "Udacity -",
      title: "Front End Project Reviewer",
      dates: "May 2016 - present",
      location: "remote",
      description: [
				"Provide written feedback on student projects",
        "Assist students in the understanding of new concepts",
        "Debug student errors and guide them to finding the solutions on their own",
        "Demonstrate to students alternative ways of writing code that may be more concise"
			]
     }
  ];
  $scope.education = {
	  college: {
			name: 'Pennsylvania State University',
			degree: 'B.Sc. - ',
			major: 'Information Science and Technology',
			dates: '2011 - 2016',
    },
	  nanodegrees: [{
			title: 'Front-End Web Development',
			school: 'Udacity - ',
			dates: '2015 - 2016',
			URL: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
      description: '6 months',
      courses: [
        'Responsive Web Design', 
        'Intro to jQuery', 
        'Object-Oriented JavaScript', 
        'Website Performance Optimization', 
        'Intro to AJAX', 
        'JavaScript Design Patterns', 
        'JavaScript Testing'
      ],
      partners: [
        {
          name: 'AT&T',
          img: '',
          url: ''
        },
        {
          name: 'Google',
          img: '',
          url: ''
        },
        {
          name: 'GitHub',
          img: '',
          url: ''
        },
        {
          name: 'Hack Reactor',
          img: '',
          url: ''
        }
      ]
		},
    {
      title: 'Android Basics',
			school: 'Udacity - ',
			dates: '2015 - 2016',
			URL: 'https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803',
      courses: [
        'Android User Interface', 
        'User Input', 
        'Multi-screen Applications', 
        'Networking & Multi-Threading', 
        'Data Storage'
      ],
      partner: {
        name: 'Google',
        img: '',
        url: ''
      }
   },
   {
      title: 'React Development',
			school: 'Udacity - ',
			dates: 'current student',
			URL: 'https://www.udacity.com/course/react-nanodegree--nd019',
      courses: [
        'React Fundamentals', 
        'React & Redux', 
        'React Native'
      ],
     parnter: {
       name: 'React Training',
       img: '',
       url: 'https://reacttraining.com/'
     }
  } 
	]
};
  $scope.endorsements = [{
      statement: '"I had the great opportunity to be William Rinaldi’s teammate at Vanguard over the past year.  Throughout this time, he always demonstrated a great willingness to learn and constantly strive to improve when possible.  He has a great work ethic, always going out of his way to try to improve a design or make the best option available work.  He is adaptable and was able to step into key roles when other team members were absent.  On our team, William really molded himself a key role as a very important UI developer with his AngularJS skills.  His problem solving skills made him an invaluable asset to our team in the UI space.  William is always willing to help someone when they need his help and never afraid to share his ideas with his teammates.  In addition to this, he brings a lighthearted, fun atmosphere to work and really cares about his teammates."',
      endorser: " - Allie Wentzel, Vanguard Application Developer"},{
        statement: '"I had the pleasure of working with William for over a year. During that time William was a UI developer on my team. We worked specifically with angular/JS on the front end for Vanguard personal advisor services webpages. William displayed great initiative and was able to follow instructions concisely. He was always available and while I was training him, William was very excited and eager to learn about Vanguard\'s systems and software design. William completed his tasks on time and was not afraid to ask questions if he was stuck on a particular problem. We did a lot of pair programming and William would volunteer his efforts when discussing implementation of the solutions. I was very glad to have William as a part of my team which consisted of 3-4 developers. William is a team player and gets along with everyone. He is very determined on finding a solution when assigned work. I noticed that he pays attention to detail and this was very important when working with JavaScript and angular. Best of all, William has shared a similar characteristic with me and that is he does not give up until all requirements have been met.  I highly recommend William for any front end developer role. I have no doubts that your clients will be satisfied with his results. Please feel free to contact me at 215-694-9671 if there are additional questions."',
        endorser: "Salim Elayan, Senior Vanguard Application Developer"}];
  
$scope.reviewFeedback = [
  '"This review was by far the best one that I have had!"',
  '"Very good review! Thank you so much! It helped me to grow a lot as a developer!"',
  '"I’ve learned more from this review than any other.  Things like code best practices, writing concise code, grouping selectors, and variables. Regards.."',
  '"I really liked the suggestion you made. I didn\'t understand it at first but once I looked closer at the code I realized you where right and made the changes. The code looks much better now. Thank you!"',
  '"Great revision! Lots of insights! Thank you!"',
  '"Thank you. These are some really helpful tips."',
  '"The feedback provided in this review will help me to write cleaner code. I appreciate the feedback."',
  '"I was beginning to think that coding was not for me.  This review helped!  Thank you so much for the encouragement!"'
]
  
  $scope.bio = {
	  firstName: 'William ',
    lastName: 'Rinaldi',
    nickName: 'Will',
    intro: 'i am ',
	  title: 'Front End Developer',
	  greeting: 'Greetings!',
    myStory: [
      "For approximately the last year and a half I have been a full-time employee for LiquidHub. During this time I was contracted as a UI and Mid-Tier software application developer for The Vanguard Group in Malvern, PA. In this position, I worked on an agile team to assist in the development of complex client facing and internal software applications. This role allowed me the ability to incorporate my passion for UI into my daily projects while also providing me the opportunity to refine my understanding of AngularJS.  My proficiency in this skill set was quickly recognized by coworkers and I became regarded as the \"go-to\" UI developer for multi-team projects.",
      "For nearly two years I have also acted as a project reviewer for Udacity's Front-End development program. At Udacity, I have the opportunity to teach students principles of application development through review of their coding coursework. Providing thorough critique and evaluation of various student code has in turn allowed me to enhance my own debugging skills.",
    "I graduated from Pennsylvania State University with a BS in Information Science and Technology with a focus on data integration and application. While at Penn State, I was given a broad-spectrum technological education in areas such as application development, UI/UX, data analysis, enterprise systems, business process analysis, SDLCs, agile development, and database development.", 
  "I maintain enthusiasm to further expand my skills and have done so by completing Udacity’s 6-month Front-End Developer program and 6-month Android Basics Developer program. I am currently a student in Udacity’s 4-month intermediate React program where I am strengthening my skills in React, Redux, and React Native.",
  "I have over ten years of experience working in the audio-video and home automation fields. While I enjoyed my time in this field, I ultimately felt the need to pursue a more challenging career option. This role did, however, provide me with basic exposure to the world of coding, that has since ignited a passion to pursue a role in UI development. Though these careers are not directly related, I do feel my position as an A/V technician required a high level of technical problem solving. This is undoubtedly a valuable skill that I have developed well and can incorporate into my role as a UI developer. I feel extremely confident in my current skill set and am enthusiastic to join a company where I can expand this knowledge and make meaningful contributions. I look forward to further discussing my specific qualifications and the direct impact I could have on your company."],
    contacts: {
		  mobile: '484-948-8583',
		  email: 'williamtrinaldi@gmail.com',
		  githubURL: 'wtRinaldi',
      linkedInURL: 'wtRinaldi',
		  location: 'Denver, PA'
		},
	  skills: [
		  'HTML',
		  'CSS',
		  'JavaScript'
		]
  };
});
