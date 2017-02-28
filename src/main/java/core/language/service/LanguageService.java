package core.language.service;

import core.language.Language;

import java.util.List;

public interface LanguageService {
    List<Language> getLanguages();

    void createLanguage(Language language);

    Language getLanguage(Long id);

    void updateLanguage(Language language);

    void deleteLanguage(Long id);
}
