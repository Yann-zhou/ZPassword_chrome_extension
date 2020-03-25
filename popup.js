var bg=chrome.extension.getBackgroundPage();
var myvalue={
	'ip': "127.0.0.1",
	'port': "4200",
	'privateKey': "MIIEqAIBAAKCAQEAq1AHyUAqc37YeDC16c1tYYcwSvPrZzMeodZoQxxrwq4OobsIi41NuEUxQ7/I2tZXWgYQZgwPucpCHpYqiC6VKkvX1npYQEXhpFQDGi6y61N0itVo2kK0CbcE5JNVnUaOD3atnaccDAi6vD2CJA/uRurkRWvd6xlSSnNgMgm6oqVJvuUrYPQ5nIwjcT8o/+TEEbK4vHjSKQvaeZRNAA0QDeOZIyWD7YB1Fy8wWPadGb6Ipk5gxHwLMxOwzoCRqXccW2Fu3xqcNnzw5/yu/iHzkt5yLqb/1iAzq8LU1BsdyV/lzib7ev8k2TD5Roc6ngrAlbcY2iX3eD/IOq2NqI+pjwIDAQABAoIBAHzH9mPokQM/SX2CPX7nWtzHE64ErVqmKZHIEnmPog5TqeSzzy2W5x1piNDISQzdQxMXh6pM7sdtQ2v0BVbcV1pPlA9tXgqy3ABOEVRo33n5d9IIUC9qlqjc3nt/tcSxN5ib4SoMJqm9Ugb65mhOEkklns/SGfq8nmusV+qTE+g9M5RUegD8qK+WBHHJWvvZNUSNFA3xZhqXviBnnrf7lde1Lf2ukZdYT30b3OG+SvTgf7qyz2AzV57+TCg7g5ID07WaHxtBCYCxLU8TzMxlTfXuOPqy6dtaoZsQFK80szmH+3IM0v8ohX7t2hrCe3uJ5a3NW5Pm959WkLJj041KAcECgYkAsD5qJ5i7TdI6w7MyYq1iQbOK1eHrJRYuwpWq9G/PuXxHu4CIhS6r+5sX5QsIfVcIFQVMINeHQ4UNSnvZPLt37Ni8wvgestWzV03IUfQ+1SDwjCsPzxef68jk5lIwXB5eYg0Bvl7uPSjprgQaNw7dFyzJcYT5qDXUG+X+CpYxZifaXmclTpXh4wJ5APjWWEa8LNB3CCPURpGW/HbxeIBQ3AfjsGf2/rY4/j7BMn820dMUXHLGa8+6yGRV6TqB45eou9BxlrrGJEuJLLQXWmWocx2T0VIi4Qs1QDx0VyE2EKpIROS2vbdWwRwPFiFl4td9P8RbVn3dwOsNNlsdTj45aPY5ZQKBiFvOB0nc+yRMcCPkwkg4fMgwmA9VgUFuTqk5gTWW0KOUI2F+UJ7fcuK7JTVADAoOPb2FZuRsoJ8BPa0g2kYSeSO8uobs7EDHpIXDlKdsDRbD88lv3OpJKhqOKP34rgwuHYgBsnjRxlPBbgghRu6LJYue3sftNobykyx9H1mwZscJ12v5WquW03UCeC+QURlcOLi0N/MZTU/g62sU5vKoAhbj98E3niJYrIh0R2G3qc3OE4nA0bTIQCulnEoZr9Y6Y4QJYkVbQG7Lzqax3A6Yb0CVE6q+jgOlbxzfJBRuECtsWvbY01SrGYhyfclufzivcTPoPZUbgRes09oAtQcB1EVUXQKBiDwQ+L91Nlkxblv+02SO3FHk3ugDqm8iFL2eXksbnL8uAcAFfsh5b7xPDJ4v1lwlu9EYlAF8hphxX9gsEAlH8N4ZtdaP083VgGqOqDoySfcqJ4s5GBhFrA5iOKI4J8abSKtHqX2BMf5BWQx0lAHjeaIPUp05BY0gmqDhYBszLT0pJVM0kNYsL+k="
};

var value={
	'ip': "",
	'port': "",
	'privateKey': ""
};

chrome.storage.sync.get(['ip', 'port', 'privateKey'], function(result){
    value['ip']=result['ip'];
    value['port']=result['port'];
    value['privateKey']=result['privateKey'];
	$('#inputIP').val(value['ip']);
	$('#inputPort').val(value['port']);
	$('#inputPrivateKey').val(value['privateKey']);
});

console.log('已执行');

$(function() {
	$('#setting').click(function() {
		$('#form-signin').hide();
		$('#form-setting').show();
		$('#form-signup').hide();
		$('#signin').show();
		$('#signup').hide();
	});
	$('#signup').click(function() {
		$('#form-signin').hide();
		$('#form-setting').hide();
		$('#form-signup').show();
		$('#signin').show();
		$('#signup').hide();
	});
	$('#signin').click(function() {
		$('#form-signin').show();
		$('#form-setting').hide();
		$('#form-signup').hide();
		$('#signin').hide();
		$('#signup').show();
	});
	$('#signup-button').click(function() {
		if($('#signupPassword').val()==$('#signupRePassword').val()){
			console.log('same');
		}else{
			console.log($('#signupsignupPassword').val());
			console.log($('#signupRePassword').val());
			console.log('not same');
			$('#passwordNotSame').show();
			setTimeout(function(){$('#passwordNotSame').fadeOut(400)},1000);
		}
	});

	$('#save-setting').click(function() {
		value={
			'ip': $('#inputIP').val(),
			'port': $('#inputPort').val(),
			'privateKey': $('#inputPrivateKey').val()
		}
		//调用set函数保存数据
		chrome.storage.sync.set(value, function(){
			$('#settingSaved').show();
			setTimeout(function(){$('#settingSaved').fadeOut(400)},1000);
		});
	});

})

/*
var bg=chrome.extension.getBackgroundPage();
$(function() {
		$('#setting').click(function() {
			bg.username=$('#input_username').val()
			bg.password=$('#input_password').val()
			bg.sendLoginInfo()
		});
})
*/