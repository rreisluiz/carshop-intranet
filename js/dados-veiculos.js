import {loadJSON} from './server.js'

init()
// init();

// function loadJSON(callback) {   
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//         xobj.open('GET', '/static-db/veiculos.json', true); // Replace 'my_data' with the path to your file
//         xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }

function init() {
    loadJSON(function(response) {
        const dbVeiculos = JSON.parse(response)
        const veiculos = dbVeiculos.veiculos

        const id = getId()

        const hTitle = document.getElementById('h-title')
        hTitle.textContent = 'Veículo - Código: ' + id

        preencherDadosVeiculo(veiculos, id)

        function getId() {
            var url = location.href;
            var dominio = url.split("/");
            var getValor = dominio[3];
            var parametro = getValor.split('?')
            var paramId = parametro[1].split('=')
            
            return paramId[1]
        }
        
        
        function preencherDadosVeiculo(veiculos, id) {
            const veiculo = veiculos[id - 1]

            //automovel
            const vCodigo = document.getElementById('cod-vehicle')
            const cFoto = document.getElementById('ds-foto')
            const vMarca = document.getElementById('ds-marca')
            const vModelo = document.getElementById('ds-modelo')
            const vVersao = document.getElementById('ds-versao')
            const vAno = document.getElementById('ds-ano')
            const vCor = document.getElementById('ds-cor')
            const vCarroceria = document.getElementById('ds-carroceria')
            const vCombustivel = document.getElementById('ds-combustivel')
            const vImportado = document.getElementById('ds-importado')
            const vValor = document.getElementById('ds-valor')
            
            vCodigo.value = veiculo.codigo
            cFoto.setAttribute('src', veiculo.foto)
            vMarca.value = veiculo.marca
            vModelo.value = veiculo.modelo
            vVersao.value = veiculo.versao
            vAno.value = veiculo.ano
            vCor.value = veiculo.cor
            vCarroceria.value = veiculo.carroceria
            vCombustivel.value = veiculo.combustivel
            vImportado.value = veiculo.importado
            vValor.value = veiculo.valor

            //motor
            const vCilindrada = document.getElementById('ds-cilindrada')
            const vPotencia = document.getElementById('ds-potencia')
            const vQtdCilindros = document.getElementById('ds-qtd-cilindros')
            const vQtdValvulas = document.getElementById('ds-qtd-valvulas')
            const vAceleracao = document.getElementById('ds-aceleracao')
            const vTransmissao = document.getElementById('ds-transmissao')
            const vVelocMax = document.getElementById('ds-veloc-max')
            const vConsumo = document.getElementById('ds-consumo')
            
            vCilindrada.value = veiculo.motor.cilindrada
            vPotencia.value = veiculo.motor.potencia
            vQtdCilindros.value = veiculo.motor.qtdCilindros
            vQtdValvulas.value = veiculo.motor.qtdValvulas
            vAceleracao.value = veiculo.motor.aceleracao
            vTransmissao.value = veiculo.motor.transmissao
            vVelocMax.value = veiculo.motor.velocMax
            vConsumo.value = veiculo.motor.consumo

            //conforto
            const vVidroEletrico = document.getElementById('ds-vidro-eletr')
            const vArCondicionado = document.getElementById('ds-ar-condic')
            const vDirecao = document.getElementById('ds-direcao')
            const vTravaEletrica = document.getElementById('ds-trava-eletr')
            const vSensor = document.getElementById('ds-sensor')
            const vPilotoAuto = document.getElementById('ds-piloto-auto')
            const vRegVolante = document.getElementById('ds-reg-vol')
            const vSom = document.getElementById('ds-som')

            vVidroEletrico.value = veiculo.conforto.vidroEletrico
            vArCondicionado.value = veiculo.conforto.arCondicionado
            vDirecao.value = veiculo.conforto.direcao
            vTravaEletrica.value = veiculo.conforto.travaEletrica 
            vSensor.value = veiculo.conforto.sensor 
            vPilotoAuto.value = veiculo.conforto.pilotoAuto
            vRegVolante.value = veiculo.conforto.regVolante
            vSom.value = veiculo.conforto.som

            //freios
            const vFreioT = document.getElementById('ds-freio-t')
            const vFreioD = document.getElementById('ds-freio-d')

            vFreioT.value = veiculo.freios.freioT
            vFreioD.value = veiculo.freios.freioD

            //seguranca
            const vCtrlEstabilidade = document.getElementById('ds-ctrl-estab')
            const vCtrlTracao = document.getElementById('ds-ctrl-tracao')
            const vQtdAirbag = document.getElementById('ds-qtd-airbag')

            vCtrlEstabilidade.value = veiculo.seguranca.ctrlEstab 
            vCtrlTracao.value = veiculo.seguranca.ctrlTracao
            vQtdAirbag.value = veiculo.seguranca.qtdAirbag

            //rodas
            const vTipoRodas = document.getElementById('ds-tipo-rodas')
            const vAro = document.getElementById('ds-aro')
            const vEstepe = document.getElementById('ds-estepe')

            vTipoRodas.value = veiculo.rodas.tipoRodas 
            vAro.value = veiculo.rodas.aro
            vEstepe.value = veiculo.rodas.estepe 

            //suspensao
            const vSDianteiras = document.getElementById('ds-dianteiras')
            const vMolasDianteiras = document.getElementById('ds-m-dianteiras')
            const vSTraseiras = document.getElementById('ds-traseiras')
            const vMolasTraseiras = document.getElementById('ds-m-traseiras')

            vSDianteiras.value = veiculo.suspensao.dianteiras 
            vMolasDianteiras.value = veiculo.suspensao.molasDianteiras
            vSTraseiras.value = veiculo.suspensao.traseiras
            vMolasTraseiras.value = veiculo.suspensao.molasTraseiras


        }
        
        const btnEditar = document.getElementById('btn-edit')
        const allInputs = document.querySelectorAll('.ds-input')

        btnEditar.addEventListener('click', () => {
            allInputs.forEach((input) => {
                input.removeAttribute('readonly')
            })
        })
    
        const btnSave = document.getElementById('btn-save-edit')
        btnSave.addEventListener('click', () => {
            allInputs.forEach((input) => {
                input.setAttribute('readonly', true)
            })
        })

        const btnExcluir = document.getElementById('btn-delete')
        btnExcluir.addEventListener('click', () => {
            var r = confirm('Tem certeza que deseja excluir?')
            if (r == true) {
                alert('Veículo excluído!')
                window.location = '/veiculos.html'
            }
        })
    })
}