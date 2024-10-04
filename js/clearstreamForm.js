document.addEventListener("DOMContentLoaded", function() {
    const clearstreamFormHTML = `
    <!-- Modal Structure -->
    <div id="subscribeModal" class="modal">
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <h2>Stay up to date!</h2>
            <p class="cs_html_form_subtitle">Fill out the form to receive our text alerts.</p>
            
            <!-- BEGIN CLEARSTREAM FORM -->
            <link media="all" type="text/css" rel="stylesheet" href="https://app.clearstream.io/css/external/form.html.css"/>
            <div class="cs_html_form_container">
                <form class="cs_html_form" action="https://opturl.com/h/oZY07adR" method="post" id="cs_html_form_oZY07adR" target="_blank">
                    <div class="cs_html_form_row">
                        <input type="text" name="mobile_number" placeholder="Mobile Number *" data-country="US"/>
                    </div>
                    <div class="cs_html_form_row">
                        <input type="text" name="first" placeholder="First Name"/>
                    </div>
                    <div class="cs_html_form_row">
                        <input type="text" name="last" placeholder="Last Name"/>
                    </div>
                    <div class="cs_html_form_row">
                        <input type="text" name="email" placeholder="Email Address"/>
                    </div>
                    <div class="cs_html_form_row">
                        <button type="submit">Subscribe</button>
                    </div>
                    <p class="cs_html_form_terms">Message & data rates may apply. Message frequency varies. <a href="http://clst.io/terms">Terms of use</a> and <a href="http://clst.io/privacy">Privacy policy</a>. To opt-out, text STOP at any time. <a href="https://clearstream.io">Church software by Clearstream.</a></p>
                </form>
            </div>
            <script src="https://app.clearstream.io/js/external/form.html.js"></script>
            <script type="text/javascript">var $csj = jQuery.noConflict(true);</script>
            <!-- END CLEARSTREAM FORM -->
        </div>
    </div>
    `;
    
    // Insert the modal HTML into the body
    document.body.insertAdjacentHTML('afterbegin', clearstreamFormHTML);

    // Now that the modal is inserted, set up event listeners

    // Get the elements after the modal is added to the DOM
    const openModal = document.getElementById("openModal");
    const modal = document.getElementById("subscribeModal");
    const closeModal = document.getElementById("closeModal");

    // Open modal when the bell icon is clicked
    openModal.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});
