package core.language;

import core.language.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LanguageController {
    @Autowired
    LanguageService languageService;

    @RequestMapping(value = {"/languages"}, method = RequestMethod.GET)
    public List<Language> getLanguages() {
        return languageService.getLanguages();
    }

    @RequestMapping(value = {"/language"}, method = RequestMethod.POST)
    public void createLanguage(@RequestBody Language language) {
        languageService.createLanguage(language);
    }

    @RequestMapping(value = {"/language/{id}"}, method = RequestMethod.GET)
    public Language readLanguage(@PathVariable Long id) {
        return languageService.getLanguage(id);
    }

    @RequestMapping(value = {"/language"}, method = RequestMethod.PUT)
    public void updateLanguage(@RequestBody Language language) {
        languageService.updateLanguage(language);
    }

    @RequestMapping(value = {"/language/{id}"}, method = RequestMethod.DELETE)
    public void deleteLanguage(@PathVariable Long id) {
        languageService.deleteLanguage(id);
    }
}
