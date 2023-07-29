package com.backend.PetApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.PetApp.model.Pet;
import com.backend.PetApp.service.PetService;
import com.fasterxml.jackson.databind.JsonNode;

@RestController
@RequestMapping("/api")
public class PetController {

	@Autowired
	private PetService petService;
	
//	TESTED
	@PostMapping("/add-pet-info")
	public String addPetInfo(@RequestBody JsonNode pet) {
		return petService.addPetInfo(pet);
	}
	
	@GetMapping("/all-records")
	public List<Pet> getAllUsers() {
		return petService.getAllRecords();
	}
	
}
