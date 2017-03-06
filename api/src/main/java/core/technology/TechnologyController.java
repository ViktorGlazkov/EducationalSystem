package core.technology;

import core.technology.service.TechnologyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/technology")
public class TechnologyController {

    @Autowired
    TechnologyService technologyService;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Technology> getTechnologies() {
        return technologyService.getTechnologies();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createTechnology(@RequestBody Technology technology) {
        technologyService.createTechnology(technology);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Technology readTechnology(@PathVariable Long id) {
        return technologyService.getTechnology(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void updateTechnology(@RequestBody Technology technology) {
        technologyService.updateTechnology(technology);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deleteTechnology(@PathVariable Long id) {
        technologyService.deleteTechnology(id);
    }
}
