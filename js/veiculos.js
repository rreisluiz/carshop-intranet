import {loadJSON} from './server.js'

init()

function init() {
    loadJSON(function(response) {
        const dbVeiculos = JSON.parse(response)
        const veiculos = dbVeiculos.veiculos

        carregarTabela(veiculos);

        const resultadosEncontrados = document.getElementById('found-results')
        const allVeiculos = document.querySelectorAll('.veiculo-tr')
        console.log(allVeiculos);
        resultadosEncontrados.innerHTML = 'Resultados encontrados: <strong>' + allVeiculos.length + '</strong>'
        
        function carregarTabela(veiculos) {
            veiculos.forEach((veiculo) => {
                addVeiculoTabela(veiculo);
            })
        }
        
        function addVeiculoTabela(veiculo) {
            const tableVeiculos = document.querySelector('#table-veiculos');
            const veiculoTr = novoVeiculo(veiculo);
            tableVeiculos.appendChild(veiculoTr);
        };
        
        function novoVeiculo(veiculo) {
            const veiculoTr = document.createElement('tr');
            veiculoTr.setAttribute('id', 'veiculo' + veiculo.codigo)
            veiculoTr.classList.add('veiculo-tr')
        
            const td = document.createElement('td');
            const selected = criarSelected(veiculo);
            td.appendChild(selected)
            veiculoTr.appendChild(td);
        
            novoDadoVeiculo(veiculo.codigo, veiculoTr);
            novoDadoVeiculo(veiculo.marca, veiculoTr);
            novoDadoVeiculo(veiculo.modelo, veiculoTr);
            novoDadoVeiculo(veiculo.versao, veiculoTr);
            novoDadoVeiculo(veiculo.ano, veiculoTr);
            novoDadoVeiculo(veiculo.valor, veiculoTr);
        
            return veiculoTr;
        };
        
        function novoDadoVeiculo(dado, tr) {
            const td = document.createElement('td');
            td.textContent = dado;
            tr.appendChild(td);
        };
        
        function criarSelected(veiculo) {
            const selected = document.createElement('input')
            selected.setAttribute('type', 'radio')
            selected.setAttribute('id', veiculo.codigo)
            selected.setAttribute('name', 'selecionado');
            selected.addEventListener('change', () => {
                const vFoto = document.getElementById('v-photo')
                vFoto.setAttribute('src', veiculo.foto)
                const vSituacao = document.getElementById('v-situacao')
                vSituacao.textContent = veiculo.situacao
                const vDataVenda = document.getElementById('v-data-venda')
                vDataVenda.textContent = veiculo.dataVenda
                const url = document.getElementById('btn-more')
                url.setAttribute('href', 'dados-veiculo.html?id=' + selected.id)
            })
            return selected
        };

        const btnExcluir = document.getElementById('btn-delete')
        btnExcluir.addEventListener('click', () => {
            const allSelected = document.getElementsByName('selecionado')
            allSelected.forEach((selected) => {
                if (selected.checked) {
                    var r = confirm('Tem certeza que deseja excluir?')
                    if (r == true) {
                        const veiculo = document.getElementById('veiculo' + selected.id)
                        veiculo.classList.add('fade-out')
                        veiculo.parentNode.removeChild(veiculo);
    
                        const vFoto = document.getElementById('v-photo')
                        vFoto.setAttribute('src', '')
                        alert('Veículo excluído!')
                    }
                }
            })
        })
    })
}

