$(document).ready(function() {
    
    var artists = [];
    
    /* TODO: Add a "video" property to each Artist */
    var kanye = {
                    id: 'kanye', // No spaces in this
                    name: 'Kanye West',
                    img: 'http://photon.101medialablimit.netdna-cdn.com/hypebeast.com/image/2016/02/kanye-west-nicolas-ghesquiere-1.jpg',
                    albums: ['Graduation','Watch The Throne','Yeezus']
                };
                
    // Add our artist object to the array
    artists.push(kanye);
    
    /* TODO: Add another artist to the array (number two) */   
    
    /* TODO: Add another artist to the array (number three) */  
    
    /* TODO: Add another artist to the array (number four) */
    
    
    /* This will add the artists to the page */
    for(var x=0; x < artists.length; x++){
        
  
        $('#artists').append(
          $('<div/>')
            .addClass("artist_name")
            .attr("id", artists[x].id)
            .text(artists[x].name)
        );

        /* TODO: Make the artist's image show up */
         $('#' + artists[x].id).append(
            $('<div/>')
              .addClass("artist_image")
              .html()
            ); 
            console.log(kanye.img);
        var albumString = "Albums include: ";
        /* TODO: Make a loop to add the album names to the albumString variable */
        
        // now add the albums to the page
         $('#' + artists[x].id).append(
            $('<div/>')
              .addClass("albums")
              .html(artists[x].albums)
            );    
        
        /* TODO: Make the artist video show up and be clickable */
        if(artists[x].video && artists[x].video.length > 0){
            $('#' + artists[x].id).append(
                $('<div/>')
                  .addClass("video")
                  .html("")
                );        
        }
    
        
    }
});