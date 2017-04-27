

var appear = require ("./../index.js");
var mocha = require ("mocha");
var chai = require ("chai");

var jsdom = require("jsdom");

 var document = require("jsdom").jsdom(
"<!doctype html><html><head></head><body></body></html>");
var window =  document.defaultView;
window.document = document;

//vérifier que l'on peut injecter window
appear.init(window);
appear.emergency("helllooooo");


//description du test suite (le sujet du test)
mocha.describe("appear", function () {
     
 mocha.it("appear is a module", function (){
     chai.assert("object" === typeof appear);
 });
    
    
   mocha.describe("Methods", function () {   
    
   mocha.it("Emergency is a function", function () {
    chai.assert("function" === typeof appear.emergency); 
   });
   
   mocha.it("Does emergency create appear", function () {
       appear.emergency("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Alert is a function", function () {
    chai.assert("function" === typeof appear.alert);
});
    
    mocha.it("Does alert create appear", function () {
           appear.alert("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Critical is a function", function () {
    chai.assert("function" === typeof appear.critical); 
});
    
    mocha.it("Does critical create appear", function () {
           appear.critical("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Error is a function", function () {
    chai.assert("function" === typeof appear.error); 
});
    
    mocha.it("Does error create appear", function () {
           appear.error("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Warning is a function", function () {
    chai.assert("function" === typeof appear.warning); 
});    
    
    mocha.it("Does warning create appear", function () {
           appear.warning("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Notice is a function", function () {
    chai.assert("function" === typeof appear.notice);
});
    
    mocha.it("Does notice create appear", function () {
           appear.notice("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Info is a function", function () {
    chai.assert("function" === typeof appear.info);
});
    
    mocha.it("Does info create appear", function () {
           appear.info("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
   
   mocha.it("Debug is a function", function () {
    chai.assert("function" === typeof appear.debug); 
});
    
    mocha.it("Does debug create appear", function () {
           appear.debug("Fooooo"); 
    chai.assert(
            "object" === typeof window.document.body.lastChild
            && "appear" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
           );
           window.document.body.removeChild(
                   window.document.body.lastChild
                   );
           console.log(window.document.body.lastChild);
   });
     
   mocha.it("Init is a function", function () {
    chai.assert("function" === typeof appear.init); 
    
 
   });
   
});

});
