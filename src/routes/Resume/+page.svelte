<script lang="ts">
	import '$lib/global.css';
	import resume from '$lib/resume.json';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
</script>

<header>
	<h1 class="mainTitle">Resume/CV</h1>
	<a id="downloadLink" href="/assets/resume.pdf" target="_blank">Download a copy </a>
</header>

<MockBrowserWindow>
	<main slot="content">
		<section id="information">
			<h1>Luis Vicente Reyes</h1>
			<div id="contactLinks">
				{#each resume.contact as method}
					<a class="bubble" href={method.fullLink}>
						<svg
							class="socialBubble"
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 448 512"><path d={method.logo} /></svg
						>
						{method.subLink}
					</a>
				{/each}
			</div>
			<h2>Sydney, NSW</h2>
		</section>

		<section id="objective">
			<p>
				Final year Bachelor of Engineering (Mechanical) (Honours)/Science (Computer Science) dual
				degree student seeking a Graduate Web Development or Software Engineering role.
			</p>
		</section>

		<section id="skills">
			<h1>Skills</h1>
			<div class="bubbleContainer insetSection">
				{#each resume.skills as skill}
					<div class="bubble">{skill}</div>
				{/each}
			</div>
		</section>

		<section id="education">
			<h1>Education</h1>
			{#each resume.education as qualification}
				<div class="insetSection">
					<h2>
						<span><strong>{qualification.title},</strong> <i>{qualification.provider}</i></span>
						<i class="year">{qualification.year}</i>
					</h2>
					<div>{qualification.details}</div>
				</div>
			{/each}
		</section>

		<section id="experience">
			<h1>Experience</h1>
			{#each resume.experiences as experience}
				<div class="insetSection">
					<h2>
						<span><strong>{experience.title},</strong> <i>{experience.provider}</i></span>
						<i class="year">{experience.year}</i>
					</h2>
					{#each experience.details as achievement}
						<div>- {achievement}</div>
					{/each}
				</div>
			{/each}
		</section>

		<section id="projects">
			<h1>Projects</h1>
			{#each resume.projects as project}
				<div class="insetSection">
					<h2>
						<span><strong>{project.title},</strong> <i>{project.summary}</i></span>
						<div class="techContainer">
							{#each project.tech as tech}
								<i class="bubble tech">{tech}</i>
							{/each}
						</div>
					</h2>
					<div>{project.description}</div>
				</div>
			{/each}
		</section>

		<section id="extracirricular">
			<h1>Extra Cirricular</h1>
			{#each resume.ec as activity}
				<div class="insetSection">{activity}</div>
			{/each}
		</section>
	</main>
</MockBrowserWindow>

<style>
	h1 {
		font-size: 2em;
	}

	h2 {
		font-size: 1.5em;
	}

	main {
		background-color: var(--slate800);
		margin: 1em;
		padding: 1em;
		border-radius: 10px;
	}

	strong {
		font-weight: 600;
	}

	#information {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#contactLinks {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		align-items: flex-end;
	}

	#objective {
		font-style: italic;
	}

	@media only screen and (max-width: 1024px) {
		#information {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media only screen and (max-width: 600px) {
		.insetSection > h2 {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	.bubble {
		display: flex;
		align-items: center;
		background-color: var(--slate900);
		padding: 0.5em;
		border-radius: 2em;
		box-shadow: inset 0 0 10px var(--slate950);
	}

	.socialBubble {
		fill: var(--slate200);
		margin: 0em 0.2em;
	}

	.bubbleContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	.insetSection > h2 {
		display: flex;
		justify-content: space-between;
		margin: 0em 0em 0.5em 0em;
	}

	.insetSection {
		background-color: var(--slate700);
		padding: 1em;
		margin: 1em;
		border-radius: 10px;
		box-shadow: inset 0 0 10px var(--slate800);
	}

	.year {
		font-size: 1em;
		text-align: right;
		white-space: nowrap;
	}

	.tech {
		font-size: 0.5em;
		height: 1em;
	}

	.techContainer {
		display: flex;
		gap: 0.5em;
	}

	.mainTitle {
		margin: 0em;
	}

	#downloadLink {
		display: block;
		background-color: var(--slate950);
		border-radius: 10px;
		margin: 1em;
		padding: 1em;
		text-decoration: none;
		text-align: center;
	}

	header {
		display: flex;
		align-items: center;
	}
</style>
