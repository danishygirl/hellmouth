HELL MOUTH — pacote para Cloudflare Workers (GitHub / npx wrangler deploy)

CORREÇÃO DO ERRO DO PRINT
A build usava "npx wrangler deploy", mas havia uma pasta functions/ do Cloudflare Pages.
Este pacote usa Workers nativamente: wrangler.jsonc, src/worker.js e public/.

O QUE FAZER
Substitua os arquivos do repositório pelos arquivos deste ZIP, preservando a estrutura (public/, src/, wrangler.jsonc).
A implantação já configurada com "npx wrangler deploy" encontrará o arquivo wrangler.jsonc.
Não é necessário editar código, inserir ID do D1, executar SQL nem criar conta para os jogadores.

IMPORTANTE
A Cloudflare precisa permitir o provisionamento automático de recursos D1 na sua conta.
Quando a primeira visita acessar /api/rolls, a tabela será criada automaticamente.
A integração GitHub/Cloudflare existente fará a publicação depois do commit.
Este pacote não publica sozinho nem consegue alterar seu repositório remoto.

ARQUIVOS
public/index.html: página inicial; public/pages/dados.html: rolador; public/assets/: estilos e mídias.
src/worker.js: API de dados e histórico; wrangler.jsonc: implantação e banco D1 automático.
migrations/: cópia de referência do SQL, não precisa rodar manualmente.

SEGURANÇA
Rolagens geradas no servidor, registradas e consultáveis por todos. Sem conta, o nome do personagem não comprova identidade.
Várias rolagens diferentes continuam possíveis; o histórico registra todas e cada tentativa recebe um ID.
