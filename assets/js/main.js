import app from './firebase/app.js'
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'

//alt + clicando é possivel escrever varias linhas iguais

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

//ao clicar vai executar uma acão
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})

//listando as atualizações no Browser
async function loadData() {
    const subscriptions = await getHellFireClubSubscriptions()
    console.log(subscriptions)
}

loadData()