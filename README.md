# Info om innlevering - Oblig 3:
- Student: Aurora Isabel Toset Bjerke
- OsloMET-brukernavn: aubje3225
- Github-brukernavn: aurbje
- Youtube-link: https://youtu.be/-lggNR8gCGs
- GitHub-Repo Link: [https://github.com/aurbje/oblig-3.git](https://github.com/aurbje/Webprog_Oblig3.git)

## Kort beskrivelse av applikasjonen: Kinobillettbestilling
Denne applikasjonen fungerer som et billettbestillingssystem der brukerne kan
velge filmer, angi antall billetter og legge til personlig informasjon som navn,
telefonnummer og e-postadresse. Når brukerern legger inn all nødvendig
informasjon, opprettes en ny rad i systemet som viser detaljene for bestillingen.

Ved feil informasjon i input-feltene vil brukeren få beskjed om at informasjonen
er påkrevd. I tillegg er det implementert validering, så brukeren ikke kan legge
inn bokstaver i telefonnummerfeltet og heller ikke bestille antall billetter under
0 eller over 50. For å slette bestillingsradene kan brukeren trykke på en egen
knapp nederst i applikasjonen, som fjerner alle de eksisterende radene med
informasjon.

Applikasjonen er nå omformet slik at den bruker Spring Web for å håndtere dataene.
I tillegg er frontenden av applikasjonen, representert av index.html, stilisert ved hjelp
av Bootstrap. Kommunikasxjonen mellom frontend og backend skjer ved bruk av
GET- og POST-metoder for å hente og sende data.

## Hvordan bruke nettsiden:

1. Åpne index.html i en nettleser.
2. Velg en film, fyll ut antall billetter, fornavn, etternavn, telefonnummer og e-post,
   og klikk deretter på "Kjøp billett" for å registrere billetten.
4. Alle billetter blir vist under "Alle billetter".
5. For å slette alle billetter, klikk på "Slett alle billetter".
