let matchNumber = 0;
let teamNumber = 0;

let todasCoresTimes = ['','Time Azul', 'Time Roxo', 'Time Rosa', 'Time Vermelho', 'Time Verde Claro', 'Time Verde Escuro'];
let todasCoresCirculos = ['', '&#128309;', '&#128995;', '&#128995;', '&#128308;', '&#128994', '&#128994'];
let todasCoresBackground = ['', 'steelblue', 'slateblue', 'hotpink', 'red', 'chartreuse', 'forestgreen'];
let jogadorBaygonImagem = []
let jogadoresBaygon = ['', 'Adilson', 'Zé', 'Ályson', 'Tuta', 'Fernando', 'Dau', 'Milson', 'Ari', 'Iago', 'Antonio', 'Jaedson', 'Igor']

const jogadorPosition = ['', 'Goleiro', 'Defensor 1', 'Defensor 2', 'Atacante 1', 'Atacante 2'];
let contagemTimes = 0;
let contagemJogadores = 1;

let totalTimes = 0;
let jogadoresEmCadaTime = 0;
let escolhaCor = 0;
let escolhaJogador = 0;
let defTime;

let jogadorEscolhido

let timeEmCampo = 0
let filtroTime
let timeCasa
let timeFora
let placarT1 = 0
let placarT2 = 0

/*time: [{
    nome: '',
    cor: ''
}]*/
const todosTimes = [{
    time: '',
    cor: '',
    jogadores: [{
        nome: '',
        foto: ''
    }]    
}]
console.log(todosTimes)

/*
$(function (e) {
   $("#configStartArt").append(`<img class='jogador-campo' src='${jogadorBaygonImagem[2]}'>`) 
});*/

function incluirJogador(nome) {
    jogadoresBaygon.push(nome)
    jogadorBaygonImagem.push(`Baygon/B/${nome}.png`)
    arraySort(jogadoresBaygon)
    arraySort(jogadorBaygonImagem)
    return nome
}

function arraySort(e) {
    e.sort(function (a, b) {
        return a.localeCompare(b);
    });
}
arraySort(jogadoresBaygon)


function relacionarFotos() {
    let i = 0
    while (jogadorBaygonImagem.length < jogadoresBaygon.length) {
        jogadorBaygonImagem.push(`Baygon/B/${jogadoresBaygon[i]}.png`)
        i++
    }
}
relacionarFotos()

incluirJogador('João')
console.log("jogadoresBaygon", jogadoresBaygon)
console.log("jogadorBaygonImagem", jogadorBaygonImagem)


$(function (e) {
    $("")
});

function initConfig() {
    //Removing Initial Button
    $(function (e) {
        $("button#initConfigButton").remove();
        $("div#initConfigDiv").remove();
    });

    //Settings' Title
    $(function (e) {
        $("article#configStartArt").append("<header style='text-align:center;'><h2>Configuração de Times</h2></header>")
    });

    //Total Number of Teams
    $(function (e) {
        $("article#configStartArt").append("<div id='configNumeroTimes' style='margin: 5px'>Número total de times: <input id='inputTotalTimes' type='number' min='2' max='8'><button class='confirm-setup' onclick='jogadoresPorTime()'>OK</button></div>")
    });


};

function jogadoresPorTime() {
    totalTimes = Number(document.getElementById("inputTotalTimes").value)
    if (totalTimes < 2 || totalTimes > 8) {
        alert('Escolha um número de times de 2 a 8');
    } else {
        $(function (e) {
            $("div#configNumeroTimes").hide();
            $("article#configStartArt").append(`<div style='margin: 5px;'>Número total de times: ${totalTimes}</div>`)
            $("article#configStartArt").append("<div id='configJogadoresPorTime' style='margin: 5px'>Número de jogadores em cada time: <input id='inputJogadoresPorTime' type='number' min='5' max='11'><button class='confirm-setup' onclick='colorChoice()'>OK</button></div>")
        });
    };
};

function colorChoice() {
    console.log("totalTimes", totalTimes)

    jogadoresEmCadaTime = Number(document.getElementById("inputJogadoresPorTime").value)

    //First Choice of Team Color
    // jogadoresEmCadaTime reduced for tests /////////////////
    if (jogadoresEmCadaTime < 1 || jogadoresEmCadaTime > 11) {
        alert('Escolha de 5 a 11 jogadores por time')
    } else {
        $(function (e) {
            $("div#configJogadoresPorTime").hide();
            if (contagemTimes == 0) {
                $("article#configStartArt").append(`<div id='configNumeroJogadores' style='margin: 5px;'>Número de jogadores por time: ${jogadoresEmCadaTime}</div>`)
            }
            contagemTimes++
            if (contagemTimes <= totalTimes) {
                
                $("article#configStartArt").append("<form id='formTeam"+contagemTimes+"' style='display: inline-block;'></form>");
                $("form#formTeam"+contagemTimes+"").append("<label for='corTimeID"+contagemTimes+"'>Monte o "+contagemTimes+"º time: <label>");
                $("form#formTeam"+contagemTimes+"").append("<select id='corTimeID"+contagemTimes+"' name='escolhaCorTimeID"+contagemTimes+"'></select>");
                $("select#corTimeID"+contagemTimes+"").append("<option value='' selected='selected' disabled='disabled'>Selecione a cor</option>");
                let iColorOptions = 1
                while (iColorOptions < todasCoresTimes.length) {
                    $("select#corTimeID"+contagemTimes+"").append(`<option value='${iColorOptions}' style='background-color: ${todasCoresBackground[iColorOptions]};'>${todasCoresCirculos[iColorOptions]} ${todasCoresTimes[iColorOptions]}</option>`);
                        iColorOptions++
                /*$("select#corTimeID1").append("<option value='' style='background-color:'></option>")
                $("select#corTimeID1").append(`<option value='2' style='background-color: ${todasCoresBackground[2]};'>${todasCoresCirculos[2]} ${todasCoresTimes[2]}</option>`);
                $("select#corTimeID1").append(`<option value='3' style='background-color: ${todasCoresBackground[3]};'>${todasCoresCirculos[3]} ${todasCoresTimes[3]}</option>`);*/
                }
                // Confirm Button
                $(function (e) {
                    console.log("contagemTimes", contagemTimes)
                    $("article#configStartArt").append("<button id='confirmTeamColorID"+contagemTimes+"' class='confirm-setup' onclick='selecionarJogadores()'>OK</button>");
                });    
            };
            if (contagemTimes > totalTimes) {
                $("article#configStartArt").append("<div class='confirm-init-div'></div>");
                $("div.confirm-init-div").append("<button id='confirmInitMatches' class='confirm-setup' onclick='initMatches()'>Iniciar Partidas</button>");
            }
        });        
    };
};

function selecionarJogadores() {
    //Removal of Form for Color of Team 1
    escolhaCor = Number(document.getElementById("corTimeID"+contagemTimes+"").value);
    
    if (escolhaCor == "") {
        alert('Escolha uma opção válida!');
    } else {
        $(function (e) {
            $("form#formTeam"+contagemTimes+"").hide();
            $("button#confirmTeamColorID"+contagemTimes+"").remove();
            //Condition to keep showing team colors
            if (contagemJogadores == 1) {
                // WORKING PERFECTLY (?)////////////////////////////////////////////////////////////////////
                todosTimes[contagemTimes] = {time: todasCoresTimes[escolhaCor], jogadores: [{nome: '', foto:''}]}
                // todosTimes.push({time: todasCoresTimes[escolhaCor]})
                //////////////////////////////////////////////////////////////////////
                $("article#configStartArt").append("<div id='definindoTime"+contagemTimes+"' class='choose-players-title'><strong>"+todasCoresCirculos[escolhaCor]+todasCoresTimes[escolhaCor]+"</strong>:</div>");
                // Array of All Teams
                //todosTimes = (todasCoresTimes[escolhaCor]) Need to rectify this - DONE
            };
        });
        //Choosing Each Player
        if (contagemJogadores < (jogadoresEmCadaTime + 1)) {
            $(function (e) {
                console.log("contagemJogadores", contagemJogadores)
                $("article#configStartArt").append("<form id='formPlayer"+contagemJogadores+"T"+contagemTimes+"'></form>");
                $("form#formPlayer"+contagemJogadores+"T"+contagemTimes+"").append("<label id='labelPlayer"+contagemJogadores+"TimeID"+contagemTimes+"' for='player"+contagemJogadores+"TimeID"+contagemTimes+"'>"+jogadorPosition[contagemJogadores]+" do 1º time: <label>");
                $("form#formPlayer"+contagemJogadores+"T"+contagemTimes+"").append("<select id='player"+contagemJogadores+"TimeID"+contagemTimes+"' name='escolhaJogador"+contagemJogadores+"TimeID"+contagemTimes+"'></select>");
                $("select#player"+contagemJogadores+"TimeID"+contagemTimes+"").append("<option value='' selected='selected' disabled='disabled'>Selecione</option>");
                let iOptionJogadores = 1
                while (iOptionJogadores < jogadoresBaygon.length) {
                    $("select#player"+contagemJogadores+"TimeID"+contagemTimes+"").append(`<option value='${iOptionJogadores}'>${todasCoresCirculos[escolhaCor]} ${jogadoresBaygon[iOptionJogadores]}</option>`);
                    iOptionJogadores++
                }
                    $("select#player"+contagemJogadores+"TimeID"+contagemTimes+"").append(`<option value='${iOptionJogadores}'>Indefinido</option>`);                    

                        // Confirm Button
                $(function (e) {
                    $("article#configStartArt").append("<button id='confirmPlayer"+contagemJogadores+"T"+contagemTimes+"' class='confirm-setup' onclick='jogadorSelecionado()'>OK</button>");
                });  
            });
        } else {
            colorChoice();
        }
    };
};


// Adding Team Players
function jogadorSelecionado() {
    console.log("contagemJogadores", contagemJogadores)
    escolhaJogador = Number(document.getElementById("player"+contagemJogadores+"TimeID"+contagemTimes+"").value);
    console.log("contagemJogadores", contagemJogadores)
    defTime = document.getElementById("definindoTime"+contagemTimes+""); 
    if  (escolhaJogador == "") {
        alert('Escolha uma opção válida!');
        return
    } else if (escolhaJogador == Number(jogadoresBaygon.length)) {
        defTime.innerHTML += ` Indefinido`
        // BUG ISSUES AHEAD ////////////////////////////////////////////////////////////////////
        // todosTimes.jogadores.nome = 'Indefinido'
        //////////////////////////////////////////////////////////////////////
        console.log(todosTimes)
        $("#labelPlayer"+contagemJogadores+"TimeID"+contagemTimes+"").remove();
        $("select#player"+contagemJogadores+"TimeID"+contagemTimes+"").hide();
        $("#confirmPlayer"+contagemJogadores+"T"+contagemTimes+"").remove();
        contagemJogadores++
        if (contagemJogadores < (jogadoresEmCadaTime + 1)) {
            defTime.innerHTML += ",";
        } else {
            defTime.innerHTML += ".";
        };
        if (contagemJogadores < (jogadoresEmCadaTime + 1)) {
                selecionarJogadores();                    
            } else {
                contagemJogadores = 1;
                colorChoice();
            };
    } else {
        $(function (e) {
            defTime.innerHTML += ` ${jogadoresBaygon[escolhaJogador]}`;
            // ISSUESSSSSS ////////////////////////////////////////////////////////////////////
            if (contagemJogadores == 1) {
                // todosTimes[contagemTimes] = {jogadores: [{nome: '', foto:''}]}
                // todosTimes[contagemTimes].jogadores = {nome: jogadoresBaygon[escolhaJogador], foto:''}
                todosTimes[contagemTimes].jogadores.push({nome: jogadoresBaygon[escolhaJogador], foto:''})
                // todosTimes[contagemTimes] = {jogadores: [{nome: jogadoresBaygon[escolhaJogador], foto:''}]}
            } else {
                todosTimes[contagemTimes].jogadores.push({nome: jogadoresBaygon[escolhaJogador], foto:''})
            }
            /// ALL BELOW ARE WRONG ///////////////////////////////////////////////////////////////////
            // todosTimes[contagemTimes].jogadores[contagemJogadores] = [{nome: jogadoresBaygon[escolhaJogador], foto:''}]
            // todosTimes[contagemTimes].jogadores[contagemJogadores].nome = jogadoresBaygon[escolhaJogador]
            // todosTimes[contagemTimes] += {jogadores: {nome: jogadoresBaygon[escolhaJogador]}}
            // todosTimes[contagemTimes].jogadores.nome.push(jogadoresBaygon[contagemJogadores])
            // todosTimes.push({jogadores[contagemTimes].nome: jogadoresBaygon[contagemJogadores]})
            // todosTimes.push({time: todasCoresTimes[contagemTimes]})
            //////////////////////////////////////////////////////////////////////
            $("#labelPlayer"+contagemJogadores+"TimeID"+contagemTimes+"").remove();
            $("select#player"+contagemJogadores+"TimeID"+contagemTimes+"").hide();
            $("#confirmPlayer"+contagemJogadores+"T"+contagemTimes+"").remove();
            contagemJogadores++
            jogadoresBaygon.splice(escolhaJogador, 1);

            if (contagemJogadores < (jogadoresEmCadaTime + 1)) {
                defTime.innerHTML += ",";
            } else {
                defTime.innerHTML += ".";
            };
            if (contagemJogadores < (jogadoresEmCadaTime + 1)) {
                selecionarJogadores();                    
            } else {            
                todasCoresTimes.splice(escolhaCor, 1);
                todasCoresCirculos.splice(escolhaCor, 1);
                todasCoresBackground.splice(escolhaCor, 1);
                contagemJogadores = 1;
                colorChoice();
            }            
        });
    };
};

 //Adding Article for Match Events
function addingArticle() {
    $(function (e) {
        $("section#infoTable"+matchNumber+"").append("<article id='allEvents"+matchNumber+"' class='all-events'></article>");
    })
    chooseTwoTeams()
}

 function chooseTwoTeams() {
    timeEmCampo++
    $(function (e) {        
        $("article#allEvents"+matchNumber+"").append("<form id='formTimeAJogar"+timeEmCampo+"' style='display: inline-block;'></form>");
                $("form#formTimeAJogar"+timeEmCampo+"").append("<label for='timeAJogar"+timeEmCampo+"'>Escolha o "+timeEmCampo+"º time do jogo "+matchNumber+": <label>");
                $("form#formTimeAJogar"+timeEmCampo+"").append("<select id='timeAJogar"+timeEmCampo+"' name='escolhaTimeAJogarID"+timeEmCampo+"'></select>");
                $("select#timeAJogar"+timeEmCampo+"").append("<option value='' selected='selected' disabled='disabled'>Selecione o time</option>");                
                let iTimeAJogar = 1
                while (iTimeAJogar <= totalTimes) {
                    $("select#timeAJogar"+timeEmCampo+"").append(`<option value='${iTimeAJogar}' id='timeAJogar${iTimeAJogar}'>${todosTimes[iTimeAJogar].time}</option>`) /*style='background-color: ${todasCoresBackground[iTimeAJogar]};'>${todasCoresCirculos[iTimeAJogar]} ${todasCoresTimes[iTimeAJogar]}</option>`);*/                    
                        iTimeAJogar++
                }
                
                // DISABLE CHOSEN TEAM IS WRONG ///////////////////////////////
                // $(function (e) {
                //     $(`timeAJogar${filtroTime}`).attr('disabled', 'disabled');
                // })

                // Confirm Button
                $(function (e) {
                    console.log("timeEmCampo", timeEmCampo)
                    $("article#allEvents"+matchNumber+"").append("<button id='confirmtimeAJogar"+timeEmCampo+"' class='confirm-setup' onclick='teamPlayingChosen()'>OK</button>");
                });    
        
    });
}

// Ready to Start the Matches
function initMatches() {
    matchNumber++
    $("#confirmInitMatches").hide();
    $("article#configStartArt").attr('height', 'fit-content');

    //Adding New Section to New Match
    $(function (e) {
        $("main#allMatches").prepend("<section id='infoTable"+matchNumber+"' class='quadro-jogo'></section>"); 
    });

    // Adding Title of the Match
    $(function (e) {
        $("section#infoTable"+matchNumber+"").append(`<header class='jogo-numero'><h1><strong>Jogo ${matchNumber}</strong></h1></header>`);
    });

    //Adding Soccer Field (Background)
    if($(window).width() >= 426) {
        $(function (e) {
            $("section#infoTable"+matchNumber+"").append("<aside></aside>");
        });
    };
    addingArticle()

    // Score of teams come in this position

   
};

function teamPlayingChosen() {
    // let buttonToRemove = document.getElementById("confirmtimeAJogar"+timeEmCampo+"")
    // buttonToRemove.remove();
    $("#formTimeAJogar"+timeEmCampo+"").hide();    
    $("#confirmtimeAJogar"+timeEmCampo+"").remove()
    $("button#confirmPreMatchSetup"+matchNumber+"").remove();

    if (timeEmCampo%2 == 1) {
        filtroTime = Number(document.getElementById("timeAJogar"+timeEmCampo+"").value)
        timeCasa = todosTimes[filtroTime];
        
        chooseTwoTeams();
    } else if (timeEmCampo%2 == 0){
        filtroTime = Number(document.getElementById("timeAJogar"+timeEmCampo+"").value)
        timeFora = todosTimes[filtroTime];
        if (timeCasa == timeFora) {
            alert("Escolha dois times diferentes")
        } else {
            // PRE MATCH
            $(function (e) {
                console.log("timeEmCampo", timeEmCampo)
                $("article#allEvents"+matchNumber+"").append("<button id='confirmPreMatchSetup"+matchNumber+"' class='confirm-setup' onclick='preMatchSetup()'>Começar Partida</button>");
            });    
        }


    }
}

function preMatchSetup() {
        $(function (e) {
            $("#formTimeAJogar"+timeEmCampo+"").hide();
            // $("button#confirmTimeAJogar"+timeEmCampo+"").remove()
            $("button#confirmPreMatchSetup"+matchNumber+"").remove();
            
        })
    
        // LISTING TEAMS AND PLAYERS
        // I NEED TO MAKE THE NUMBER OF PLAYERS EQUAL TO THE NUMBER OF 'PLAYERS CHOSEN' ///////////////////////////////////////////////////////////
        $("article#allEvents"+matchNumber+"").append(`<div id='timeCasa${matchNumber}' class='texto-campo'>${timeCasa.time}: </div>`);
        textoTimeCasa = document.getElementById(`timeCasa${matchNumber}`)
        let numeroJogador = 1
        while (numeroJogador <= jogadoresEmCadaTime) {
            if (numeroJogador < jogadoresEmCadaTime) {
                textoTimeCasa.innerHTML += `<strong>${timeCasa.jogadores[numeroJogador].nome}</strong>, `
                numeroJogador++
            }
            if (numeroJogador == jogadoresEmCadaTime) {
                textoTimeCasa.innerHTML += `<strong>${timeCasa.jogadores[numeroJogador].nome}</strong>.`
                numeroJogador++
            }
        }

        $("article#allEvents"+matchNumber+"").append(`<div id='timeFora${matchNumber}' class='texto-campo'>${timeFora.time}: </div>`);
        textoTimeFora = document.getElementById(`timeFora${matchNumber}`)
        numeroJogador = 1
        while (numeroJogador <= jogadoresEmCadaTime) {
            if (numeroJogador < jogadoresEmCadaTime) {
                textoTimeFora.innerHTML += `<strong>${timeFora.jogadores[numeroJogador].nome}</strong>, `
                numeroJogador++
            }
            if (numeroJogador == jogadoresEmCadaTime) {
                textoTimeFora.innerHTML += `<strong>${timeFora.jogadores[numeroJogador].nome}</strong>.`
                numeroJogador++
            }
        }
        
        // $("article#allEvents"+matchNumber+"").append(`<div class='texto-campo'><strong>${timeCasa.time}</strong>: <strong>${timeCasa.jogadores[1].nome}</strong>, <strong>${timeCasa.jogadores[2].nome}</strong>, <strong>${timeCasa.jogadores[3].nome}</strong>, <strong>${timeCasa.jogadores[4].nome}</strong>, <strong>${timeCasa.jogadores[5].nome}</strong>. </div>`);
        // $("article#allEvents"+matchNumber+"").append(`<div class='texto-campo'><strong>${timeFora.time}</strong>: <strong>${timeFora.jogadores[1].nome}</strong>, <strong>${timeFora.jogadores[2].nome}</strong>, <strong>${timeFora.jogadores[3].nome}</strong>, <strong>${timeFora.jogadores[4].nome}</strong>, <strong>${timeFora.jogadores[5].nome}</strong>. </div>`);
        // $(function (e) {
        //     $("article#allEvents"+matchNumber+"").append(`<div class='texto-campo'><strong>${timeCasa.time}</strong>: <strong>${timeCasa.jogadores[1].nome}</strong>. </div>`);
        // });
    
        // START BUTTON
        // $(function (e) {
        //     console.log("timeEmCampo", timeEmCampo)
        //     $("article#allEvents"+matchNumber+"").append("<button id='confirmPreMatchSetup"+matchNumber+"' class='confirm-setup' onclick='preMatchSetup()'>Começar Partida</button>");
        // });    

}

// $(`section#infoTable ${matchNumber}`).append(`<div id='placarJogo'><strong>${timeCasa}</strong> ${todasCoresCirculos[]} ${placarT1} x ${placarT2} ${todasCoresCirculos[]} <strong>${timeFora}</strong></div>`)

/*
    //Adding Score
    let scoreMatch = document.createElement("div");
    scoreMatch.innerHTML = `<strong>Time Vermelho</strong> &#128308; 1 x 0 &#128309; <strong>Time Azul</strong>`;
    scoreMatch.setAttribute ("id", "placarJogo");
    document.getElementById("infoTable").appendChild(scoreMatch);
    // scoreMatch.remove(); TO REMOVE ELEMENT
*/

function xx() {
    var para = document.createElement("div");
    para.innerHTML = "This is a paragraph.";
    para.setAttribute ("class","texto-campo");
    /*para.className = "texto-campo";*/
    para.setAttribute("id", "placarJogo;")
    document.getElementById("initConfigButton").appendChild(para);
};

/*
function initConfig() {
    let divTeams = document.createElement("div");
    let divTeamsContent = document.createTextNode("asundashdaisud");
    divTeams.appendChild(divTeamsContent);

    let initDiv = document.getElementById('initConfigButton');
    document.body.insertBefore(divTeams, initDiv);
}*/

function testeTexto() {
    let textoJogo = window.document.getElementById('textoCampoID')
    let textoInfo = document.getElementById('textoInfo')
    textoInfo.innerHTML = ''
    textoJogo.innerHTML += `ahusahsuasu `
};

// ETAPA 1 - DEFINIÇÃO DE CORES DOS TIMES
// ETAPA 2 - DEFINIÇÃO DE JOGADORES DO TIME
// REPETIÇÃO DAS ETAPAS 1 E 2 ATÉ TODOS OS TIMES E JOGADORES TEREM SIDO REGISTRADOS
// ETAPA 3 - REGISTRO DOS EVENTOS RELEVANTES DO JOGO
// ETAPA 4 - O SISTEMA SOMA OS GOLS POR EQUIPE E DEFINE VITÓRIA DE UM DOS TIMES OU EMPATE



/* PARTE HTML 
<section class="quadro-jogo">
<header id="jogoNumero"><h1><strong>Jogo 3</strong></h1></header>             

<aside id="bgCampo">            
    <div id="time1">
        <div class="jogador-campo"><img id="jogadorT1P1" src="baygon/B/Ze.j.png " alt="Goleiro"></div>
        <div class="jogador-campo"><img id="jogadorT1P2" src="baygon/B/Ad.j.png" alt="Defensor 1"></div>
        <div class="jogador-campo"><img id="jogadorT1P3" src="baygon/B/Ze.j.png " alt="Defensor 2"></div>
        <div class="jogador-campo"><img id="jogadorT1P4" src="baygon/B/Ad.j.png" alt="Atacante 1"></div>
        <div class="jogador-campo"><img id="jogadorT1P5" src="baygon/B/Ze.j.png " alt="Atacante 2"></div>
    </div>
    <div id="time2">
        <div class="jogador-campo"><img id="jogadorT2P1" src="baygon/B/Ze.j.png " alt="Goleiro"></div>
        <div class="jogador-campo"><img id="jogadorT2P2" src="baygon/B/Ad.j.png" alt="Defensor 1"></div>
        <div class="jogador-campo"><img id="jogadorT2P3" src="baygon/B/Ze.j.png " alt="Defensor 2"></div>
        <div class="jogador-campo"><img id="jogadorT2P4" src="baygon/B/Ad.j.png" alt="Atacante 1"></div>
        <div class="jogador-campo"><img id="jogadorT2P5" src="baygon/B/Ze.j.png " alt="Atacante 2"></div>
    </div>
</aside>
<div id="placarJogo"><strong>Time Vermelho</strong> &#128308; 2 x 0 &#128309; <strong>Time Azul</strong></div>
<!-- <div id="time1Placar" style="float: left;text-align: right; width: 115px;"><strong>Time Vermelho</strong> &#128308;</div>
<div id="placarCentral" style="float: left; text-align: center; width: 30px; margin-bottom: 10px;"><strong>1 x 0</strong></div>
<div id="time2Placar" style="float: left; text-align: left; width: 115px">&#128309; <strong>Time Azul</strong></div>
-->
<article class="all-events"> 
    
    <div class="texto-campo"> &#128308; Time Vermelho: <strong>Ályson</strong>, <strong>Tuta</strong>, <strong>Fernando</strong>, <strong>Zé</strong>, <strong>Adilson</strong></div>
    <div class="texto-campo"> &#128309; Time Azul: <strong>Dau</strong>, <strong>Milson</strong>, <strong>Ari</strong>, <strong>Iago</strong>, <strong>Antonio</strong></div>
    <div class="texto-campo"> <!-- &#11014;&#11015; -->&#128256; Substituição de <strong>Iago</strong> por <strong>Igor</strong><br></div>
    <div class="texto-campo"> &#128226; <b>Início de partida</b><!-- na <strong>Arena Baygon</strong>--></div>
    <div class="texto-campo"> [1m] <!--&#10060;-->&#129349; Chute na trave por <strong>Adilson</strong></div>
    <div class="texto-campo"> [2m] <span class="icone-estrela">&#11088;</span>&#9917; Gol de <strong>Zé</strong> (<span class="icone-passe">&#128095;</span> Passe de <strong>Fernando</strong>)<br></div>
    <div class="texto-campo"> [3m] <!-- &#10133; --> &#129301;&#128256; Lesão em <strong>Antonio</strong>, substituição por <strong>Jaedson</strong></div>
    <div class="texto-campo"> [4m] <!--&#9995;-->&#129000; Cartão Amarelo para <strong>Tuta</strong></div>
    <div class="texto-campo"> [4m] <!--&#9995;-->&#128545;&#9917; Gol contra de <strong>Tuta</strong></div>
    <div class="texto-campo"> [6m] <!--&#9995;-->&#128998; Cartão Azul para <strong>Ari</strong></div>
    <div class="texto-campo"> [8m] <!--&#9995;-->&#128997; Cartão Vermelho para <strong>Milson</strong></div>
    <div class="texto-campo"> [10m] &#128308;&#127942; <!-- &#127937; --> Fim de jogo. <strong>Time Vermelho</strong> venceu!</div>
    <!-- <div class="texto-campo"> <strong></strong></div> -->
</article>                
</section> */