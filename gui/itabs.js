    $(document).ready(function() {
                var $tabs = $('#tabs').tabs();
                //get selected tab
                function getSelectedTabIndex() {
                    return $tabs.tabs('option', 'active');
                }
                //get tab contents
                beginTab = $("#tabs ul li:eq(" + getSelectedTabIndex() + ")").find("a");
                loadTabFrame($(beginTab).attr("href"),$(beginTab).attr("rel"));
                $("a.tabref").click(function() {
                    loadTabFrame($(this).attr("href"),$(this).attr("rel"));
                });
                //tab switching function
                function loadTabFrame(tab, url) {
                    if ($(tab).find("iframe").length == 0) {
                        var html = [];
                        html.push('<div class="tabIframeWrapper">');
                        html.push('<div class="openout"><a href="' + url + '"><img src="data/world.png" border="0" alt="Open" title="Remove iFrame" /></a></div><iframe class="iframetab" src="' + url + '">Load Failed?</iframe>');
                        html.push('</div>');
                        $(tab).append(html.join(""));
                        $(tab).find("iframe").height($(window).height()-80);
                    }
                    return false;
                }
            });
  
  infotext="Welcome to this demo<br><br>A WebGL experiment, rendering a fully accessible website on a computer 3d model.<br><br> Featuring functional javascript browser and interface.";
  
  $(function() {
    $( "#menu" ).menu();
  document.getElementById("info").onclick = function () {
        $( "#dialog-info" ).dialog({
               autoOpen: false,
               resize: function( event, ui ) {
                  $( this ).dialog( "option", "title",
	         ui.size.height + " x " + ui.size.width );
               }
               }); 
               $( "#dialog-info" ).dialog( "open" );
		  $( "#dialog-info" ).append(infotext);
     //document.getElementById("info").innerHTML = emailinfotext;};
    };
   
  		  document.getElementById("urlbrowser").onclick = function () {
            $( "#dialog-browser" ).dialog({
                   autoOpen: false, 
              resizable: true,
	      modal: true,
	      width: '80%',
           resize: function( event, ui ) {
               $("iframe").height($(window).height());
	       $("iframe").width($(window).width());
               }
             }); 
               $( "#dialog-browser" ).dialog( "open" );
 	       $("#dialog-browser").append($("<iframe />").attr("src", "../metabrowser/duckgo.html"));
        };	


     //document.getElementById("info").innerHTML = appsinfotext;};

});		
   
		   