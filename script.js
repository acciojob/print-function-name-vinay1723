//your JS code here. If required.
function myName() {
	alert(`${arguments.callee.name}`)
}

myName();