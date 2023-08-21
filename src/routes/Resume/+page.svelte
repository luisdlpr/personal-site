<script lang="ts">
	const contact = ['+61 466 682 252', 'reyesluichi@hotmail.com', '/luisdlpr', '/in/luisvldpreyes'];
	const skills = [
		'C',
		'Python',
		'Java',
		'Perl',
		'JavaScript',
		'React',
		'Express',
		'Svelte',
		'Flask',
		'Docker',
		'AWS',
		'TerraForm',
		'SQL',
		'Agile (Scrum, Jira)',
		'Teamwork (Teams, Slack, Git)'
	];
	const education = [
		{
			title: 'Bachelor of Engineering (Honours) (Mechanical)/Science (Computer Science)',
			provider: 'UNSW',
			details: 'AAA Scholarship, WAM: 80.94.',
			year: '2023'
		},
		{
			title: 'The Web Developer Bootcamp',
			provider: 'Colt Steele',
			details: 'HTML, JavaScript, CSS, noSQL (MongoDB).',
			year: '2022'
		},
		{
			title: 'High School Certificate',
			provider: 'St John Paul II Catholic College',
			details:
				'ATAR: 93.6, HSC High Achievers Award, Gold Academic Award, 2x Silver Academic Award.',
			year: '2017'
		}
	];
	const experiences = [
		{
			title: 'Web Developer (Intern & Part Time)',
			provider: 'MOBLE Pty Ltd',
			details: [
				'Developed Web-scrapers using Playwright.js tp assist in data migration.',
				'Maintaining and improving QHSE management tool using a hybrid stack (Express, Svelte, Template Toolkit, Perl, PostgreSQL).'
			],
			year: '2022-Present'
		},
		{
			title: 'Software Developer Intern',
			provider: 'Akuna Capital',
			details: [
				'Worked in the Data Engineering team to optimise AWS S3 usage. Identified over $4000 in potential savings.',
				'Developed scanning tool design for big data (10+ billion rows) deployable through Docker and Databricks.',
				'Used Terraform to adjust S3 lifecycle policies/inventory logging and applied changes using Atlantis.'
			],
			year: '2022-2023'
		},
		{
			title: 'Mechanical Engineering Vacation Student',
			provider: 'Aeris Resources, Tritton Ops',
			details: [
				'Produced engineering drawings (CAD) for 21 seperate projects and revised based on feedback from clients.',
				'Led planning, procurement, and installation of a compressed air drying unit for underground mine air.'
			],
			year: '2020-2021'
		}
	];

	const projects = [
		{
			title: 'BingusEats',
			summary: 'Full Stack Wait Management System',
			tech: ['React', 'Express', 'PostgreSQL'],
			description:
				'Please Request Access. Full Stack Wait Management System using a PERN stack in a team for a university capstone project. Functions similarly to Me&U with some novel functionalities such as menu versioning and a recommendation algorithm based on weather and food tags'
		},
		{
			title: 'DungeonSlayer',
			summary: 'Browser Based Dungeon Crawler Game',
			tech: ['Java', 'OOP/OOD'],
			description:
				'Developed with a team focusing on Object Oriented Design/Programming. Developement process with UML diagram and ER mapping can be found on the Github Repo'
		}
	];

	const ec = [
		'Active Guitarist in High School Music events including Creative Arts Nights, Open Days, School Lunchtime Concerts, and 2014 and 2016 School Musicals (Apollo 14, Back to the 80s). Band A leader in 2016 Musical.',
		'1st Place (u74 kg Jr Division) in Hercules of The Hills 11 Powerlifting Competition and amateur coach (3 clients).'
	];
</script>

<h1>Resume/CV</h1>
<div>
	<a href="/assets/resume.pdf" target="_blank">Download</a> a copy
</div>

<main>
	<section id="information">
		<h1>Luis Vicente Reyes</h1>
		<h2>Sydney, NSW</h2>
		{#each contact as method}
			<div class="bubble">{method}</div>
		{/each}
	</section>

	<section id="objective">
		<p>
			Final year BEng(Mech)(Hons)/CS dual degree student seeking a Graduate Web Development or
			Software Engineering role.
		</p>
	</section>

	<section id="skills">
		<h1>Skills</h1>
		{#each skills as skill}
			<div class="bubble">{skill}</div>
		{/each}
	</section>

	<section id="education">
		<h1>Education</h1>
		{#each education as qualification}
			<div>{qualification.title}, {qualification.provider}</div>
			<div>{qualification.details}, {qualification.year}</div>
		{/each}
	</section>

	<section id="experience">
		<h1>Experience</h1>
		{#each experiences as experience}
			<div>{experience.title}, {experience.provider}</div>
			<div>{experience.year}</div>
			{#each experience.details as achievement}
				<div>{achievement}</div>
			{/each}
		{/each}
	</section>

	<section id="projects">
		<h1>Projects</h1>
		{#each projects as project}
			<div>{project.title}, {project.summary}</div>
			{#each project.tech as tech}
				<div>{tech}</div>
			{/each}
			<div>{project.description}</div>
		{/each}
	</section>

	<section id="extracirricular">
		<h1>Extra Cirricular</h1>
		{#each ec as activity}
			<div>{activity}</div>
		{/each}
	</section>
</main>

<style>
	main {
		background-color: var(--slate700);
		margin: 1em;
		padding: 1em;
		border-radius: 10px;
	}
</style>
