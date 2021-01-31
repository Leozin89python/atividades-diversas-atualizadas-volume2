package Db;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

		private static Connection conexao = null;
			
			public static Connection abraConexao() {
				try {
					Properties propriedade = propriedades();
					String rede =  propriedade.getProperty("dburl");
					conexao = DriverManager.getConnection(rede,propriedade);
				}catch(SQLException e) {
					throw new DbException(e.getMessage());
				}
				return conexao;
			}
			
			
			public static void fechaConexao() {
				try {
					if(conexao != null) {
						conexao.close();
					}
				}catch(SQLException e) {
					throw new DbException(e.getMessage());
				}
			}
			
			
			public static Properties propriedades() {
				try {
					FileInputStream dados = new FileInputStream("db.properties");
					Properties propriedade = new Properties();
					propriedade.load(dados);
					return propriedade;
				}catch(IOException e) {
					throw new DbException(e.getMessage()); 
				}
			}
			
			
	}
