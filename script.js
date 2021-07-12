var link = {
    setcolor : function(color) {
    var alist = document.querySelectorAll('a');
        var i = 0;
        while ( i < alist.length) {
            alist[i].style.color= color;
            i = i + 1; 
        }
}
}
var Body = {
    setbackgroundColor : function(color) {
    document.querySelector('body').style.backgroundColor = color ;
    },
    setcolor : function(color) {
    document.querySelector('body').style.color = color;
    }
}
function daynighthander(self) {
    var target = document.querySelector('body');
    if (self.value=== 'night') {
        Body.setbackgroundColor('black') ;
        Body.setcolor('white') ;
        self.value = 'day';
        link.setcolor('powderblue') ;
    } else {
        Body.setbackgroundColor('white') ;
        Body.setcolor('black') ;
        self.value = 'night';
        link.setcolor('blue');
        }
    }