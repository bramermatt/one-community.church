document.addEventListener("DOMContentLoaded", function() {

    // Determine the basePath based on the current path
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes("/pages/") ? "../" : "";

    const navbarHTML = `
        <nav>
            <div class="nav-img">
                <a href="${basePath}index.html"><img src="${basePath}img/occ-favicon.png" alt=""></a>
                <ul>
                    <li><a href="${basePath}pages/new-to-occ.html">New to OCC? <i class="fa-solid fa-person-rays"></i></a></li>
                </ul>
            </div>
            <ul class="nav-topic">
                <li><a href="#">Sign up for VBS 2024</a></li>
            </ul>
            <ul class="nav-desktop">
                <li><a href="${basePath}pages/about-us.html">About</a></li>
                <li><a href="${basePath}pages/sermons.html">Sermons</a></li>
                <li><a href="${basePath}pages/ministries.html">Ministries</a></li>
                <li class="dropdown" id="services">
                    <button class="dropbtn" onclick="toggleDropdown('dropDown1', this)">Services <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                    <div class="dropdown-content" id="dropDown1">
                        <div class="grid-content">
                            <div class="pd-15">
                                <h1>Sundays</h1>
                                <p><strong>Small Group:</strong> 9:45 AM</p>
                                <p><strong>Worship:</strong> 11:00 AM</p>
                            </div>
                            <div class="pd-15">
                                <h1>Wednesdays</h1>
                                <p><strong>Small Group:</strong> 6:30 PM</p>
                                <p><strong>Worship:</strong> 7:00 PM</p>
                            </div>
                            <div class="pd-15">
                                <h1>Stream LIVE</h1>
                                <p><strong><a href="https://www.youtube.com/@OneCommunityChurchIndiana/live" target="_blank"> <img src="${basePath}img/icon/youtube.png" alt=""></a></strong></p>
                                <p><strong><a href="https://www.facebook.com/onecommunitychurch" target="_blank"><img src="${basePath}img/icon/facebook.png" alt=""></a></strong></p>
                            </div>
                            <div class="pd-15">
                                <h1>In Person</h1>
                                <p><strong>One Community Church Indiana</strong>, located at <em>1810 Blackiston Mill Road, Clarksville, IN 47129</em></p>
                                <div class="iframe-container" style="border-radius: 10px;">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.32639216147!2d-85.77988768442322!3d38.31827188847578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88696de4c640ef57%3A0xcdb8a9dc819fbcfc!2s1810%20Blackiston%20Mill%20Rd%2C%20Clarksville%2C%20IN%2047129!5e0!3m2!1sen!2sus!4v1664753261156!5m2!1sen!2sus" width="100%" height="380" style="border:0; display: block; margin-bottom: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>



            <li class="dropdown" id="prayer">
                <button class="dropbtn" onclick="toggleDropdown('dropDown3', this)">Prayer <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                <div class="dropdown-content" id="dropDown3">
                    <div class="grid-content">
                        <div class="pd-15">
                            <h1>Need Prayer?</h1>
                            <p><strong>Send a Prayer Request:</strong> <a href="mailto:pastoronecommunity@gmail.com?subject=Prayer%20Request" target="_blank" rel="noopener noreferrer">pastoronecommunity@gmail.com</a></p>
                        </div>

                        


                        
                    </div>
                </div>
            </li>
            

            <li class="dropdown">
                <button class="dropbtn" onclick="toggleDropdown('dropDown4', this)">Giving <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                <div class="dropdown-content" id="dropDown4">
                    <div class="grid-content">
                        <div class="pd-15">
                            <h1>Online Offering</h1>
                            <p><a href="https://square.link/u/9iWte5VO" target="_blank">One Community Church Indiana Online Giving</a></p>
                        </div>
                        

                    </div>
                </div>
            </li>

            <li class="dropdown">
                <button class="dropbtn" onclick="toggleDropdown('dropDown5', this)">Events <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                <div class="dropdown-content" id="dropDown5">
                    <div class="grid-content">

                        <div class="pd-15">
                            <h1>Recent Events</h1>
                            <p><a href="${basePath}/index.html#upcoming" rel="noopener noreferrer">Upcoming Events</a></p>
                            <!-- <p><a href="${basePath}/index.html#worshipGuides" rel="noopener noreferrer">Worship Guides</a></p> 
                            <p><a href="https://www.youtube.com/embed/rD0Jpubf668?si=Xm6nkT1Q7mylww3y" target="_blank">VBS 2024 Highlight Video</a></p> -->
                        </div>



                        <div class="pd-15">
                            <div class="iframe-container" style="width: 50vw; margin-top: 10px;">
                                <iframe src="https://calendar.google.com/calendar/embed?src=177ministries%40gmail.com&ctz=America%2FNew_York" style="border: 0" width="80vw" height="600" frameborder="0" scrolling="no"></iframe>
                            </div>
                        </div>


                        

                    </div>
                </div>
            </li>


            
        </ul>

        <ul class="nav-mobile">
            <li>
                <!-- <a href="javascript:void(0);" class="icon" onclick="myFunction();scrollToTop()"> -->
                    <span onclick="mobileMenu();myFunction();"><i class="fa fa-bars" id="menu-icon"></i></span>
                    <!-- <i class="fa fa-bars" aria-hidden="true" style="font-size: 22px;"></i> -->
                  </a>
            </li>            
        </ul>

    </nav>

    <!-- orig mobile nav -->
    <ul class="mobile-nav" id="mobile-nav">


            <div class="grid-four-two-content pd-15"  style="max-width: 1200px; margin: 0 auto; margin-top: 40px;">

                <div class="pd-15">
                    <h1>Ministries</h1>
                    <p><a href="${basePath}/pages/ministries.html#nursery">Nursery</a></p>
                    <p><a href="${basePath}/pages/ministries.html#children">Children</a></p>
                    <p><a href="${basePath}/pages/ministries.html#youth">Youth</a></p>
                    <p><a href="${basePath}/pages/ministries.html#young-adult">Young Adult</a></p>
                    <p><a href="${basePath}/pages/ministries.html#adult">Adult</a></p>

                </div>

                <div class="pd-15">
                    <h1>Community Ministries</h1>
                    <p><a href="${basePath}/pages/ministries.html#blessing-box">Blessing Box</a></p>
                    <p><a href="${basePath}/pages/ministries.html#good-samaritan-cycles">Bike Giveaways</a></p>
                    <!-- <p><a href="mailto:pastoronecommunity@gmail.com?subject=Prayer%20Request" target="_blank" rel="noopener noreferrer">Prayer Request</a></p> -->
                </div>

                <div class="pd-15">
                    <h1>About Us</h1>
                    <p><a href="${basePath}/pages/about-us.html#meet-our-pastors">Meet Our Pastors</a></p>
                    <p><a href="${basePath}/pages/about-us.html#meet-our-staff">Meet Our Staff</a></p>
                    <p><a href="${basePath}/pages/about-us.html#our-history">Our History</a></p>
                </div>

                <div class="pd-15">
                <h1>More Sermons</h1>
                <p><a href="${basePath}pages/sermons.html">Watch Our Sermons</a></p>
                </div>

                
                <div class="pd-15">
                    <h1>Need Prayer?</h1>
                    <p><a href="mailto:pastoronecommunity@gmail.com?subject=Prayer%20Request" target="_blank" rel="noopener noreferrer">Prayer Request</a></p>
                </div>
        
                <div class="pd-15">
                    <h1>Connect With Us</h1>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScMjB4WOonUZl6GeC7wZnYWrJmF5OTvE_90fhHpiu9AJBHWNQ/viewform" target="_blank">Connect With Us!</a></p>
                </div>

                <div class="pd-15">
                    <h1>Support Our Ministry</h1>
                    <p><a href="https://square.link/u/9iWte5VO" target="_blank">One Community Church Online Giving</a></a></p>
                </div>
        
                <div class="pd-15">
                    <h1>Events Calendar</h1>
                    <p><a href="https://calendar.google.com/calendar/embed?src=177ministries%40gmail.com&ctz=America%2FNew_York" target="_blank" rel="noopener noreferrer">One Community Church Event Calendar</a></p>
                </div>
        
                <div class="pd-15">
                    <h1>Renting the Church?</h1>
                    <p><a href="https://tinyurl.com/39kwek9t" target="_blank">Facilities Agreement</a></p>
                </div>
        
                <div class="pd-15">
                    <h1>Contact Us</h1>
                    <p><i class="fa fa-phone"></i> <a href="tel:8129440046">(812) 944-0046</a></p>
                </div>
        
                <div class="pd-15">
                    <h1>Find Us</h1>
                    <p><i class="fa fa-street-view"></i>  <a href="https://maps.app.goo.gl/91r3VdJow4SGdpqM8" target="_blank">1810 Blackiston Mill Road, Clarksville, IN, 47129</a></p>
                </div>
        
        
        
        
            </div>



    </ul>

    </nav>
`

const footerHTML = `
<footer>


    <div class="grid-four-two-content" style="max-width: 1200px; margin: 0 auto; margin-top: 40px;">


                
        <div class="pd-15">
            <h1>Need Prayer?</h1>
            <p><a href="mailto:pastoronecommunity@gmail.com?subject=Prayer%20Request" target="_blank" rel="noopener noreferrer">Prayer Request</a></p>
        </div>

        <div class="pd-15">
            <h1>Connect With Us</h1>
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScMjB4WOonUZl6GeC7wZnYWrJmF5OTvE_90fhHpiu9AJBHWNQ/viewform" target="_blank">Connect With Us!</a></p>
        </div>

        <div class="pd-15">
            <h1>Support Our Ministry</h1>
            <p><a href="https://square.link/u/9iWte5VO" target="_blank">One Community Church Online Giving</a></a></p>
        </div>

        <div class="pd-15">
            <h1>Event Calendar</h1>
            <p><a href="https://calendar.google.com/calendar/embed?src=177ministries%40gmail.com&ctz=America%2FNew_York" target="_blank" rel="noopener noreferrer">One Community Church Event Calendar</a></p>
        </div>

        <div class="pd-15">
            <h1>Facilities Agreement</h1>
                    <p><a href="https://tinyurl.com/39kwek9t" target="_blank">Facilities Agreement</a></p>
        </div>

        <div class="pd-15">
            <h1>Contact Us</h1>
            <p><i class="fa fa-phone"></i> <a href="tel:8129440046">(812) 944-0046</a></p>
        </div>

        <div class="pd-15">
            <h1>Find Us</h1>
            <p><i class="fa fa-street-view"></i>  <a href="https://maps.app.goo.gl/91r3VdJow4SGdpqM8" target="_blank">1810 Blackiston Mill Road, Clarksville, IN, 47129</a></p>
        </div>

        <div class="pd-15">
            <h1>Follow Us</h1>
            <p><i class="fa-brands fa-youtube"></i>  <a href="https://www.youtube.com/@OneCommunityChurchIndiana" target="_blank">on YouTube</a></p>
            <p><i class="fa-brands fa-facebook"></i>  <a href="https://www.facebook.com/onecommunitychurch" target="_blank">on Facebook</a></p>
        </div>




    </div>
        

    <img src="${basePath}/img/occ-favicon.png" alt="">
        

</footer>`
                
    // Append navbar and footer safely
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});

// Dropdown toggle function
function toggleDropdown(dropdownId, button) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('show');
}

