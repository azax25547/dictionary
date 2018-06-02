$(document).ready(function(){
   

    $("button").on("click",function(){
        var toSearch = $(".search").val(); 
        var cors = 'https://cors-anywhere.herokuapp.com/';
        var dataUrl = cors+"https://od-api.oxforddictionaries.com/api/v1/entries/en/";
        
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
           $(".result").text(data.results[0].lexicalEntries[0].lexicalCategory);
            console.log(data);
          }
        })
    })

  
});
