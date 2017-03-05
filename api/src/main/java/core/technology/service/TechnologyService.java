package core.technology.service;

import core.technology.Technology;

import java.util.List;

public interface TechnologyService {

    List<Technology> getTechnologies();

    void createTechnology(Technology technology);

    Technology getTechnology(Long id);

    void updateTechnology(Technology technology);

    void deleteTechnology(Long id);
}
