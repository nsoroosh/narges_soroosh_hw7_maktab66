function Objmaker(classname,classunite,classcapacity){
    this.className= classname
    this.classUnite=classunite
    this.classCapacity=classcapacity

}
let softEngineeringClass=new Objmaker("softEngineeringClass",3,50)
let networkClass = new Objmaker("networkClass",2,40)
console.log(softEngineeringClass)
console.log(networkClass)

//-----------------b part-------------------//
 softEngineeringClass.project="true"
 console.log(softEngineeringClass)
 networkClass.book="sample book"
 console.log(networkClass)