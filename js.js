var storageKey = 'data'
var dataList = JSON.parse(localStorage.getItem(storageKey));
	

	function render(){
		var listItems = document.getElementById('list-items')
		var li = document.getElementsByTagName('li')	
		
		var showList = dataList.map(function (x){
		return '<li><div class="text">' + x + '</div></li>'
		}).join('')
		listItems.innerHTML = showList;
			
		
		for(var i = 0 ; i < li.length ; i++){	
			var button = document.createElement('button')
			button.className = 'close'
			button.innerText = 'x'		
			li[i].appendChild(button)
		}
		waitClick()
	}
	
	var waitAdd = document.getElementById('btn-add')
	waitAdd.addEventListener('click', add)

	function add(){
		var input = document.getElementById('input-data')
		var inputValue = input.value
		dataList.push(inputValue)
		input.value = ""
		localStorage.setItem(storageKey, JSON.stringify(dataList))
		render()
		
	
	}
	
	render();
	
	function waitClick(){
		var waitClose = document.getElementsByClassName('close')
		for(var i = 0 ; i < waitClose.length ; i++){
		waitClose[i].addEventListener('click', close)		
		}
	}
	

	function close(){
		var currentParent = this.parentElement
		var value = currentParent.innerHTML
		
		var newValue = value.slice(18)
		var newValue2 = value.slice(-38)
		var newValue3 = newValue.replace(newValue2,'')
		
		dataList = dataList.filter(x => x !== newValue3)
		render()
		localStorage.setItem(storageKey, JSON.stringify(dataList))
	}


	function waitChecked(){

	}


	