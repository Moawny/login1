/*global $, var, alert*/
$(function() {

    'use strict';

    $("button.ed").on('click', function (e) {

        $("button.ed").hide();

        $("button.sv").show();

        $('div').hide();

        $('input').val($('div').text()).css('display', 'inline-block').show();
    
    });

    $("button.sv").on('click', function () {
        
        if ($('input').val() === "Mohamed Awny"){

            alert('this was the first name you put do you want to restore it ?');

        } else if ( $('input').val() !== $('div').text() ) {

            alert('Your edit had been saved');

        } else if ($('input').val() === $('div').text()) {

            alert('you didnot change anything');
        
        }

        $("button.sv").hide();

        $("button.ed").show();

        $('input').hide();

        $('div').text($('input').val()).show();

    });

});