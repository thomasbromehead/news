$(document).ready(function(){
   var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
   $.getJSON(url, function(data){
      var quotes = data.hits;
      $('.read').on('click', function(){
         currentQuote = quotes[Math.floor(Math.random() * quotes.length)] //Math.random only generates numbers btw O & 1 excluded      
         //Math.floor it to get to Array length -1 ie 19
         console.log(currentQuote);

         $('.quoteBody').hide();
         $('.quoteBodyLink').html(currentQuote.title);
         $('.quoteBodyLink').attr('href', currentQuote.url).attr('target', '_blank');
         $('.quoteAuthor').html(currentQuote.author);
         $('.tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote.title + '-' + currentQuote.author)
         .attr('target', '_blank')
         .attr('disabled', false);
         $('.read').html('Show me one more!');

      });
      console.log(data);
      console.log(quotes[0].title);
   })
});