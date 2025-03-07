document.addEventListener("alpine:init", function () {
	Alpine.data("route", function () {
		return {
			route: "/home",
			changeRoute(page) {
				this.route = page;
				history.pushState({ page }, "", `${page}`);
				location.reload()
			},

			init() {
				const path = window.location.pathname;
				if (path) {
					this.route = path;
				} else {
					this.route = "/home";
				}
				window.addEventListener("popstate", (event) => {
					if (event.state && event.state.page) {
						this.route = event.state.page;
					}
          
				});
			},
		};
	});
});
