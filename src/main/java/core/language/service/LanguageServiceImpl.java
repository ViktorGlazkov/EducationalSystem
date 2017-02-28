package core.language.service;

import core.language.Language;
import core.language.dao.LanguageDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {
    @Autowired
    LanguageDAO languageDAO;

    @Override
    public List<Language> getLanguages() {
        return languageDAO.getLanguages();
    }

    @Override
    public void createLanguage(Language language) {
        languageDAO.createLanguage(language);
    }

    @Override
    public Language getLanguage(Long id) {
        return languageDAO.getLanguage(id);
    }

    @Override
    public void updateLanguage(Language language) {
        languageDAO.updateLanguage(language);
    }

    @Override
    public void deleteLanguage(Long id) {
        languageDAO.deleteLanguage(id);
    }
}