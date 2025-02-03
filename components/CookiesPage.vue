<script setup>
import { onMounted } from 'vue'

function showBanner() {
  document.getElementById('cookie-consent-banner').classList.add('visible');
}

onMounted(() => {
  const openConsentBtn = document.getElementById('btn-open-consent')
  if (openConsentBtn) {
    openConsentBtn.addEventListener('click', showBanner)
  }
})
</script>
<template>
  <div>
    <section class="section policy" data-watch="navigator" data-watch-threshold="0.1">
      <div class="policy__container container-small-s">
        <div class="policy__row">
          <div class="policy__flex-col textblock">
            <p>Niniejszy dokument informuje użytkowników o technologiach, które pomagają tej witrynie osiągnąć cele opisane poniżej. Technologie te umożliwiają Właścicielowi uzyskiwanie dostępu do informacji i ich przechowywanie (np. za pomocą plików cookie) lub wykorzystywanie zasobów (np. poprzez uruchamianie skryptu) na urządzeniu Użytkownika podczas interakcji z niniejszą Witryną.          
            </p>
            <p>Dla uproszczenia wszystkie takie technologie są zdefiniowane w tym dokumencie jako "Ustawienia" (są to ustawienia trybu zgody Google) - chyba że istnieje powód do rozróżnienia.</p>
            <p>Dane osobowe przekazane nam przez użytkownika za pośrednictwem poczty elektronicznej, formularza kontaktowego itp. będą przetwarzane w celu udzielenia odpowiedzi na zapytania użytkownika. Użytkownik nie ma obowiązku podawania nam swoich danych osobowych, ale nie będziemy w stanie odpowiedzieć na jego zapytania e-mail bez podania adresu e-mail.</p>
            <p>Na przykład, chociaż pliki cookie mogą być używane zarówno w przeglądarkach internetowych, jak i przeglądarkach mobilnych, mówienie o plikach cookie w kontekście aplikacji mobilnych byłoby niedokładne, ponieważ są to ustawienia oparte na przeglądarce. Z tego powodu termin "pliki cookie" jest używany w tym dokumencie tylko wtedy, gdy ma on odnosić się do tego konkretnego rodzaju ustawień.</p>
            <p>Niektóre z celów, dla których wykorzystywane są Ustawienia, mogą również wymagać zgody Użytkownika. Za każdym razem, gdy zgoda zostanie udzielona, można ją swobodnie wycofać w dowolnym momencie, postępując zgodnie z instrukcjami zawartymi w niniejszym dokumencie.</p>
            <button id="btn-open-consent" class="hello__btn btn btn-click magnetic open-consent-btn" data-strength="70" data-strength-text="25">
              <div class="btn-fill"></div>
              <span class="btn-text">
                <p hidden class="btn__text" style="display: none;"></p>
                <span class="btn-text-inner change">Zmiana ustawień plików cookie</span>
              </span>
            </button>

            <p>Niniejsza witryna korzysta z Ustawień zarządzanych bezpośrednio przez Właściciela (tzw. Ustawienia "podstawowe") oraz Ustawień umożliwiających korystanie z usług świadczonych przez podmioty zewnętrzne (tzw. Ustawienia "podmiotów zewnętrznych"). O ile nie określono inaczej w niniejszym dokumencie, dostawcy zewnętrzni mogą uzyskać dostęp do zarządzanych przez siebie Ustawień.</p>
            <p>Ważność i data wygaśnięcia plików cookie i innych podobnych Ustawień może się różnić w zależności od daty wygaśnięcia określonej przez Właściciela lub odpowiedniego dostawcę. Niektóre z nich wygasają po zakończeniu sesji przeglądania przez Użytkownika.</p>
            <p>Oprócz tego, co podano w opisach w każdej z poniższych kategorii, Użytkownicy mogą znaleźć dokładniejsze i bardziej aktualne informacje dotyczące Specyfikacji Terminu, a także wszelkie inne istotne informacje - takie jak dostępność innych Parametrów - w powiązanych politykach prywatności odpowiednich dostawców zewnętrznych lub kontaktując się z Właścicielem.</p>

            <p><strong>W jaki sposób ta witryna korzysta z parametrów</strong><br></p>
            <p><strong>Niezbędny</strong><br></p>
            <p>Ta strona internetowa wykorzystuje tak zwane "techniczne" pliki cookie i inne podobne ustawienia do wykonywania działań, które są absolutnie niezbędne do działania lub świadczenia Usługi.</p>

            <p><strong>Analityka</strong><br></p>
            <p>Ta strona internetowa wykorzystuje parametry do pomiaru ruchu i analizy zachowań użytkowników w celu ulepszenia usługi.</p>

            <p><strong>Preferencje</strong><br></p>
            <p>Ta strona internetowa wykorzystuje Ustawienia w celu zapewnienia podstawowych interakcji i funkcji, umożliwiając użytkownikom dostęp do wybranych funkcji Usługi i ułatwiając komunikację użytkownika z Właścicielem.</p>

            <p><strong>Marketing</strong><br></p>
            <p>Ta witryna wykorzystuje parametry do wyświetlania spersonalizowanych reklam lub treści marketingowych oraz do pomiaru ich skuteczności.</p>
            
            <p><strong>Ustawienia trybu zgody Google </strong><br></p>
            <p>(1) ad_storage:</p>
            <ul>
              <li>Odpowiada za przechowywanie i dostęp do danych wykorzystywanych w analityce.</li>
            </ul>

            <p>(2) analytics_storage:</p>
            <ul>
              <li>Odpowiada za przechowywanie i dostęp do danych wykorzystywanych w analityce.</li>
            </ul>

            <p>(3) functionality_storage: </p>
            <ul>
              <li>Umożliwia zapisywanie danych wykorzystywanych do poprawy funkcjonalności strony.</li>
            </ul>

            <p>(4) personalization: </p>
            <ul>
              <li>Zezwala na wykorzystanie danych do personalizacji treści.</li>
            </ul>

            <p>(5) security_storage: </p>
            <ul>
              <li>Umożliwia przechowywanie danych wykorzystywanych do celów bezpieczeństwa.</li>
            </ul>

            <p><strong>Dlaczego to ważne? </strong><br></p>
            <ul>
              <li>Ustawienia te pozwalają właścicielom witryn zachować zgodność z RODO, CCPA i innymi przepisami dotyczącymi ochrony danych.</li>
              <li>Użytkownicy mają większą kontrolę nad sposobem przetwarzania ich danych.</li>
            </ul>

            <p><strong>Jak zarządzać ustawieniami na tej stronie </strong><br></p>
            <p>Użytkownicy mogą ustawić lub zaktualizować swoje preferencje za pomocą odpowiedniego panelu ustawień prywatności dostępnego na tej stronie.</p>
            <p>W odniesieniu do jakichkolwiek Ustawień strony trzeciej, użytkownicy mogą zarządzać swoimi preferencjami za pomocą odpowiedniego łącza rezygnacji (jeśli istnieje), korzystając ze środków określonych w polityce prywatności strony trzeciej lub kontaktując się ze stroną trzecią.</p>

            <p><strong>Jak kontrolować lub usuwać pliki cookie i podobne technologie za pomocą ustawień urządzenia</strong></p>
            <p>Użytkownicy mogą korzystać z własnych ustawień przeglądarki. Ustawienia przeglądarki nie pozwalają jednak na szczegółową kontrolę zgody w podziale na kategorie.
            Na przykład użytkownicy mogą znaleźć informacje na temat zarządzania plikami cookie w najczęściej używanych przeglądarkach.
            </p>
            <p>Użytkownicy mogą również kontrolować niektóre kategorie ustawień używanych w aplikacjach mobilnych, rezygnując z nich za pomocą odpowiednich ustawień urządzenia, takich jak ustawienia reklam mobilnych lub ogólne ustawienia śledzenia (użytkownicy mogą otworzyć ustawienia urządzenia i znaleźć odpowiednie ustawienie).</p>

            <p><strong>Jak zrezygnować z reklam opartych na zainteresowaniach</strong></p>
            <p>Niezależnie od powyższego, Użytkownicy mogą postępować zgodnie z instrukcjami dostarczonymi przez YourOnlineChoices (UE i Wielka Brytania), Network Advertising Initiative (USA) i Digital Advertising Alliance (USA), DAAC (Kanada), DDAI (Japonia) lub inne podobne usługi. Takie inicjatywy pozwalają użytkownikom wybrać preferencje śledzenia dla większości narzędzi reklamowych. W związku z tym Właściciel zachęca Użytkowników do korystania z tych zasobów oprócz informacji zawartych w niniejszym dokumencie. </p>
            
            <p><strong>Konsekwencje nieużywania ustawień Google Consent Mode</strong></p>
            <p>Użytkownicy mogą swobodnie decydować, czy chcą autoryzować korystanie z Ustawień. Należy jednak pamiętać, że Ustawienia pomagają tej Witrynie zapewnić Użytkownikom lepsze wrażenia i ulepszone funkcje (zgodnie z celami określonymi w niniejszym dokumencie). W związku z tym, jeśli Użytkownik zdecyduje się zablokować korystanie z Parametrów, Właściciel może nie być w stanie zapewnić odpowiednich funkcji.
            </p>

            
            <p>Odpowiedzialny za przetwarzanie danych:<br>
              Aleh Vaitulevich<br>
              Aleja Niepodległości 21A<br>
              02-653 Warszawa<br>
              Telefon: <a href="tel:+48780132019">+48 780 132 019</a><br>
            <a href="mailto:vaitulevichaleh@gmail.com">vaitulevichaleh@gmail.com</a></p>         
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/cookies-page';
</style> 

