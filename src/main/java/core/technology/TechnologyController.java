package core.technology;

import core.technology.service.TechnologyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TechnologyController {
    @Autowired
    TechnologyService technologyService;

    @RequestMapping(value = {"/", "/technologys"}, method = RequestMethod.GET)
    @ResponseBody
    public List<Technology> getTechnologys() {
        return technologyService.getTechnologys();
    }

    @RequestMapping(value = {"/technology"}, method = RequestMethod.POST)
    public void createTechnology(@RequestBody Technology technology) {
        technologyService.createTechnology(technology);
    }

    @RequestMapping(value = {"/technology/{id}"}, method = RequestMethod.GET)
    public void readTechnology(@PathVariable Long id) {
        technologyService.getTechnology(id);
    }

    @RequestMapping(value = {"/technology"}, method = RequestMethod.PUT)
    public void updateTechnology(@RequestBody Technology technology) {
        technologyService.updateTechnology(technology);
    }

    @RequestMapping(value = {"/technology/{id}"}, method = RequestMethod.DELETE)
    public void deleteTechnology(@PathVariable Long id) {
        technologyService.deleteTechnology(id);
    }
}
