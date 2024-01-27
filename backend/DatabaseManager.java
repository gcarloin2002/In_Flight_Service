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
            //users(conn);
            //food(conn);
            orders(conn);

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    public static void users(Connection conn)
    {
        String[] Users_firstNames = {"Gian", "Ilham", "Jason", "Sean"};
        String[] Users_lastNames = {"Inguillo", "Aryawan", "Le", "Chen"};
        int[] Users_sections = {1, 2, 3, 4};
        int[] Users_seatids = {0, 1, 2, 3};
        boolean[] Users_vegetarian = {false, false, false, false};
        boolean[] Users_halal = {false, true, false, false};
        int[] Users_seatsatisfaction = {0, 0, 0, 0};
        String sql = "INSERT INTO users (id, firstname, lastname, section, seatid, vegetarian, halal, seatsatisfaction) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = conn.prepareStatement(sql)) {
            for(int id = 0; id < Users_firstNames.length; id++)
            {
                preparedStatement.setInt(1, id);
                preparedStatement.setString(2, Users_firstNames[id]);
                preparedStatement.setString(3, Users_lastNames[id]);
                preparedStatement.setInt(4, Users_sections[id]);
                preparedStatement.setInt(5, Users_seatids[id]);
                preparedStatement.setBoolean(6, Users_vegetarian[id]);
                preparedStatement.setBoolean(7, Users_halal[id]);
                preparedStatement.setInt(8, Users_seatsatisfaction[id]);
                preparedStatement.executeUpdate();
            }

            System.out.println("Users added successfully!");
        } catch (SQLException e) {
            System.out.println("Error adding users: " + e.getMessage());
        }
    }

    public static void food(Connection conn)
    {
        String[] food_names = {"Chicken", "Beef", "Pork", "Vegetarian"};
        boolean[] food_vegetarian = {false, false, false, true};
        boolean[] food_halal = {true, true, false, true};
        int[] food_amount = {100, 100, 100, 100};

        String sql = "INSERT INTO food (id, name, vegetarian, halal, amount) VALUES (?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = conn.prepareStatement(sql)) {
            for(int id = 0; id < food_names.length; id++)
            {
                preparedStatement.setInt(1, id);
                preparedStatement.setString(2, food_names[id]);
                preparedStatement.setBoolean(3, food_vegetarian[id]);
                preparedStatement.setBoolean(4, food_halal[id]);
                preparedStatement.setInt(5, food_amount[id]);
                preparedStatement.executeUpdate();
            }

            System.out.println("Food added successfully!");
        } catch (SQLException e) {
            System.out.println("Error adding food: " + e.getMessage());
        }

    }

    public static void orders(Connection conn)
    {
        int[] orders_userids = {0, 1, 2, 3};
        boolean[] orders_orderconfirmed = {true, true, true, true};

        String sql = "INSERT INTO orders (id, userid, orderconfirmed) VALUES (?, ?, ?)";

        try (PreparedStatement preparedStatement = conn.prepareStatement(sql)) {
            for(int id = 0; id < orders_userids.length; id++)
            {
                preparedStatement.setInt(1, id);
                preparedStatement.setInt(2, orders_userids[id]);
                preparedStatement.setBoolean(3, orders_orderconfirmed[id]);
                preparedStatement.executeUpdate();
            }

            System.out.println("Orders added successfully!");
        } catch (SQLException e) {
            System.out.println("Error adding orders: " + e.getMessage());
        }
    }
    
}
