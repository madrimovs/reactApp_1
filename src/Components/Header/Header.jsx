function Header() {
	return (
		<header id="home" class="top-hero jumbotron-fluid p-b-3 bg-faded">
			<div class="container animated fadeInUp">
				<h1 class="display-3">Bootstrap Conference</h1>
				<p class="lead m-t-1">July 30th - August 15th</p>
				<p class="lead m-t-1 m-b-2">Everything you need to know about Bootstrap.</p>
				<button
					type="button"
					class="btn btn-lg btn-danger m-t-1"
					data-toggle="modal"
					data-target="/signup_form_modal"
				>
					Buy Tickets
				</button>
				<button
					type="button"
					class="js-scroll btn btn-lg btn-default m-t-1"
					data-scroll-to="/speakers"
				>
					Learn More
				</button>
			</div>
		</header>
	);
}

export default Header;
