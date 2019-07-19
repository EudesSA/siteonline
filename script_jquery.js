/* Essa é a forma Completa de Leitura da Pagina para usar a Função

$(document).ready(function () {
    $('button').click(function () {
        $('h1').hide();
      });
  });

  */

 //Essa é a Forma Simplificada
 $(function () {
    $('#bt_ocultar').click(function () {
        $('h1').hide();
        $('#bt_ocultar').removeClass('botaoVermelho');
      });
  });

  $(function () {
    $('#bt_texto_red').click(function () {
          $('#p1').css("color","red");
          $('#p2').css("color","red");
                
                $('#mensagem')
                    .text("Cor Alterada com Sucesso")
                    .css({color:'red',border:'1px solid red',backgroundColor:'pink'})                    
                    .delay(2000)
                    .fadeOut('fast'); 

        }); 
    $('#bt_texto_blue').click(function () {
            $('#p1').css("color","blue");
            $('#p2').css("color","blue");

                $('#mensagem')
                    .text("Cor Alterada com Sucesso")
                    .css('color', 'blue')
                    .css('border','1px solid yellow') //outro metodo de fazer o css
                    .delay(2000)
                    .fadeOut('fast');
                    //.addClass('nomedaclasse');                    

        });
    });

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    })    
    $('#l2').click(function(){
        $('#i2').show();
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
    })    
    $('#l3').click(function(){
        $('#i3').show();
        $('#i1').hide();
        $('#i2').hide();
        $('#i4').hide();
    })    
    $('#l4').click(function(){
        $('#i4').show();
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
    })    
})
