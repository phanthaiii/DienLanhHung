<template>
    <div class="body-wrapper theme-clearfix" id="body_wrapper">
		<div class="ip-header">
			<h1 class="ip-logo">
				<a>
					<img src="images/theme_logo.png" alt="sw shoppy" />
				</a>
			</h1>
			<div class="ip-loader">
				<svg class="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
					<path class="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"></path>
					<path id="ip-loader-circle" class="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" style="stroke-dashoffset: 192.617; stroke-dasharray: 192.617;"></path>
				</svg>
			</div>
		</div>
		<div id="yt_header" class="yt-header wrap">
			<div class="header-style1">
				<div class="yt-header-top">
					<div class="container">
						<div class="row">
							<!-- INFORMATION -->
							<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sl-header-text">
								<div class="offer-wrapper">
									<div class="offer-header">
										<ul id="offer-info">
											<li>
												<i class="sp-ic fa fa-phone-square">&nbsp;</i>Telephone: <a title="0123 456 7891" href="#">0123 456 7891</a> 
											</li>
											
											<li>
												<i class="sp-ic fa fa-envelope">&nbsp;</i>E-mail: <a title="Contact@domain.com" href="mailto:Contact@domain.com">Contact@domain.com</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<!-- END INFORMATION -->
							
							<!-- LANGUAGE -->
							<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 top-links-action">
								<div class="block-action-header language-switcher pull-right">
									<div class="textwidget">
										<div id="lang_sel">
											<ul class="nav">
												<li>
													<a class="lang_sel_sel icl-en" href="#">
														<img class="iclflag" title="English" alt="en" src="../images/en.png" width="18" height="12">&nbsp;ENG
													</a>
													<ul>
														<li class="icl-en active">
															<a href="#">
																<img class="iclflag" title="English" alt="en" src="../images/en.png" width="18" height="12">&nbsp;ENG
															</a>
														</li>
														
														<li class="icl-ar">
															<a href="#">
																<img class="iclflag" title="Arabic" alt="ar" src="../images/ar.png" width="18" height="12">&nbsp;ARA
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<!-- END LANGUAGE -->
								
								<!-- CURRENCY -->
								<div class="block-action-header block-currency pull-right">
									<ul class="currency_w">
										<li>
											<a href="#" class="">USD</a>
											<ul class="currency_switcher">
												<li>
													<a href="#" class="reset default active" data-currencycode="USD">USD</a>
												</li>
												<li>
													<a href="#" class="" data-currencycode="EUR">EUR</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
								<!-- END CURRENCY -->
								
								<!-- USER ACCOUNT -->
								<div class="block-action-header top-link-account my-account-link my-account-link-other pull-right">
									<ul id="menu-my-account" class="menu">
										<li class="dropdown menu-my-account ya-menu-custom level1">
											<a href="home_style_1_my_account.html" class="item-link dropdown-toggle">
												<span class="have-title">
													<span class="menu-title">My Account</span>
												</span>
											</a>
											
											<ul class="dropdown-menu nav-level1 one-column">
												<li class="one-column menu-checkout">
													<a href="home_style_1_checkout.html">
														<span class="have-title">
															<span class="menu-title">Checkout</span>
														</span>
													</a>
												</li>
												
												<li class="one-column menu-my-account">
													<a href="home_style_1_my_account.html">
														<span class="have-title">
															<span class="menu-title">My Account</span>
														</span>
													</a>
												</li>
												
												<li class="one-column menu-my-cart">
													<a href="home_style_1_cart.html">
														<span class="have-title">
															<span class="menu-title">My Cart</span>
														</span>
													</a>
												</li>
												
												<li class="one-column menu-wishlist">
													<a href="home_style_1_wishlist.html">
														<span class="have-title">
															<span class="menu-title">Wishlist</span>
														</span>
													</a>
												</li>
												
												<li class="yith-woocompare-open one-column menu-compare">
													<a href="#">
														<span class="have-title">
															<span class="compare menu-title">Compare</span>
														</span>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
								
								<div class="block-action-header top-link-account login-link pull-right">
									<div class="top-login pull-left">
										<ul>
											<li>
												<a href="javascript:void(0);" data-toggle="modal" data-target="#login_form"><span>Login</span></a> 
											</li>
										</ul>
									</div>
								</div>
								
								<div class="widget-6 widget rev-slider-widget-2 widget_revslider">
									<div class="widget-inner"></div>
								</div>
								<!-- END USER ACCOUNT -->
							</div>
							
							<!-- REGISTER_LOGIN DIALOG -->
							<div class="modal fade" id="login_form" tabindex="-1" role="dialog" aria-hidden="true">
								<div class="modal-dialog block-popup-login">
									<a href="javascript:void(0)" title="Close" class="close close-login" data-dismiss="modal">Close</a>
									
									<div class="tt_popup_login">
										<strong>Sign in Or Register</strong>
									</div>
									
									<form class="login">
										<div class="block-content" style="height: 238px;">
											<div class="col-reg registered-account">
												<div class="email-input">
													<input type="text" class="form-control input-text username" name="username" id="username" placeholder="Username" />
												</div>
												
												<div class="pass-input">
													<input class="form-control input-text password" type="password" placeholder="Password" name="password" id="password" />
												</div>
												
												<div class="ft-link-p">
													<a href="home_style_1_lost_pass.html" title="Forgot your password">Forgot your password?</a>
												</div>
												
												<div class="actions">
													<div class="submit-login">	        
														<input type="submit" class="button btn-submit-login" name="login" value="Login" />
													</div>
												</div>
											</div>
											
											<div class="col-reg login-customer">
												<h2>NEW HERE?</h2>
												<p class="note-reg">Registration is free and easy!</p>
												
												<ul class="list-log">
													<li>Faster checkout</li>
													
													<li>Save multiple shipping addresses</li>
													
													<li>View and track orders and more</li>
												</ul>
												<a href="home_style_1_create_acc.html" title="Register" class="btn-reg-popup">Create an account</a>
											</div>
											
											<div class="clear"></div>
										</div>
									</form>
									
									<div class="clear"></div>
								</div>
							</div>
							<!-- END REGISTER_LOGIN DIALOG -->
						</div>
					</div>
				</div>
				
				<!-- HEADER MENU -->
				<div class="yt-header-middle">
					<div class="container">
						<div class="row">
							<!-- LOGO -->
							<div class="col-lg-3 col-md-2 col-sm-12 col-xs-12 logo-wrapper">
								<a href="home_style_1.html">
									<img src="../images/logo-blue.png" alt="sw shoppy" width="140" height="57"/>
									
								</a>
							</div>
							<!-- END LOGO -->
							
							<div class="col-lg-9 col-md-10 col-sm-12 col-xs-12 yt-megamenu">
								<div class="yt-header-under">
									<nav id="primary-menu" class="primary-menu">
										<div class="yt-menu">
											<div class="navbar-inner navbar-inverse">
												<div class="resmenu-container">
													<!-- LIST MOBILE MENU ITEMS -->
													<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#ResMenuprimary_menu">
														<span class="sr-only">Categories</span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
													</button>
													
													<div id="ResMenuprimary_menu" class="collapse menu-responsive-wrapper">
														<ul id="menu-primary-menu" class="flytheme_resmenu">
															<li class="active res-dropdown menu-blog">
																<a class="item-link dropdown-toggle" href="#">Home</a>
																<span class="show-dropdown"></span>
																
																<ul class="dropdown-resmenu">
																	<li class="res-dropdown menu-blog-layouts">
																		<a class="item-link dropdown-toggle" href="#">Home Layouts</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-home-style-1">
																				<a href="home_style_1.html">Home style 1</a>
																			</li>
																			
																			<li class="menu-home-style-2">
																				<a href="home_style_2.html">Home style 2</a>
																			</li>
																			
																			<li class="menu-home-style-4">
																				<a href="home_style_4.html">Home style 3</a>
																			</li>
																			
																			<li class="menu-home-style-8">
																				<a href="home_style_8.html">Home style 4</a>
																			</li>
																			
																			<li class="menu-home-style-13">
																				<a href="home_style_13.html">Home style 5</a>
																			</li>
																							
																			<li class="active menu-home-style-3">
																				<a href="home_style_3.html">Home style 6</a>
																			</li>
																							
																			<li class="menu-home-style-5">
																				<a href="home_style_5.html">Home style 7</a>
																			</li>
																							
																			<li class="menu-home-style-6">
																				<a href="home_style_6.html">Home style 8</a>
																			</li>
																							
																			<li class="menu-home-style-7">
																				<a href="home_style_7.html">Home style 9</a>
																			</li>
																			
																			<li class="menu-home-style-14">
																				<a href="home_style_14.html">Home style 10</a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li>
															
															<li class="res-dropdown menu-shop">
																<a class="item-link dropdown-toggle" href="#">Shop</a>
																<span class="show-dropdown"></span>
																
																<ul class="dropdown-resmenu">
																	<li class="res-dropdown menu-shop-layouts">
																		<a class="item-link dropdown-toggle" href="#">Shop layouts</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-left-sidebar">
																				<a href="home_style_1_shop_left_sidebar.html">Left Sidebar</a>
																			</li>
																			
																			<li class="menu-right-sidebar">
																				<a href="home_style_1_shop_right_sidebar.html">Right Sidebar</a>
																			</li>
																			
																			<li class="menu-full-width">
																				<a href="home_style_1_shop_full_sidebar.html">Full Width</a>
																			</li>
																		</ul>
																	</li>
																	
																	<li class="res-dropdown menu-shop-pages">
																		<a class="item-link dropdown-toggle" href="#">Shop Pages</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-cart">
																				<a href="home_style_1_cart.html">Cart</a>
																			</li>
																			
																			<li class="menu-my-account">
																				<a href="home_style_1_my_account.html">My Account</a>
																			</li>
																			
																			<li class="menu-checkout">
																				<a href="home_style_1_checkout.html">Checkout</a>
																			</li>
																			
																			<li class="menu-wishlist">
																				<a href="home_style_1_wishlist.html">Wishlist</a>
																			</li>
																		</ul>
																	</li>
																	
																	<li class="res-dropdown menu-product-layouts">
																		<a class="item-link dropdown-toggle" href="#">Product Layouts</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-full-width-default">
																				<a href="home_style_1_shop_product_default.html">Full width Default</a>
																			</li>

																			<li class="menu-full-width-style-2">
																				<a href="home_style_1_shop_product_style2.html">Full width style 2</a>
																			</li>
																			
																			<li class="menu-full-width-style-3">
																				<a href="home_style_1_shop_product_style3.html">Full width style 3</a>
																			</li>
																			
																			<li class="menu-right-sidebar">
																				<a href="home_style_1_shop_product_right_sidebar.html">Right Sidebar</a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li>
															
															<li class="style3 res-dropdown menu-daily-deals">
																<a class="item-link dropdown-toggle" href="#">Daily Deals</a>
																<span class="show-dropdown"></span>
																
																<ul class="dropdown-resmenu">
																	<li class="menu-product-tab">
																		<a href="#">Product tab</a>
																	</li>
																</ul>
															</li>
															
															<li class="res-dropdown menu-blog">
																<a class="item-link dropdown-toggle" href="#">Blog</a>
																<span class="show-dropdown"></span>
																
																<ul class="dropdown-resmenu">
																	<li class="res-dropdown menu-blog-layouts">
																		<a class="item-link dropdown-toggle" href="#">Blog Layouts</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-full-width">
																				<a href="home_style_1_blog_full_width_grid.html">Full Width</a>
																			</li>
																			
																			<li class="menu-left-sidebar">
																				<a href="home_style_1_blog_left_sidebar_list.html">Left Sidebar</a>
																			</li>
																			
																			<li class="menu-right-sidebar">
																				<a href="home_style_1_blog_3_columns_grid.html">3 Columns Grid</a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li>
															
															<li class="res-dropdown menu-pages">
																<a class="item-link dropdown-toggle" href="#">Pages</a>
																<span class="show-dropdown"></span>
																<ul class="dropdown-resmenu">
																	<li class="res-dropdown menu-bonus-pages-1">
																		<a class="item-link dropdown-toggle" href="#">Bonus Pages 1</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-forum">
																				<a href="home_style_1_forum.html">Forum</a>
																			</li>
																			
																			<li class="menu-topic">
																				<a href="home_style_1_topic.html">Topic</a>
																			</li>
																		</ul>
																	</li>
																	
																	<li class="res-dropdown menu-about-us">
																		<a class="item-link dropdown-toggle" href="#">About Us</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-about-us-1">
																				<a href="home_style_1_about_us_1.html">About us 1</a>
																			</li>
																			
																			<li class="menu-about-us-4">
																				<a href="home_style_1_about_us_4.html">About us 2</a>
																			</li>
																		</ul>
																	</li>
																	
																	<li class="res-dropdown menu-contact-us">
																		<a class="item-link dropdown-toggle" href="#">Contact Us</a>
																		<span class="show-dropdown"></span>
																		
																		<ul class="dropdown-resmenu">
																			<li class="menu-contact-us-1">
																				<a href="home_style_1_contact_us_1.html">Contact Us 1</a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li>
															
															<li class="res-dropdown menu-portfolios">
																<a class="item-link dropdown-toggle" href="#">Portfolios</a>
																<span class="show-dropdown"></span>
																
																<ul class="dropdown-resmenu">
																	<li class="menu-product-tab">
																		<a href="home_style_1_portfolios_2_columns.html">Portfolio 2 columns</a>
																	</li>
																	
																	<li class="menu-product-tab">
																		<a href="home_style_1_portfolios_3_columns.html">Portfolio 3 columns</a>
																	</li>
																	
																	<li class="menu-product-tab">
																		<a href="home_style_1_portfolios_4_columns.html">Portfolio 4 columns</a>
																	</li>
																</ul>
															</li>
														</ul>
													</div>
													<!-- END LIST MOBILE MENU ITEMS -->
												</div>
												
												<!-- LIST NORMAL MENU ITEMS -->
												<ul id="menu-primary-menu-1" class="nav nav-pills nav-mega flytheme-menures">
													<li class="active dropdown menu-portfolios ya-menu-custom level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Home</span>
															</span>
														</a>
													
														<ul class="dropdown-menu nav-level1 one-column">
															<li class="one-column menu-portfolio-1-columns">
																<a href="home_style_1.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 1</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-2-columns">
																<a href="home_style_2.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 2</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-3-columns">
																<a href="home_style_4.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 3</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-4-columns">
																<a href="home_style_8.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 4</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-5-columns">
																<a href="home_style_13.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 5</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-6-columns">
																<a href="home_style_3.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 6</span>
																	</span>
																</a>
															</li>
																
															<li class="one-column menu-portfolio-7-columns">
																<a href="home_style_5.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 7</span>
																	</span>
																</a>
															</li>
																
															<li class="one-column menu-portfolio-8-columns">
																<a href="home_style_6.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 8</span>
																	</span>
																</a>
															</li>
																
															<li class="one-column menu-portfolio-9-columns">
																<a href="home_style_7.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 9</span>
																	</span>
																</a>
															</li>
												
															<li class="one-column menu-portfolio-10-columns">
																<a href="home_style_14.html">
																	<span class="have-title">
																		<span class="menu-title">Home style 10</span>
																	</span>
																</a>
															</li>
														</ul>
													</li>	
																
													<li class="dropdown menu-shop ya-mega-menu level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Shop</span>
															</span>
														</a>
													
														<ul class="dropdown-menu nav-level1 three-column">
															<li class="dropdown-submenu three-column menu-shop-layouts">
																<span class="have-title">
																	<span class="menu-title">Shop layouts</span>
																</span>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-left-sidebar">
																		<a href="home_style_1_shop_left_sidebar.html">
																			<span class="have-title">
																				<span class="menu-title">Left Sidebar</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-right-sidebar">
																		<a href="home_style_1_shop_right_sidebar.html">
																			<span class="have-title">
																				<span class="menu-title">Right Sidebar</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-full-width">
																		<a href="home_style_1_shop_full_sidebar.html">
																			<span class="have-title">
																				<span class="menu-title">Full Width</span>
																			</span>
																		</a>
																	</li>																
																</ul>
															</li>		
															
															<li class="dropdown-submenu three-column menu-shop-pages">
																<span class="have-title">
																	<span class="menu-title">Shop Pages</span>
																</span>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-cart">
																		<a href="home_style_1_cart.html">
																			<span class="have-title">
																				<span class="menu-title">Cart</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-my-account">
																		<a href="home_style_1_my_account.html">
																			<span class="have-title">
																				<span class="menu-title">My account</span>
																			</span>
																		</a>
																	</li>

																	<li class="menu-checkout">
																		<a href="home_style_1_checkout.html">
																			<span class="have-title">
																				<span class="menu-title">Checkout</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-wishlist">
																		<a href="home_style_1_wishlist.html">
																			<span class="have-title">
																				<span class="menu-title">Wishlist</span>
																			</span>
																		</a>
																	</li>
																</ul>
															</li>												
															
															<li class="dropdown-submenu three-column menu-product-layouts">
																<span class="have-title">
																	<span class="menu-title">Product Layouts</span>
																</span>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-full-width-default">
																		<a href="home_style_1_shop_product_default.html">
																			<span class="have-title">
																				<span class="menu-title">Full width Default</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-full-width-style-2">
																		<a href="home_style_1_shop_product_style2.html">
																			<span class="have-title">
																				<span class="menu-title">Full width style 2</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-full-width-style-3">
																		<a href="home_style_1_shop_product_style3.html">
																			<span class="have-title">
																				<span class="menu-title">Full width style 3</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-right-sidebar">
																		<a href="home_style_1_shop_product_right_sidebar.html">
																			<span class="have-title">
																				<span class="menu-title">Right Sidebar</span>
																			</span>
																		</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												
													<li class="style3 dropdown menu-daily-deals ya-mega-menu level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Daily Deals</span>
															</span>
														</a>
														
														<ul class="dropdown-menu nav-level1 four-column">
															<li class="four-column menu-product-tab">
																<div class="listing-tab-shortcode">
																	<div class="tabbable tabs">
																		<ul class="nav nav-tabs">
																			<li class="active">
																				<a href="#listing_category_01" data-toggle="tabs">Apparel & Accessories</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_02" data-toggle="tabs">Basketballs</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_03" data-toggle="tabs">Memory Cards</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_04" data-toggle="tabs">Drivers</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_05" data-toggle="tabs">Golf</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_06" data-toggle="tabs">Samsung</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_07" data-toggle="tabs">Jiteme catem</a>
																			</li>
																			
																			<li class="">
																				<a href="#listing_category_08" data-toggle="tabs">Fashion</a>
																			</li>
																		</ul>
																		
																		<div class="tab-content">
																			<div id="listing_category_01" class="tab-pane clearfix active">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" src="images/12-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="12" 
																												srcset="images/12-300x300.jpg 300w, images/12-260x260.jpg 260w, images/12.jpg 600w, images/12-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Dolore turkey">Dolore turkey</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>440.00
																											</span>
																										</del> 
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>400.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="9" 
																													src="images/9-300x300.jpg" 
																													srcset="images/9-300x300.jpg 300w, images/9-260x260.jpg 260w, images/9.jpg 600w, images/9-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Jowl ullamco">Jowl ullamco</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>77.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>60.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="5" 
																												src="images/51-300x300.jpg" 
																												srcset="images/51-300x300.jpg 300w, images/51-260x260.jpg 260w, images/51.jpg 600w, images/51-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Sint drumstick">Sint drumstick</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>55.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_02" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="5" 
																												src="images/51-300x300.jpg" 
																												srcset="images/51-300x300.jpg 300w, images/51-260x260.jpg 260w, images/51.jpg 600w, images/51-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Sint drumstick">Sint drumstick</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>55.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="19" 
																												src="images/19-300x300.jpg" 
																												srcset="images/19-300x300.jpg 300w, images/19-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="External/Affiliate product">External/Affiliate product</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>180.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="12" 
																												src="images/12-300x300.jpg" 
																												srcset="images/12-300x300.jpg 300w, images/12-260x260.jpg 260w, images/12.jpg 600w, images/12-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Huma saren mazem kae">Huma saren mazem kae</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>4.99
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_03" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="9" 
																													src="images/9-300x300.jpg" 
																													srcset="images/9-300x300.jpg 300w, images/9-260x260.jpg 260w, images/9.jpg 600w, images/9-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Jowl ullamco">Jowl ullamco</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>77.00
																											</span>
																										</del> 
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>60.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="5" 
																												src="images/51-300x300.jpg" 
																												srcset="images/51-300x300.jpg 300w, images/51-260x260.jpg 260w, images/51.jpg 600w, images/51-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Sint drumstick">Sint drumstick</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>55.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="4" 
																												src="images/4-300x300.jpg" 
																												srcset="images/4-300x300.jpg 300w, images/4-260x260.jpg 260w, images/4.jpg 600w, images/4-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Aliqua minim">Aliqua minim</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>880.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>800.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_04" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="30_1" 
																												src="images/30_1-300x300.jpg" 
																												srcset="images/30_1-300x300.jpg 300w, images/30_1-260x260.jpg 260w, images/30_1.jpg 600w, images/30_1-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Umas tika lorem narem">Umas tika lorem narem</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>545.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>345.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="31" 
																												src="images/31-300x300.jpg" 
																												srcset="images/31-300x300.jpg 300w, images/31-260x260.jpg 260w, images/31.jpg 600w, images/31-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Euismod leo diam nazem">Euismod leo diam nazem</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>510.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_05" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="23_1" 
																												src="images/23_1-300x300.jpg" 
																												srcset="images/23_1-300x300.jpg 300w, images/23_1-260x260.jpg 260w, images/23_1.jpg 600w, images/23_1-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content"><span style="width:0px"></span></div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Wiru mise kaztem">Wiru mise kaztem</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>1.99
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="6_5" 
																												src="images/6_5-300x300.jpg" 
																												srcset="images/6_5-300x300.jpg 300w, images/6_5-260x260.jpg 260w, images/6_5.jpg 600w, images/6_5-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:70px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Rika mire pisan">Rika mire pisan</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>0.99
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_06" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="12" 
																												src="images/12-300x300.jpg" 
																												srcset="images/12-300x300.jpg 300w, images/12-260x260.jpg 260w, images/12.jpg 600w, images/12-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																								
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Dolore turkey">Dolore turkey</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>440.00
																											</span>
																										</del> 
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>400.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="9" 
																													src="images/9-300x300.jpg" 
																													srcset="images/9-300x300.jpg 300w, images/9-260x260.jpg 260w, images/9.jpg 600w, images/9-180x180.jpg 180w"
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Jowl ullamco">Jowl ullamco</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>77.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>60.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="5" 
																												src="images/51-300x300.jpg" 
																												srcset="images/51-300x300.jpg 300w, images/51-260x260.jpg 260w, images/51.jpg 600w, images/51-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:56px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Sint drumstick">Sint drumstick</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>55.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			
																			<div id="listing_category_07" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="30_1" 
																												src="images/30_1-300x300.jpg" 
																												srcset="images/30_1-300x300.jpg 300w, images/30_1-260x260.jpg 260w, images/30_1.jpg 600w, images/30_1-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Umas tika lorem narem">Umas tika lorem narem</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>545.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>345.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="17" 
																												src="images/17-300x300.jpg" 
																												srcset="images/17-300x300.jpg 300w, images/17-260x260.jpg 260w, images/17.jpg 600w, images/17-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Morbi vulputate diam">Morbi vulputate diam</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>560.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>520.00
																											</span>
																										</ins>
																									</span>																							
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																				
																			<div id="listing_category_08" class="tab-pane clearfix">
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<span class="onsale">Sale!</span>
																								<a href="home_style_1_shop_product_default.html">
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="1" 
																												src="images/1-2-300x300.jpg" 
																												srcset="images/1-2-300x300.jpg 300w, images/1-2-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Nulla in diam">Nulla in diam</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<del>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>345.00
																											</span>
																										</del> 
																										
																										<ins>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>235.00
																											</span>
																										</ins>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a>
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="2" 
																												src="images/2-2-300x300.jpg" 
																												srcset="images/2-2-300x300.jpg 300w, images/2-2-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Praesent metus elit">Praesent metus elit</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>280.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				
																				<div class="item">
																					<div class="item-wrap">
																						<div class="item-detail">
																							<div class="item-img products-thumb">
																								<a>
																									<div class="product-thumb-hover">
																										<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="2" 
																												src="images/2-2-300x300.jpg" 
																												srcset="images/2-2-300x300.jpg 300w, images/2-2-180x180.jpg 180w" 
																												sizes="(max-width: 300px) 100vw, 300px" />
																									</div>
																								</a>
																							</div>
																							
																							<div class="item-content">
																								<div class="reviews-content">
																									<span style="width:0px"></span>
																								</div>
																								
																								<h4>
																									<a href="home_style_1_shop_product_default.html" title="Praesent metus elit">Praesent metus elit</a>
																								</h4>
																								
																								<div class="item-price">
																									<span>
																										<span class="woocommerce-Price-amount amount">
																											<span class="woocommerce-Price-currencySymbol">$</span>280.00
																										</span>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</li>
												
													<li class="dropdown menu-portfolios ya-menu-custom level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Blog</span>
															</span>
														</a>
													
														<ul class="dropdown-menu nav-level1 one-column">
															<li class="one-column menu-portfolio-2-columns">
																<a href="home_style_1_blog_full_width_grid.html">
																	<span class="have-title">
																		<span class="menu-title">Full Width Grid</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-3-columns">
																<a href="home_style_1_blog_left_sidebar_list.html">
																	<span class="have-title">
																		<span class="menu-title">Left Sidebar Grid</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-4-columns">
																<a href="home_style_1_blog_3_columns_grid.html">
																	<span class="have-title">
																		<span class="menu-title">3 Columns Grid</span>
																	</span>
																</a>
															</li>
														</ul>
													</li>											
															
													<li class="dropdown menu-pages ya-mega-menu level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Pages</span>
															</span>
														</a>
														
														<ul class="dropdown-menu nav-level1 three-column">	
															<li class="dropdown-submenu three-column menu-bonus-pages-1">
																<a>
																	<span class="have-title">
																		<span class="menu-title">Bonus Pages 1</span>
																	</span>
																</a>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-forum">
																		<a href="home_style_1_forum.html">
																			<span class="have-title">
																				<span class="menu-title">Forum</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-topic">
																		<a href="home_style_1_topic.html">
																			<span class="have-title">
																				<span class="menu-title">Topic</span>
																			</span>
																		</a>
																	</li>
																</ul>
															</li>
																		
															<li class="dropdown-submenu three-column menu-about-us">
																<span class="have-title">
																	<span class="menu-title">About Us</span>
																</span>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-about-us-1">
																		<a href="home_style_1_about_us_1.html">
																			<span class="have-title">
																				<span class="menu-title">About us 1</span>
																			</span>
																		</a>
																	</li>
																	
																	<li class="menu-about-us-4">
																		<a href="home_style_1_about_us_4.html">
																			<span class="have-title">
																				<span class="menu-title">About us 2</span>
																			</span>
																		</a>
																	</li>
																</ul>
															</li>
															
															<li class="dropdown-submenu three-column menu-contact-us">
																<span class="have-title">
																	<span class="menu-title">Contact Us</span>
																</span>
																
																<ul class="dropdown-sub nav-level2">
																	<li class="menu-contact-us-1">
																		<a href="home_style_1_contact_us_1.html">
																			<span class="have-title">
																				<span class="menu-title">Contact Us 1</span>
																			</span>
																		</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>						
															
													<li class="dropdown menu-portfolios ya-menu-custom level1">
														<a href="#" class="item-link dropdown-toggle">
															<span class="have-title">
																<span class="menu-title">Portfolios</span>
															</span>
														</a>
														
														<ul class="dropdown-menu nav-level1 one-column">
															<li class="one-column menu-portfolio-2-columns">
																<a href="home_style_1_portfolios_2_columns.html">
																	<span class="have-title">
																		<span class="menu-title">Portfolio 2 Columns</span>
																	</span>
																</a>
															</li> 
															
															<li class="one-column menu-portfolio-3-columns">
																<a href="home_style_1_portfolios_3_columns.html">
																	<span class="have-title">
																		<span class="menu-title">Portfolio 3 Columns</span>
																	</span>
																</a>
															</li>
															
															<li class="one-column menu-portfolio-4-columns">
																<a href="home_style_1_portfolios_4_columns.html">
																	<span class="have-title">
																		<span class="menu-title">Portfolio 4 Columns</span>
																	</span>
																</a>
															</li> 
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</nav>
								
									<!-- SHOPPING CART -->
									<div class="mini-cart-header">
										<div class="top-form top-form-minicart minicart-product-style pull-right">
											<div class="top-minicart pull-right">
												<a class="cart-contents" href="#" title="View your shopping cart">			
													<span class="minicart-number">0</span> item - 
													<span class="woocommerce-Price-amount amount">
														<span class="woocommerce-Price-currencySymbol">$</span>0.00
													</span>					
												</a>
											</div>
										</div>
									</div>
									<!-- END SHOPPING CART -->
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- END HEADER MENU -->
				
				<!-- HEADER CATEGORIES SEARCH -->
				<div class="yt-header-under-2">
					<div class="container">
						<div class="row yt-header-under-wrap">
							<div class="yt-main-menu col-md-12">
								<div class="header-under-2-wrapper">
									<div class="yt-searchbox-vermenu">
										<div class="row">
											<div class="col-lg-3 col-md-4 col-sm-3 col-xs-3 vertical-mega">
												<!-- CATEGORIES -->
												<div class="ver-megamenu-header">
													<div class="mega-left-title">
														<strong>Categories</strong>
													</div>
													
													<div class="resmenu-container">
														<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#ResMenuleftmenu">
															<span class="sr-only">Categories</span>
															<span class="icon-bar"></span>
															<span class="icon-bar"></span>
															<span class="icon-bar"></span>
														</button>
														
														<div id="ResMenuleftmenu" class="collapse menu-responsive-wrapper">
															<ul id="menu-left-menu" class="flytheme_resmenu">
																<li class="res-dropdown menu-smartphones-accessories">
																	<a class="item-link dropdown-toggle" href="#">Smartphones Accessories</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="res-dropdown menu-categories-1">
																			<a class="item-link dropdown-toggle" href="#">Categories 1</a>
																			<span class="show-dropdown"></span>
																			
																			<ul class="dropdown-resmenu">
																				<li class="menu-camera-camcorders">
																					<a href="#">Camera & Camcorders</a>
																				</li>
																				
																				<li class="menu-cosmetic">
																					<a href="#">Cosmetic</a>
																				</li>
																				
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																				
																				<li class="menu-laptop-computer">
																					<a href="#">Laptop & Computer</a>
																				</li>
																				
																				<li class="menu-medical-healthcare">
																					<a href="#">Medical & Healthcare</a>
																				</li>
																				
																				<li class="menu-phasellus-laoreet">
																					<a href="#">Phasellus laoreet</a>
																				</li>
																				
																				<li class="menu-etiam-id-finibus">
																					<a href="#">Etiam id finibus</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="res-dropdown menu-categories-2">
																			<a class="item-link dropdown-toggle" href="#">Categories 2</a>
																			<span class="show-dropdown"></span>
														 
																			<ul class="dropdown-resmenu">
																				<li class="menu-camera-camcorders">
																					<a href="#">Camera & Camcorders</a>
																				</li>
																				
																				<li class="menu-cosmetic">
																					<a href="#">Cosmetic</a>
																				</li>
																				
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																				
																				<li class="menu-laptop-computer">
																					<a href="#">Laptop & Computer</a>
																				</li>
																				
																				<li class="menu-medical-healthcare">
																					<a href="#">Medical & Healthcare</a>
																				</li>
																				
																				<li class="menu-aliquam-in-risus">
																					<a href="#">Aliquam in risus</a>
																				</li>
																				
																				<li class="menu-scelerisque-odio">
																					<a href="#">Scelerisque odio</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="menu-img-menu">
																			<a href="#">img-menu</a>
																		</li>
																	</ul>
																</li>
																
																<li class="res-dropdown menu-computers-networking">
																	<a class="item-link dropdown-toggle" href="#">Computers & Networking</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="menu-lorem-sed-fringilla">
																			<a href="#">Lorem sed fringilla</a>
																		</li>
																		
																		<li class="menu-vestibulum-dignissim">
																			<a href="#">Vestibulum dignissim</a>
																		</li>
																		
																		<li class="res-dropdown menu-cum-sociis-natoque">
																			<a class="item-link dropdown-toggle" href="#">Cum sociis natoque</a>
																			<span class="show-dropdown"></span>
																			
																			<ul class="dropdown-resmenu">
																				<li class="menu-vivamus-sit-amet">
																					<a href="#">Vivamus sit amet</a>
																				</li>
																				
																				<li class="menu-morbi-at-lobortis">
																					<a href="#">Morbi at lobortis</a>
																				</li>
																				
																				<li class="menu-suspendisse-suscipit">
																					<a href="#">Suspendisse suscipit</a>
																				</li>
																				
																				<li class="menu-ullamcorper-mi">
																					<a href="#">Ullamcorper mi</a>
																				</li>
																				
																				<li class="menu-efficitur-libero">
																					<a href="#">Efficitur libero</a>
																				</li>
																				
																				<li class="menu-consectetur-ex">
																					<a href="#">Consectetur ex</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="menu-fusce-ultricies">
																			<a href="#">Fusce ultricies</a>
																		</li>
																		
																		<li class="menu-vestibulum-ante">
																			<a href="#">Vestibulum ante</a>
																		</li>
																		
																		<li class="menu-aliquam-iaculis">
																			<a href="#">Aliquam iaculis</a>
																		</li>
																	</ul>
																</li>
																
																<li class="res-dropdown menu-smartphones-tablets">
																	<a class="item-link dropdown-toggle" href="#">Smartphones & Tablets</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="menu-samsung">
																			<a href="#">Samsung</a>
																		</li>
																		
																		<li class="menu-nokia">
																			<a href="#">Nokia</a>
																		</li>
																		
																		<li class="menu-apple">
																			<a href="#">Apple</a>
																		</li>
																		
																		<li class="menu-blackberry">
																			<a href="#">BlackBerry</a>
																		</li>
																	</ul>
																</li>
																
																<li class="menu-car-accessories">
																	<a class="item-link" href="#">Car Accessories</a>
																</li>
																
																<li class="menu-lights-lighting">
																	<a class="item-link" href="#">Lights & Lighting</a>
																</li>
																
																<li class="menu-home-office">
																	<a class="item-link" href="#">Home & Office</a>
																</li>
																
																<li class="res-dropdown menu-sports-outdoors">
																	<a class="item-link dropdown-toggle" href="#">Sports & Outdoors</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="res-dropdown menu-categories-1">
																			<a class="item-link dropdown-toggle" href="#">Categories 1</a>
																			<span class="show-dropdown"></span>
														 
																			<ul class="dropdown-resmenu">
																				<li class="menu-camera-camcorders">
																					<a href="#">Camera & Camcorders</a>
																				</li>
																				
																				<li class="menu-cosmetic">
																					<a href="#">Cosmetic</a>
																				</li>
																				
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																			
																				<li class="menu-laptop-computer">
																					<a href="#">Laptop & Computer</a>
																				</li>
																			
																				<li class="menu-medical-healthcare">
																					<a href="#">Medical & Healthcare</a>
																				</li>
																			
																				<li class="menu-consectetur-adipisc">
																					<a href="#">Consectetur adipisc</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="res-dropdown menu-categories-2">
																			<a class="item-link dropdown-toggle" href="#">Categories 2</a>
																			<span class="show-dropdown"></span>
																			
																			<ul class="dropdown-resmenu">
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																				
																				<li class="menu-suits-blazer">
																					<a href="#">Suits & Blazer</a>
																				</li>
																				
																				<li class="menu-shoes">
																					<a href="#">Shoes</a>
																				</li>
																				
																				<li class="menu-smartphone-tablets">
																					<a href="#">Smartphone & Tablets</a>
																				</li>
																				
																				<li class="menu-sport-game">
																					<a href="#">Sport & Game</a>
																				</li>
																				
																				<li class="menu-maecenas-fringilla">
																					<a href="#">Maecenas fringilla</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="res-dropdown menu-categories-3">
																			<a class="item-link dropdown-toggle" href="#">Categories 3</a>
																			<span class="show-dropdown"></span>
																			
																			<ul class="dropdown-resmenu">
																				<li class="menu-camera-camcorders">
																					<a href="#">Camera & Camcorders</a>
																				</li>
																				
																				<li class="menu-cosmetic">
																					<a href="#">Cosmetic</a>
																				</li>
																				
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																				
																				<li class="menu-laptop-computer">
																					<a href="#">Laptop & Computer</a>
																				</li>
																				
																				<li class="menu-medical-healthcare">
																					<a href="#">Medical & Healthcare</a>
																				</li>
																				
																				<li class="menu-magna-blandit">
																					<a href="#">Magna blandit</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="res-dropdown menu-categories-4">
																			<a class="item-link dropdown-toggle" href="#">Categories 4</a>
																			<span class="show-dropdown"></span>
																			
																			<ul class="dropdown-resmenu">
																				<li class="menu-electronic">
																					<a href="#">Electronic</a>
																				</li>
																				
																				<li class="menu-suits-blazer">
																					<a href="#">Suits & Blazer</a>
																				</li>
																				
																				<li class="menu-shoes">
																					<a href="#">Shoes</a>
																				</li>
																				
																				<li class="menu-smartphone-tablets">
																					<a href="#">Smartphone & Tablets</a>
																				</li>
																				
																				<li class="menu-sport-game">
																					<a href="#">Sport & Game</a>
																				</li>
																				
																				<li class="menu-donec-venenatis">
																					<a href="#">Donec venenatis</a>
																				</li>
																			</ul>
																		</li>
																		
																		<li class="menu-img-menu">
																			<a href="#">img-menu</a>
																		</li>
																		
																		<li class="menu-html-menu">
																			<a href="#">html-menu</a>
																		</li>
																	</ul>
																</li>
																
																<li class="menu-apparel-accessories">
																	<a class="item-link" href="#">Apparel & Accessories</a>
																</li>
																
																<li class="menu-intimate-apparel">
																	<a class="item-link" href="#">Intimate Apparel</a>
																</li>
																
																<li class="res-dropdown menu-health-beauty">
																	<a class="item-link dropdown-toggle" href="#">Health & Beauty</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="menu-loreal">
																			<a href="#">L&#8217;Oreal</a>
																		</li>
																		
																		<li class="menu-ponds">
																			<a href="#">Pond&#8217;s</a>
																		</li>
																		
																		<li class="menu-ohui">
																			<a href="#">Ohui</a>
																		</li>
																		
																		<li class="menu-essance">
																			<a href="#">Essance</a>
																		</li>
																	</ul>
																</li>
																
																<li class="res-dropdown menu-toys-hobbies">
																	<a class="item-link dropdown-toggle" href="#">Toys & Hobbies</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="menu-academy">
																			<a href="#">Academy</a>
																		</li>
																		
																		<li class="menu-bachmann">
																			<a href="#">Bachmann</a>
																		</li>
																		
																		<li class="menu-bepuzzled">
																			<a href="#">Bepuzzled</a>
																		</li>
																		
																		<li class="menu-dimensions">
																			<a href="#">Dimensions</a>
																		</li>
																		
																		<li class="menu-fashion-angels">
																			<a href="#">Fashion Angels</a>
																		</li>
																		
																		<li class="menu-laser-pegs">
																			<a href="#">Laser Pegs</a>
																		</li>
																	</ul>
																</li>
																 
																<li class="res-dropdown menu-cameras-camcorders">
																	<a class="item-link dropdown-toggle" href="#">Cameras & Camcorders</a>
																	<span class="show-dropdown"></span>
																	
																	<ul class="dropdown-resmenu">
																		<li class="menu-canon-camera">
																			<a href="#">Canon Camera</a>
																		</li>
																		
																		<li class="menu-sony-camera">
																			<a href="#">Sony Camera</a>
																		</li>
																		
																		<li class="menu-nikon-camera">
																			<a href="#">Nikon Camera</a>
																		</li>
																		
																		<li class="menu-fujifilm-camera">
																			<a href="#">Fujifilm Camera</a>
																		</li>
																		
																		<li class="menu-leica-camera">
																			<a href="#">Leica Camera</a>
																		</li>
																	</ul>
																</li>
																
																<li class="menu-jewelry-watches">
																	<a class="item-link" href="#">Jewelry & Watches</a>
																</li>
																
																<li class="menu-consumer-electronics">
																	<a class="item-link" href="#">Consumer Electronics</a>
																</li>
																
																<li class="menu-mobiles">
																	<a class="item-link" href="#">Mobiles</a>
																</li>
															</ul>
														</div>
													</div>
													
													<ul id="menu-left-menu-1" class="vertical-megamenu flytheme-menures">
														<li class="dropdown menu-smartphones-accessories ya-mega-menu level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Smartphones Accessories</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="dropdown-submenu one-column menu-categories-1">
																	<span class="have-title">
																		<span class="menu-title">Categories 1</span>
																	</span>
																
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-camera-camcorders">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Camera & Camcorders</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-cosmetic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Cosmetic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-laptop-computer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Laptop & Computer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-medical-healthcare">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Medical & Healthcare</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-phasellus-laoreet">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Phasellus laoreet</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-etiam-id-finibus">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Etiam id finibus</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
																
																<li class="dropdown-submenu one-column menu-categories-2">
																	<span class="have-title">
																		<span class="menu-title">Categories 2</span>
																	</span>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-camera-camcorders">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Camera & Camcorders</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-cosmetic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Cosmetic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-laptop-computer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Laptop & Computer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-medical-healthcare">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Medical & Healthcare</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-aliquam-in-risus">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Aliquam in risus</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-scelerisque-odio">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Scelerisque odio</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
																
																<li class="one-column menu-img-menu">
																	<span class="">
																		<span class="menu-img">
																			<img src="images/static-img-ver-item.jpg" alt="Menu Image" width="286" height="515"/>
																		</span>
																	</span>
																</li>
															</ul>
														</li>
														
														<li class="dropdown menu-computers-networking ya-menu-custom level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Computers & Networking</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="one-column menu-lorem-sed-fringilla">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Lorem sed fringilla</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-vestibulum-dignissim">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Vestibulum dignissim</span>
																		</span>
																	</a>
																</li>
																
																<li class="dropdown-submenu one-column menu-cum-sociis-natoque">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Cum sociis natoque</span>
																		</span>
																	</a>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-vivamus-sit-amet">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Vivamus sit amet</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-morbi-at-lobortis">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Morbi at lobortis</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-suspendisse-suscipit">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Suspendisse suscipit</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-ullamcorper-mi">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Ullamcorper mi</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-efficitur-libero">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Efficitur libero</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-consectetur-ex">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Consectetur ex</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
																
																<li class="one-column menu-fusce-ultricies">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Fusce ultricies</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-vestibulum-ante">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Vestibulum ante</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-aliquam-iaculis">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Aliquam iaculis</span>
																		</span>
																	</a>
																</li>
															</ul>
														</li>
														
														<li class="dropdown menu-smartphones-tablets ya-menu-custom level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Smartphones & Tablets</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="one-column menu-samsung">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Samsung</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-nokia">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Nokia</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-apple">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Apple</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-blackberry">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">BlackBerry</span>
																		</span>
																	</a>
																</li>
															</ul>
														</li>
														
														<li class="menu-car-accessories ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Car Accessories</span>
																</span>
															</a>
														</li>
														
														<li class="menu-lights-lighting ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Lights & Lighting</span>
																</span>
															</a>
														</li>
														
														<li class="menu-home-office ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Home & Office</span>
																</span>
															</a>
														</li>
														
														<li class="dropdown menu-sports-outdoors ya-mega-menu level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Sports & Outdoors</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 two-column">
																<li class="dropdown-submenu two-column menu-categories-1">
																	<span class="have-title">
																		<span class="menu-title">Categories 1</span>
																	</span>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-camera-camcorders">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Camera & Camcorders</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-cosmetic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Cosmetic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-laptop-computer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Laptop & Computer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-medical-healthcare">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Medical & Healthcare</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-consectetur-adipisc">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Consectetur adipisc</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
															
																<li class="dropdown-submenu two-column menu-categories-2">
																	<span class="have-title">
																		<span class="menu-title">Categories 2</span>
																	</span>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-suits-blazer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Suits & Blazer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-shoes">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Shoes</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-smartphone-tablets">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Smartphone & Tablets</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-sport-game">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Sport & Game</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-maecenas-fringilla">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Maecenas fringilla</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
																
																<li class="dropdown-submenu two-column menu-categories-3">
																	<span class="have-title">
																		<span class="menu-title">Categories 3</span>
																	</span>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-camera-camcorders">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Camera & Camcorders</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-cosmetic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Cosmetic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-laptop-computer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Laptop & Computer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-medical-healthcare">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Medical & Healthcare</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-magna-blandit">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Magna blandit</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
															 
																<li class="dropdown-submenu two-column menu-categories-4">
																	<span class="have-title">
																		<span class="menu-title">Categories 4</span>
																	</span>
																	
																	<ul class="dropdown-sub nav-level2">
																		<li class="menu-electronic">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Electronic</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-suits-blazer">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Suits & Blazer</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-shoes">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Shoes</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-smartphone-tablets">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Smartphone & Tablets</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-sport-game">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Sport & Game</span>
																				</span>
																			</a>
																		</li>
																		
																		<li class="menu-donec-venenatis">
																			<a href="#">
																				<span class="have-title">
																					<span class="menu-title">Donec venenatis</span>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
															 
																<li class="two-column menu-img-menu">
																	<span class="">
																		<span class="menu-img">
																			<img src="images/static-img-ver-item2.jpg" alt="Menu Image" width="235" height="461"/>
																		</span>
																	</span>
																</li>
																
																<li class="two-column menu-html-menu">
																	<div class="tag-menu">
																		<ul>
																			<li>
																				<span>Quicklinks:</span>
																			</li>
																			
																			<li>																		
																				<a href="#">Blazers,</a>
																			</li>
																			
																			<li>
																				<a href="#">Jackets,</a>
																			</li>
																			
																			<li>
																				<a href="#">Shoes,</a>
																			</li>
																			
																			<li>
																				<a href="#">Bags,</a>
																			</li>
																			
																			<li>
																				<a href="#">Special offers,</a>
																			</li>
																			
																			<li>
																				<a href="#">Sales and discounts</a>
																			</li>
																		</ul>
																	</div>
																</li>
															</ul>
														</li>
														
														<li class="menu-apparel-accessories ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Apparel & Accessories</span>
																</span>
															</a>
														</li>
													  
														<li class="menu-intimate-apparel ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Intimate Apparel</span>
																</span>
															</a>
														</li>
													  
														<li class="dropdown menu-health-beauty ya-menu-custom level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Health & Beauty</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="one-column menu-loreal">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">L’Oreal</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-ponds">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Pond’s</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-ohui">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Ohui</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-essance">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Essance</span>
																		</span>
																	</a>
																</li>
															</ul>
														</li>
														
														<li class="dropdown menu-toys-hobbies ya-menu-custom level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Toys & Hobbies</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="one-column menu-academy">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Academy</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-bachmann">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Bachmann</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-bepuzzled">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Bepuzzled</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-dimensions">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Dimensions</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-fashion-angels">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Fashion Angels</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-laser-pegs">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Laser Pegs</span>
																		</span>
																	</a>
																</li>
															</ul>
														</li>
													  
														<li class="dropdown menu-cameras-camcorders ya-menu-custom level1">
															<a href="#" class="item-link dropdown-toggle">
																<span class="have-title">
																	<span class="menu-title">Cameras & Camcorders</span>
																</span>
															</a>
															
															<ul class="dropdown-menu nav-level1 one-column">
																<li class="one-column menu-canon-camera">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Canon Camera</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-sony-camera">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Sony Camera</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-nikon-camera">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Nikon Camera</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-fujifilm-camera">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Fujifilm Camera</span>
																		</span>
																	</a>
																</li>
																
																<li class="one-column menu-leica-camera">
																	<a href="#">
																		<span class="have-title">
																			<span class="menu-title">Leica Camera</span>
																		</span>
																	</a>
																</li>
															</ul>
														</li>
													  
														<li class="menu-jewelry-watches ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Jewelry & Watches</span>
																</span>
															</a>
														</li>
													  
														<li class="menu-consumer-electronics ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Consumer Electronics</span>
																</span>
															</a>
														</li>
													 
														<li class="menu-mobiles ya-menu-custom level1">
															<a href="#" class="item-link">
																<span class="have-title">
																	<span class="menu-title">Mobiles</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											
											<div class="search-pro col-lg-9 col-md-8 col-sm-9 col-xs-9 no-padding-l">
												<a class="phone-icon-search fa fa-search" href="#" title="Search"></a>
												
												<div id="sm_serachbox_pro" class="sm-serachbox-pro">
													<div class="sm-searbox-content">
														<form method="get" id="searchform_special" action="#">
															<div class="form-search">
																<div class="cat-wrapper">
																	<div class="selector" id="uniform-cat">
																		<label class="label-search">
																			<select name="search_category" class="s1_option">
																				<option>All Categories</option>
																				<option>Smartphones & Tablets</option>
																				<option>Smartphones Accessories</option>
																				<option>Computers & Networking</option>
																				<option>Car Accessories</option>
																				<option>Consumer Electronics</option>
																				<option>Jewelry & Watches</option>
																				<option>Electronic</option>
																				<option>Mobiles</option>
																				<option>Computer</option>
																				<option>Sports</option>
																				<option>MenSell</option>
																				<option>Vesture</option>
																				<option>Women</option>
																				<option>Fashion</option>
																				<option>Watches</option>
																				<option>Purses</option>
																				<option>Sports & Outdoors</option>
																				<option>Lights & Lighting</option>
																				<option>Home & Office</option>
																				<option>Apparel & Accessories</option>
																				<option>Intimate Apparel</option>
																				<option>Health & Beauty</option>
																				<option>Toys & Hobbies</option>
																				<option>Cameras & Camcorders</option>
																				<option>Mobile</option>
																				<option>Accessories</option>
																				<option>Mobile Brands</option>
																				<option>Electronics</option>
																				<option>Computer & Accessories</option>
																				<option>Brand</option>
																				<option>Golf</option>
																				<option>Football</option>
																				<option>Tennis</option>
																				<option>Skiboarding</option>
																				<option>Aliquam</option>
																				<option>Apparel</option>
																				<option>Helmets</option>
																				<option>Mauris</option>
																				<option>Nullam viverra</option>
																				<option>Pellentesque</option>
																				<option>Apparel</option>
																				<option>Backboard</option>
																				<option>Basketballs</option>
																				<option>Footwear</option>
																				<option>Jiteme catem</option>
																				<option>Footballs</option>
																				<option>Mouth Guards</option>
																				<option>Pads Protection</option>
																				<option>Consectetur</option>
																				<option>Bags</option>
																				<option>Balls</option>
																				<option>Drivers</option>
																				<option>Jiteme</option>
																				<option>Jiteme catem</option>
																				<option>Accessories</option>
																				<option>Luxury ferume</option>
																				<option>Skin care</option>
																				<option>Hair care</option>
																				<option>jewelry</option>
																				<option>rings</option>
																				<option>jewelry accessories</option>
																				<option>Men</option>
																				<option>watch collection</option>
																				<option>T-shirt design</option>
																				<option>Bag collection</option>
																				<option>women dresses</option>
																				<option>Jeans collection</option>
																				<option>watch</option>
																				<option>shoes</option>
																				<option>Kid clothes</option>
																				<option>jeans</option>
																				<option>shorts</option>
																				<option>under wear</option>
																				<option>sport wear</option>
																				<option>toys & games</option>
																				<option>health & baby care</option>
																				<option>Women Style</option>
																				<option>Men Style</option>
																				<option>Kid style</option>
																				<option>Living room</option>
																				<option>Sofa</option>
																				<option>Appliances</option>
																				<option>Office</option>
																				<option>Kitchens</option>
																				<option>Bedroom</option>
																				<option>Sports Shoes</option>
																			</select>
																		</label>
																	</div>
																</div>
																
																<div class="input-search">
																	<input type="text" value="" placeholder="Search for products" />
																</div>
																
																<button type="submit" title="Search" class="fa fa-search button-search-pro form-button"></button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- END HEADER CATEGORIES SEARCH -->
			</div>
		</div>
		<div id="main" class="theme-clearfix" role="document">
			<div class="breadcrumbs theme-clearfix">
				<div class="container">
					<ul class="breadcrumb">
						<li class="active">
							<span>Home</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="container">
				<div class="row">
					<div id="contents" role="main" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="single post-6 page type-page status-publish hentry">
							<div class="entry">
								<div class="entry-content">
									<div class="entry-content">
										<div class="vc_row wpb_row vc_row-fluid main-slider-custom">
											<div class="wpb_column vc_column_container vc_col-sm-3 vc_col-lg-3 vc_col-md-4 vc_hidden-sm vc_col-xs-1 vc_hidden-xs">
												<div class="vc_column-inner">
													<div class="wpb_wrapper"></div>
												</div>
											</div>
											
											<div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-md-8 vc_col-xs-12">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<div class="vc_row wpb_row vc_inner vc_row-fluid margin-bottom-10">
															<!-- OWL SLIDER -->
															<div class="sliderevo1 wpb_column vc_column_container vc_col-sm-8 vc_col-lg-8 vc_col-md-12">
																<div class="vc_column-inner">
																	<div class="wpb_wrapper">
																		<div class="wpb_revslider_element wpb_content_element">
																			<div id="main-slider" class="fullwidthbanner-container" style="margin: 0px auto; padding: 0px; max-width: 612px; background-color: transparent;">
																				<div class="module slideshow no-margin">
																					<div class="item">
																						<a href="home_style_1_shop_product_default.html"><img src="../images/slider-2-1.jpg" alt="slider1" class="img-responsive" /></a>
																					</div>
																					<div class="item">
																						<a href="home_style_1_shop_product_default.html"><img src="../images/slider-3-1.jpg" alt="slider2" class="img-responsive" /></a>
																					</div>
																					<div class="item">
																						<a href="home_style_1_shop_product_default.html"><img src="../images/slider-2-1.jpg" alt="slider3" class="img-responsive" /></a>
																					</div>
																				</div>
																				<div class="loadeding"></div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<!-- OWL LIGHT SLIDER -->
															
															<!-- DAILY DEALS -->
															<div class="dailydeal wpb_column vc_column_container vc_col-sm-4 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
																<div class="vc_column-inner">
																	<div class="wpb_wrapper">
																		<div id="electronic_sw-count-down_01" class="sw-woo-container-slider responsive-slider countdown-slider" data-lg="1" data-md="2" data-sm="1" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false" data-dots="true" data-circle="false">
																			<div class="resp-slider-container">
																				<div class="box-slider-title"></div>
																				
																				<div class="slider-wrapper clearfix">
																					<div class="slider responsive">
																						<div class="item item-countdown" id="product_sw-count-down_01">
																							<div class="item-wrap">
																								<div class="item-detail">
																									<div class="item-image-countdown products-thumb">
																										<span class="onsale">Sale!</span>
																										
																										<a href="home_style_1_shop_product_default.html">
																											<div class="product-thumb-hover">
																												<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="12" 
																														src="../images/12-300x300.jpg" 
																														srcset="../images/12-300x300.jpg 300w, ../images/12-260x260.jpg 260w, ../images/12.jpg 600w, ../images/12-180x180.jpg 180w" 
																														sizes="(max-width: 300px) 100vw, 300px" />
																											</div>
																										</a>
																										
																										<div 	class="product-countdown" data-date="1527724800000" data-price="$440" data-starttime="1458172800" 
																												data-cdtime="1508371200" data-id="product_sw-count-down_01">
																										</div>
																									</div>
																									
																									<div class="item-content">
																										<!-- rating  -->
																										<div class="reviews-content">
																											<div class="star"></div>
																											<div class="item-number-rating"></div>
																										</div>
																										<!-- end rating  -->
																										
																										<h4>
																											<a href="home_style_1_shop_product_default.html" title="Dolore turkey">Dolore turkey</a>
																										</h4>
																										
																										<div class="item-price">
																											<span>
																												<del>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>440.00
																													</span>
																												</del> 
																												
																												<ins>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>400.00
																													</span>
																												</ins>										
																											</span>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					
																						<div class="item item-countdown" id="product_sw-count-down_02">
																							<div class="item-wrap">
																								<div class="item-detail">
																									<div class="item-image-countdown products-thumb">
																										<span class="onsale">Sale!</span>
																										
																										<a href="home_style_1_shop_product_default.html">
																											<div class="product-thumb-hover">
																												<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="9" 
																														src="images/9-300x300.jpg" 
																														srcset="images/9-300x300.jpg 300w, images/9-260x260.jpg 260w, images/9.jpg 600w, images/9-180x180.jpg 180w" 
																														sizes="(max-width: 300px) 100vw, 300px" />
																											</div>
																										</a>
																										
																										<div 	class="product-countdown" data-date="1527724800000" data-price="$77" data-starttime="1458259200" 
																												data-cdtime="1504137600" data-id="product_sw-count-down_02">
																										</div>
																									</div>
																								 
																									<div class="item-content">
																										<!-- rating  -->
																										<div class="reviews-content">
																											<div class="star">
																												<span style="width:44px"></span>
																											</div>
																											
																											<div class="item-number-rating"></div>
																										</div>
																										<!-- end rating  -->
																										
																										<h4>
																											<a href="home_style_1_shop_product_default.html" title="Jowl ullamco">Jowl ullamco</a>
																										</h4>
																										
																										<div class="item-price">
																											<span>
																												<del>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>77.00
																													</span>
																												</del> 
																												
																												<ins>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>60.00
																													</span>
																												</ins>
																											</span>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					
																						<div class="item item-countdown" id="product_sw-count-down_02">
																							<div class="item-wrap">
																								<div class="item-detail">
																									<div class="item-image-countdown products-thumb">
																										<span class="onsale">Sale!</span>
																										
																										<a href="home_style_1_shop_product_default.html">
																											<div class="product-thumb-hover">
																												<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="4" 
																														src="images/4-300x300.jpg" 
																														srcset="images/4-300x300.jpg 300w, images/4-260x260.jpg 260w, images/4.jpg 600w, images/4-180x180.jpg 180w" 
																														sizes="(max-width: 300px) 100vw, 300px" />
																											</div>
																										</a>
																										
																										<div 	lass="product-countdown" data-date="1527724800000" data-price="$880" data-starttime="1458172800" 
																												data-cdtime="1521590400" data-id="product_sw-count-down_02">
																										</div>
																									</div>
																									
																									<div class="item-content">
																										<!-- rating  -->
																										<div class="reviews-content">
																											<div class="star"></div>
																											<div class="item-number-rating"></div>
																										</div>
																										<!-- end rating  -->
																										
																										<h4>
																											<a href="home_style_1_shop_product_default.html" title="Aliqua minim">Aliqua minim</a>
																										</h4>
																										
																										<div class="item-price">
																											<span>
																												<del>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>880.00
																													</span>
																												</del> 
																												
																												<ins>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>800.00
																													</span>
																												</ins>										
																											</span>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					
																						<div class="item item-countdown" id="product_sw-count-down_03">
																							<div class="item-wrap">
																								<div class="item-detail">
																									<div class="item-image-countdown products-thumb">
																										<span class="onsale">Sale!</span>
																										<a href="home_style_1_shop_product_default.html">
																											<div class="product-thumb-hover">
																												<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="26" 
																														src="images/26-300x300.jpg" 
																														srcset="images/26-300x300.jpg 300w, images/26-260x260.jpg 260w, images/26.jpg 600w, images/26-180x180.jpg 180w" 
																														sizes="(max-width: 300px) 100vw, 300px" />
																											</div>
																										</a>
																										
																										<div 	class="product-countdown" data-date="1527724800000" data-price="$5.5" data-starttime="1458777600" 
																												data-cdtime="1517356800" data-id="product_sw-count-down_03">
																										</div>
																									</div>
																									
																									<div class="item-content">
																										<!-- rating  -->
																										<div class="reviews-content">
																											<div class="star"></div>
																											<div class="item-number-rating"></div>
																										</div>
																										<!-- end rating  -->
																										
																										<h4>
																											<a href="home_style_1_shop_product_default.html" title="Pisan maze ikan kazen">Pisan maze ikan kazen</a>
																										</h4>
																										
																										<div class="item-price">
																											<span>
																												<del>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>5.50
																													</span>
																												</del> 
																												
																												<ins>
																													<span class="woocommerce-Price-amount amount">
																														<span class="woocommerce-Price-currencySymbol">$</span>5.00
																													</span>
																												</ins>										
																											</span>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														
														<div class="vc_row wpb_row vc_inner vc_row-fluid no-margin-bottom">
															<div class="home1img1 home1img wpb_column vc_column_container vc_col-sm-4">
																<div class="vc_column-inner padding-right-5">
																	<div class="wpb_wrapper">
																		<div class="wpb_single_image wpb_content_element vc_align_center">
																			<figure class="wpb_wrapper vc_figure">
																				<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																					<img 	width="301" height="148" class="vc_single_image-img attachment-full" alt="banner-img1" 
																							src="images/banner-img1.jpg" 
																							srcset="images/banner-img1.jpg 301w, images/banner-img1-300x148.jpg 300w" 
																							sizes="(max-width: 301px) 100vw, 301px" />
																				</a>
																			</figure>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="home1img home1img2 wpb_column vc_column_container vc_col-sm-4 vc_hidden-xs">
																<div class="vc_column-inner padding-left-5 padding-right-5">
																	<div class="wpb_wrapper">
																		<div class="wpb_single_image wpb_content_element vc_align_center">
																			<figure class="wpb_wrapper vc_figure">
																				<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																					<img 	width="301" height="148" class="vc_single_image-img attachment-full" alt="banner-img2" 
																							src="images/banner-img2.jpg" 
																							srcset="images/banner-img2.jpg 301w, images/banner-img2-300x148.jpg 300w" 
																							sizes="(max-width: 301px) 100vw, 301px" />
																				</a>
																			</figure>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="home1img home1img3 wpb_column vc_column_container vc_col-sm-4">
																<div class="vc_column-inner padding-left-5">
																	<div class="wpb_wrapper">
																		<div class="wpb_single_image wpb_content_element vc_align_center">
																			<figure class="wpb_wrapper vc_figure">
																				<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																					<img width="248" height="148" src="images/banner-img3.jpg" class="vc_single_image-img attachment-full" alt="banner-img3" />
																				</a>
																			</figure>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="vc_row wpb_row vc_row-fluid sub-main-slider-custom">
											<div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-4 vc_col-xs-12">
												<div class="vc_column-inner margin-bottom-30">
													<div class="wpb_wrapper">
														<!-- RECOMMEND PRODUCTS -->
														<div class="panel-group accordion_recommend_product" id="accordion">
															<div class="block-title">
																<strong>
																	<span>Recommend Products</span>
																</strong>
																
																<div class="sn-img icon-bacsic2"></div>
															</div>
															
															<!-- ITEMS -->
															<div class="panel panel-default">
																<a data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="">
																	<span class="item-count">1</span>																
																	<h4 class="panel-title">Nulla in diam</h4>
																</a>
																
																<div id="collapse1" class="panel-collapse collapse in">
																	<div class="panel-body">
																		<div class="item-content">
																			<div class="item-img item-height">
																				<div class="item-img-info products-thumb">
																					<a href="home_style_1_shop_product_default.html" title="Nulla in diam">
																						<img width="270" height="203" src="images/1-2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="1" title="1" />
																					</a>
																				</div>
																			</div>
																			
																			<h4>
																				<a href="home_style_1_shop_product_default.html" title="Nulla in diam">Nulla in diam</a>
																			</h4>
																			
																			<!-- rating  -->
																			<div class="reviews-content">
																				<div class="star"></div>
																				<div class="item-number-rating">0 Review(s)</div>
																			</div>																		
																			<!-- end rating  -->
																			
																			<div class="item-price">
																				<span>
																					<del>
																						<span class="woocommerce-Price-amount amount">
																							<span class="woocommerce-Price-currencySymbol">$</span>345.00
																						</span>
																					</del> 
																					
																					<ins>
																						<span class="woocommerce-Price-amount amount">
																							<span class="woocommerce-Price-currencySymbol">$</span>235.00
																						</span>
																					</ins>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="panel panel-default">
																<a data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="collapsed">
																	<span class="item-count">2</span>
																	<h4 class="panel-title">Praesent metus elit</h4>
																</a>
																
																<div id="collapse2" class="panel-collapse collapse">
																	<div class="panel-body">
																		<div class="item-content">
																			<div class="item-img item-height">
																				<div class="item-img-info products-thumb">
																					<a href="home_style_1_shop_product_default.html" title="Praesent metus elit">
																						<img width="270" height="203" src="images/2-2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="2" title="2" />
																					</a>
																				</div>
																			</div>
																			
																			<h4>
																				<a href="home_style_1_shop_product_default.html" title="Praesent metus elit">Praesent metus elit</a>
																			</h4>
													  
																			<!-- rating  -->
																			<div class="reviews-content">
																				<div class="star"></div>
																				<div class="item-number-rating">0 Review(s)</div>
																			</div>
																			<!-- end rating  -->
																			
																			<div class="item-price">
																				<span>
																					<span class="woocommerce-Price-amount amount">
																						<span class="woocommerce-Price-currencySymbol">$</span>280.00
																					</span>							
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="panel panel-default">
																<a data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="collapsed">
																	<span class="item-count">3</span>																
																	<h4 class="panel-title">Consectetur placera</h4>
																</a>
																
																<div id="collapse3" class="panel-collapse collapse">
																	<div class="panel-body">
																		<div class="item-content">
																			<div class="item-img item-height">
																				<div class="item-img-info products-thumb">
																					<a href="home_style_1_shop_product_default.html" title="Consectetur placera">
																						<img width="270" height="203" src="images/4-2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="4" title="4" />
																					</a>
																				</div>
																			</div>
																			
																			<h4>
																				<a href="home_style_1_shop_product_default.html" title="Consectetur placera">Consectetur placera</a>
																			</h4>
																			
																			<!-- rating  -->
																			<div class="reviews-content">
																				<div class="star"></div>
																				<div class="item-number-rating">0 Review(s)</div>
																			</div>
																			<!-- end rating  -->
																			
																			<div class="item-price">
																				<span>
																					<del>
																						<span class="woocommerce-Price-amount amount">
																							<span class="woocommerce-Price-currencySymbol">$</span>350.00
																						</span>
																					</del> 
																					
																					<ins>
																						<span class="woocommerce-Price-amount amount">
																							<span class="woocommerce-Price-currencySymbol">$</span>300.00
																						</span>
																					</ins>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="panel panel-default">
																<a data-toggle="collapse" data-parent="#accordion" href="#collapse4" class="collapsed">
																	<span class="item-count">4</span>
																	<h4 class="panel-title">Morbi mollis diam</h4>
																</a>
																
																<div id="collapse4" class="panel-collapse collapse">
																	<div class="panel-body">
																		<div class="item-content">
																			<div class="item-img item-height">
																				<div class="item-img-info products-thumb">
																					<a href="home_style_1_shop_product_default.html" title="Morbi mollis diam">
																						<img width="270" height="203" src="images/5-2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="5" title="5" />
																					</a>
																				</div>
																			</div>
																			
																			<h4>
																				<a href="home_style_1_shop_product_default.html" title="Morbi mollis diam">Morbi mollis diam</a>
																			</h4>
																			
																			<!-- rating  -->
																			<div class="reviews-content">
																				<div class="star"></div>
																				<div class="item-number-rating">0 Review(s)</div>
																			</div>
																			<!-- end rating  -->
																			
																			<div class="item-price">
																				<span>
																					<span class="woocommerce-Price-amount amount">
																						<span class="woocommerce-Price-currencySymbol">$</span>200.00
																					</span>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															
															<div class="panel panel-default">
																<a data-toggle="collapse" data-parent="#accordion" href="#collapse5" class="collapsed">
																	<span class="item-count">5</span>
																	<h4 class="panel-title">Nulla in diam</h4>
																</a>
																
																<div id="collapse5" class="panel-collapse collapse">
																	<div class="panel-body">
																		<div class="item-content">
																			<div class="item-img item-height">
																				<div class="item-img-info products-thumb">
																					<a href="home_style_1_shop_product_default.html" title="Nulla in diam">
																						<img width="270" height="203" src="images/6-2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="6" title="6" />
																					</a>
																				</div>
																			</div>
																			
																			<h4>
																				<a href="home_style_1_shop_product_default.html" title="Nulla in diam">Nulla in diam</a>
																			</h4>
																			
																			<!-- rating  -->
																			<div class="reviews-content">
																				<div class="star"></div>
																				<div class="item-number-rating">0 Review(s)</div>
																			</div>
																			<!-- end rating  -->
																			
																			<div class="item-price">
																				<span>
																					<span class="woocommerce-Price-amount amount">
																						<span class="woocommerce-Price-currencySymbol">$</span>200.00
																					</span>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<!-- END ITEMS -->
														</div>
														<!-- END RECOMMEND PRODUCTS -->
														
														<!-- NEW BLOGS -->
														<div id="new-blog-container" class="blog-indicators carousel slide">
															<div class="block-title">
																<strong>
																	<span>New Blogs</span>
																</strong>
																
																<div class="sn-img icon-bacsic sn-blog"></div>
															</div>
															<!-- ITEMS -->
															<div class="carousel-inner">
																<div class="item active">
																	<div class="row">
																		<div class="item-inner col-lg-12">
																			<a href="home_style_1_blog_left_sidebar_list_detail.html" title="Aliquam sit amet leo orci">
																				<img width="270" height="203" src="images/2-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="2" />
																			</a>
																			
																			<div class="postTitle">
																				<h2>
																					<a title="Aliquam sit amet leo orci" href="home_style_1_blog_left_sidebar_list_detail.html">Aliquam sit amet leo orci</a>
																				</h2>
																			</div>
																			
																			<div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum hendrerit adipiscing. Duis quam tortor, eleifend et condimentum at, imperdiet </div>
																		</div>
																	</div>
																</div>
																
																<div class="item">
																	<div class="row">
																		<div class="item-inner col-lg-12">
																			<a href="home_style_1_blog_left_sidebar_list_detail.html" title="Praesent volutpat faucibus lacus">
																				<img width="270" height="203" src="images/1-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="1" />
																			</a>
																			
																			<div class="postTitle">
																				<h2>
																					<a title="Praesent volutpat faucibus lacus" href="home_style_1_blog_left_sidebar_list_detail.html">Praesent volutpat faucibus lacus</a>
																				</h2>
																			</div>
																			
																			<div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum hendrerit adipiscing. Duis quam tortor, eleifend et condimentum at, imperdiet </div>
																		</div>
																	</div>
																</div>
																
																<div class="item">
																	<div class="row">
																		<div class="item-inner col-lg-12">
																			<a href="home_style_1_blog_left_sidebar_list_detail.html" title="Dolor at tincidunt mollis augue">
																				<img width="270" height="203" src="images/4-270x203.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="4" />
																			</a>
																			
																			<div class="postTitle">
																				<h2>
																					<a title="Dolor at tincidunt mollis augue" href="home_style_1_blog_left_sidebar_list_detail.html">Dolor at tincidunt mollis augue</a>
																				</h2>
																			</div>
																			
																			<div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum hendrerit adipiscing. Duis quam tortor, eleifend et condimentum at, imperdiet </div>
																		</div>
																	</div>
																</div>
																<!-- END ITEMS -->
															</div>
															
															<ul class="carousel-indicators">
																<li class="active" data-slide-to="0" data-target="#new-blog-container"></li>
																<li class="" data-slide-to="1" data-target="#new-blog-container"></li>
																<li class="" data-slide-to="2" data-target="#new-blog-container"></li>
															</ul>
														</div>
														<!-- END NEW BLOGS -->
													</div>
												</div>
											</div>
											
											<div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-md-8 vc_col-xs-12">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<div class="vc_row wpb_row vc_inner vc_row-fluid margin-bottom-30">
															<div class="wpb_column vc_column_container vc_col-sm-12">
																<div class="vc_column-inner">
																	<div class="wpb_wrapper">
																		<!-- ELECTRONICS -->
																		<div id="electronics_slider" class="sw-woo-container-slider responsive-slider woo-slider-default loading" data-lg="4" data-md="2" data-sm="2" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="tab-category-title block-title">
																				<strong>
																					<span>Electronics</span>
																				</strong>
																				<div class="sn-img icon-bacsic item1"></div>
																			</div>
																			
																			<div class="resp-slider-container">
																				<div class="slider responsive">
																					<!-- ITEMS -->
																					<div class="item">
																						<div class="item-wrap">
																							<div class="item-detail">
																								<div class="item-img products-thumb">
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="5" 
																													src="images/51-300x300.jpg" 
																													srcset="images/51-300x300.jpg 300w, images/51-260x260.jpg 260w, images/51.jpg 600w, images/51-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>																							
																									<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																								</div>
																								
																								<div class="item-content">
																									<!-- rating  -->
																									<div class="reviews-content">
																										<div class="star">
																											<span style="width:52px"></span>
																										</div>
																										<div class="item-number-rating">2 Review(s)</div>
																									</div>
																									<!-- end rating  -->
																									
																									<h4>
																										<a href="home_style_1_shop_product_default.html" title="Sint drumstick">Sint drumstick</a>
																									</h4>
																									
																									<div class="item-price">
																										<span>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>55.00
																											</span>
																										</span>
																									</div>
																									
																									<!-- add to cart, wishlist, compare -->
																									<div class="add-info">
																										<div class="yith-wcwl-add-to-wishlist">
																											<div class="yith-wcwl-add-button show" style="display:block">
																												<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																												<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																											</div>
																											
																											<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																												<span class="feedback">Product added!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																												<span class="feedback">The product is already in the wishlist!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div style="clear:both"></div>
																											<div class="yith-wcwl-wishlistaddresponse"></div>
																										</div>
																										
																										<div class="clear"></div>
																										
																										<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																										
																										<div class="woocommerce product compare-button">
																											<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					
																					<div class="item">
																						<div class="item-wrap">
																							<div class="item-detail">
																								<div class="item-img products-thumb">
																									<span class="onsale">Sale!</span>
																									
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img	 width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="26" 
																													src="images/26-300x300.jpg" 
																													srcset="images/26-300x300.jpg 300w, images/26-260x260.jpg 260w, images/26.jpg 600w, images/26-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																									
																									<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																								</div>
																								
																								<div class="item-content">
																									<!-- rating  -->
																									<div class="reviews-content">
																										<div class="star"></div>
																										<div class="item-number-rating">0 Review(s)</div>
																									</div>
																									<!-- end rating  -->
																									
																									<h4>
																										<a href="home_style_1_shop_product_default.html" title="Pisan maze ikan kazen">Pisan maze ikan kazen</a>
																									</h4>
																									
																									<div class="item-price">
																										<span>
																											<del>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>5.50
																												</span>
																											</del> 
																											
																											<ins>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>5.00
																												</span>
																											</ins>
																										</span>
																									</div>
																									
																									<!-- add to cart, wishlist, compare -->
																									<div class="add-info">
																										<div class="yith-wcwl-add-to-wishlist">
																											<div class="yith-wcwl-add-button show" style="display:block">
																												<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																												<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																											</div>
																											
																											<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																												<span class="feedback">Product added!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																												<span class="feedback">The product is already in the wishlist!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div style="clear:both"></div>
																											<div class="yith-wcwl-wishlistaddresponse"></div>
																										</div>
																										
																										<div class="clear"></div>
																										
																										<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																										
																										<div class="woocommerce product compare-button">
																											<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					
																					<div class="item">
																						<div class="item-wrap">
																							<div class="item-detail">
																								<div class="item-img products-thumb">
																									<span class="onsale">Sale!</span>
																									
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="21" 
																													src="images/21-300x300.jpg" 
																													srcset="images/21-300x300.jpg 300w, images/21-260x260.jpg 260w, images/21-180x180.jpg 180w, images/21.jpg 470w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																									
																									<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																								</div>
																								
																								<div class="item-content">
																									<!-- rating  -->
																									<div class="reviews-content">
																										<div class="star"></div>
																										<div class="item-number-rating">0 Review(s)</div>
																									</div>
																									<!-- end rating  -->
																									
																									<h4>
																										<a href="home_style_1_shop_product_default.html" title="Kore mire dase mazen">Kore mire dase mazen</a>
																									</h4>
																									
																									<div class="item-price">
																										<span>
																											<del>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>3.50
																												</span>
																											</del>

																											<ins>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>2.99
																												</span>
																											</ins>
																										</span>
																									</div>
																									
																									<!-- add to cart, wishlist, compare -->
																									<div class="add-info">
																										<div class="yith-wcwl-add-to-wishlist">
																											<div class="yith-wcwl-add-button show" style="display:block">
																												<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																												<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																											</div>
																											
																											<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																												<span class="feedback">Product added!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																												<span class="feedback">The product is already in the wishlist!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div style="clear:both"></div>
																											<div class="yith-wcwl-wishlistaddresponse"></div>
																										</div>
																										
																										<div class="clear"></div>
																										
																										<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																										
																										<div class="woocommerce product compare-button">
																											<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					
																					<div class="item">
																						<div class="item-wrap">
																							<div class="item-detail">
																								<div class="item-img products-thumb">
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="23_1" 
																													src="images/23_1-300x300.jpg"
																													srcset="images/23_1-300x300.jpg 300w, images/23_1-260x260.jpg 260w, images/23_1.jpg 600w, images/23_1-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																									
																									<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																								</div>
																								
																								<div class="item-content">
																									<!-- rating  -->
																									<div class="reviews-content">
																										<div class="star"></div>
																										<div class="item-number-rating">0 Review(s)</div>
																									</div>
																									<!-- end rating  -->
																									
																									<h4>
																										<a href="home_style_1_shop_product_default.html" title="Wiru mise kaztem">Wiru mise kaztem</a>
																									</h4>
																									
																									<div class="item-price">
																										<span>
																											<span class="woocommerce-Price-amount amount">
																												<span class="woocommerce-Price-currencySymbol">$</span>1.99
																											</span>
																										</span>
																									</div>
																									
																									<!-- add to cart, wishlist, compare -->
																									<div class="add-info">
																										<div class="yith-wcwl-add-to-wishlist">
																											<div class="yith-wcwl-add-button show" style="display:block">
																												<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																												<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																											</div>
																											
																											<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																												<span class="feedback">Product added!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																												<span class="feedback">The product is already in the wishlist!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div style="clear:both"></div>
																											<div class="yith-wcwl-wishlistaddresponse"></div>
																										</div>
																										
																										<div class="clear"></div>
																										
																										<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																										
																										<div class="woocommerce product compare-button">
																											<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					
																					<div class="item">
																						<div class="item-wrap">
																							<div class="item-detail">
																								<div class="item-img products-thumb">
																									<span class="onsale">Sale!</span>
																									
																									<a href="home_style_1_shop_product_default.html">
																										<div class="product-thumb-hover">
																											<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="9" 
																													src="images/9-300x300.jpg" 
																													srcset="images/9-300x300.jpg 300w, images/9-260x260.jpg 260w, images/9.jpg 600w, images/9-180x180.jpg 180w" 
																													sizes="(max-width: 300px) 100vw, 300px" />
																										</div>
																									</a>
																									
																									<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																								</div>
																								
																								<div class="item-content">
																									<!-- rating  -->
																									<div class="reviews-content">
																										<div class="star"><span style="width:52px"></span></div>
																										<div class="item-number-rating">1 Review(s)</div>
																									</div>
																									<!-- end rating  -->
																							 
																									<h4>
																										<a href="home_style_1_shop_product_default.html" title="Jowl ullamco">Jowl ullamco</a>
																									</h4>
																									
																									<div class="item-price">
																										<span>
																											<del>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>77.00
																												</span>
																											</del> 
																											
																											<ins>
																												<span class="woocommerce-Price-amount amount">
																													<span class="woocommerce-Price-currencySymbol">$</span>60.00
																												</span>
																											</ins>
																										</span>
																									</div>
																									
																									<!-- add to cart, wishlist, compare -->
																									<div class="add-info">
																										<div class="yith-wcwl-add-to-wishlist">
																											<div class="yith-wcwl-add-button show" style="display:block">
																												<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																												<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																											</div>
																											
																											<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																												<span class="feedback">Product added!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																												<span class="feedback">The product is already in the wishlist!</span>
																												<a href="#" rel="nofollow">Browse Wishlist</a>
																											</div>
																											
																											<div style="clear:both"></div>
																											<div class="yith-wcwl-wishlistaddresponse"></div>
																										</div>
																										
																										<div class="clear"></div>
																										
																										<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																										
																										<div class="woocommerce product compare-button">
																											<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<!-- END ITEMS -->
																				</div>
																			</div>
																		</div>
																		<!--END ELECTRONICS -->
																	</div>
																</div>
															</div>
														</div>
														
														<div class="wpb_single_image wpb_content_element vc_align_center margin-bottom30">
															<figure class="wpb_wrapper vc_figure">
																<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																	<img 	width="870" height="78" class="vc_single_image-img attachment-full" alt="content-home3" 
																			src="images/content-home3.jpg" 
																			srcset="images/content-home3.jpg 870w, images/content-home3-370x33.jpg 370w, images/content-home3-800x72.jpg 800w" 
																			sizes="(max-width: 870px) 100vw, 870px" />
																</a>
															</figure>
														</div>
														
														<!-- JEWELRY -->
														<div id="jewelry_slider" class="sw-woo-container-slider responsive-slider woo-slider-default loading" data-lg="4" data-md="2" data-sm="2" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
															<div class="tab-category-title block-title">
																<strong>
																	<span>Jewelry & Watches</span>
																</strong>
																
																<div class="sn-img icon-bacsic item1"></div>
															</div>
															
															<div class="resp-slider-container">
																<div class="slider responsive">
																	<!-- ITEMS -->
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J9" 
																									src="images/J9-300x300.jpg" 
																									srcset="images/J9-300x300.jpg 300w, images/J9-260x260.jpg 260w, images/J9.jpg 600w, images/J9-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>200.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J10" 
																									src="images/J10-300x300.jpg" 
																									srcset="images/J10-300x300.jpg 300w, images/J10-260x260.jpg 260w, images/J10.jpg 600w, images/J10-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>130.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>100.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J3" 
																									src="images/J3-300x300.jpg" 
																									srcset="images/J3-300x300.jpg 300w, images/J3-260x260.jpg 260w, images/J3.jpg 600w, images/J3-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J4" 
																									src="images/J4-300x300.jpg" 
																									srcset="images/J4-300x300.jpg 300w, images/J4-260x260.jpg 260w, images/J4.jpg 600w, images/J4-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>530.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>230.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">																				
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J5" 
																									src="images/J5-300x300.jpg" 
																									srcset="images/J5-300x300.jpg 300w, images/J5-260x260.jpg 260w, images/J5.jpg 600w, images/J5-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>																						
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J9" 
																									src="images/J9-300x300.jpg" 
																									srcset="images/J9-300x300.jpg 300w, images/J9-260x260.jpg 260w, images/J9.jpg 600w, images/J9-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J9" 
																									src="images/J9-300x300.jpg" 
																									srcset="images/J9-300x300.jpg 300w, images/J9-260x260.jpg 260w, images/J9.jpg 600w, images/J9-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
															  </div>
														   </div>
														</div>
														<!-- END JEWELRY -->
													</div>
												</div>
											</div>
										</div>
										
										<div class="vc_row wpb_row vc_row-fluid no-margin-bottom">
											<div class="wpb_column vc_column_container vc_col-sm-6">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<div class="wpb_single_image wpb_content_element vc_align_left margin-bottom-30">
															<figure class="wpb_wrapper vc_figure">
																<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																	<img 	width="570" height="200" class="vc_single_image-img attachment-full" alt="content-home1" 
																			src="images/content-home1.jpg" 
																			srcset="images/content-home1.jpg 570w, images/content-home1-370x130.jpg 370w" 
																			sizes="(max-width: 570px) 100vw, 570px" />
																</a>
															</figure>
														</div>
													</div>
												</div>
											</div>
											
											<div class="wpb_column vc_column_container vc_col-sm-6">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<div class="wpb_single_image wpb_content_element vc_align_center margin-bottom-30">
															<figure class="wpb_wrapper vc_figure">
																<a href="home_style_1_shop_product_default.html" target="_self" class="vc_single_image-wrapper vc_box_border_grey">
																	<img 	width="570" height="200" class="vc_single_image-img attachment-full" alt="content-home2" 
																			src="images/content-home2.jpg" 
																			srcset="images/content-home2.jpg 570w, images/content-home2-370x130.jpg 370w" 
																			sizes="(max-width: 570px) 100vw, 570px" />
																</a>
															</figure>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="vc_row wpb_row vc_row-fluid margin-bottom-30">
											<div class="wpb_column vc_column_container vc_col-sm-12">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<!-- SPORTS -->
														<div id="sport_slider" class="sw-woo-container-slider responsive-slider woo-slider-default loading" data-lg="5" data-md="3" data-sm="2" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
															<div class="tab-category-title block-title">
																<strong>
																	<span>Sports & outdoors</span>
																</strong>
																
																<div class="sn-img icon-bacsic item1"></div>
															</div>
															
															<div class="resp-slider-container">
																<div class="slider responsive">
																	<!-- ITEMS -->																
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J10" 
																									src="images/J10-300x300.jpg" 
																									srcset="images/J10-300x300.jpg 300w, images/J10-260x260.jpg 260w, images/J10.jpg 600w, images/J10-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>130.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>100.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J3" 
																									src="images/J3-300x300.jpg" 
																									srcset="images/J3-300x300.jpg 300w, images/J3-260x260.jpg 260w, images/J3.jpg 600w, images/J3-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J4" 
																									src="images/J4-300x300.jpg" 
																									srcset="images/J4-300x300.jpg 300w, images/J4-260x260.jpg 260w, images/J4.jpg 600w, images/J4-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>530.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>230.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">																				
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J5" 
																									src="images/J5-300x300.jpg" 
																									srcset="images/J5-300x300.jpg 300w, images/J5-260x260.jpg 260w, images/J5.jpg 600w, images/J5-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>																						
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J9" 
																									src="images/J9-300x300.jpg" 
																									srcset="images/J9-300x300.jpg 300w, images/J9-260x260.jpg 260w, images/J9.jpg 600w, images/J9-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="item">
																		<div class="item-wrap">
																			<div class="item-detail">
																				<div class="item-img products-thumb">
																					<span class="onsale">Sale!</span>
																					
																					<a href="home_style_1_shop_product_default.html">
																						<div class="product-thumb-hover">
																							<img 	width="300" height="300" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="J9" 
																									src="images/J9-300x300.jpg" 
																									srcset="images/J9-300x300.jpg 300w, images/J9-260x260.jpg 260w, images/J9.jpg 600w, images/J9-180x180.jpg 180w" 
																									sizes="(max-width: 300px) 100vw, 300px" />
																						</div>
																					</a>
																					
																					<a href="ajax/fancybox/example.html" data-fancybox-type="ajax" class="sm_quickview_handler-list fancybox fancybox.ajax">Quick View </a>							
																				</div>
																				
																				<div class="item-content">
																					<!-- rating  -->
																					<div class="reviews-content">
																						<div class="star"></div>
																						<div class="item-number-rating">0 Review(s)</div>
																					</div>
																					<!-- end rating  -->
																			 
																					<h4>
																						<a href="home_style_1_shop_product_default.html" title="Cupidatat quis">Cupidatat quis</a>
																					</h4>
																					
																					<div class="item-price">
																						<span>
																							<del>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>430.00
																								</span>
																							</del> 
																							
																							<ins>
																								<span class="woocommerce-Price-amount amount">
																									<span class="woocommerce-Price-currencySymbol">$</span>400.00
																								</span>
																							</ins>
																						</span>
																					</div>
																					
																					<!-- add to cart, wishlist, compare -->
																					<div class="add-info">
																						<div class="yith-wcwl-add-to-wishlist">
																							<div class="yith-wcwl-add-button show" style="display:block">
																								<a href="#" rel="nofollow" class="add_to_wishlist">Add to Wishlist</a>
																								<img src="images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" />
																							</div>
																							
																							<div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
																								<span class="feedback">Product added!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
																								<span class="feedback">The product is already in the wishlist!</span>
																								<a href="#" rel="nofollow">Browse Wishlist</a>
																							</div>
																							
																							<div style="clear:both"></div>
																							<div class="yith-wcwl-wishlistaddresponse"></div>
																						</div>
																						
																						<div class="clear"></div>
																						
																						<a rel="nofollow" href="#" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
																						
																						<div class="woocommerce product compare-button">
																							<a href="javascript:void(0)" class="compare button" rel="nofollow">Compare</a>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<!-- END ITEMS -->
																</div>
														    </div>
														</div>
														<!-- END SPORTS -->
													</div>
												</div>
											</div>
										</div>
										
										<div class="vc_row wpb_row vc_row-fluid margin-bottom-30">
											<div class="wpb_column vc_column_container vc_col-sm-12 vc_col-xs-12">
												<div class="vc_column-inner">
													<div class="wpb_wrapper">
														<!-- TOP SELLING -->
														<div id="top_selling_slider" class="category-ajax-slider">
															<div class="tab-category-title block-title">
																<strong>
																	<span>TOP SELLING</span>
																</strong>
																
																<div class="sn-img icon-bacsic item1"></div>
															</div>
															
															<div id="tab_top_selling_slider" class="sw-tab-slider responsive-slider" data-lg="10" data-md="8" data-sm="6" data-xs="3" data-mobile="2" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																<ul class="nav nav-tabs slider responsive">
																	<li class="">
																		<a href="#category_ajax_60" data-toggle="tab" data-catid="60" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/3_1.png" class="attachment-350x230 size-350x230" alt="3_1" />					
																				<h3>Computer</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_58" data-toggle="tab" data-catid="58" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/1_1.png" class="attachment-350x230 size-350x230" alt="1_1" />
																				<h3>Electronic</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="active">
																		<a href="#category_ajax_65" data-toggle="tab" data-catid="65" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/7_1.png" class="attachment-350x230 size-350x230" alt="7_1" />
																				<h3>Fashion</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_62" data-toggle="tab" data-catid="62" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/5_1.png" class="attachment-350x230 size-350x230" alt="5_1" />
																				<h3>MenSell</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_59" data-toggle="tab" data-catid="59" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/2_1.png" class="attachment-350x230 size-350x230" alt="2_1" />
																				<h3>Mobiles</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_67" data-toggle="tab" data-catid="67" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/8_1.png" class="attachment-350x230 size-350x230" alt="8_1" />
																				<h3>Purses</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_61" data-toggle="tab" data-catid="61" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/4.png" class="attachment-350x230 size-350x230" alt="4" />
																				<h3>Sports</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_63" data-toggle="tab" data-catid="63" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/6.png" class="attachment-350x230 size-350x230" alt="6" />
																				<h3>Vesture</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_66" data-toggle="tab" data-catid="66" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/9_1.png" class="attachment-350x230 size-350x230" alt="9_1" />
																				<h3>Watches</h3>
																			</div>
																		</a>
																	</li>
																	
																	<li class="">
																		<a href="#category_ajax_64" data-toggle="tab" data-catid="64" data-catload="ajax" data-number="10" data-orderby="ID" data-lg="4" data-md="4" data-sm="3" data-xs="1" data-mobile="1" data-speed="1000" data-scroll="1" data-interval="5000" data-autoplay="false">
																			<div class="item-image">
																				<img width="70" height="30" src="images/10.png" class="attachment-350x230 size-350x230" alt="10" />
																				<h3>Women</h3>
																			</div>
																		</a>
																	</li>
																</ul>
															</div>
															
															<div class="tab-content">
																<div id="category_ajax_60" class="tab-pane fade in"></div>															
																<div id="category_ajax_58" class="tab-pane fade in"></div>															
																<div id="category_ajax_65" class="tab-pane fade in active"></div>															
																<div id="category_ajax_62" class="tab-pane fade in"></div>															
																<div id="category_ajax_59" class="tab-pane fade in"></div>															
																<div id="category_ajax_67" class="tab-pane fade in"></div>															
																<div id="category_ajax_61" class="tab-pane fade in"></div>															
																<div id="category_ajax_63" class="tab-pane fade in"></div>															
																<div id="category_ajax_66" class="tab-pane fade in"></div>															
																<div id="category_ajax_64" class="tab-pane fade in"></div>
															</div>
														</div>
														<!-- END TOP SELLING -->
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div> 

     
</template>

<script>
export default {
  name: 'HomePage',

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/scss/theme.scss";
</style>
