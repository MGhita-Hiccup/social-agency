var ProductNameInput = document.getElementById("ProductNameInput"); //All docs
var ProductPriceInput = document.getElementById("ProductPriceInput"); //All docs
var ProductCatogryInput = document.getElementById("ProductCatogryInput"); //All docs
var ProductDescraptionInput = document.getElementById("ProductDescraptionInput"); //All docs
var productsContainer = [];
if (localStorage.getItem("products") != null)
    {
        productsContainer = JSON.parse(localStorage.getItem("products"));
        
    }
    function addProduct()
    {
        if(validatProductName() == true)
        {
            var product = {
                name:ProductNameInput.value,
                price:ProductPriceInput.value,
                catogry:ProductCatogryInput.value,
                descrbtion:ProductDescraptionInput.value
            }
            productsContainer.push(product);
            localStorage.setItem("products", JSON.stringify(productsContainer)); //=> to store them inside setItem
            clearForm();
            console.log(productsContainer);
            
    
        }
        else
        {
            window.alert("inValid Name Product") &&
            window.alert("inValid Mail")     

        }
        
    };
    
    
    
    
    
    function clearForm() {
        ProductNameInput.value = "";
        ProductPriceInput.value = "";
        ProductCatogryInput.value = "";
        ProductDescraptionInput.value = "";
    }

    function validatProductName() {
        regex = /^[A-Z | a-z][A-Z | a-z]{3,20}$/;
        if(regex.test(ProductNameInput.value) == true)
        {
            return true;
    
        }
        else
         {
            return false;
        }
    }
/*
    function validatCatogryInput() {
        regex = /^[a-z | 0-100 | .] {0,20}@(yahoo|gmail)\.com$/;
        if(regex.test(ProductCatogryInput.value) == true)
        {
            return true;
    
        }
        else
         {
            return false;
        }
    }
*/






$(document).ready(function() {
    $(".skitter-large").skitter({
        interval:1000,
    });
    $("#sidBar i").click(function () {

        let boxWidth = $(".box").outerWidth()
        if($("#sidBar").css('left') == '0px') {
            $("#sidBar").animate({left:`-${boxWidth}`} , 1000)
        }
        else {
            $("#sidBar").animate({left:`0px`} , 1000)
    
        }   
    });

    var typed = new Typed('.hambozo', {
        // Waits 1000ms after typing "First"
        strings: ['We Are Solutions For Your Digital Needs.|'],
        typeSpeed:100,
        loob:true    
      });
      var typed = new Typed('.hambozo2', {
        // Waits 1000ms after typing "First"
        strings: ['Campaign is one of the best digital marketing companies, providing all integrated digital marketing services, also specialized in providing brand identity design services in addition to web, programming, and web hosting services. Since our inception, we have been characterized by creativity, which made us reach the top in very small periods, We help your company stand out by building a distinctive brand and then increasing its awareness, which helps the audience to find you easily. We make your brand top of the first search results such as Google, Facebook, and others.'],
        typeSpeed:50,
        loob:true    
      });

    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

    let colorBoxes = $(".colorItem");
    colorBoxes.eq(0).css('backgroundColor' , '#09c')
    colorBoxes.eq(1).css('backgroundColor' , 'teal')
    colorBoxes.eq(2).css('backgroundColor' , 'orange')
    colorBoxes.eq(3).css('backgroundColor' , 'lightgreen')
    colorBoxes.click(function (e) {
        let bgAbout = $(e.target).css('backgroundColor');
        $('h3').css('color' , bgAbout)
        
    })
    
  });





  /*
/web[0-9]{3}web/gm                     =>web456web
/web[0-9]{0,1}web/gm                   =>webweb
/web {0,1}(design|development)/gm       =>ghitaweb designghita

/^web {0,1}(design|development)$/gm        =>web design

/^(002|0021)(010|011|012|015)[0-9]{8}$/gm   =>00201112514561
/^(002)?01[0125][0-9]{8}$/gm        =>00201112514561
/^(002)?(01|1)[0125][0-9]{8}$/gm    =>0021112514561

? => zero or one
* => zero or more
+ => one ore more
. => any thing after.
\s => space
\S => antthing Not space
\d => equal [0-9]
\D => anything Not [0-9]
^[0-9] => anything Not [0-9]
^\w => equal a-z or A-Z OR number or _ 
^\W => any thing not a-z or A-Z OR number or _ 

/^([1-7][0-9]|80)$/gm   =>79 incase human reched from one year to 80year

/^[a-z]{5}@(yahoo|gmail)\.com/gm   =>khald@gmail.com
*/
/*
var regex = /^[a-z]/i;
var ProductName = "Samsung";
console.log(regex.test(ProductName));
var itemName = "samsung and note and five And pro"
console.log(itemName.replace(/and/g , "&"))
console.log(itemName.replace(/\s/g , ""))
console.log(itemName.replace(/and/ig , "&"))
*/


