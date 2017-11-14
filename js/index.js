var app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

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
            major: 'Information Science and Technology with option in Integration and Application',
            dates: '2016',
        },
        nanodegrees: [{
                title: 'Front-End Web Development',
                school: 'Udacity - ',
                dates: '2016',
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
                dates: '2017',
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
            endorser: " - Allie Wentzel - Vanguard Application Developer"
        }, {
            statement: '"I had the pleasure of working with William for over a year. During that time William was a UI developer on my team. We worked specifically with angular/JS on the front end for Vanguard personal advisor services webpages. William displayed great initiative and was able to follow instructions concisely. He was always available and while I was training him, William was very excited and eager to learn about Vanguard\'s systems and software design. William completed his tasks on time and was not afraid to ask questions if he was stuck on a particular problem. We did a lot of pair programming and William would volunteer his efforts when discussing implementation of the solutions. I was very glad to have William as a part of my team which consisted of 3-4 developers. William is a team player and gets along with everyone. He is very determined on finding a solution when assigned work. I noticed that he pays attention to detail and this was very important when working with JavaScript and angular. Best of all, William has shared a similar characteristic with me and that is he does not give up until all requirements have been met.  I highly recommend William for any front end developer to role. I have no doubts that your clients will be satisfied with his results. Please feel free to contact me at 215-694-9671 if there are additional questions."',
            endorser: " - Salim Elayan - Senior Vanguard Application Developer"
        }
];

    $scope.bio = {
        firstName: 'William ',
        lastName: 'Rinaldi',
        nickName: 'Will',
        intro: 'i am ',
        title: 'Front End Developer',
        myStory: ["",
              "For the last year and 4 months I have been a full-time employee for LiquidHub and contracted as a UI and Mid-Tier software application developer for The Vanguard Group in Malvern, PA.  During my time at Vanguard, I worked on an agile team to help develop complex client facing and internal software applications.  Here I brought my passion for UI and was able to quickly learn AngularJS to become the go-to UI developer for multi-team projects.",

    "I have also been a Udacity Front-End developer project reviewer for the past 1 year and 9 month.  At Udacity, I teach students principles of application development through review of their applications.  Working through the issue of various student code has given me excellent debugging skills.",

  "I graduated from Pennsylvania State University with a BS in Information Science and Technology with a focus on data integration and application.  While at Penn State, I was given a broad-spectrum technological education in areas such as application development, UI/UX, data analysis, enterprise systems, business process analysis, SDLCs, agile development, and database development.",

  "I went on to further develop my skills in front-end development by completing Udacity’s 6-month Front-End Developer program and Udacity’s 6-month Android Basics Developer program.  I am currently a student in Udacity’s 4-month intermediate React program where I am studying React, Redux, and React Native.",

  "I have over 10+ years experience of working in the audio-video and home automation fields.  While the job of a UI developer and A/V technician are quite different, they are similar in that both require a high level of technical problem solving."],
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
