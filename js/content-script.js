chrome.storage.sync.get({user: []}, function(items) {
    let block = items.user;
    let mode = location.href.indexOf('forum') > -1?'forum':'thread';
    if(mode == 'forum'){
        let allTable = document.getElementById('threadlisttableid').getElementsByTagName('tbody');
        for(var x in allTable){
            if(typeof allTable[x] != 'object') continue;
            try{
                
                let us = allTable[x].querySelector('.by a').innerHTML;
                if(block.indexOf(us) > -1){
                    allTable[x].style = "display:none;";
                }
            }catch(e){
    
            }
        }
    }else if(mode == 'thread'){
        let allTable = document.getElementById('postlist').getElementsByTagName('div');
        for(var x in allTable){
            if(typeof allTable[x] != 'object') continue;
            try{
                
                let us = allTable[x].querySelector('.authi a').innerHTML;
                if(block.indexOf(us) > -1){
                    allTable[x].style = "display:none;";
                }
            }catch(e){
    
            }
        }
    }
});