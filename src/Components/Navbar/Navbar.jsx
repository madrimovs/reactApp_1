function Navbar() {
	return (
		<nav class="top-nav m-b-3 p-t-1 animated fadeInDown clearfix">
			<div class="container">
				<ul class="list-unstyled list-inline">
					<li class="list-inline-item m-r-1">
						<a href="/" class="js-scroll" data-scroll-to="/home">
							Home
						</a>
					</li>

					<li class="list-inline-item m-r-1">
						<a href="/" class="js-scroll" data-scroll-to="/speakers">
							Speakers
						</a>
					</li>
					<li class="list-inline-item m-r-1">
						<a href="/" class="js-scroll" data-scroll-to="/locations">
							Locations
						</a>
					</li>
					<li class="list-inline-item m-r-1">
						<a href="/" class="js-scroll" data-scroll-to="/topics">
							Topics
						</a>
					</li>
					<li class="list-inline-item m-r-0">
						<a
							href="/"
							class="btn signup-btn btn-danger btn-sm"
							data-toggle="modal"
							data-target="/signup_form_modal"
						>
							Buy Tickets
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
