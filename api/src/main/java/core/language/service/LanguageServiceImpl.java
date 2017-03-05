package core.language.service;

import core.language.Language;
import core.language.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {

    @Autowired
    LanguageRepository languageRepository;

    @Override
    public List<Language> getLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public void createLanguage(Language language) {
        languageRepository.save(language);
    }

    @Override
    public Language getLanguage(Long id) {
        return languageRepository.findOne(id);
    }

    @Override
    public void updateLanguage(Language language) {
        languageRepository.save(language);
    }

    @Override
    public void deleteLanguage(Long id) {
        languageRepository.delete(id);
    }
}