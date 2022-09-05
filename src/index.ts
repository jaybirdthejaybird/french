
import "./lib/Theme.js"
let fileName = ""
//ṁḥāīūṛṅñḍṇṭṣś

/*
é
É à À è È ù Ù â Â ê Ê î Î ô Ô û Û ë Ë ï Ï ü Ü ç Ç œ Œ « » €
*/

const
keys = [
    "e'",
    "E'",
    "a`",
    "A`",
    "e`",
    "E`",
    "u`",
    "U`",
    "a^",
    "A^",
    "e^",
    "E^",
    "i^",
    "I^",
    "o^",
    "O^",
    "u^",
    "U^",
    "e:",
    "E:",
    "i:",
    "I:",
    "u:",
    "U:",
    "c,",
    "C,",
    "aae",
    "AAE",
    "<<",
    ">>",
    "$",
]

const replaceMap = {
    "e'": {french: "é", type: "", sound: ""}, 
    "E'": {french: "É", type: "", sound: ""},
    "a`": {french: "à", type: "", sound: ""},
    "A`": {french: "À", type: "", sound: ""},
    "e`": {french: "è", type: "", sound: ""},
    "E`": {french: "È", type: "", sound: ""},
    "u`": {french: "ù", type: "", sound: ""},
    "U`": {french: "Ù", type: "", sound: ""},
    "a^": {french: "â", type: "", sound: ""},
    "A^": {french: "Â", type: "", sound: ""},
    "e^": {french: "ê", type: "", sound: ""},
    "E^": {french: "Ê", type: "", sound: ""},
    "i^": {french: "î", type: "", sound: ""},
    "I^": {french: "Î", type: "", sound: ""},
    "o^": {french: "ô", type: "", sound: ""},
    "O^": {french: "Ô", type: "", sound: ""},
    "u^": {french: "û", type: "", sound: ""},
    "U^": {french: "Û", type: "", sound: ""},
    "e:": {french: "ë", type: "The e sound it Noel or ", sound: ""},
    "E:": {french: "Ë", type: "", sound: ""},
    "i:": {french: "ï", type: "", sound: ""},
    "I:": {french: "Ï", type: "", sound: ""},
    "u:": {french: "ü", type: "", sound: ""},
    "U:": {french: "Ü", type: "", sound: ""},
    "c,": {french: "ç", type: "", sound: ""},
    "C,": {french: "Ç", type: "", sound: ""},
    "aae": {french: "œ", type: "", sound: ""},
    "AAE": {french: "Œ", type: "", sound: ""},
    "<<": {french: "«", type: "", sound: ""},
    ">>": {french: "»", type: "", sound: ""},
    "$": {french: "€", type: "", sound: ""},
   
}

function keyDown(e: Event) {
    let matches = 0
    const textArea: HTMLTextAreaElement = (e.target as HTMLTextAreaElement)
    const selectionStart = textArea.selectionStart
    let value = textArea.value
    value = value.replace(/e'|E'|a`|A`|e`|E`|u`|U`|a\^|A\^|e\^|E\^|i\^|I\^|o\^|O\^|u\^|U\^|e:|E:|i:|I:|u:|U:|c,|C,|aae|AAE|<<|>>|\$/g, (char) => {
        matches++
        return replaceMap[char].french || char
    });
    textArea.value = value
    textArea.selectionStart = selectionStart - matches
    textArea.selectionEnd = textArea.selectionStart 
}

function insertFrench(e: Event) {
    const cell = e.target as HTMLTableCellElement
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement
    textArea.setRangeText(cell.textContent)
    textArea.focus()
    textArea.selectionStart = textArea.selectionStart + 1
}

function setupLegend() {
    const table = document.getElementById("legend") as HTMLTableElement
    document.getElementById("legendData").innerHTML = ""

    keys.forEach((key) => {
        const row = table.insertRow()
        const french = row.insertCell()
        const keyStroke = row.insertCell()
        const type = row.insertCell()
        const sound = row.insertCell()

        french.textContent = replaceMap[key].french
        french.style.textAlign = "right"
        french.style.cursor = "pointer"
        french.onclick = insertFrench

        keyStroke.textContent = key

        type.textContent = replaceMap[key].type
        type.style.textAlign = "right"

        sound.textContent = replaceMap[key].sound
    })
}

function toggleLegend() {
    const table = document.getElementById("legend") as HTMLTableElement
    table.style.display = table.style.display === "none"? "block" : "none"
}

function positionEditorHint() {
    const hint = document.getElementById("editorHint")
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement

    hint.style.top = `${textArea.offsetTop}px`
    hint.style.left = `${textArea.offsetLeft + 20}px`
}

function toggleEditorHint(e: Event) {
    const hint = document.getElementById("editorHint") 
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement
    const shouldDisplay = textArea.value.trim() === ""

    if (shouldDisplay) {
        hint.style.display = textArea === document.activeElement ? "none" : "block"
    } else {
        hint.style.display = "none"
    }

    positionEditorHint()
}

function navigateToGitHub() {
    window.open("https://github.com/jaybirdthejaybird/sanskrit-lite", "_blank")
}

function positionDownloadButton() {
    const download = document.getElementById("downloadText")
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement

    setTimeout(() => {
        download.style.top = `${textArea.offsetTop}px`
        download.style.left = `${textArea.offsetLeft + textArea.offsetWidth - download.clientWidth - 20}px`
    }, 10)

}

function textAreaMouseUp() {
    const download = document.getElementById("downloadText")
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement
    const shouldDisplay = textArea === document.activeElement && window.getSelection && window.getSelection().toString() !== ''
    download.style.display = shouldDisplay ? "block" : "none"
    fileName = shouldDisplay ? window.getSelection().toString() : ""
    positionDownloadButton()
}

function download(e: Event) {
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    element.setAttribute('download', `${fileName}.txt`);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }


// Immdiately invoked function expression (iife)
(() => {
    setupLegend()
    const textArea = document.getElementById("frenchTextArea") as HTMLTextAreaElement
    textArea.onblur = toggleEditorHint 
    textArea.onfocus = toggleEditorHint
    textArea.onkeyup = keyDown;
    textArea.onmouseup = textAreaMouseUp
    new ResizeObserver(positionEditorHint).observe(textArea)
    document.getElementById("legendToggle").onclick = toggleLegend
    document.onresize = positionEditorHint
    document.getElementById("editorHint").onclick = () => {textArea.focus()}
    document.getElementById("appTitle").onclick = navigateToGitHub
    document.getElementById("downloadText").onclick = download
    positionEditorHint()
})();

