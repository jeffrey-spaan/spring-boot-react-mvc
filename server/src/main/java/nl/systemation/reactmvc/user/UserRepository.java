package nl.systemation.reactmvc.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @Author Jeffrey Spaan
 * @Company Systemation
 * @Created on Thursday, August 27th, 2020
 */

@Repository // Mark this Java interface as the repository
public interface UserRepository extends JpaRepository<User, Long> {
}
