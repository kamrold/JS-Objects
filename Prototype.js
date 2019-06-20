// Business Logic for AddressBook ---------
function AddressBook() 
{
	this.contacts=[],
	this.numId=0
}
function Contact(first_name, last_name, phone_number, email) 
{
  this.first_name=first_name,
  this.last_name =last_name,
  this.phone_number =phone_number,
  this.email = email,
 }
  address = ("Street","City","country"){
  this.street,
  this.city,
  this.country
  }
  Contact.prototype.full_name = function()
 {

console.log("full_name:" + this.first_name + " " + this.last_name);
}
var Contact1 =(contact1 = new Contact (" Roland " + " Bisasso " + " 0755363699 " + " roland.bisasso@gmail.com " + " Nsabya " + "Kampala " + " Uganda ");

Contact.full_name ();
