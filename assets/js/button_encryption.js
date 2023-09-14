document.addEventListener('DOMContentLoaded', function(){

	document.addEventListener('click', function(event){
  	
    if(event.target.hasAttribute('data-encrypted-btn-active') || event.target.closest('[data-encrypted-btn-active]')) {
		const button = event.target.closest('[data-encrypted-btn-active]');
        const status = button.getAttribute('data-encrypted-btn-active');
		const encVal = button.getAttribute('data-encrypted-value');
      
		if(status === 'false'){
            button.setAttribute('data-encrypted-btn-active', 'true')
			const container = document.createElement('span');
            container.innerText = encVal;
            button.innerHTML = "";
            button.appendChild(container);
        }
    }
    
    });

});
