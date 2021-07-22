let matchNumber = 0
let teamNumber = 0
var todasCoresTimes = ['','Time Azul', 'Time Roxo', 'Time Vermelho']
var todasCoresCirculos = ['', '&#128309;', '&#128995;', '&#128308;']
var todasCoresBackground = ['', 'steelblue', 'slateblue', 'red']
var jogadoresBaygon = ['', 'Adilson', 'Zé', 'Ályson', 'Tuta', 'Fernando', 'Dau', 'Milson', 'Ari', 'Iago', 'Antonio', 'Jaedson', 'Igor'].sort(function (a, b) {
    return a.localeCompare(b);
});
const jogadorPosition = ['', 'Goleiro', 'Defensor 1', 'Defensor 2', 'Atacante 1', 'Atacante 2']
let contagemTimes = 0
let contagemJogadores = 0

var totalTimes
var jogadoresEmCadaTime

console.log(jogadoresBaygon)

var todosTimes = {
    Time0:[''], 
    Time1:['Zé'], 
    Time2:['']
};

todosTimes.Time1.push('Adilson')
console.log(todosTimes.Time1)

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
        $("article#configStartArt").append("<header style='text-align:center;'><h2>Configurações de Times</h2></header>")
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
            $("div#configNumeroTimes").remove();
            $("article#configStartArt").append(`<div style='margin: 5px;'>Número total de times: ${totalTimes}</div>`)
            $("article#configStartArt").append("<div id='configJogadoresPorTime' style='margin: 5px'>Número de jogadores em cada time: <input id='inputJogadoresPorTime' type='number' min='5' max='11'><button class='confirm-setup' onclick='colorChoice()'>OK</button></div>")
        });
    };
};

function colorChoice() {
    jogadoresEmCadaTime = Number(document.getElementById("inputJogadoresPorTime").value)
    //First Choice of Team Color
    if (jogadoresEmCadaTime < 5 || jogadoresEmCadaTime > 11) {
        alert('Escolha de 5 a 11 jogadores por time')
    } else {
        teamNumber++
        $(function (e) {
            $("div#configJogadoresPorTime").remove();
            $("article#configStartArt").append(`<div style='margin: 5px;'>Número de jogadores por time: ${jogadoresEmCadaTime}</div>`)
            $("article#configStartArt").append("<form id='formTeam1' style='display: inline-block;'></form>");
            $("form#formTeam1").append("<label for='corTimeID1'>Monte o 1º time: <label>");
            $("form#formTeam1").append("<select id='corTimeID1' name='escolhaCorTimeID1'></select>");
            $("select#corTimeID1").append("<option value='' selected='selected' disabled='disabled'>Selecione a cor</option>");
            let iColorOptions = 1
            while (iColorOptions < todasCoresTimes.length) {
                $("select#corTimeID1").append(`<option value='${iColorOptions}' style='background-color: ${todasCoresBackground[iColorOptions]};'>${todasCoresCirculos[iColorOptions]} ${todasCoresTimes[iColorOptions]}</option>`);
                    iColorOptions++
            /*$("select#corTimeID1").append("<option value='' style='background-color:'></option>")
            $("select#corTimeID1").append(`<option value='2' style='background-color: ${todasCoresBackground[2]};'>${todasCoresCirculos[2]} ${todasCoresTimes[2]}</option>`);
            $("select#corTimeID1").append(`<option value='3' style='background-color: ${todasCoresBackground[3]};'>${todasCoresCirculos[3]} ${todasCoresTimes[3]}</option>`);*/
            }
        });

        // Confirm Button
        $(function (e) {
            $("article#configStartArt").append("<button id='confirmTeamColorID1' class='confirm-setup' onclick='selecionarJogadores()'>OK</button>");
        });    
    }
};


function selecionarJogadores() {
    //Removal of Form for Color of Team 1
    let escolhaCor1 = document.getElementById("corTimeID1").value
    $(function (e) {
        $("form#formTeam1").remove();
        $("button#confirmTeamColorID1").remove();
        $("article#configStartArt").append(`<div id='definindoTime1' class="choose-players-title"><strong>${todasCoresCirculos[escolhaCor1]}${todasCoresTimes[escolhaCor1]}</strong>:</div>`);
    });
    
    //Adding Team Players
    $(function (e) {
        contagemJogadores++
        $("article#configStartArt").append("<form id='formPlayer1T1'></form>");
        $("form#formPlayer1T1").append(`<label for='player1TimeID1'>${jogadorPosition[contagemJogadores]} do 1º time: <label>`);
        $("form#formPlayer1T1").append("<select id='player1TimeID1' name='escolhaJogador1TimeID1'></select>");
        $("select#player1TimeID1").append(`<option value='' selected='selected' disabled='disabled'>Selecione o ${jogadorPosition[contagemJogadores]}</option>`);
        let iOptionJogadores = 1
        while (iOptionJogadores < jogadoresBaygon.length) {
            $("select#player1TimeID1").append(`<option value='${iOptionJogadores}'>${todasCoresCirculos[escolhaCor1]} ${jogadoresBaygon[iOptionJogadores]}</option>`);
            iOptionJogadores++
        }
            $("select#player1TimeID1").append(`<option value='${iOptionJogadores}'>Indefinido</option>`);
            /*$("select#player1TimeID1").append("<option value='' style='background-color:'></option>")*/
            /* $("select#player1TimeID1").append(`<option value='2' style='background-color: ${todasCoresBackground[escolhaCor1]};'>${todasCoresCirculos[escolhaCor1]} ${jogadoresBaygon[iOptionJogadores]}</option>`);*/
            /* &#128308; Acrescentar círculo colorido dinamicamente de acordo com cor de time escolhida */
    });

    // Confirm Button
    $(function (e) {
        $("article#configStartArt").append("<button id='confirmPlayer1T1ID' class='confirm-setup' onclick='jogadorSelecionado()'>OK</button>");
    });    

};
function jogadorSelecionado() {
    let escolhaJogador1 = document.getElementById("player1TimeID1").value;
    var defTime1 = document.getElementById("definindoTime1");
    if  (escolhaJogador1 == "") {
        alert('Escolha uma opção válida!');
    } else if (Number(escolhaJogador1) == Number(jogadoresBaygon.length)){
        defTime1.innerHTML += ` Indefinido`
    } else {
        $(function (e) {
            
            
            defTime1.innerHTML += ` ${jogadoresBaygon[escolhaJogador1]}`;

        });    
    };
};


function initMatches() {
    matchNumber++

    //Adding New Section to New Match
    $(function (e) {
        $("main#allMatches").prepend("<section id='infoTable"+matchNumber+"' class='quadro-jogo'></section>"); //Still need dynamic ID 
    });

    // Adding Title of the Match
    $(function (e) {
        $("section#infoTable"+matchNumber+"").append(`<header class='jogo-numero'><h1><strong>Jogo ${matchNumber}</strong></h1><header>`);
    });

    //Adding Soccer Field (Background)
    $(function (e) {
        $("section#infoTable"+matchNumber+"").append("<aside></aside>");
    });

    // Score of teams come in this position

    //Adding Article for Match Events
    $(function (e) {
        $("section#infoTable"+matchNumber+"").append("<article id='allEvents' class='all-events'></article>");
    });
};


/*
    <label for="exampleInputCountry">Defina o goleiro:</label>
    <select class="form-control" id="exampleInputCountry" name="country">
        <option value="" selected="selected" >Selecione o jogador</option>
        <option value="Adilson">&#128308; Adilson</option>
        <option value="Ze">&#128308; Zé</option>
        <option value="Indefinido">Indefinido</option>
    </select>*/






function yy() {
    let labelEscT1P1 = document.createElement("label");
    labelEscT1P1.setAttribute("for", "escT1P1");
    labelEscT1P1.innerHTML = "Selecione o goleiro: ";

    let escSelT1P1 = document.createElement("select");
    escSelT1P1.setAttribute("id","escT1P1")

    let jog001 = document.createElement("option");
    jog001.value = "1";
    jog001.innerHTML = `Adilson`; 
    jog001.style.backgroundColor="steelblue";

    let jog002 = document.createElement("option");
    jog002.value = "2";
    jog002.innerHTML = `Zé`;
    jog002.style.backgroundColor="slateblue";

    let jogIndefinido = document.createElement("option");
    jogIndefinido.value = "3";
    jogIndefinido.innerHTML = `INDEFINIDO`;
    jogIndefinido.style.backgroundColor="red";



    corTime1.add(jog001, null);
    corTime1.add(jog002, null);
    corTime1.add(jogIndefinido, null);

    document.getElementById("allEvents").appendChild(labelCor);
    document.getElementById("allEvents").appendChild(corTime1);

    var confirmTeamColor = document.createElement("button");
    confirmTeamColor.innerHTML = "OK";
    confirmTeamColor.setAttribute ("class", "confirm-setup");
    document.getElementById("allEvents").appendChild(confirmTeamColor);
// Fim da escolha de jogadores
};

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

/* HTML parte 2
<div class="form-group">
<label for="exampleInputCountry">Monte o 1º time:</label>
    <select class="form-control" id="exampleInputCountry" name="country">
        <option value="" selected="selected">Selecione a cor</option>
        <option value="Time Azul" style="background-color: steelblue;">&#128309; Time Azul</option>
        <option value="Time Roxo" style="background-color: slateblue;">&#128995; Time Roxo</option> 
        <option value="Time Vermelho" style="background-color: red;">&#128308; Time Vermelho</option>                                                           
    </select>
</div>

<div class="form-group">
<label for="exampleInputCountry">Defina o goleiro:</label>
    <select class="form-control" id="exampleInputCountry" name="country">
        <option value="" selected="selected" >Selecione o jogador</option>
        <option value="Adilson">&#128308; Adilson</option>
        <option value="Ze">&#128308; Zé</option>
        <option value="Indefinido">Indefinido</option>
    </select>
</div>

</article>                
</section>
*/