# lincros-front

Frontend (React)

	npm install
	npm run dev

	Dependências
		Axios
		Bootstrap
		React
		React Countup
		React Dom
		React Router		


	Projeto criado utilizando vite, 6 telas e 11 componentes, todas as telas possuem o componente Navbar em comum para possibilitar a navegação pelo aplicativo.

		
	Telas
		Início - Landing page com indicadores, imagem e um texto gerado por IA descrevendo a empresa JVLogs
		Contato - Exibe informação de contato do Linkedn
		Acesso - Possibilita o login do usuário, ou caso o mesmo não possua uma conta cadastrada, ir para a tela "Cadastro". Ao realizar o login "Navbar" é atualizada para mostrar pedidos e painel de admin, usuário é redirecionado para a tela "Início".
		Cadastro - Possibilita o cadastro de um novo usuário realizando validações básicas de usuário, email e senha, ao realizar cadastro bem sucedido o usuário é redirecionado para a tela "Acesso"
		Admin - Tela para criar novos pedidos para o usuário logado ou deletar todos os pedidos do mesmo
		Pedidos - Tela para visualizar todos os pedidos do usuário

	
	Componentes
		Navbar - Barra superior com Links para outras rotas dentro do aplicativo, o mesmo possúi condicionais para caso o usuário esteja logado verificando o nmUsuario
		Contexto - Utiliza contexto do react para repassar informações para outros componentes.
		Counter - Realiza contagem progressiva até o valor específicado em uma quantidade de tempo determinada
		FormLogin - Formulário de login, ao realizar login válido redireciona usuário para a tela "Início"
		FormCadastro - Formulário de cadastro, ao realizar um cadastro bem sucedido redireciona o usuário para a tela "Acesso"
		Imagem - Componente para mostrar imagens com formatação padrão
		LinkednProfileBadge - Método copiado diretamente do Linkedn para exibir meu perfil
		Pedido - Pega todos pedidos do usuário logado, ao receber retorno monta cards exibindo informações do pedido
		Sobre - Exibe informações sobre a empresa JVLogs
		Rastreio - Modal que exibe as informações de rastreio do pedido (Não implementado)
		TokenConfig - Altera axios para repassar Bearer salvo no localStorage como Header
