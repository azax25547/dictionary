$(document).ready(function(){
alert("Welcome to My Dictionary Web app. Search for the word that you want to see the corresponding meanings. Hoping you will like it..");   

function getMeaningData(){
  var toSearch = $(".search").val(); 
  var cors = 'https://cors-anywhere.herokuapp.com/';
  var dataUrl = cors+"https://od-api.oxforddictionaries.com/api/v1/entries/en/";
  $("#search").hide(2000);
  $("#close").show(2000);


  $.ajax({
      type:"GET",
      async:false,
     url:dataUrl+toSearch,
     dataType:"json",
      headers:{
      "app_id":"dacd1205",
      "app_key":"da509698c660861ab38f1c573a135efa"
       },
    success:function(data){
       
     
     $(".id").text(data.results[0].id);
     $(".phon-spell").text(data.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling);
     $("audio").attr("src",data.results[0].lexicalEntries[0].pronunciations[0].audioFile);

      $("#lex-cat").text(data.results[0].lexicalEntries[0].lexicalCategory);
      $("#def").text(data.results[0].lexicalEntries[0].entries[0].senses[0].definitions);

      $("#lex-cat1").text(data.results[0].lexicalEntries[1].lexicalCategory);
      $("#def1").text(data.results[0].lexicalEntries[1].entries[0].senses[0].definitions);

      $("#lex-cat2").text(data.results[0].lexicalEntries[2].lexicalCategory);
      $("#def2").text(data.results[0].lexicalEntries[2].entries[0].senses[0].definitions);
    
      
      $("#lex-cat3").text(data.results[0].lexicalEntries[3].lexicalCategory);
      $("#def3").text(data.results[0].lexicalEntries[3].entries[0].senses[0].definitions);
      
      $("#lex-cat4").text(data.results[0].lexicalEntries[4].lexicalCategory);
      $("#def4").text(data.results[0].lexicalEntries[4].entries[0].senses[0].definitions);
    
      $("#lex-cat5").text(data.results[0].lexicalEntries[5].lexicalCategory);
      $("#def5").text(data.results[0].lexicalEntries[5].entries[0].senses[0].definitions);

    },
  
   error: function(err){
   $("html").html(err.responseText)
   }

    
  })
}

    $("#search").on("click",function(){
     
       getMeaningData();
    })
    $("#close").on("click",function(){
      $(".search").val(" ");
      $("#data > *").text("");
      $("#close").hide(1000);
      $("#search").show(1000);  
    })
  

    window.addEventListener("keydown",function(e){
      if(!e.keyCode == 13)
      e.preventDefault();
      if(e.keyCode === 13){
     
          getMeaningData();
      }
  })



});
