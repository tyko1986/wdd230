const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const btn = document.querySelector('button'); 


btn.addEventListener('click', function(){

    let myChapter = document.querySelector('#favchap').value;
    let li = document.createElement('li');
				let chapBtn = document.createElement('button');
				chapBtn.textContent = '❌'
				li.textContent = `Chapter: ${myChapter}`
				li.appendChild(chapBtn);
				list.appendChild(li);
				input.value = '';
	
				chapBtn.addEventListener('click', function(){
					
					list.removeChild(li);
					
				});

				input.focus();

});
    
	
	
	
	
	
	
	

	
	
	
