$(document).ready((e) => { 
    //hidden pages
    $('.delivery').hide();
    $('.paymentForm').hide();
    $('.dropDowns').hide();

    $('#completeOrder').click(()=> {
        $('.ordering').hide();
        $('.delivery').show();
        $('.paymentForm').hide();
    });

    $('#deliveryBtn1').click(()=> {
        $('.ordering').hide();
        $('.delivery').hide();
        $('.paymentForm').show();
    });

    //hide and show crust drop downs
    $('.dropHandToss').hide();
    $('.dropThinCrust').hide();
    $('.dropNY').hide();
    $('.dropGFree').hide();

    $('#customRadio1').click(() => {
        $('.dropHandToss').show();
        $('.dropThinCrust').hide();
        $('.dropNY').hide();
        $('.dropGFree').hide();
    })
    $('#customRadio2').click(() => {
        $('.dropHandToss').hide();
        $('.dropThinCrust').show();
        $('.dropNY').hide();
        $('.dropGFree').hide();
    })
    $('#customRadio3').click(() => {
        $('.dropHandToss').hide();
        $('.dropThinCrust').hide();
        $('.dropNY').show();
        $('.dropGFree').hide();
    })
    $('#customRadio4').click(() => {
        $('.dropHandToss').hide();
        $('.dropThinCrust').hide();
        $('.dropNY').hide();
        $('.dropGFree').show();
    })
    //variables for all the validation and cc
    //delivery section
    let name = document.querySelector('#fullName');
    let address = document.querySelector('#address');
    let apt = document.querySelector('#aptOrSte');
    let home = document.querySelector('#home');
    let city = document.querySelector('#inputCity');
    let state = document.querySelector('#state');
    let zip = document.querySelector('#inputZip');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let deliveryAddr = document.forms.deliveryAddr;
    let deliveryBtns = document.querySelector('.deliveryBtns');

    //payment section
    let name2 = document.querySelector('#fullName2');
    let address2 = document.querySelector('#address2');
    let apt2 = document.querySelector('#aptOrSte2');
    let home2 = document.querySelector('#home2');
    let city2 = document.querySelector('#inputCity2');
    let state2 = document.querySelector('#state2');
    let zip2 = document.querySelector('#inputZip2');
    let ccn = document.querySelector('#ccn');
    let cvv = document.querySelector('#cvv');
    // let paymentAddr = document.forms.paymentAddr;
    let check = false;
    //hidden other for home type
    $('#other').hide();
    let homeType = document.querySelector('#other');
    $('#other').change(() =>{
        if (homeType.value == 'Other') {
            $('#other').show();
        } else {
            $('#other').hide();
        }
    });
    //payment hidden other
    $('#other2').hide();
    let homeType2 = document.querySelector('#other2');
    $('#other2').change(() =>{
        if (homeType2.value == 'Other2') {
            $('#other2').show();
        } else {
            $('#other2').hide();
        }
    })
    
    //regex
    let validation = {
        name: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
        address: /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/,
        citytype:/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
        statetype:/^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
        zip: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        phone:  /^\D?([2-9]{1})(\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
        cvv: /^[0-9]{3,4}$/,
        visa:  /^4[0-9]{12}(?:[0-9]{3})?$/,
        mc: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$ /,
        amex: /^3[47][0-9]{13}$/,
        ccn:  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,
    };
    function validate(field, regex) {
        if(regex.test(field.value)) {
            field.className = 'form-control valid';
            $('.phoneError').text('');
        } else {
            field.className = 'form-control invalid';
            $('.phoneError').text("Please enter a valid phone number.");
        }
    }
    //get the form info
    let deliveryInput = document.querySelectorAll('#deliveryAddr input:not(.notincl)');
    let paymentInput = document.querySelectorAll('#paymentInfo input:not(.notincl)');

    //delivery form validation
    deliveryInput.forEach((input) => {
        input.addEventListener('keyup', e => {
            console.log(e.target.attriute.name.value);
            validate(etarget, validation[e.target.attributes.name.value]);
        })
        deliveryAddr.reset();
    });

    //billing form validation
    paymentInput.forEach((input) => {
        input.addEventListener('keyup', e => {
            console.log(e.target.attriute.name.value);
            validate(etarget, validation[e.target.attributes.name.value]);
        })
        paymentInfo.reset();
    });

    //delivery checkbox, autofill info
    $('#checkBox').click(()=> {
        "use strict";
        $('#fullName2').val($('#fullName').val());
        $('#address2').val($('#address').val());
        $('#aptOrSte2').val($('#aptOrSte').val());
        $('#inputCity2').val($('#inputCity').val());
        $('#state2').val($('#state').val());
        $('#inputZip2').val($('#inputZip').val());
    });

    //need event listener for each selection in ordering
        $('.ordering').click((e) =>{
            console.log("lasdkfjsldkjf");

        })

    // function addTotals(){
    //     let toppingCost = totalToppings * .99;
    //     let endPrice = crustPrice + cheesePrice + saucePrice + toppingCost;
    //     $('#total').text(endPrice.toFixed(2));
    // }
    


    let crustPrice = 0.00; //begin with 0
    let cheesePrice = 0.00; //begin with 0
    let saucePrice = 0.00; //begin with 0
    let totalToppings = 0;

    $(':radio').click((e) =>{
        radioId = e.target.id;
        console.log(crust_option = e.target.value);
    }); 
    $('.price').change((e) => {
        //Set the global crust price
        crustPrice = Number(e.target.value);
        if (crustPrice > 0) {
            check = true;
        } else {
            check = false;
        }
        // clearDropDowns(e);
        addTotals();
        console.log(crustPrice);
    });  
    
    $('.cheesePrice').change((e) => {
        //Set the global crust price
        cheesePrice = Number(e.target.value);
        if (cheesePrice > 0) {
            check = true;
        } else {
            check = false;
        }
        // clearDropDowns(e);
        addTotals();
        console.log(cheesePrice);
    });
    $('.saucePrice').change((e) => {
        //Set the global crust price
        saucePrice = Number(e.target.value);
        if (saucePrice > 0) {
            check = true;
        } else {
            check = false;
        }
        // clearDropDowns(e);
        addTotals();
        console.log(saucePrice);
    });


    let toppingsSel= []; //begin with no toppings   
    $('#toppings').click((e) => {
        console.log(e.target.checked);
        if (e.target.checked === undefined){
            console.log(e.target.checked);
            console.log("goober")
        } else if (e.target.checked === true) {
            toppingsSel.push(e.target.value);
            console.log("goober2")
        } else {
            let removeItem = toppingsSel.indexOf(e.target.value);
            toppingsSel.splice(removeItem, 1);
            console.log("goober3")
        }
        totalToppings = $('input:checkbox:checked').length;
        console.log(totalToppings);
        console.log(toppingsSel);
        addTotals();
    }); 

    function addTotals(){
        let toppingCost = totalToppings * .99;
        let endPrice = crustPrice + cheesePrice + saucePrice + toppingCost;
        $('.orderTotal').text("Total Due: $" + endPrice.toFixed(2));
    }
    //showing order total on page
    let completeOrder = document.getElementById('completeOrder');
    $(completeOrder).click((e) => {
        console.log(addTotals.value);
    })

    function valid_credit_card(value) {
          if (/[^0-9-\s]+/.test(value)) return false;
      
          let nCheck = 0, bEven = false;
          value = value.replace(/\D/g, "");
      
          for (var n = value.length - 1; n >= 0; n--) {
              var cDigit = value.charAt(n),
                    nDigit = parseInt(cDigit, 10);
      
              if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      
              nCheck += nDigit;
              bEven = !bEven;
          }
      
          return (nCheck % 10) == 0;
      }

    let paymentBtn = document.getElementById('paymentBtn');
    $(paymentBtn).click((e) => {
        $('.paymentForm').hide();
        $('#completeOrder').hide();
        $('.thankYou').text('Thank you for your order!');
    })
});

