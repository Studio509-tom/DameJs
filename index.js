let width = 10
let height = 10
let player = "white";
let restart = "no"
countWhitePion = 20
countBlackPion = 20
const blockGame = document.getElementById('game')
const blockTrays = document.createElement('div')
blockTrays.setAttribute('class', 'container')

blockGame.appendChild(blockTrays)

const blockPionBlack = null
//Affichage du plateau
for (let y = 0; y < height; y++) {


    const blockHeight = document.createElement('div')
    blockHeight.setAttribute('class', 'container-x')
    blockHeight.setAttribute('data-position-y', y + 1)
    blockTrays.appendChild(blockHeight)

    for (let x = 0; x < width; x++) {

        const blockCase = document.createElement('div')
        blockCase.setAttribute('class', 'container-y')
        blockCase.setAttribute('data-position-x', x + 1)
        blockHeight.appendChild(blockCase)
        const blockPionWhite = null
        //Lignes X Paire
        if (y % 2 == 0) {
            //Case Paire
            if (x % 2 == 0) {
                blockCase.classList.add(`dark`)
                //Pion Blanc
                if (y == 0 || y == 2) {
                    const blockPionWhite = document.createElement('div')
                    blockPionWhite.setAttribute('class', 'pion-player')
                    blockPionWhite.classList.add('pion-player-white')
                    blockPionWhite.classList.add('t-pion-player-white')

                    blockCase.appendChild(blockPionWhite)

                    selectPion(blockPionWhite)
                }
                //Pion Noir
                else if (y == 6 || y == 8) {
                    const blockPionBlack = document.createElement('div')
                    blockPionBlack.setAttribute('class', 'pion-player')
                    blockPionBlack.classList.add('pion-player-black')
                    blockPionBlack.classList.add('t-pion-player-black')

                    blockCase.appendChild(blockPionBlack)

                    selectPion(blockPionBlack)
                }
                selectCase(blockCase)

            }
            //Case Impaire
            else {
                blockCase.classList.add(`clear`)
            }
        }

        //Ligne X Impaire
        else {
            //Case Paire
            if (x % 2 == 0) {
                blockCase.classList.add(`clear`)
            }
            //Case Impaire
            else {
                blockCase.classList.add(`dark`)
                //Pion Blanc
                if (y == 1 || y == 3) {
                    const blockPionWhite = document.createElement('div')
                    blockPionWhite.setAttribute('class', 'pion-player')
                    blockPionWhite.classList.add('pion-player-white')
                    blockPionWhite.classList.add('t-pion-player-white')

                    blockCase.appendChild(blockPionWhite)

                    selectPion(blockPionWhite)
                }
                //Pion Noir
                else if (y == 7 || y == 9) {
                    const blockPionBlack = document.createElement('div')
                    blockPionBlack.setAttribute('class', 'pion-player')
                    blockPionBlack.classList.add('pion-player-black')
                    blockPionBlack.classList.add('t-pion-player-black')
                    blockCase.appendChild(blockPionBlack)

                    selectPion(blockPionBlack)
                }
                selectCase(blockCase)

            }
        }


    }

}
console.log(restart)

if (countWhitePion == 0) {
    console.log('Player Black Winner ')
}
else if (countBlackPion == 0) {
    console.log('Player White Winner ')

}


function selectPion(pion) {
    // console.log(restart)
    pion.addEventListener('click', (e) => {
        console.log(restart)
        if ((pion.classList.contains("t-pion-player-black") && player == "white" ||
            pion.classList.contains("t-pion-player-white") && player == "black") ||
            restart == "yes") {
            return false;
        }

        let updateSelect = blockGame.querySelector('.t-pion')
        //Vérification si le pion est déjà selectionner 
        if (updateSelect && (restart == "no")) {
            // console.log('toto')
            pion.classList.remove(`t-pion`)
        }
        //Sinon ajouter la class
        else {
            pion.classList.add(`t-pion`)
        }
        return bool = false
    })
}

//Selectionner la case de déplacement 
function selectCase(caseBlock) {
    //Au click sur une case

    caseBlock.addEventListener('click', () => {
        // console.log(caseBlock)
        let checkEmpty = caseBlock.querySelector('.pion-player') //Vérifier qu'il n'y est pas déjà un pion
        let pionDelete = blockGame.querySelector('.t-pion') //Récupéré le pion selectionner
        if (pionDelete !== null) {
            let colorPion = pionDelete.className
            colorPion = colorPion.indexOf("pion-player-black")

            let parentPion = pionDelete.parentElement //Récupère la case du pion selectionner 
            let positionPionX = parseInt(parentPion.dataset.positionX) // Récupère la position du pion selectionner
            let positionPionY = parseInt(parentPion.parentElement.dataset.positionY)
            let parentCase = caseBlock.parentElement
            if (checkEmpty == null) { //Si pas de pion sur la case

                let checkDistanceX = parseInt(caseBlock.dataset.positionX)
                let checkDistanceY = parseInt(parentCase.dataset.positionY)
                //Vérifie si le Pion est noir

                let length = 10

                if (colorPion > 0) {

                    if (player == "black" && checkDistanceY == 1) {
                        pionDelete.setAttribute('class', 't-queen-black')
                        console.log("Une dame noir vien d'être crée")
                        let pionQueen = pionDelete.className.indexOf('.t-queen-black')
                        // console.log(pionQueen)
                        if (pionQueen !== null) {
                            let bottom
                            let top
                            let right
                            let left
                            let positionPionYCopy = positionPionY
                            let positionPionXCopy = positionPionX
                            let arrayChekBottomRight = []
                            let arrayChekBottomLeft = []
                            let arrayChekTopRight = []
                            let arrayChekTopLeft = []
                            let allChek = []
                            for (let d = 0; d < length; d++) {

                                bottom = (positionPionY++) + 1
                                right = (positionPionX++) + 1
                                top = (positionPionYCopy--) - 1
                                left = (positionPionXCopy--) - 1
                                let checkPionAllyBottom = document.querySelector(`[data-position-y = '${bottom}']`)
                                if (checkPionAllyBottom !== null) {
                                    let checkPionAllyBottomRight = checkPionAllyBottom.querySelector(`[data-position-x = '${right}']`)//Vérifie les case en diagonal Bas Droite
                                    arrayChekBottomRight.push(checkPionAllyBottomRight)

                                    let checkPionAllyBottomLeft = checkPionAllyBottom.querySelector(`[data-position-x = '${left}']`)//Vérifie les case en diagonal Bas Gauche
                                    arrayChekBottomLeft.push(checkPionAllyBottomLeft)
                                }
                                let checkPionAllyTop = document.querySelector(`[data-position-y = '${top}']`)
                                if (checkPionAllyTop !== null) {
                                    let checkPionAllyTopRight = checkPionAllyTop.querySelector(`[data-position-x = '${right}']`)//Vérifie les case en diagonal haut Droite
                                    arrayChekTopRight.push(checkPionAllyTopRight)

                                    let checkPionAllyTopLeft = checkPionAllyTop.querySelector(`[data-position-x = '${left}']`)//Vérifie les case en diagonal haut Gauche
                                    arrayChekTopLeft.push(checkPionAllyTopLeft)
                                }
                                if (checkDistanceY == bottom || checkDistanceY == top) {

                                    if (checkDistanceX == right || checkDistanceX == left) {
                                        allChek.push(arrayChekTopLeft)
                                        allChek.push(arrayChekTopRight)
                                        allChek.push(arrayChekBottomRight)
                                        allChek.push(arrayChekBottomLeft)

                                        let positionInitialX = parseInt(parentPion.dataset.positionX)
                                        let positionInitialY = parseInt(parentPion.parentElement.dataset.positionY)

                                        let checkDistanceXFacRight = positionInitialX + 2
                                        let checkDistanceXFacBottom = positionInitialY + 2
                                        let checkDistanceXFacLeft = positionInitialX - 2
                                        let checkDistanceXFacTop = positionInitialY - 2


                                        let middleDistanceX
                                        let middleDistanceY
                                        if (checkDistanceX > positionInitialX) {
                                            middleDistanceX = (checkDistanceXFacRight - positionInitialX) / 2 + positionInitialX
                                        }
                                        else {
                                            middleDistanceX = (checkDistanceXFacLeft - positionInitialX) / 2 + positionInitialX
                                        }
                                        if (checkDistanceY > positionInitialY) {
                                            middleDistanceY = (checkDistanceXFacBottom - positionInitialY) / 2 + positionInitialY

                                        }
                                        else {
                                            middleDistanceY = (checkDistanceXFacTop - positionInitialY) / 2 + positionInitialY

                                        }
                                        console.log((checkDistanceY - positionInitialY) - 1)
                                        console.log(checkDistanceY)
                                        let numberLoop = (checkDistanceY - positionInitialY) - 1

                                        if (numberLoop < 1) {
                                            numberLoop = (positionInitialY - checkDistanceY) - 1

                                            if (numberLoop <= 0) {
                                                numberLoop = 1
                                            }
                                        }

                                        let pionBroad
                                        let pionAlly = 0
                                        let pionEnnemi = 0
                                        for (let l = 0; l < numberLoop; l++) {
                                            let mutipleMiddle = document.querySelector(`[data-position-y = '${middleDistanceY}']`)
                                            let casePositionMiddle = mutipleMiddle.querySelector(`[data-position-x = '${middleDistanceX}']`)
                                            if (middleDistanceX > positionInitialX) {
                                                middleDistanceX++
                                            }
                                            else {
                                                middleDistanceX--
                                            }
                                            if (middleDistanceY > positionInitialY) {
                                                middleDistanceY++
                                            }
                                            else {
                                                middleDistanceY--
                                            }
                                            // console.log(pionAlly)
                                            // console.log(casePositionMiddle.querySelector('.pion-player-white'))
                                            if (casePositionMiddle.querySelector('.pion-player-black') !== null) {
                                                pionAlly = 1


                                            }

                                            if (casePositionMiddle.querySelector('.pion-player-white') !== null) {
                                                pionEnnemi++
                                                pionBroad = casePositionMiddle.querySelector('.pion-player')

                                            }

                                        }
                                        if (pionEnnemi > 1 && pionAlly == 0) {
                                            // console.log('nope')
                                            return
                                        }
                                        else if (pionEnnemi == 1 && pionAlly !== 0) {
                                            return
                                        }
                                        else if (pionEnnemi == 1) {
                                            // console.log('rere')
                                            pionDelete.remove()
                                            pionBroad.remove()    //Supprimer le pion selectionner
                                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner

                                            let chekNewDistanceShiftX = parseInt(caseBlock.dataset.positionX)
                                            let chekNewDistanceShiftY = parseInt(caseBlock.parentElement.dataset.positionY)
                                            let newBottom = (chekNewDistanceShiftY) + 1
                                            let newTop = (chekNewDistanceShiftY) - 1
                                            let newRight = (chekNewDistanceShiftX) + 1
                                            let newLeft = (chekNewDistanceShiftX) - 1
                                            let newCasRightX
                                            let newCasLeftX
                                            let newArrayAll = []
                                            let newArrayTopRight = []
                                            let newArrayTopLeft = []
                                            let newArrayBottomRight = []
                                            let newArrayBottomLeft = []
                                            for (let curl = 0; curl < 10; curl++) {

                                                console.log(curl)
                                                let newCaseBlockBottomY = blockGame.querySelector(`[data-position-y = '${newBottom}']`)

                                                if (newCaseBlockBottomY !== null) {
                                                    newCasRightX = newCaseBlockBottomY.querySelector(`[data-position-x = '${newRight}']`)
                                                    newArrayBottomRight.push(newCasRightX)
                                                    newCasLeftX = newCaseBlockBottomY.querySelector(`[data-position-x = '${newLeft}']`)
                                                    newArrayBottomLeft.push(newCasLeftX)


                                                }
                                                let newCaseBlockTopY = blockGame.querySelector(`[data-position-y = '${newTop}']`)
                                                if (newCaseBlockTopY !== null) {
                                                    newCasRightX = newCaseBlockTopY.querySelector(`[data-position-x = '${newRight}']`)
                                                    newArrayTopRight.push(newCasRightX)
                                                    newCasLeftX = newCaseBlockTopY.querySelector(`[data-position-x = '${newLeft}']`)
                                                    newArrayTopLeft.push(newCasLeftX)


                                                }

                                                if (newCaseBlockTopY == null && newCaseBlockBottomY == null) {
                                                    newArrayAll.push(newArrayBottomRight)
                                                    newArrayAll.push(newArrayBottomLeft)
                                                    newArrayAll.push(newArrayTopRight)
                                                    newArrayAll.push(newArrayTopLeft)
                                                    for (let n = 0; n < newArrayAll.length; n++) { // Boucle sur chaque diagonale
                                                        for (let m = 0; m < newArrayAll[n].length; m++) { // Boucle sur chaque case de la diagonale
                                                            if (newArrayAll[n][m] != null) {    //Si la case est vide
                                                                if (newArrayAll[n][m].querySelector('.pion-player-white') !== null) { // Vérifier qu'il y est un pion adverse

                                                                    if (newArrayAll[n][m + 1] == undefined || newArrayAll[n][m + 1] == null) {

                                                                    }
                                                                    else {
                                                                        if (newArrayAll[n][m + 1].querySelector('.pion-player-white') == null) { // Vérifier que la case d'après soit vide 
                                                                            restart = "yes"
                                                                            pionEnnemi = 0
                                                                            return
                                                                        }
                                                                        else if (newArrayAll[n][m + 1].querySelector('.pion-player-white') == undefined) {


                                                                        }
                                                                    }


                                                                }
                                                            }
                                                        }

                                                        if (n + 1 == newArrayAll.length) {
                                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                                            player = "white";
                                                            restart = "no"
                                                            pionEnnemi = 0
                                                            return
                                                        }


                                                    }

                                                }

                                                newTop--
                                                newRight++
                                                newBottom++
                                                newLeft--
                                            }


                                        }
                                        else if (pionAlly == 0) {
                                            // console.log('popo')
                                            pionDelete.remove()     //Supprimer le pion selectionner
                                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                            player = "black";

                                        }

                                    }
                                }
                            }
                        }

                    }

                    if (positionPionY - 1 == checkDistanceY) {

                        //Vérifier déplacement de 1
                        if ((checkDistanceX == positionPionX + 1) || (checkDistanceX == positionPionX - 1)) {
                            pionDelete.remove()     //Supprimer le pion selectionner
                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                            player = "white";
                        }
                    }
                    //Manger

                    if (positionPionY + 2 == checkDistanceY || positionPionY - 2 == checkDistanceY) {   //Si mouvement de 2 sur l'axe Y
                        if ((checkDistanceX == positionPionX + 2) || (checkDistanceX == positionPionX - 2)) {   //Si mouvement de 2 sur l'axe X
                            let middleDistanceX = (checkDistanceX - positionPionX) / 2 + positionPionX
                            let middleDistanceY = (checkDistanceY - positionPionY) / 2 + positionPionY
                            let casePostionX = document.querySelector(`[data-position-y = '${middleDistanceY}']`)
                            let casePositionMiddle = casePostionX.querySelector(`[data-position-x = '${middleDistanceX}']`)
                            let pionBroad = casePositionMiddle.querySelector('.pion-player')
                            if (pionBroad !== null) {    //Vérifier si pion 
                                let pionEnnemi = pionBroad.className.indexOf('pion-player-white')
                                if (pionEnnemi > 0) { // Vérifie si pion Ennemi
                                    pionDelete.remove()     //Supprimer le pion selectionner
                                    pionBroad.remove()
                                    caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                                    countWhitePion--
                                    console.log(countWhitePion)
                                    let countCaseVerif = 4
                                    let checkLeftX = checkDistanceX - 2

                                    let checkRightX = checkDistanceX + 2

                                    let checkTopY = checkDistanceY - 2

                                    let checkBottomY = checkDistanceY + 2

                                    //Position Haut gauche 

                                    let checkPositionTopY = document.querySelector(`[data-position-y = '${checkTopY}']`)

                                    let checkPositionTopLeft = checkPositionTopY.querySelector(`[data-position-x = '${checkLeftX}']`)
                                    //Position Haut droite
                                    let checkPositionTopRight = checkPositionTopY.querySelector(`[data-position-x = '${checkRightX}']`)

                                    //Position Bas Gauche
                                    let checkPositionBottomY = document.querySelector(`[data-position-y = '${checkBottomY}']`)
                                    let checkPositionBottomLeft = checkPositionBottomY.querySelector(`[data-position-x = '${checkLeftX}']`)
                                    //Position Bas Droite
                                    let checkPositionBottomRight = checkPositionBottomY.querySelector(`[data-position-x = '${checkRightX}']`)
                                    // 
                                    let arrayParent = [checkPositionTopLeft, checkPositionTopRight, checkPositionBottomLeft, checkPositionBottomRight]
                                    for (caseVerif of arrayParent) {

                                        if (caseVerif !== null) {
                                            let childPion = caseVerif.querySelector('.pion-player')

                                            if (childPion == null) {

                                                let chekNewDistanceX = parseInt(caseVerif.dataset.positionX)
                                                let chekNewDistanceY = parseInt(caseVerif.parentElement.dataset.positionY)

                                                let middleDistanceX = ((chekNewDistanceX - 2) - (checkDistanceX - 2)) / 2 + (checkDistanceX)
                                                let middleDistanceY = ((chekNewDistanceY + 2) - (checkDistanceX + 2)) / 2 + (checkDistanceX)
                                                let caseVerifMiddle = document.querySelector(`[data-position-y = '${middleDistanceX}']`)
                                                let caseMiddle = caseVerifMiddle.querySelector(`[data-position-x = '${middleDistanceY}']`)


                                                if (caseMiddle !== null && caseMiddle.querySelector('.pion-player') !== null) {
                                                    let pionBroad = caseMiddle.querySelector('.pion-player')
                                                    if (pionBroad !== null) {    //Vérifier si pion 

                                                        let pionEnnemi = pionBroad.className.indexOf('pion-player-white')

                                                        if (pionEnnemi > 0) { // Vérifie si pion Ennemi
                                                            console.log(countCaseVerif)
                                                            restart = "yes"
                                                            countCaseVerif -= countCaseVerif
                                                            console.log(countCaseVerif)
                                                        }

                                                    }

                                                }
                                            }
                                            else {
                                                countCaseVerif--

                                            }
                                        }
                                        else {
                                            countCaseVerif -= 2
                                        }
                                        console.log(countCaseVerif)
                                        if (countCaseVerif <= 1) {
                                            console.log('tutu')
                                            restart = "no"
                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                            player = "white";

                                        }

                                    }
                                }
                                else {

                                    restart = "no"
                                    pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                    player = "white";
                                    return;

                                }
                            }
                        }

                    }
                }

                else {
                    // console.log(pionDelete)
                    // pionDelete.classList.add('t-queen-white')
                    if (player == "white" && checkDistanceY == 9) {
                        pionDelete.classList.add('class', 't-queen-white')
                        console.log("Une dame blanche vien d'être crée")
                        let pionQueen = pionDelete.className.indexOf('.t-queen-white')
                        // console.log(pionQueen)
                        if (pionQueen !== null) {
                            let bottom
                            let top
                            let right
                            let left
                            let positionPionYCopy = positionPionY
                            let positionPionXCopy = positionPionX
                            let arrayChekBottomRight = []
                            let arrayChekBottomLeft = []
                            let arrayChekTopRight = []
                            let arrayChekTopLeft = []
                            let allChek = []
                            for (let d = 0; d < length; d++) {

                                bottom = (positionPionY++) + 1
                                right = (positionPionX++) + 1
                                top = (positionPionYCopy--) - 1
                                left = (positionPionXCopy--) - 1
                                let checkPionAllyBottom = document.querySelector(`[data-position-y = '${bottom}']`)
                                if (checkPionAllyBottom !== null) {
                                    let checkPionAllyBottomRight = checkPionAllyBottom.querySelector(`[data-position-x = '${right}']`)//Vérifie les case en diagonal Bas Droite
                                    arrayChekBottomRight.push(checkPionAllyBottomRight)

                                    let checkPionAllyBottomLeft = checkPionAllyBottom.querySelector(`[data-position-x = '${left}']`)//Vérifie les case en diagonal Bas Gauche
                                    arrayChekBottomLeft.push(checkPionAllyBottomLeft)
                                }
                                let checkPionAllyTop = document.querySelector(`[data-position-y = '${top}']`)
                                if (checkPionAllyTop !== null) {
                                    let checkPionAllyTopRight = checkPionAllyTop.querySelector(`[data-position-x = '${right}']`)//Vérifie les case en diagonal haut Droite
                                    arrayChekTopRight.push(checkPionAllyTopRight)

                                    let checkPionAllyTopLeft = checkPionAllyTop.querySelector(`[data-position-x = '${left}']`)//Vérifie les case en diagonal haut Gauche
                                    arrayChekTopLeft.push(checkPionAllyTopLeft)
                                }
                                if (checkDistanceY == bottom || checkDistanceY == top) {

                                    if (checkDistanceX == right || checkDistanceX == left) {
                                        allChek.push(arrayChekTopLeft)
                                        allChek.push(arrayChekTopRight)
                                        allChek.push(arrayChekBottomRight)
                                        allChek.push(arrayChekBottomLeft)
                                        // console.log(arrayChekBottomRight)
                                        // console.log(allChek[2].length)
                                        let positionInitialX = parseInt(parentPion.dataset.positionX)
                                        let positionInitialY = parseInt(parentPion.parentElement.dataset.positionY)
                                        // console.log(positionInitialX)
                                        // console.log(positionInitialY)
                                        let checkDistanceXFacRight = positionInitialX + 2
                                        let checkDistanceXFacBottom = positionInitialY + 2
                                        let checkDistanceXFacLeft = positionInitialX - 2
                                        let checkDistanceXFacTop = positionInitialY - 2

                                        // console.log(checkDistanceX)
                                        // console.log(checkDistanceY)
                                        let middleDistanceX
                                        let middleDistanceY
                                        if (checkDistanceX > positionInitialX) {
                                            middleDistanceX = (checkDistanceXFacRight - positionInitialX) / 2 + positionInitialX
                                        }
                                        else {
                                            middleDistanceX = (checkDistanceXFacLeft - positionInitialX) / 2 + positionInitialX
                                        }
                                        if (checkDistanceY > positionInitialY) {
                                            middleDistanceY = (checkDistanceXFacBottom - positionInitialY) / 2 + positionInitialY

                                        }
                                        else {
                                            middleDistanceY = (checkDistanceXFacTop - positionInitialY) / 2 + positionInitialY

                                        }

                                        let numberLoop = (checkDistanceY - positionInitialY) - 1

                                        if (numberLoop < 1) {
                                            numberLoop = (positionInitialY - checkDistanceY) - 1

                                            if (numberLoop <= 0) {
                                                numberLoop = 1

                                            }
                                        }

                                        let pionBroad
                                        let pionAlly = 0
                                        let pionEnnemi = 0
                                        for (let l = 0; l < numberLoop; l++) {
                                            let mutipleMiddle = document.querySelector(`[data-position-y = '${middleDistanceY}']`)
                                            let casePositionMiddle = mutipleMiddle.querySelector(`[data-position-x = '${middleDistanceX}']`)
                                            if (middleDistanceX > positionInitialX) {
                                                middleDistanceX++
                                            }
                                            else {
                                                middleDistanceX--
                                            }
                                            if (middleDistanceY > positionInitialY) {
                                                middleDistanceY++
                                            }
                                            else {
                                                middleDistanceY--
                                            }

                                            if (casePositionMiddle.querySelector('.pion-player-white') !== null) {

                                                pionAlly = 1


                                            }

                                            if (casePositionMiddle.querySelector('.pion-player-black') !== null) {
                                                pionEnnemi++
                                                pionBroad = casePositionMiddle.querySelector('.pion-player')

                                            }

                                        }
                                        if (pionEnnemi > 1 && pionAlly == 0) {
                                            return
                                        }
                                        else if (pionEnnemi == 1 && pionAlly !== 0) {
                                            return
                                        }
                                        else if (pionEnnemi == 1) {
                                            pionDelete.remove()
                                            pionBroad.remove()    //Supprimer le pion selectionner
                                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                                            countBlackPion -= 1
                                            let chekNewDistanceShiftX = parseInt(caseBlock.dataset.positionX)
                                            let chekNewDistanceShiftY = parseInt(caseBlock.parentElement.dataset.positionY)
                                            let newBottom = (chekNewDistanceShiftY) + 1
                                            let newTop = (chekNewDistanceShiftY) - 1
                                            let newRight = (chekNewDistanceShiftX) + 1
                                            let newLeft = (chekNewDistanceShiftX) - 1
                                            let newCasRightX
                                            let newCasLeftX
                                            let newArrayAll = []
                                            let newArrayTopRight = []
                                            let newArrayTopLeft = []
                                            let newArrayBottomRight = []
                                            let newArrayBottomLeft = []
                                            for (let curl = 0; curl < 10; curl++) {

                                                let newCaseBlockBottomY = blockGame.querySelector(`[data-position-y = '${newBottom}']`)

                                                if (newCaseBlockBottomY !== null) {
                                                    newCasRightX = newCaseBlockBottomY.querySelector(`[data-position-x = '${newRight}']`)
                                                    newArrayBottomRight.push(newCasRightX)
                                                    newCasLeftX = newCaseBlockBottomY.querySelector(`[data-position-x = '${newLeft}']`)
                                                    newArrayBottomLeft.push(newCasLeftX)


                                                }
                                                let newCaseBlockTopY = blockGame.querySelector(`[data-position-y = '${newTop}']`)
                                                if (newCaseBlockTopY !== null) {
                                                    newCasRightX = newCaseBlockTopY.querySelector(`[data-position-x = '${newRight}']`)
                                                    newArrayTopRight.push(newCasRightX)
                                                    newCasLeftX = newCaseBlockTopY.querySelector(`[data-position-x = '${newLeft}']`)
                                                    newArrayTopLeft.push(newCasLeftX)


                                                }
                                                if (newCaseBlockTopY == null && newCaseBlockBottomY == null) {
                                                    newArrayAll.push(newArrayBottomRight)
                                                    newArrayAll.push(newArrayBottomLeft)
                                                    newArrayAll.push(newArrayTopRight)
                                                    newArrayAll.push(newArrayTopLeft)
                                                    for (let n = 0; n < newArrayAll.length; n++) { // Boucle sur chaque diagonale
                                                        for (let m = 0; m < newArrayAll[n].length; m++) { // Boucle sur chaque case de la diagonale
                                                            if (newArrayAll[n][m] != null) {    //Si la case est vide
                                                                if (newArrayAll[n][m].querySelector('.pion-player-black') !== null) { // Vérifier qu'il y est un pion adverse
                                                                    if (newArrayAll[n][m + 1] == undefined || newArrayAll[n][m + 1] == null) {

                                                                    }
                                                                    else {
                                                                        if (newArrayAll[n][m + 1].querySelector('.pion-player-black') == null) { // Vérifier que la case d'après soit vide 
                                                                            console.log('yes manger encore ')
                                                                            restart = "yes"
                                                                            pionEnnemi = 0
                                                                            return
                                                                        }
                                                                        else if (newArrayAll[n][m + 1].querySelector('.pion-player-black') == undefined) {

                                                                        }
                                                                    }


                                                                }
                                                            }
                                                        }

                                                        if (n + 1 == newArrayAll.length) {
                                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                                            player = "black";
                                                            restart = "no"
                                                            pionEnnemi = 0
                                                            return
                                                        }


                                                    }

                                                }
                                                newTop--
                                                newRight++
                                                newBottom++
                                                newLeft--
                                            }



                                        }
                                        else if (pionAlly == 0) {
                                            // console.log('popo')
                                            pionDelete.remove()     //Supprimer le pion selectionner
                                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                            player = "black";

                                        }

                                    }
                                }
                            }
                        }
                    }
                    // console.log(pionDelete)
                    //Déplacement vers le bas
                    if (positionPionY + 1 == checkDistanceY) {
                        //Vérifier déplacement de 1
                        if ((checkDistanceX == positionPionX + 1) || (checkDistanceX == positionPionX - 1)) {
                            pionDelete.remove()     //Supprimer le pion selectionner
                            caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner
                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                            player = "black";
                        }
                    }
                    //Manger
                    else if (positionPionY + 2 == checkDistanceY || positionPionY - 2 == checkDistanceY) {   //Si mouvement de 2 sur l'axe Y
                        if ((checkDistanceX == positionPionX + 2) || (checkDistanceX == positionPionX - 2)) {   //Si mouvement de 2 sur l'axe X

                            let middleDistanceX = (checkDistanceX - positionPionX) / 2 + positionPionX
                            let middleDistanceY = (checkDistanceY - positionPionY) / 2 + positionPionY
                            let casePostionX = document.querySelector(`[data-position-y = '${middleDistanceY}']`)
                            let casePositionMiddle = casePostionX.querySelector(`[data-position-x = '${middleDistanceX}']`)
                            let pionBroad = casePositionMiddle.querySelector('.pion-player')
                            if (pionBroad !== null) {    //Vérifier si pion 
                                let pionEnnemi = pionBroad.className.indexOf('pion-player-black')
                                if (pionEnnemi > 0) { // Vérifie si pion Ennemi
                                    pionDelete.remove()     //Supprimer le pion selectionner
                                    pionBroad.remove()
                                    caseBlock.appendChild(pionDelete) //Recrée le pion sur la case selectionner

                                    countBlackPion--
                                    console.log(countBlackPion)
                                    let countCaseVerif = 3
                                    let checkLeftX = checkDistanceX - 2

                                    let checkRightX = checkDistanceX + 2

                                    let checkTopY = checkDistanceY - 2

                                    let checkBottomY = checkDistanceY + 2

                                    //Position Haut gauche 

                                    let checkPositionTopY = document.querySelector(`[data-position-y = '${checkTopY}']`)

                                    let checkPositionTopLeft = checkPositionTopY.querySelector(`[data-position-x = '${checkLeftX}']`)
                                    //Position Haut droite
                                    let checkPositionTopRight = checkPositionTopY.querySelector(`[data-position-x = '${checkRightX}']`)

                                    //Position Bas Gauche
                                    let checkPositionBottomY = document.querySelector(`[data-position-y = '${checkBottomY}']`)
                                    let checkPositionBottomLeft = checkPositionBottomY.querySelector(`[data-position-x = '${checkLeftX}']`)
                                    //Position Bas Droite
                                    let checkPositionBottomRight = checkPositionBottomY.querySelector(`[data-position-x = '${checkRightX}']`)
                                    // 
                                    let arrayParent = [checkPositionTopLeft, checkPositionTopRight, checkPositionBottomLeft, checkPositionBottomRight]
                                    for (caseVerif of arrayParent) {

                                        if (caseVerif !== null) {
                                            let childPion = caseVerif.querySelector('.pion-player')

                                            if (childPion == null) {

                                                let chekNewDistanceX = parseInt(caseVerif.dataset.positionX)
                                                let chekNewDistanceY = parseInt(caseVerif.parentElement.dataset.positionY)

                                                let middleDistanceX = ((chekNewDistanceX - 2) - (checkDistanceX - 2)) / 2 + (checkDistanceX)
                                                let middleDistanceY = ((chekNewDistanceY + 2) - (checkDistanceX + 2)) / 2 + (checkDistanceX)
                                                let caseVerifMiddle = document.querySelector(`[data-position-y = '${middleDistanceX}']`)
                                                let caseMiddle = caseVerifMiddle.querySelector(`[data-position-x = '${middleDistanceY}']`)
                                                console.log(middleDistanceX)
                                                console.log(middleDistanceY)

                                                if (caseMiddle !== null && caseMiddle.querySelector('.pion-player') !== null) {
                                                    console.log(caseMiddle)
                                                    let pionBroad = caseMiddle.querySelector('.pion-player')
                                                    if (pionBroad !== null) {    //Vérifier si pion 
                                                        console.log(pionBroad)

                                                        let pionEnnemi = pionBroad.className.indexOf('pion-player-black')

                                                        if (pionEnnemi > 0) { // Vérifie si pion Ennemi

                                                            restart = "yes"
                                                            countCaseVerif = 3

                                                        }

                                                    }

                                                }

                                            }
                                            else {
                                                countCaseVerif--

                                            }
                                        }
                                        else {
                                            countCaseVerif -= 2
                                        }
                                        console.log(countCaseVerif)

                                        if (countCaseVerif <= 1) {
                                            console.log('tutu')
                                            restart = "no"
                                            pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                            player = "black";

                                        }

                                    }


                                }
                                else {

                                    restart = "no"
                                    pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                    player = "black";
                                    return;

                                }
                            }
                            else {
                                restart = "no"
                                pionDelete.classList.remove(`t-pion`)   //Supprimer la selection du pion 
                                player = "black";
                                return;
                            }
                        }

                    }

                }



            }

        }
        else {
            return
        }


    })
    // console.log(countWhitePion)
}