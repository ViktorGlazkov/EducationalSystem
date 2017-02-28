package core.language.dao;

import core.language.Language;

import java.util.List;

public interface LanguageDAO {
    List<Language> getLanguages();

    void createLanguage(Language language);

    Language getLanguage(Long id);

    void updateLanguage(Language language);

    void deleteLanguage(Long id);
}
