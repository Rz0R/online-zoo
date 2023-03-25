const createCardTemplate = (name, location, date, text, icon) => `
	<div class="card-testimonials">
		<div class="card-testimonials__content">
			<div class="card-testimonials__top">
				<div class="card-testimonials__photo">
					<img src="img/testimonials/${icon}" alt="${name} photo">
				</div>
				<div class="card-testimonials__profile">
					<div class="card-testimonials__name">
						${name}
					</div>
					<span class="card-testimonials__location">${location}</span>
					<span class="card-testimonials__date">• ${date}</span>
				</div>

			</div>
			<div class="card-testimonials__article">
				<p>
					${text}
				</p>
			</div>
		</div>

	</div>
`;
