<script>
        function showAlert(button){
            var text =button.textContent;
            var sonucDiv = document.querySelector('.sonuc');
            sonucDiv.innerHTML = text;
        }
        function ClearText() {
            var sonucDiv = document.querySelector('.sonuc');
            sonucDiv.innerHTML = '';
        }
    </script>