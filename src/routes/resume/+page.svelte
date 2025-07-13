<script lang="ts">
	import '$lib/global.css';
	import resume from '$lib/resume.json';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import { onMount } from 'svelte';

	let toHash: HTMLAnchorElement;

	onMount(() => {
		if (window.location.pathname == '/resume/') {
			toHash.click();
		}

        document.body.scrollIntoView();
	});
</script>

<a style="display: none;" href="/#/resume" bind:this={toHash}>to resume hash</a>

<header>
	<h1 class="mainTitle">Resume</h1>
	<a id="downloadLink" href="/assets/resume.pdf" target="_blank">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
			<polyline points="7,10 12,15 17,10"/>
			<line x1="12" y1="15" x2="12" y2="3"/>
		</svg>
		Download PDF
	</a>
</header>

<body>
	<MockBrowserWindow>
		<main slot="content">
			<!-- Header Section -->
			<section class="header-section">
				<div class="header-content">
					<h1 class="name">Luis Vicente Reyes</h1>
					<p class="title">Software Engineer</p>
					<p class="location">Sydney, Australia</p>
				</div>
				<div class="contact-links">
					{#each resume.contact as method}
						<a class="contact-link" href={method.fullLink} target="_blank" rel="noopener">
							<svg
								class="contact-icon"
								xmlns="http://www.w3.org/2000/svg"
								height="1.2em"
								viewBox="0 0 448 512">
								<path d={method.logo} />
							</svg>
							<span class="contact-text">{method.subLink}</span>
						</a>
					{/each}
				</div>
			</section>

			<!-- Summary Section -->
			<section class="summary-section">
				<p class="summary-text">{resume.summary}</p>
			</section>

			<!-- Skills Section -->
			<section class="skills-section">
				<h2 class="section-title">Technical Skills</h2>
				<div class="skills-grid">
					<div class="skill-category">
						<h3 class="category-title">Languages</h3>
						<div class="skill-tags">
							{#each resume.skills.languages as skill}
								<span class="skill-tag">{skill}</span>
							{/each}
						</div>
					</div>
					<div class="skill-category">
						<h3 class="category-title">Frameworks & Libraries</h3>
						<div class="skill-tags">
							{#each resume.skills.frameworks as skill}
								<span class="skill-tag">{skill}</span>
							{/each}
						</div>
					</div>
					<div class="skill-category">
						<h3 class="category-title">Tools & Infrastructure</h3>
						<div class="skill-tags">
							{#each resume.skills.tools as skill}
								<span class="skill-tag">{skill}</span>
							{/each}
						</div>
					</div>
				</div>
			</section>

			<!-- Experience Section -->
			<section class="experience-section">
				<h2 class="section-title">Experience</h2>
				<div class="timeline">
					{#each resume.experiences as experience}
						<div class="timeline-item">
							<div class="timeline-header">
								<div class="timeline-title">
									<h3 class="job-title">{experience.title}</h3>
									<p class="company">{experience.provider}</p>
								</div>
								<span class="timeline-date">{experience.year}</span>
							</div>
							<ul class="achievement-list">
								{#each experience.details as achievement}
									<li class="achievement-item">{achievement}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</section>

			<!-- Projects Section -->
			<section class="projects-section">
				<h2 class="section-title">Projects</h2>
				<div class="projects-grid">
					{#each resume.projects as project}
						<div class="project-card">
							<div class="project-header">
								<h3 class="project-title">{project.title}</h3>
								{#if project.year}
									<span class="project-year">{project.year}</span>
								{/if}
							</div>
							<p class="project-description">{project.description}</p>
							<div class="project-tech">
								{#each project.tech as tech}
									<span class="tech-tag">{tech}</span>
								{/each}
							</div>
							{#if project.title === 'BingusEats'}
								<div class="project-screenshots">
									<img
										width="25%"
										src="/assets/bingusEats/diner_menu.png"
										alt="bingusEats Diner Menu"
									/>
									<img
										width="25%"
										src="/assets/bingusEats/menu_rec.png"
										alt="bingusEats Diner Rec"
									/>
								</div>
							{/if}
							{#if project.title === 'Reel-Riddle'}
								<div class="project-screenshots">
									<img
										width="90%"
										src="https://i.imgur.com/4DfO40r.png"
										alt="Reel-Riddle Screenshot"
									/>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</section>

			<!-- Education Section -->
			<section class="education-section">
				<h2 class="section-title">Education & Certifications</h2>
				<div class="education-grid">
					{#each resume.education as qualification}
						<div class="education-card">
							<div class="education-header">
								<h3 class="education-title">{qualification.title}</h3>
								<span class="education-year">{qualification.year}</span>
							</div>
							<p class="education-provider">{qualification.provider}</p>
							<p class="education-details">{qualification.details}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- Leadership Section -->
			<section class="leadership-section">
				<h2 class="section-title">Leadership & Awards</h2>
				<div class="leadership-grid">
					{#each resume.leadership as achievement}
						<div class="achievement-card">
							<svg class="achievement-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
							<span class="achievement-text">{achievement}</span>
						</div>
					{/each}
				</div>
			</section>
		</main>
	</MockBrowserWindow>
</body>

<style>
	/* Modern CSS Variables */
	:root {
		--primary-color: #3b82f6;
		--primary-light: #60a5fa;
		--text-primary: #1f2937;
		--text-secondary: #6b7280;
		--text-muted: #9ca3af;
		--bg-primary: #ffffff;
		--bg-secondary: #f9fafb;
		--bg-tertiary: #f3f4f6;
		--border-color: #e5e7eb;
		--border-light: #f3f4f6;
		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--radius-sm: 0.375rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
		--radius-xl: 1rem;
	}

	/* Dark mode support */
	@media (prefers-color-scheme: dark) {
		:root {
			--text-primary: #f9fafb;
			--text-secondary: #d1d5db;
			--text-muted: #9ca3af;
			--bg-primary: #111827;
			--bg-secondary: #1f2937;
			--bg-tertiary: #374151;
			--border-color: #374151;
			--border-light: #4b5563;
		}
	}

	/* Base Styles */
	main {
		margin: 1em;
		padding: 2rem;
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		margin-left: auto;
		margin-right: auto;
	}

	/* Header Section */
	.header-section {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--border-light);
	}

	.header-content {
		flex: 1;
	}

	.name {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem 0;
		line-height: 1.2;
	}

	.title {
		font-size: 1.25rem;
		color: var(--primary-color);
		font-weight: 600;
		margin: 0 0 0.25rem 0;
	}

	.location {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-end;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.5rem;
		border-radius: var(--radius-md);
		transition: all 0.2s ease;
	}

	.contact-link:hover {
		color: var(--primary-color);
		background-color: var(--bg-secondary);
		transform: translateY(-1px);
	}

	.contact-icon {
		fill: currentColor;
	}

	.contact-text {
		font-size: 0.875rem;
		font-weight: 500;
	}

	/* Summary Section */
	.summary-section {
		margin-bottom: 3rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
		border-radius: var(--radius-lg);
		border-left: 4px solid var(--primary-color);
	}

	.summary-text {
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--text-primary);
		margin: 0;
		font-weight: 400;
	}

	/* Section Titles */
	.section-title {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 1.5rem 0;
		position: relative;
		padding-bottom: 0.5rem;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3rem;
		height: 3px;
		background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
		border-radius: 2px;
	}

	/* Skills Section */
	.skills-section {
		margin-bottom: 3rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.skill-category {
		background: var(--bg-secondary);
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.skill-category:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
		border-color: var(--primary-light);
	}

	.category-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 1rem 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.category-title::before {
		content: '';
		width: 4px;
		height: 1.5rem;
		background: var(--primary-color);
		border-radius: 2px;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-tag {
		background: var(--primary-color);
		color: white;
		padding: 0.375rem 0.75rem;
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.skill-tag:hover {
		background: var(--primary-light);
		transform: scale(1.05);
	}

	/* Experience Section */
	.experience-section {
		margin-bottom: 3rem;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.timeline-item {
		background: var(--bg-secondary);
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border-color);
		position: relative;
		transition: all 0.3s ease;
	}

	.timeline-item:hover {
		transform: translateX(4px);
		box-shadow: var(--shadow-md);
		border-color: var(--primary-light);
	}

	.timeline-item::before {
		content: '';
		position: absolute;
		left: -1px;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, var(--primary-color), var(--primary-light));
		border-radius: 2px;
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.job-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 0.25rem 0;
	}

	.company {
		font-size: 1rem;
		color: var(--primary-color);
		font-weight: 500;
		margin: 0;
	}

	.timeline-date {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
	}

	.achievement-list {
		margin: 0;
		padding-left: 1.5rem;
	}

	.achievement-item {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	.achievement-item:last-child {
		margin-bottom: 0;
	}

	/* Projects Section */
	.projects-section {
		margin-bottom: 3rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		background: var(--bg-secondary);
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--primary-light);
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.project-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.project-year {
		background: var(--bg-tertiary);
		color: var(--text-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
		font-weight: 500;
	}

	.project-description {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 1rem 0;
		font-size: 0.875rem;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-bottom: 1rem;
	}

	.tech-tag {
		background: var(--bg-tertiary);
		color: var(--text-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
		font-weight: 500;
		border: 1px solid var(--border-color);
	}

	.project-screenshots {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 1rem;
	}

	/* Education Section */
	.education-section {
		margin-bottom: 3rem;
	}

	.education-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.education-card {
		background: var(--bg-secondary);
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.education-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: var(--primary-light);
	}

	.education-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
	}

	.education-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.education-year {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
		font-weight: 500;
	}

	.education-provider {
		color: var(--primary-color);
		font-weight: 500;
		margin: 0 0 0.5rem 0;
		font-size: 0.875rem;
	}

	.education-details {
		color: var(--text-secondary);
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	/* Leadership Section */
	.leadership-section {
		margin-bottom: 2rem;
	}

	.leadership-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

	.achievement-card {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: var(--bg-secondary);
		padding: 1rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.achievement-card:hover {
		transform: translateX(4px);
		box-shadow: var(--shadow-md);
		border-color: var(--primary-light);
	}

	.achievement-icon {
		color: var(--primary-color);
		flex-shrink: 0;
	}

	.achievement-text {
		color: var(--text-secondary);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	/* Header Styles */
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
		animation: slideInUp;
		animation-duration: 1s;
	}

	.mainTitle {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
	}

	#downloadLink {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--primary-color);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-lg);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		box-shadow: var(--shadow-md);
	}

	#downloadLink:hover {
		background: var(--primary-light);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	/* Animations */
	body {
		animation: slideInUp;
		animation-duration: 1s;
	}

	/* Responsive Design */
	@media only screen and (max-width: 768px) {
		main {
			margin: 0.5rem;
			padding: 1rem;
		}

		.header-section {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}

		.contact-links {
			align-items: flex-start;
		}

		.name {
			font-size: 2rem;
		}

		.skills-grid,
		.projects-grid,
		.education-grid {
			grid-template-columns: 1fr;
		}

		.timeline-header {
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-start;
		}

		header {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}
	}

	@media only screen and (max-width: 480px) {
		.name {
			font-size: 1.75rem;
		}

		.section-title {
			font-size: 1.5rem;
		}

		.project-header,
		.education-header {
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-start;
		}
	}
</style>
