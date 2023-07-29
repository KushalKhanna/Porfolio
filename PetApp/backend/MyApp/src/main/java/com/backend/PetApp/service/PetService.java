package com.backend.PetApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.PetApp.model.Pet;
import com.backend.PetApp.repository.PetRepository;
import com.fasterxml.jackson.databind.JsonNode;

@Service
public class PetService {

	@Autowired
	private PetRepository petRepository;
	
	private String cleanString(String input) {
		return input.replaceAll("^\"|\"$", "");
	}
	
	public String addPetInfo(@RequestBody JsonNode pet) {
		try {
//			objectMapper.writeValueAsString(user.get(u.getUsername()));
			Pet p = new Pet();
			p.setVetName(cleanString(pet.get("vetName").toString()));
			p.setVisitPurpose(cleanString(pet.get("visitPurpose").toString()));
			p.setDate(cleanString(pet.get("date").toString()));
			if(pet.get("symptoms") != null) {
				p.setSymptoms(cleanString(pet.get("symptoms").toString()));				
			}
			Pet addedPetInfo = petRepository.save(p);
			return "Pet information recorded successfully!";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Some error occurred!";
	}
	
	public List<Pet> getAllRecords() {
		List<Pet> allRecords;
		try {
			allRecords = petRepository.findAll();
			return allRecords;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<>();
	}
	
}
