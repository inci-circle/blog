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
