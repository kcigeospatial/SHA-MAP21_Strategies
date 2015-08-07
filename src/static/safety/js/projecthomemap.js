//<![CDATA[
      // this variable will collect the html which will eventually be placed in the side_bar 
      var side_bar_html = ""; 
    
      // arrays to hold copies of the markers and html used by the side_bar 
      // because the function closure trick doesnt work there 
      var gmarkers = []; 

     // global "map" variable
      var map = null;var prjCountPlan=0, prjCountDesg=0, prjCountCont=0;
      var minZoomLevel = 8, maxZoomLevel = 15;

      
// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html,prjno) {
    var contentString = html;

	//alert(prjno + '-' + prjno.substring(5,6));
	planicon = "http://maps.gstatic.com/mapfiles/ms2/micons/green.png";
	desiicon = "http://maps.gstatic.com/mapfiles/ms2/micons/blue.png";
	consicon = "http://maps.gstatic.com/mapfiles/ms2/micons/red.png";
	
     iconimg = consicon;
     if (prjno.substring(5,6) == 1) {
     	iconimg = planicon;prjCountPlan++;
     } else if (prjno.substring(5,6) == 2) {
     	iconimg = desiicon;prjCountDesg++;
     } else {
	     prjCountCont++;
     }
     var myIcon = new google.maps.MarkerImage(iconimg, null, null, null, new google.maps.Size(15,15));
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title : name,
        icon: myIcon,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString); 
        infowindow.open(map,marker);
        });
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    //side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
}
 
// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

function initialize() {
  // create the map
  var myOptions = {
    zoom: 8,
    center: new google.maps.LatLng(38.955, -76.737),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
 
 //http://www.jmcconahie.com/Software/Scripts/GoogleMap.js
 map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

 var invisColor = "#000000";
var outlineColor = "#0ABA02";   //green

//Maryland  ( TODO: better borders all around )
    points = [  
        new google.maps.LatLng(38.015 ,-75.387),     //bottom left-ish
        new google.maps.LatLng(37.979 ,-75.632),
        new google.maps.LatLng(37.883 ,-76.234),
        new google.maps.LatLng(37.993 ,-76.576),
        new google.maps.LatLng(38.042 ,-76.512),
        new google.maps.LatLng(38.144 ,-76.616),
        new google.maps.LatLng(38.155 ,-76.705),
        new google.maps.LatLng(38.065 ,-76.691),
        new google.maps.LatLng(38.164 ,-76.774),
        new google.maps.LatLng(38.195 ,-76.989),
        new google.maps.LatLng(38.4 ,-77.05),
        new google.maps.LatLng(38.351 ,-77.363),
        new google.maps.LatLng(38.357 ,-77.29),
        new google.maps.LatLng(38.438 ,-77.37),
        new google.maps.LatLng(38.394 ,-77.312),
        new google.maps.LatLng(38.659 ,-77.243),
        new google.maps.LatLng(38.72 ,-77.045),
        new google.maps.LatLng(38.911 ,-77.101),
        new google.maps.LatLng(38.934 ,-77.12),
        new google.maps.LatLng(39.077 ,-77.463),
        new google.maps.LatLng(39.14 ,-77.526),
        new google.maps.LatLng(39.225 ,-77.458),
        new google.maps.LatLng(39.307 ,-77.636),
        new google.maps.LatLng(39.31 ,-77.648),
        new google.maps.LatLng(39.321 ,-77.719),     //top of virginia
        new google.maps.LatLng(39.496 ,-77.766),
        new google.maps.LatLng(39.552 ,-77.887),
        new google.maps.LatLng(39.603 ,-77.834),
        new google.maps.LatLng(39.696 ,-78.174),
        new google.maps.LatLng(39.624 ,-78.428),
        new google.maps.LatLng(39.516 ,-78.468),
        new google.maps.LatLng(39.544 ,-78.687),
        new google.maps.LatLng(39.645 ,-78.776),
        new google.maps.LatLng(39.441 ,-78.958),
        new google.maps.LatLng(39.474 ,-79.105),
        new google.maps.LatLng(39.202 ,-79.473),
        new google.maps.LatLng(39.721 ,-79.477),     //top left
        new google.maps.LatLng(39.721 ,-75.789),      //top right
        new google.maps.LatLng(38.46 ,-75.693),
        new google.maps.LatLng(38.451 ,-75.093),
        new google.maps.LatLng(38.451 ,-75.058),
        new google.maps.LatLng(38.451 ,-75.049)      //coast end

    ];

  // Construct the polygon
  var Maryland = new google.maps.Polygon({
    paths: points,
    strokeColor: outlineColor,
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: invisColor,
    fillOpacity: 0
  });
  
  //add event listeners to polygon, then add polygon to map
  google.maps.event.addListener(Maryland, 'mouseover',  function() { Maryland.setOptions({strokeOpacity: 1}); });
  google.maps.event.addListener(Maryland, 'mouseout', function() { Maryland.setOptions({strokeOpacity: 0}); });
  google.maps.event.addListener(Maryland, 'click', function() { document.getElementById("StateName").innerHTML = "Maryland"; extend(); });
  Maryland.setMap(map);
 
 		var bounds1 = new google.maps.LatLngBounds();
 		for (i = 0; i < points.length; i++) {
 		  bounds1.extend(points[i]);
		}
		map.fitBounds(bounds1);
 
	var myTitle = document.createElement('div');
	myTitle.style.color = 'Black';
	myTitle.innerHTML = '<div id="divinstr" style="text-align:left;display:block;border:1px solid black;background-color:white;padding:3px;">' + 
	'<img src="http://maps.gstatic.com/mapfiles/ms2/micons/green.png" width=13 height=13/> Planning <input  type="checkbox" id="attractionbox1" checked="yes" onclick=boxclick("green") /><br/>' +
	'<img src="http://maps.gstatic.com/mapfiles/ms2/micons/blue.png" width=13 height=13/> Design <input type="checkbox" id="attractionbox2" checked="yes"  onclick=boxclick("blue") /> <br/>' +
	'<img src="http://maps.gstatic.com/mapfiles/ms2/micons/red.png" width=13 height=13/> Construction <input type="checkbox" id="attractionbox5" checked="yes"  onclick=boxclick("red") /></div>';
	
	
	
	var myTextDiv = document.createElement('div');
	myTextDiv.appendChild(myTitle);

	myTextDivId = map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(myTextDiv); 
 
 
  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

      // Read the data from example.xml
      downloadUrl("resources/PLCProjects.xml", function(doc) {
          debugger;
        var xmlDoc = xmlParse(doc);
        var markers = xmlDoc.documentElement.getElementsByTagName("marker");
        var missedPrjs = "";var missedPrjsCnt=0;
        //alert('a - ' + markers.length);
        for (var i = 0; i < markers.length; i++) {
          //alert(i);
          // obtain the attribues of each marker
          var startpoint = markers[i].getAttribute("startpoint");
	  var name = markers[i].getAttribute("name");
	  var prjno = markers[i].getAttribute("prjno");



          if (startpoint == "") {
		 var phase = "Construction";
		 if (prjno.substring(5,6) == 1 || prjno.substring(5,6) == 2) {
			phase = "Pre-Construction";
		 }
	          missedPrjs = missedPrjs + " <option value='/WebProjectLifeCycle/ProjectInformation.aspx?projectno=" + prjno + "'>" + prjno + " - " + phase + " - " + name.substring(0,40) + "...</option>";

	          //missedPrjs = missedPrjs + " <a title='" + name + "' href='ProjectInformation.aspx?projectno=" + prjno + "'>" + prjno + "</a>&nbsp;&nbsp; ";
	          missedPrjsCnt++;
          } else {
		  var latlang = startpoint.split(",")
		  var point = new google.maps.LatLng(latlang[0],latlang[1]);
		  var label = prjno + ' - ' + name.substring(0,15) + '...';
		  /*var html = '<div style="width:200px;">Project No : ' + prjno + ' <br><br>Name : ' + name + 
			   '<br><br><a href="http://apps.roads.maryland.gov/WebProjectLifeCycle/ProjectInformationmap.aspx?projectno='
			   + prjno + '">Details</a>' + '</div>';*/
		  var html = '<div style="width:200px;">Project No : ' + prjno + ' <br><br>Name : ' + name + 
			   '<br><br><a href="http://apps.roads.maryland.gov/WebProjectLifeCycle/ProjectInformation.aspx?projectno='
			   + prjno + '">Details</a>' + '</div>';

		  // create the marker

		  var marker = createMarker(point,label,html,prjno);
	  }
        }
        // put the assembled side_bar_html contents into the side_bar div
        //document.getElementById("side_bar").innerHTML = side_bar_html;
        var totPrjs = prjCountPlan + prjCountDesg + prjCountCont;
        
        var missedPrjsStr = "<select id='example-select' onchange='showprjinfo(this)'>" + 
        	"<option>Projects currently not displayed on the map(" + missedPrjsCnt + ")</option>";
        if (missedPrjs == "") {
	        missedPrjsStr = "";
        } else {
	        missedPrjsStr = missedPrjsStr + missedPrjs + "</select>";
        }
        //alert(missedPrjsStr);
        document.getElementById("projcounts").innerHTML = "Total Projects : " + totPrjs + "(Planning = " + prjCountPlan + ", Design = " + prjCountDesg + ", Construction = " + prjCountCont + ")<br>" + missedPrjsStr;
        
	   // Limit the zoom level
	   google.maps.event.addListener(map, 'zoom_changed', function() {
	     if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);

	     if (map.getZoom() > maxZoomLevel) map.setZoom(maxZoomLevel);
	     
	   });

        
      });
    }

function showprjinfo(selobj) {
	//alert(selobj.selectedIndex);
	if (selobj.selectedIndex > 0) {
		window.open('http://apps.roads.maryland.gov/' + selobj.value);
	}
	
}
 
var infowindow = new google.maps.InfoWindow(
  { 
    size: new google.maps.Size(150,50)
  });
    
function boxclick(iconcolor) {

	//alert();
	clearOverlays();


}

function clearOverlays() {

  if (gmarkers) {

    for (i in gmarkers) {
    
	curiconurl = gmarkers[i].getIcon().url;//alert(curiconurl);
	box1 = document.getElementById("attractionbox1").checked;
	box2 = document.getElementById("attractionbox2").checked;
	box5 = document.getElementById("attractionbox5").checked;
	
	var matchPos1 = curiconurl.search("green");
	if(matchPos1 >= 0) {
		if (box1) {
			gmarkers[i].setMap(map);		
		} else {
			gmarkers[i].setMap(null);		
		}
	}

	matchPos1 = curiconurl.search("blue");
	if(matchPos1 >= 0) {
		if (box2) {
			gmarkers[i].setMap(map);		
		} else {
			gmarkers[i].setMap(null);		
		}
	}
	
	matchPos1 = curiconurl.search("red");
	if(matchPos1 >= 0) {
		if (box5) {
			gmarkers[i].setMap(map);		
		} else {
			gmarkers[i].setMap(null);		
		}
	}	
	

    }

  }

}

    // This Javascript is based on code provided by the
    // Community Church Javascript Team
    // http://www.bisphamchurch.org.uk/   
    // http://econym.org.uk/gmap/
    // from the v2 tutorial page at:
    // http://econym.org.uk/gmap/basic3.htm 
//]]>

