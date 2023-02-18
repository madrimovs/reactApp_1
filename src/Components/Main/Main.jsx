function Main() {
	return (
		<>
			<section id="speakers" class="banner speakers p-y-3">
				<div class="wrapper">
					<h2 class="m-b-2 display-5 text-uppercase">Meet With Experts</h2>
					<a
						href="/"
						class="btn btn-primary btn-lg btn-block"
						data-toggle="modal"
						data-target="/speakers_modal"
					>
						Our Speakers
					</a>
				</div>
			</section>

			<section id="topics" class="banner learn p-y-3">
				<div class="wrapper">
					<h2 class="m-b-2 display-5 text-uppercase">Learn Industry Practices</h2>
					<a href="/" class="btn btn-danger btn-lg btn-block">
						Topics
					</a>
				</div>
			</section>

			<div id="locations" class="banner signup p-y-3">
				<div class="wrapper">
					<h2 class="m-b-2 display-5 text-uppercase">Don't Miss Out</h2>
					<a
						href="/"
						class="btn btn-primary btn-lg btn-block"
						data-toggle="modal"
						data-target="/signup_form_modal"
					>
						Buy Tickets
					</a>
				</div>
			</div>
		</>
	);
}

export default Main;
