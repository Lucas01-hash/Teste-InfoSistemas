# Teste-InfoSistemas
Teste desenvolvido para o processo de seleção da empresa Info Sistemas - Back end.

=> FUNCIONALIDADES
[x] cadastrar veiculo </br>
[x] listar um ùnico veiculo </br>
[x] listar todos os veiculos </br>
[x] deletar veiculo </br>
[x] atualizar dados de um veiculo. </br>

=> middleware
 - middleware para validar a entrada de dados, monitorando a quantidade de caracteres certa e se o veiculo já existe no banco de dados.
 
 OBS: LEIA O MIDDLEWARE COM ATENÇÂO PARA QUE NÂO DÊ ERRO AO CRIAR VEICULO.
 
 => end-points
 
 - Cria um veiculo: method (POST)
  `http://localhost:3000/veiculo`
  
  /json/
  
  {</br>
	"placa": "hfg-6348",</br>
	"chassi": "9BWZFZ377KT054451",</br>
	"renavam": "17467314859",</br>
	"modelo": "355 GTS Targa",</br>
	"marca": "Ferrari",</br>
	"ano": "1995",</br>
	"cor": "Cinza"</br>
  }
 
 - Lista todos os veiculos: method (GET)
  `http://localhost:3000/veiculos`
  
 - Lista um unico veiculo: method (GET)
  `http://localhost:3000/veiculo/:id`
  
 - Deleta um veiculo: method (DELETE)
  `http://localhost:3000/veiculo/:id`
  
 - Atualiza um veiculo: method (PUT)
  `http://localhost:3000/veiculo/:id`
  
  /json/
  
  {</br>
	"placa": "hfg-6348",</br>
	"chassi": "9BWZFZ377KT054451",</br>
	"renavam": "17467314859",</br>
	"modelo": "355 GTS Targa",</br>
	"marca": "Ferrari",</br>
	"ano": "1995",</br>
	"cor": "Cinza"</br>
  }
  
  
  => TDD COM MOCHA
  Testes unitários feitos com mocha
  
  para rodar os teste, o servidor deve estar iniciado!
  Após o servidor está iniciado é só rodar (yarn test).
  
  OBS: há um erro que logo logo será resolvido. Não interfere em nada!

  Error: expected "Content-Type" matching /json/, got "text/html; charset=utf-8".
  
 
