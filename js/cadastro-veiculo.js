import {loadJSON} from './server.js'

init()

function init() {
    loadJSON(function(response) {
        const dbVeiculos = JSON.parse(response)
        const veiculos = dbVeiculos.veiculos

        console.log(veiculos);

        const fields = document.querySelectorAll('.ds-input')
        fields.forEach((field) => {
            field.setAttribute('required', true)
        })

        const vCodigo = document.getElementById('cod-vehicle')
        vCodigo.value = veiculos.length + 1
    })
}

const btnCadastro = document.getElementById('btn-finish-signup')
btnCadastro.addEventListener('click', () => {
    loadJSON(function (response) {
        const dbVeiculos = JSON.parse(response)
        const veiculos = dbVeiculos.veiculos

        

        const vCodigo = document.getElementById('cod-vehicle')
        //const cFoto = document.getElementById('ds-foto')
        const vMarca = document.getElementById('ds-marca')
        const vModelo = document.getElementById('ds-modelo')
        const vVersao = document.getElementById('ds-versao')
        const vAno = document.getElementById('ds-ano')
        const vCor = document.getElementById('ds-cor')
        const vCarroceria = document.getElementById('ds-carroceria')
        const vCombustivel = document.getElementById('ds-combustivel')
        const vImportado = document.getElementById('ds-importado')
        const vValor = document.getElementById('ds-valor')

        const vCilindrada = document.getElementById('ds-cilindrada')
        const vPotencia = document.getElementById('ds-potencia')
        const vQtdCilindros = document.getElementById('ds-qtd-cilindros')
        const vQtdValvulas = document.getElementById('ds-qtd-valvulas')
        const vAceleracao = document.getElementById('ds-aceleracao')
        const vTransmissao = document.getElementById('ds-transmissao')
        const vVelocMax = document.getElementById('ds-veloc-max')
        const vConsumo = document.getElementById('ds-consumo')

        const vVidroEletrico = document.getElementById('ds-vidro-eletr')
        const vArCondicionado = document.getElementById('ds-ar-condic')
        const vDirecao = document.getElementById('ds-direcao')
        const vTravaEletrica = document.getElementById('ds-trava-eletr')
        const vSensor = document.getElementById('ds-sensor')
        const vPilotoAuto = document.getElementById('ds-piloto-auto')
        const vRegVolante = document.getElementById('ds-reg-vol')
        const vSom = document.getElementById('ds-som')

        const vFreioT = document.getElementById('ds-freio-t')
        const vFreioD = document.getElementById('ds-freio-d')

        const vCtrlEstabilidade = document.getElementById('ds-ctrl-estab')
        const vCtrlTracao = document.getElementById('ds-ctrl-tracao')
        const vQtdAirbag = document.getElementById('ds-qtd-airbag')

        const vTipoRodas = document.getElementById('ds-tipo-rodas')
        const vAro = document.getElementById('ds-aro')
        const vEstepe = document.getElementById('ds-estepe')

        const vSDianteiras = document.getElementById('ds-dianteiras')
        const vMolasDianteiras = document.getElementById('ds-m-dianteiras')
        const vSTraseiras = document.getElementById('ds-traseiras')
        const vMolasTraseiras = document.getElementById('ds-m-traseiras')

        const veiculo = {
            "codigo": vCodigo.value,
            "foto": "/images/ford_mustang.png",
            "marca": vMarca.value,
            "modelo": vModelo.value,
            "versao": vVersao.value,
            "ano": vAno.value,
            "cor": vCor.value,
            "carroceria": vCarroceria.value,
            "combustivel": vCombustivel.value,
            "importado": vImportado.value,
            "valor": vValor.value,
            "motor": {
                "cilindrada": vCilindrada.value,
                "potencia": vPotencia.value,
                "qtdCilindros": vQtdCilindros.value,
                "qtdValvulas": vQtdValvulas.value,
                "aceleracao": vAceleracao.value,
                "transmissao": vTransmissao.value,
                "velocMax": vVelocMax.value,
                "consumo": vConsumo.value
            },
            "conforto": {
                "vidroEletrico": vVidroEletrico.value,
                "arCondicionado": vArCondicionado.value,
                "direcao": vDirecao.value,
                "travaEletrica": vTravaEletrica.value,
                "sensor": vSensor.value,
                "pilotoAuto": vPilotoAuto.value,
                "regVolante": vRegVolante.value,
                "som": vSom.value
            },
            "freios": {
                "freioT": vFreioT.value,
                "freioD": vFreioD.value
            },
            "seguranca": {
                "ctrlEstab": vCtrlEstabilidade.value,
                "ctrlTracao": vCtrlTracao.value,
                "qtdAirbag": vQtdAirbag.value
            },
            "rodas": {
                "tipoRodas": vTipoRodas.value,
                "aro": vAro.value,
                "estepe": vEstepe.value
            },
            "suspensao": {
                "dianteiras": vSDianteiras.value,
                "molasDianteiras": vMolasDianteiras.value,
                "traseiras": vSTraseiras.value,
                "molasTraseiras": vMolasTraseiras.value
            }
        }

        veiculos.push(veiculo)

        console.log(veiculos);

        alert('Veículo cadastrado com sucesso!' + veiculo)

        window.location = '/veiculos.html'
    })
})

