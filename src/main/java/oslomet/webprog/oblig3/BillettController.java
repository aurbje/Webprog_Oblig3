package oslomet.webprog.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    @Autowired
    private KundeRep rep;

    @PostMapping("/lagre")
    public void lagreKunde(Kunde innKunde) {
        rep.lagreKunde(innKunde);
    }

    @GetMapping("/hentAlle")
    public List<Kunde> hentAlle() {
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlleKunder();
    }

    @GetMapping("/hentEnKunde")
    public Kunde hentEnKunde(int id){
        return rep.hentEnKunde(id);
    }
    @PostMapping("/endreEnKunde")
    public void endreEnKunde(Kunde kunde) {
        rep.endreEnKunde(kunde);
    }

    @GetMapping("/slettEnKunde")
    public void slettEnKunde(int id) {
        rep.slettEnKunde(id);
    }
}