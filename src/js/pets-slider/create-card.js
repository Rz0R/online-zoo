const creteCardTemplate = (name, descr, image, icon, iconName) => `
	<div class="slider-pets__card">
		<div class="slider-pets__image">
			<img src="./img/pets/${image}" alt="${name}">
			<div class="slider-pets__overlay">
				<div class="slider-pets__text-overlay">
					<h5 class="slider-pets__title-overlay">
						${name}
					</h5>
					<p class="slider-pets__descr-overlay">
						${descr}
					</p>
				</div>
			</div>
		</div>
		<div class="slider-pets__footer">
			<div class="slider-pets__text">
				<h5 class="slider-pets__title">
					${name}
				</h5>
				<p class="slider-pets__descr">
					${descr}
				</p>
			</div>
			<div class="slider-pets__icon-ibg">
				<img src="img/icons/${icon}" alt="${iconName}">
			</div>
		</div>
	</div>
`;

export { creteCardTemplate };
