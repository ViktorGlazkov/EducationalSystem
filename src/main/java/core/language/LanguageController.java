package core.language;

import core.language.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/languages")
public class LanguageController {
    @Autowired
    LanguageService languageService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Language> getLanguages() {
        return languageService.getLanguages();
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
