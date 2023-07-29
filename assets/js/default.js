(function ($) {
	'use strict';

	$(document).ready(function ($) {
		// testimonial sliders
		$('.testimonial-sliders').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				600: {
					items: 1,
					nav: false,
				},
				1000: {
					items: 1,
					nav: false,
					loop: true,
				},
			},
		});

		// homepage slider
		// $('.homepage-slider').owlCarousel({
		// 	items: 1,
		// 	loop: true,
		// 	autoplay: true,
		// 	nav: true,
		// 	dots: false,
		// 	navText: [
		// 		'<i class="fas fa-angle-left"></i>',
		// 		'<i class="fas fa-angle-right"></i>',
		// 	],
		// 	responsive: {
		// 		0: {
		// 			items: 1,
		// 			nav: false,
		// 			loop: true,
		// 		},
		// 		600: {
		// 			items: 1,
		// 			nav: true,
		// 			loop: true,
		// 		},
		// 		1000: {
		// 			items: 1,
		// 			nav: true,
		// 			loop: true,
		// 		},
		// 	},
		// });

		// logo carousel
		$('.logo-carousel-inner').owlCarousel({
			items: 4,
			loop: true,
			autoplay: true,
			margin: 30,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				600: {
					items: 3,
					nav: false,
				},
				1000: {
					items: 4,
					nav: false,
					loop: true,
				},
			},
		});

		// toggle cart
		function toggleCart() {
			const cartContainer = document.querySelector('.cart-area .container');
			if (cartContainer.style.display === 'block') {
				cartContainer.style.display = 'none';
			} else {
				cartContainer.style.display = 'block';
			}
		}

		$('#btnCart').on('click', toggleCart);

		// close cart when clicked outside of the cart container
		$(document).mouseup(function (e) {
			var container = $('.cart-area .container');
			// if the target of the click isn't the container nor a descendant of the container
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.hide();
			}
		});

		// change qty
		$('.qty-input').bind('keyup mouseup', function () {
			var getUnitPrice = $(this).parent().find('.unit-price').text();
			var getQty = Number($(this).val());
			$(this).parent().find('.price').text(String(getUnitPrice * getQty));
			$(this).parent().find('.kgs').text(String(getUnitPrice * getQty));
		});

		// count down
		if ($('.time-countdown').length) {
			$('.time-countdown').each(function () {
				var $this = $(this),
					finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function (event) {
					var $this = $(this).html(
						event.strftime(
							'' +
							'<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' +
							'<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' +
							'<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' +
							'<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'
						)
					);
				});
			});
		}

		// projects filters isotop
		// $('.product-filters li').on('click', function () {
		// 	$('.product-filters li').removeClass('active');
		// 	$(this).addClass('active');

		// 	var selector = $(this).attr('data-filter');

		// 	$('.product-lists').isotope({
		// 		filter: selector,
		// 	});
		// });

		// isotop inner
		// $('.product-lists').isotope();

		// magnific popup
		// $('.popup-youtube').magnificPopup({
		// 	disableOn: 700,
		// 	type: 'iframe',
		// 	mainClass: 'mfp-fade',
		// 	removalDelay: 160,
		// 	preloader: false,
		// 	fixedContentPos: false,
		// });

		$('.cart-btn').click(function () {
			// Adding Product or Update quantity to Shopping Cart
			const tempCartItem = (productName, quantity, unitPrice) => `<p class="cartItem">
			<a href="#">${productName} </a><span class="price"><input type="number" class="qty-input" min="1" value="${quantity}" aria-label="Price Quantity" /> x &#2547;<span class="unit-price">${unitPrice}</span> = &#2547;<output class="price">${unitPrice * quantity}</output></span>
			</p>`

			const singleProduct = $(this).closest('.single-product-item')

			const productName = $(singleProduct).find('h3')[0].innerText + " 20kg"
			const availableQuantity = $(singleProduct).data('availableQty')
			const unitPrice = $(singleProduct).find('.price-value')[0].innerText

			if (Number(availableQuantity) > 0) {
				// $("#cartItems").html("Testing")
				// console.log(productName, availableQuantity, unitPrice);
				let found = false

				$('#cartItems .product-name').each(function () {
					if (this.innerText === productName) {
						found = true
					}
				})

				if (!found) {
					$('#cartItems').append(tempCartItem(productName, 1, unitPrice))
				} else {
					$('#cartItems .product-name').each(function () {
						if (this.innerText === productName) {
							// Updating quantity
						}
					})
				}

				// Updating count

				// Updating total
			}
		});

		// disabled cart-btn
		$('.cart-btn[disabled]').each(function () {
			this.innerHTML = '<i class="fas fa-times"></i> Not Available';
		});

		// light box
		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true,
			},
		});

		// homepage slides animations
		// $('.homepage-slider').on('translate.owl.carousel', function () {
		// 	$('.hero-text-tablecell .subtitle')
		// 		.removeClass('animated fadeInUp')
		// 		.css({ opacity: '0' });
		// 	$('.hero-text-tablecell h1')
		// 		.removeClass('animated fadeInUp')
		// 		.css({ opacity: '0', 'animation-delay': '0.3s' });
		// 	$('.hero-btns')
		// 		.removeClass('animated fadeInUp')
		// 		.css({ opacity: '0', 'animation-delay': '0.5s' });
		// });

		// $('.homepage-slider').on('translated.owl.carousel', function () {
		// 	$('.hero-text-tablecell .subtitle')
		// 		.addClass('animated fadeInUp')
		// 		.css({ opacity: '0' });
		// 	$('.hero-text-tablecell h1')
		// 		.addClass('animated fadeInUp')
		// 		.css({ opacity: '0', 'animation-delay': '0.3s' });
		// 	$('.hero-btns')
		// 		.addClass('animated fadeInUp')
		// 		.css({ opacity: '0', 'animation-delay': '0.5s' });
		// });

		// stikcy js
		$('#sticker').sticky({
			topSpacing: 0,
		});

		//mean menu
		$('.main-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: '992',
		});

		// // this will get the full URL at the address bar
		// var url = window.location.href;

		// // passes on every "a" tag
		// $('.main-menu a').each(function () {
		// 	// checks if its the same on the address bar
		// 	if (url == this.href) {
		// 		$(this).closest('li').addClass('active');
		// 		//for making parent of submenu active
		// 		$(this).closest('li').parent().parent().addClass('active');
		// 	}
		// });

		// search form
		// $('.search-bar-icon').on('click', function () {
		// 	$('.search-area').addClass('search-active');
		// });

		// $('.close-btn').on('click', function () {
		// 	$('.search-area').removeClass('search-active');
		// });
	});

	jQuery(window).on('load', function () {
		jQuery('.loader').fadeOut(1000);
	});
})(jQuery);
