<main id="window">
	<div id="windowTopDecoration">
		<div id="exit" class="circleButton" />
		<div id="min" class="circleButton" />
		<div id="max" class="circleButton" />
	</div>
	<slot name="content" />
</main>

<style>
	#window {
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		background-color: var(--slate800);
		filter: drop-shadow(4px 4px 4px var(--slate950));
	}

	#windowTopDecoration {
		background-color: var(--slate400);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		height: 1.5em;
		margin: 0px;
		display: flex;
		align-items: center;
	}

	.circleButton {
		height: 1em;
		width: 1em;
		margin-left: 10px;
		border-radius: 100%;
	}

	#exit {
		background-color: #c9184a;
	}

	#min {
		background-color: #ffd670;
	}

	#max {
		background-color: #619b8a;
	}
</style>
