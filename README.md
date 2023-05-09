# blog
my blog
<form id='formName' name='formName' onsubmit='redirect();return false;'>
                <input type='text' id='userInput' name='userInput' value=''>
                <input type='submit' name='submit' value='Submit'>
            </form>

            <script type='text/javascript'>
            function redirect() {
                var input = document.getElementById('userInput').value;
                switch(input) {
                    case 'apple':
                        window.location.replace('apple.html');
                        break;
                    case 'banana':
                        window.location.replace('banana.html');
                        break;
                    default:
                        window.location.replace('default.html');
                        break;
                }


            }
            </script>
