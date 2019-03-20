$(document).ready(function () {
	const total_budget = parseFloat($(".total_budget").find("span").text());
	//grabs every element  parseFloat converts to number
	//on the page with
	//.total-budget

	$("body").on("change", "input[type='checkbox']", function (e) {
		// .on = listening for an event
		// want to listen for "change" event
		// change to input type checkbox

		let remaining = total_budget;

		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());


			remaining = remaining - value;
		});

		console.log(remaining);
		parseFloat($(".total_budget").find("span").text(remaining));

		if (remaining < 0) {
			//make it red
			$(".total_budget").addClass("over")
		} else {
			$(".total_budget").removeClass("over")

		}
	});
});