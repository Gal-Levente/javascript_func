const object = {}
if (object > 5) {
    object.name = "Név"
} else {
    object["name"] = "Feri"
}
console.log(object)
console.log(object["name"])
if (object.age == undefined) {}
if (object.age == null) {}
if (object.age === null) {}
if (object.age) {}
if (!object.age) {}