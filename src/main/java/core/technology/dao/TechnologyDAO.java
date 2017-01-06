package core.technology.dao;

import core.technology.Technology;

import java.util.List;

public interface TechnologyDAO {
    List<Technology> getTechnologys();

    void createTechnology(Technology technology);

    Technology getTechnology(Long id);

    void updateTechnology(Technology technology);

    void deleteTechnology(Long id);
}
