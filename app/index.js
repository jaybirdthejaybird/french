import "./theme.js";
//ṁḥāīūṛṅñḍṇṭṣś
const keys = [
    "m*",
    "h.",
    "a_",
    "i_",
    "u_",
    "r.",
    "n*",
    "n~",
    "d.",
    "n.",
    "t.",
    "s.",
    "s`"
];
const replaceMap = {
    "m*": { roman: "ṁ", type: "anusvāra", sound: "n in French word bon" },
    "h.": { roman: "ḥ", type: "visarga", sound: "final h sound. When at the end repeat the preceding vowel aḥ = aha" },
    "a_": { roman: "ā", type: "vowel", sound: "a in far" },
    "i_": { roman: "ī", type: "vowel", sound: "ee in green" },
    "u_": { roman: "ū", type: "vowel", sound: "u in rule" },
    "r.": { roman: "ṛ", type: "vowel", sound: "ri in rim (roll tongue from ridge above teeth to roof of mouth)" },
    "n*": { roman: "ṅ", type: "guttural", sound: "n in sing" },
    "n~": { roman: "ñ", type: "palatal", sound: "n in canyon" },
    "d.": { roman: "ḍ", type: "cerebral", sound: "d in dove (tip of tongue on roof of mouth)" },
    "n.": { roman: "ṇ", type: "cerebral", sound: "n in nut (tip of tongue on roof of mouth)" },
    "t.": { roman: "ṭ", type: "cerebral", sound: "t in tub (tip of tongue on roof of mouth)" },
    "s.": { roman: "ṣ", type: "sibilant", sound: "sh in shine (tip of tongue on roof of mouth)" },
    "s`": { roman: "ś", type: "sibilant", sound: "s in sprechen (tip of tongue on teeth)" },
};
function keyUp(e) {
    let matches = 0;
    const textArea = e.target;
    const selectionStart = textArea.selectionStart;
    let value = textArea.value;
    value = value.replace(/m\*|n\*|a_|i_|u_|n~|s`|d\.|h\.|n\.|r\.|s\.|t\./g, (char) => {
        matches++;
        return replaceMap[char].roman || char;
    });
    textArea.value = value;
    textArea.selectionStart = selectionStart - matches;
    textArea.selectionEnd = textArea.selectionStart;
}
function insertRoman(e) {
    const cell = e.target;
    const textArea = document.getElementById("sanskrit");
    textArea.setRangeText(cell.textContent);
    textArea.focus();
}
function setupLegend() {
    const table = document.getElementById("legend");
    document.getElementById("legendData").innerHTML = "";
    keys.forEach((key) => {
        const row = table.insertRow();
        const roman = row.insertCell();
        const keyStroke = row.insertCell();
        const type = row.insertCell();
        const sound = row.insertCell();
        roman.textContent = replaceMap[key].roman;
        roman.style.textAlign = "right";
        roman.style.cursor = "pointer";
        roman.onclick = insertRoman;
        keyStroke.textContent = key;
        type.textContent = replaceMap[key].type;
        type.style.textAlign = "right";
        sound.textContent = replaceMap[key].sound;
    });
}
function toggleLegend() {
    const table = document.getElementById("legend");
    table.style.display = table.style.display === "none" ? "block" : "none";
}
function positionEditorHint() {
    const hint = document.getElementById("editorHint");
    const textArea = document.getElementById("sanskrit");
    hint.style.top = `${textArea.offsetTop}px`;
    hint.style.left = `${textArea.offsetLeft + 20}px`;
}
function toggleEditorHint(e) {
    const hint = document.getElementById("editorHint");
    const textArea = document.getElementById("sanskrit");
    const shouldDisplay = textArea.value.trim() === "";
    if (shouldDisplay) {
        hint.style.display = textArea === document.activeElement ? "none" : "block";
    }
    else {
        hint.style.display = "none";
    }
    positionEditorHint();
}
function navigateToGitHub() {
    window.open("https://github.com/markdavich/sanskrit-lite.git", "_blank");
}
(() => {
    setupLegend();
    const textArea = document.getElementById("sanskrit");
    textArea.onblur = toggleEditorHint;
    textArea.onfocus = toggleEditorHint;
    textArea.onkeyup = keyUp;
    new ResizeObserver(positionEditorHint).observe(textArea);
    document.getElementById("legendToggle").onclick = toggleLegend;
    document.onresize = positionEditorHint;
    document.getElementById("editorHint").onclick = () => { textArea.focus(); };
    document.getElementById("appTitle").onclick = navigateToGitHub;
    positionEditorHint();
})();
