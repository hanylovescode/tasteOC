window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){
        console.log(evt.target.classList)
        if(evt.target.classList.contains('qty')){
            var button = evt.target.parentNode.querySelector('.buy-button')
            var qty = parseInt(evt.target.value)
            button.setAttribute('data-item-quantity', qty)
            let price = parseFloat(button.getAttribute('data-item-price'))
            let final = price*qty
            var label = button.innerHTML
            label = label.replace(/\d+/, final)
            if(qty > 1){
                label = label.replace(/copy/, "copies")
            }
            else{
                label = label.replace(/copies/, "copy")
            }
            button.innerHTML = label;
        }
    })
});

