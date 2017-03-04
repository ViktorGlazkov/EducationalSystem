package core.technology.service;

import core.technology.Technology;
import core.technology.TechnologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyServiceImpl implements TechnologyService {

    @Autowired
    TechnologyRepository technologyRepository;

    @Override
    public List<Technology> getTechnologies() {
        return technologyRepository.findAll();
    }

    @Override
    public void createTechnology(Technology technology) {
        technologyRepository.save(technology);
    }

    @Override
    public Technology getTechnology(Long id) {
        return technologyRepository.findOne(id);
    }

    @Override
    public void updateTechnology(Technology technology) {
        technologyRepository.save(technology);
    }

    @Override
    public void deleteTechnology(Long id) {
        technologyRepository.delete(id);
    }
}