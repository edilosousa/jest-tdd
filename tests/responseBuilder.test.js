const { createResponseContent, createResponseErrors } = require("../src/responseBuilder")


describe('Criação de uma resposta padronizada', () =>{
    it('Criar uma resposta com conteúdo (content) de mensagem de OK', () =>{
        const resultado = createResponseContent({mensagem: 'OK'})
        // expect(resultado.content).not.toBeNull()
        expect(resultado.content).not.toBeUndefined()
        expect(resultado.content).toHaveProperty('mensagem','OK')
    })
})