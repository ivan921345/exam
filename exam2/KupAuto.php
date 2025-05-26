<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Komis aut</title>
    <link rel="stylesheet" href="./styl.css">
</head>
<body>

    <header>
        <h1>
            <strong><i>KupAuto!</i></strong> Internetowy Komis Samochodowy
        </h1>
    </header>

    <main class="firstBlock">
        <?php 
            $conn = mysqli_connect("localhost", "root", "", "kupauto");
            $query = "SELECT model, rocznik, przebieg, paliwo, cena, zdjecie FROM samochody WHERE id = 10;";

            $res = mysqli_query($conn, $query);

            while($row = mysqli_fetch_array($res)){
                echo "<img src='".$row['zdjecie']."' alt='oferta dnia'>";
                echo "<h4>Oferta dnia: Toyota</h4>";
                echo "<p>Rocznik: '".$row['rocznik']."' przbieg: '".$row['przebieg']."' rodzaj paliwa: '".$row['paliwo']."'</p>";
                echo "<h4>Cena: '".$row['cena']."'</h4>";
            }
            $conn->close();
        ?>
    </main>

    <main class="secondBlock">
        <h2>Oferty Wyróżnione</h2>
        <div class="cards">
            <?php 
                $conn = mysqli_connect("localhost", "root", "", "kupauto");
                $query = "SELECT marki.nazwa, samochody.model, samochody.rocznik, samochody.cena, samochody.zdjecie FROM marki JOIN samochody ON marki.id = samochody.marki_id WHERE samochody.wyrozniony = 1 LIMIT 4;";

                $res = mysqli_query($conn, $query);

                while($row = mysqli_fetch_array($res)){
                    echo "
                        <div class='block'>
                            <img src='".$row['zdjecie']."' alt='".$row['model']."'>
                            <h4>'".$row['nazwa']."': '".$row['model']."'</h4>
                            <p>Rocznik: '".$row['rocznik']."'</p>
                            <h4>'".$row['cena']."'</h4>
                        </div>
                    ";
                }
                $conn->close();
            ?>

        </div>
            
    </main>

    <main class="thirdBlock">
        <h2>Wybierz markę</h2>
        <form action="./KupAuto.php" method="POST">
            <select name="select" id="select">
            <?php 
                $conn = mysqli_connect("localhost", "root", "", "kupauto");
                $query = "SELECT marki.nazwa FROM marki;";

                $res = mysqli_query($conn, $query);

                while($row = mysqli_fetch_array($res)){
                    echo "
                        <option value='".$row['nazwa']."'>".$row['nazwa']."</option>        
                    ";
                }
                $conn->close();
                
            ?>
            </select>
            <button type="submit">Wyszukaj</button>
        </form>
        <div class="cards">
            <?php 
                    $conn = mysqli_connect("localhost", "root", "", "kupauto");
                    if(isset($_POST['select'])){
                        $select = $_POST['select'];
                        $query = "SELECT samochody.model, samochody.cena, samochody.zdjecie, marki.nazwa FROM samochody JOIN marki ON samochody.marki_id = marki.id WHERE marki.nazwa = '$select';";

                        $res = mysqli_query($conn, $query);

                        while($row = mysqli_fetch_array($res)){
                            echo "<div class='block'>";
                            echo "<img src='".$row['zdjecie']."' alt='".$row['model']."'>";
                            echo "<h4>".$row['nazwa'].": ".$row['model']."</h4>";
                            echo "<h4>Cena: ".$row['cena']."</h4>";
                            echo "</div>";
                        }
                    }
                    $conn->close();
                    
                ?>
        </div>
    </main>

    <footer>
        <p>Stronę wykonał: 00000000000000000</p>
        <p><a href="http://firmy.pl/komis">Znajdź nas także</a></p>
    </footer>
    
</body>
</html>