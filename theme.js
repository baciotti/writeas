var topP = document.createElement("p");
topP.innerHTML = '<hr><center><form method="get" id="search" action="https://duckduckgo.com/"><input type="hidden" name="sites" value="https://baciotti.com/"><input type="hidden" name="k8" value="#444444"><input type="hidden" name="k9" value="#2988bc"><input type="hidden" name="kt" value="h"><input class="field" type="text" name="q" maxlength="255" placeholder="Pesquisar nesse site..."><input type="submit" value="Search" style="display: none;"></form></center>';
var cont = document.getElementById("wrapper");
if (cont !== null) {
    // Add to blog index and tag pages
    cont.appendChild(topP);
} else {
    // Add to individual blog post page
    cont = document.getElementById("post-body");
    cont.insertAdjacentHTML("afterend", topP.outerHTML);
}