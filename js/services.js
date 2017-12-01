angular.module('app.services', [])
.factory('services', [function(){

    var stats = [];
    var data = [];

    function getJSON(){
        for(var i = 0; i < 94; i++){
            var ourRequest = new XMLHttpRequest();
            var num = i < 9 ? '0' + (i+1) : (i+1);
            var URL = 'http://localhost:3000/' + num + '.json'
            ourRequest.open('GET', URL, false);
            ourRequest.onload = function(){
                data[i] = JSON.parse(ourRequest.responseText);
            };
            ourRequest.send();
        }
    };

    function getPlayers(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < data[i].mafia.length; j++){
                var found = false;
                for(var x = 0; x < stats.length; x++){
                    if(stats[x].name == data[i].mafia[j]){
                        found = true;
                        break;
                    }
                }
                if(!found){
                    stats.push({name:data[i].mafia[j], played:0, pTown:null, pPR:null, pWin:null, pTownWin:null, pMafiaWin:null, n0:0, n0_save:0,
                        lynch_mafia:0, lynch_vt:0, lynch_pr:0, shot_mafia:0, shot_vt:0, shot_pr:0, vigi_hit:0, vigi_miss:0, 
                        f3_win:0, f3_loss:0, roll_cop:0, roll_medic:0, roll_vigi:0, win_town:0, loss_town:0, win_mafia:0, loss_mafia:0});
                }
            }
            for(var j = 0; j < data[i].vanilla_town.length; j++){
                var found = false;
                for(var x = 0; x < stats.length; x++){
                    if(stats[x].name == data[i].vanilla_town[j]){
                        found = true;
                        break;
                    }
                }
                if(!found){
                    stats.push({name:data[i].vanilla_town[j], played:0, pTown:null, pPR:null, pWin:null, pTownWin:null, pMafiaWin:null, n0:0, n0_save:0,
                        lynch_mafia:0, lynch_vt:0, lynch_pr:0, shot_mafia:0, shot_vt:0, shot_pr:0, vigi_hit:0, vigi_miss:0, 
                        f3_win:0, f3_loss:0, roll_cop:0, roll_medic:0, roll_vigi:0, win_town:0, loss_town:0, win_mafia:0, loss_mafia:0});
                }
            }
            var cop = false;
            for(var x = 0; x < stats.length; x++){
                if(stats[x].name == data[i].cop){
                    cop = true;
                    break;
                }
            }
            if(!cop){
                stats.push({name:data[i].cop, played:0, pTown:null, pPR:null, pWin:null, pTownWin:null, pMafiaWin:null, n0:0, n0_save:0,
                    lynch_mafia:0, lynch_vt:0, lynch_pr:0, shot_mafia:0, shot_vt:0, shot_pr:0, vigi_hit:0, vigi_miss:0, 
                    f3_win:0, f3_loss:0, roll_cop:0, roll_medic:0, roll_vigi:0, win_town:0, loss_town:0, win_mafia:0, loss_mafia:0});
            }
            var medic = false;
            for(var x = 0; x < stats.length; x++){
                if(stats[x].name == data[i].medic){
                    medic = true;
                    break;
                }
            }
            if(!medic){
                stats.push({name:data[i].medic, played:0, pTown:null, pPR:null, pWin:null, pTownWin:null, pMafiaWin:null, n0:0, n0_save:0,
                    lynch_mafia:0, lynch_vt:0, lynch_pr:0, shot_mafia:0, shot_vt:0, shot_pr:0, vigi_hit:0, vigi_miss:0, 
                    f3_win:0, f3_loss:0, roll_cop:0, roll_medic:0, roll_vigi:0, win_town:0, loss_town:0, win_mafia:0, loss_mafia:0});
            }
            var vigilante = false;
            for(var x = 0; x < stats.length; x++){
                if(stats[x].name == data[i].vigilante){
                    vigilante = true;
                    break;
                }
            }
            if(!vigilante){
                stats.push({name:data[i].vigilante, played:0, pTown:null, pPR:null, pWin:null, pTownWin:null, pMafiaWin:null, n0:0, n0_save:0,
                    lynch_mafia:0, lynch_vt:0, lynch_pr:0, shot_mafia:0, shot_vt:0, shot_pr:0, vigi_hit:0, vigi_miss:0, 
                    f3_win:0, f3_loss:0, roll_cop:0, roll_medic:0, roll_vigi:0, win_town:0, loss_town:0, win_mafia:0, loss_mafia:0});
            }
        }
    };

    function getRollCop(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                if(data[i].cop == stats[j].name){
                    stats[j].roll_cop++;
                    break;
                }
            }
        }
    };

    function getRollMedic(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                if(data[i].medic == stats[j].name){
                    stats[j].roll_medic++;
                    break;
                }
            }
        }
    };

    function getRollVigi(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                if(data[i].vigilante == stats[j].name){
                    stats[j].roll_vigi++;
                    break;
                }
            }
        }
    };

    function getN0(){
        for(var i = 0; i < data.length; i++){
            var count = 0;
            for(var j = 0; j < stats.length; j++){
                if(data[i].n0[0] == stats[j].name){
                    stats[j].n0++;
                    count++;
                }
                if(data[i].n0[1] == stats[j].name){
                    stats[j].n0++;
                    count++;
                }
                if(count == data[i].n0.length){
                    break;
                }
            }
        }
    };

    function getN0Save(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                if(data[i].n0_save == stats[j].name){
                    stats[j].n0_save++;
                    break;
                }
            }
        }
    };

    function getLynched(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < data[i].lynched.length; j++){
                for(var x = 0; x < stats.length; x++){
                    if(data[i].lynched[j] == stats[x].name){
                        if(data[i].lynched[j] == data[i].cop || data[i].lynched[j] == data[i].medic || data[i].lynched[j] == data[i].vigilante){
                            stats[x].lynch_pr++;
                            break;
                        }
                        for(var y = 0; y < data[i].vanilla_town.length; y++){
                            if(data[i].lynched[j] == data[i].vanilla_town[y]){
                                stats[x].lynch_vt++;
                                break;
                            }
                        }
                        for(var y = 0; y < data[i].mafia.length; y++){
                            if(data[i].lynched[j] == data[i].mafia[y]){
                                stats[x].lynch_mafia++;
                                break;
                            }
                        }
                    }
                }
            }
        }
    };

    function getVigiShot(){
        for(var i = 0; i < data.length; i++){
            for(var x = 0; x < stats.length; x++){
                if(data[i].shot == stats[x].name){
                    if(data[i].shot == data[i].cop || data[i].shot == data[i].medic || data[i].shot == data[i].vigilante){
                        stats[x].shot_pr++;
                        for(var a = 0; a < stats.length; a++){
                            if(data[i].vigilante == stats[a].name){
                                stats[a].vigi_miss++;
                                break;
                            }
                        }
                        break;
                    }
                    for(var y = 0; y < data[i].vanilla_town.length; y++){
                        if(data[i].shot == data[i].vanilla_town[y]){
                            stats[x].shot_vt++;
                            for(var a = 0; a < stats.length; a++){
                                if(data[i].vigilante == stats[a].name){
                                    stats[a].vigi_miss++;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    for(var y = 0; y < data[i].mafia.length; y++){
                        if(data[i].shot == data[i].mafia[y]){
                            stats[x].shot_mafia++;
                            for(var a = 0; a < stats.length; a++){
                                if(data[i].vigilante == stats[a].name){
                                    stats[a].vigi_hit++;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
    };

    function getF3WinLoss(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                for(var x = 0; x < data[i].f3_win.length; x++){
                    if(data[i].f3_win[x] == stats[j].name){
                        stats[j].f3_win++;
                        break;
                    }
                }
                for(var x = 0; x < data[i].f3_loss.length; x++){
                    if(data[i].f3_loss[x] == stats[j].name){
                        stats[j].f3_loss++;
                        break;
                    }
                }
            }
        }
    };

    function getWinLossPlayed(){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < stats.length; j++){
                for(var a = 0; a < data[i].vanilla_town.length; a++){
                    if(data[i].winner == "Town"){
                        if(data[i].vanilla_town[a] == stats[j].name){
                            if(data[i].n0[0] == data[i].vanilla_town[a] && data[i].n0[1] == data[i].vanilla_town[a] && data[i].n0_save == data[i].vanilla_town[a]){
                                stats[j].played++;
                                break;
                            }else if((data[i].n0[0] == data[i].vanilla_town[a] || data[i].n0[1] == data[i].vanilla_town[a]) && data[i].n0_save != data[i].vanilla_town[a]){
                                stats[j].played++;
                                break;
                            }else{
                                stats[j].played++;
                                stats[j].win_town++;
                                break;
                            }
                        }
                    }else if(data[i].winner == "Mafia"){
                        if(data[i].vanilla_town[a] == stats[j].name){
                            if(data[i].n0[0] == data[i].vanilla_town[a] && data[i].n0[1] == data[i].vanilla_town[a] && data[i].n0_save == data[i].vanilla_town[a]){
                                stats[j].played++;
                                break;
                            }else if((data[i].n0[0] == data[i].vanilla_town[a] || data[i].n0[1] == data[i].vanilla_town[a]) && data[i].n0_save != data[i].vanilla_town[a]){
                                stats[j].played++;
                                break;
                            }else{
                                stats[j].played++;
                                stats[j].loss_town++;
                                break;
                            }
                        }
                    }
                }
                for(var a = 0; a < data[i].mafia.length; a++){
                    if(data[i].winner == "Town"){
                        if(data[i].mafia[a] == stats[j].name){
                            stats[j].played++;
                            stats[j].loss_mafia++;
                            break;
                        }
                    }else if(data[i].winner == "Mafia"){
                        if(data[i].mafia[a] == stats[j].name){
                            stats[j].played++;
                            stats[j].win_mafia++;
                            break;
                        }
                    }
                }
                if(data[i].winner == "Town"){
                    if(data[i].cop == stats[j].name){
                        if(data[i].n0[0] == data[i].cop && data[i].n0[1] == data[i].cop && data[i].n0_save == data[i].cop){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].cop || data[i].n0[1] == data[i].cop) && data[i].n0_save != data[i].cop){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].win_town++;
                        }
                    }
                    if(data[i].medic == stats[j].name){
                        if(data[i].n0[0] == data[i].medic && data[i].n0[1] == data[i].medic && data[i].n0_save == data[i].medic){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].medic || data[i].n0[1] == data[i].medic) && data[i].n0_save != data[i].medic){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].win_town++;
                        }
                    }
                    if(data[i].vigilante == stats[j].name){
                        if(data[i].n0[0] == data[i].vigilante && data[i].n0[1] == data[i].vigilante && data[i].n0_save == data[i].vigilante){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].vigilante || data[i].n0[1] == data[i].vigilante) && data[i].n0_save != data[i].vigilante){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].win_town++;
                        }
                    }
                }else if(data[i].winner == "Mafia"){
                    if(data[i].cop == stats[j].name){
                        if(data[i].n0[0] == data[i].cop && data[i].n0[1] == data[i].cop && data[i].n0_save == data[i].cop){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].cop || data[i].n0[1] == data[i].cop) && data[i].n0_save != data[i].cop){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].loss_town++;
                        }
                    }
                    if(data[i].medic == stats[j].name){
                        if(data[i].n0[0] == data[i].medic && data[i].n0[1] == data[i].medic && data[i].n0_save == data[i].medic){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].medic || data[i].n0[1] == data[i].medic) && data[i].n0_save != data[i].medic){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].loss_town++;
                        }
                    }
                    if(data[i].vigilante == stats[j].name){
                        if(data[i].n0[0] == data[i].vigilante && data[i].n0[1] == data[i].vigilante && data[i].n0_save == data[i].vigilante){
                            stats[j].played++;
                        }else if((data[i].n0[0] == data[i].vigilante || data[i].n0[1] == data[i].vigilante) && data[i].n0_save != data[i].vigilante){
                            stats[j].played++;
                        }else{
                            stats[j].played++;
                            stats[j].loss_town++;
                        }
                    }
                }
            }
        }
    };

    function getPTown(){
        for(var i = 0; i < stats.length; i++){
            var mafia = stats[i].win_mafia + stats[i].loss_mafia;
            var town = stats[i].played - mafia;
            var total = mafia + town;
            stats[i].pTown = ((town / total) * 100).toFixed(2);
        }
    };

    function getPPR(){
        for(var i = 0; i < stats.length; i++){
            var pr = stats[i].roll_cop + stats[i].roll_medic + stats[i].roll_vigi;
            var total = stats[i].played;
            stats[i].pPR = ((pr / total) * 100).toFixed(2);
        }
    };

    function getPWin(){
        for(var i = 0; i < stats.length; i++){
            var win = stats[i].win_town + stats[i].win_mafia;
            var loss = stats[i].loss_town + stats[i].loss_mafia;
            var total = win + loss;
            if(total != 0){
                stats[i].pWin = ((win / total) * 100).toFixed(2);
            }
        }
    };

    function getPTownWin(){
        for(var i = 0; i < stats.length; i++){
            var win = stats[i].win_town;
            var loss = stats[i].loss_town;
            var total = win + loss;
            if(total != 0){
                stats[i].pTownWin = ((win / total) * 100).toFixed(2);
            }
        }
    };

    function getPMafiaWin(){
        for(var i = 0; i < stats.length; i++){
            var win = stats[i].win_mafia;
            var loss = stats[i].loss_mafia;
            var total = win + loss;
            if(total != 0){
                stats[i].pMafiaWin = ((win / total) * 100).toFixed(2);
            }
        }
    };

    function byPlayedName(a,b){
        if(a.played > b.played)
            return -1;
        if(a.played < b.played)
            return 1;
        if(a.name < b.name)
            return -1;
        if(a.name > b.name)
            return 1;
        return 0;
    };

    function getData(){
        getJSON();
        getPlayers();
        getRollCop();
        getRollMedic();
        getRollVigi();
        getN0();
        getN0Save();
        getLynched();
        getVigiShot();
        getF3WinLoss();
        getWinLossPlayed();
        getPTown();
        getPPR();
        getPWin();
        getPTownWin();
        getPMafiaWin();
        stats.sort(byPlayedName);
        return stats;
    };

    return{
        getData
    };

}]);