package core.technology.service;

import core.technology.Technology;
import core.technology.dao.TechnologyDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyServiceImpl implements TechnologyService {
    @Autowired
    TechnologyDAO technologyDAO;

    @Override
    public List<Technology> getTechnologies() {
        return technologyDAO.getTechnologies();
    }

    @Override
    public void createTechnology(Technology technology) {
        technologyDAO.createTechnology(technology);
    }

    @Override
    public Technology getTechnology(Long id) {
        return technologyDAO.getTechnology(id);
    }

    @Override
    public void updateTechnology(Technology technology) {
        technologyDAO.updateTechnology(technology);
    }

    @Override
    public void deleteTechnology(Long id) {
        technologyDAO.deleteTechnology(id);
    }
}