
function initConfig() {
    //Removing Initial Structure
    let button1 = document.getElementById("configStartArt");
    button1.remove(0)
    
    //Adding New Section to New Match
    let dinamicSection = document.createElement("section");
    dinamicSection.setAttribute("class", "quadro-jogo");
    dinamicSection.setAttribute("id", "infoTable"); // I need to rename newly created sections
    document.getElementById("allMatches").appendChild(dinamicSection);

    // Adding Title of the Match
    let dinamicHeader = document.createElement("header");
    dinamicHeader.innerHTML = `<h1><strong>Jogo 1</strong></h1>`;
    dinamicHeader.setAttribute("id","jogoNumero");
    /*dinamicHeader.className = "xx-xx";*/
    document.getElementById("infoTable").appendChild(dinamicHeader);

    //Adding Soccer Field (Background)
    let showField = document.createElement("aside");
    document.getElementById("infoTable").appendChild(showField);

    // Score of teams come in this position

    //Adding Article for Match Events
    let artMatch = document.createElement("article");
    artMatch.setAttribute("id", "allEvents");
    artMatch.setAttribute("class", "all-events")
    document.getElementById("infoTable").appendChild(artMatch);

    //First Choice of Team Color
    let labelCor = document.createElement("label");
    labelCor.setAttribute("for", "corTimeID1");
    labelCor.innerHTML = "Selecione a cor do time 1: ";

    let corTime1 = document.createElement("select");
    corTime1.setAttribute("id","corTimeID1")

    let timeAzul = document.createElement("option");
    timeAzul.value = "1";
    timeAzul.innerHTML = `&#128309; Time Azul`;
    timeAzul.style.backgroundColor="steelblue";

    let timeRoxo = document.createElement("option");
    timeRoxo.value = "2";
    timeRoxo.innerHTML = `&#128995; Time Roxo`;
    timeRoxo.style.backgroundColor="slateblue";

    let timeVermelho = document.createElement("option");
    timeVermelho.value = "3";
    timeVermelho.innerHTML = `&#128308; Time Vermelho`;
    timeVermelho.style.backgroundColor="red";

    

    corTime1.add(timeAzul, null);
    corTime1.add(timeRoxo, null);
    corTime1.add(timeVermelho, null);

    document.getElementById("allEvents").appendChild(labelCor);
    document.getElementById("allEvents").appendChild(corTime1);

    var confirmTeamColor = document.createElement("button");
    confirmTeamColor.innerHTML = "OK";
    confirmTeamColor.setAttribute("class", "confirm-setup");
    confirmTeamColor.setAttribute("id", "ConfirmTeamColorID");
    


}

confirmTeamColor.addEventListener("click", selecionarJogadores());


function selecionarJogadores() {
    alert("funcionou")
//Adding Team Players VERIFICAR INTEGRIDADE DO BLOCO
    let labelEscT1P1 = document.createElement("label");
    labelEscT1P1.setAttribute("for", "escT1P1");
    labelEscT1P1.innerHTML = "Selecione o goleiro: ";

    let escSelT1P1 = document.createElement("select");
    escSelT1P1.setAttribute("id","escT1P1")

    let jog001 = document.createElement("option");
    jog001.value = "1";
    jog001.innerHTML = `Adilson`; /* &#128309; Acrescentar círculo colorido dinamicamente de acordo com cor de time escolhida */
    jog001.style.backgroundColor="steelblue";

    let jog002 = document.createElement("option");
    jog002.value = "2";
    jog002.innerHTML = `Zé`;
    jog002.style.backgroundColor="slateblue";

    let jogIndefinido = document.createElement("option");
    jogIndefinido.value = "3";
    jogIndefinido.innerHTML = `NDEFINIDO`;
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
}


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
}

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
}

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