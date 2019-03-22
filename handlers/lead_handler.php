<?php 
    if( !empty($_GET) ){
            $link = mysqli_connect('localhost', 'root', '', 'project2_leads');
            mysqli_set_charset($link, 'utf8');

        if( !empty($_GET['name']) && !empty($_GET['email']) ){

            $name = '';
            if( isset( $_GET['name'] ) ){
                $name = trim($_GET['name']);
            }

            if(!isset($_GET['message'])){

                $sql = "INSERT INTO leads (id, name, email) VALUE (NULL, '{$name}', '{$_GET['email']}')";

                $result = mysqli_query($link, $sql);

                if( $result ){
                    echo "<h3>{$_GET['name']}, спасибо за заявку! Наш менеджер с Вами свяжется!</h3>";
                }else{
                    echo "<h3>Извините, у нас технические неполадки, попробуйте отправить заявку немного позже.</h3>";
                }
            }else{
                $sql = "INSERT INTO leads (id, name, email, message) VALUE (NULL, '{$name}', '{$_GET['email']}', '{$_GET['message']}')";

                $result = mysqli_query($link, $sql);

                if( $result ){
                    echo "<h3>{$_GET['name']}, спасибо за заявку! Наш менеджер с Вами свяжется!</h3>";
                }else{
                    echo "<h3>Извините, у нас технические неполадки, попробуйте отправить заявку немного позже.</h3>";
                }
            }
        }else{
            echo "<h3>Заполните все необходимые поля.</h3>";
        }
            
            
    }
    
?>