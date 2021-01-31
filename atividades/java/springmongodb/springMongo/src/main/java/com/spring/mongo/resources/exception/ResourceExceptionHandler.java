package com.spring.mongo.resources.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.spring.mongo.service.exception.ObjectNotFoundException;

@ControllerAdvice
public class ResourceExceptionHandler extends RuntimeException{
				private static final long serialVersionUID = 1L;
		
				   
				
				@ExceptionHandler(ObjectNotFoundException.class)			   
				public ResponseEntity<StandardError> objectNotFound(ObjectNotFoundException e, HttpServletRequest request){
					
					HttpStatus status = 	HttpStatus.NOT_FOUND;
					StandardError err = new StandardError(System.currentTimeMillis(), status.value(), "Não encontrado!", e.getMessage(), request.getRequestURI());
					
					return 	ResponseEntity.status(status).body(err);
				}		
				
}
