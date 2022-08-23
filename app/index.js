import "./theme.js";
// āīūśṣṛḥṅṭḍṇñṁ
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
document.getElementById("sanskrit").onkeyup = keyUp;
