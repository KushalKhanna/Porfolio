package com.backend.PetApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.PetApp.model.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer>{

}
