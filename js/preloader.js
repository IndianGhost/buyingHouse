function preload(duration) 
{
  setTimeout(function()
  {
    var elements = document.getElementsByClassName('spinner');
    for (var i = elements.length - 1; i >= 0; i--) 
    {
      elements[i].style.display='none';
    }
    var allElements = document.getElementsByTagName("*");
    for (var i = 0, len = allElements.length; i < len; i++) 
    {
      allElements[i].style.visibility='visible';
    }
  }, 
  duration);
}
