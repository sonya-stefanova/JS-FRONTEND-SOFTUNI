function editElement(ref, match, replacer) {
    const matchingEl = new RegExp(match, "g");
    const result = ref.textContent.replace(matcher, replacer);  
    ref.textContent = result;
}