$(function(){ // hent kundeinformasjon fra serveren basert på kunde-IDen som er tilstede i URLen.
    const id = window.location.search.substring(1);
    const url = "/hentEnKunde?" + id
    $.get(url,function(kunde){
        console.log("kunde id"+url +id +kunde.id)
        $("#id").val(kunde.id); // ID-en til kunden må inkluderes i skjemaet i HTML-dokumentet.
        $("#film").val(kunde.film);
        $("#antall").val(kunde.antall);
        $("#fornavn").val(kunde.fornavn);
        $("#etternavn").val(kunde.etternavn);
        $("#telefon").val(kunde.telefon);
        $("#email").val(kunde.email);
    });
});


function endreKunden() {
    const kunde = {
        id : $("#id").val(), // ID-en til kunden må inkluderes når man sender data til serveren for å oppdatere kundeinformasjonen, så serveren vet hvilken kunde som skal endres.
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        email : $("#email").val(),
    }
    $.post("/endreEnKunde",kunde,function(){
        window.location.href = 'index.html';
    });
}
