chrome.storage.sync.get({user: []}, function(items) {
    document.getElementById('user').value = items.user.join(',');
});
document.getElementById('save').addEventListener('click',function(){
    let users = document.getElementById('user').value;
    users = users.split(',');
    chrome.storage.sync.set({user: users}, function() {
        document.getElementById('tips').innerHTML = "保存成功，页面刷新后生效";
    });
});