/**
* **************************************************************
* Control Manager
* **************************************************************
*/
document.addEventListener('DOMContentLoaded', function(){
    
    console.log('CONTROL BUS - ACTIVE');

    stageCanva();
    initShadow();


    document.addEventListener('click', function(event){

        if(event.target.hasAttribute('data-close-all') || event.target.closest('[data-close-all]')){
            stageCanva();
            shadowHandler();
        }

        else if(event.target.hasAttribute('data-pointer') || event.target.closest('[data-pointer]')){

            const targetName = event.target.closest('[data-pointer]').getAttribute('data-pointer');
            const targetElement = document.querySelector('[data-target="' + targetName + '"]');
            const pointerElement = document.querySelector('[data-pointer="' + targetName + '"]');

            if(pointerElement.getAttribute('data-pointer-active') === 'true' && targetElement.getAttribute('data-target-active') === 'true'){
                stageCanva();
                shadowHandler();
            } else {

                // if(activePointerCheck() === true){
                //     stageCanva();
                // } else {
                //     //shadow
                // }

                shadowHandler();
                pointerElement.setAttribute('data-pointer-active', true);
                targetElement.setAttribute('data-target-active', true);

            }
        }

        // Closing button handler - Only deactivate the pointer and target mentioned in this attribute
        // Shadow will still be active if there are more than one active pointer
        else if(event.target.hasAttribute('data-close-trigger') || event.target.closest('[data-close-trigger]')){
            const targetName = event.target.closest('[data-close-trigger]').getAttribute('data-close-trigger');
            deactivatePointer(targetName);
            deactivateTarget(targetName);
            shadowHandler();
        }

    });


    function stageCanva(){
        
        const targetElements = document.querySelectorAll('[data-target]');
        for(let i = 0; i < targetElements.length; i++){
            targetElements[i].setAttribute('data-target-active', 'false');
        }

        const pointerElements = document.querySelectorAll('[data-pointer]');
        for(let j = 0; j < pointerElements.length; j++){
            pointerElements[j].setAttribute('data-pointer-active', 'false');
        }
    }

    // Check if there is any active pointers
    function activePointerCheck(){

        const pointerElements = document.querySelectorAll('[data-pointer-active="true"]');

        if(pointerElements.length > 0){
            return true;
        } else {
            return false;
        }

    }

    // Only deactivate one pointer
    function deactivatePointer(targetName){
        const pointerElement = document.querySelector('[data-pointer="' + targetName + '"]');
        pointerElement.setAttribute('data-pointer-active', 'false');
    }

    // Only deactivate one target
    function deactivateTarget(targetName){
        const targetElement = document.querySelector('[data-target="' + targetName + '"]');
        targetElement.setAttribute('data-target-active', 'false');
    }

    function initShadow(){
        const shadow = document.createElement('div');
        shadow.setAttribute('id', 'shadow');
        shadow.setAttribute('data-shadow-active', false);
        shadow.setAttribute('data-close-all', '');
        document.body.appendChild(shadow);
    }

    function shadowHandler(){
        const shadow = document.getElementById('shadow');

        if(shadow.getAttribute('data-shadow-active') === 'true'){
            if(!activePointerCheck() === true){
                shadow.setAttribute('data-shadow-active', false);
            }
        } else {
            shadow.setAttribute('data-shadow-active', true);
        }

    }

});