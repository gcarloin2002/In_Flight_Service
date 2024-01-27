package backend;
import java.sql.*;

public class DatabaseManager {

    public static void main(String [] args)
    {

        Connection conn = null;
        try
        {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/in_flight_service", "ilhamaryawan", null);
            if(conn != null)
                System.out.println("OK");
            else
                System.out.println("Failed");
            
            DatabaseMetaData metaData = conn.getMetaData();

            // Specify the schema and type of object (in this case, "TABLE")
            String[] types = {"TABLE"};

            // Retrieve the list of tables
            ResultSet resultSet = metaData.getTables(null, null, "%", types);

            System.out.println("Tables in the database:");

            // Print the table names
            while (resultSet.next()) {
                String tableName = resultSet.getString("TABLE_NAME");
                System.out.println(tableName);
            }

            // Close the ResultSet
            resultSet.close();

            int id = 0;
            String name = "Pizza";
            boolean vegetarian = false;
            boolean halal = false;
            int amount = 100;

            // SQL statement to add a new food item to the 'food' table
            String sql = "INSERT INTO food (id, name, vegetarian, halal, amount) VALUES (?, ?, ?, ?, ?)";

            try (PreparedStatement preparedStatement = conn.prepareStatement(sql)) {
                preparedStatement.setInt(1, id);
                preparedStatement.setString(2, name);
                preparedStatement.setBoolean(3, vegetarian);
                preparedStatement.setBoolean(4, halal);
                preparedStatement.setInt(5, amount);

                // Execute the SQL statement
                preparedStatement.executeUpdate();

                System.out.println("Food item added successfully!");
            } catch (SQLException e) {
                System.out.println("Error adding food item: " + e.getMessage());
            }
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }
    
}
