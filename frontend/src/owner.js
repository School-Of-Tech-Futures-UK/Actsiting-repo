function score() { 
	document.getElementById("venueName").value = venueName
    document.getElementById("venueOwnerEmail").value = venueOwnerEmail
    document.getElementById("venueCapacity").value = venueCapacity
	fetch("http://localhost:3000", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			venueName,
			venueOwnerEmail,
            venueCapacity
		})
	})
}

