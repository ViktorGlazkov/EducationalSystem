package core.language;

import core.language.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/language")
public class LanguageController {

    @Autowired
    LanguageService languageService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getLanguages() {
        return new ResponseEntity(languageService.getLanguages(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createLanguage(@RequestBody Language language) {
        languageService.createLanguage(language);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Language readLanguage(@PathVariable Long id) {
        return languageService.getLanguage(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void updateLanguage(@RequestBody Language language) {
        languageService.updateLanguage(language);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deleteLanguage(@PathVariable Long id) {
        languageService.deleteLanguage(id);
    }
}
