export interface Product {
	id: number;
	color: string;
	colorDarker: string;
	imageUrl: string;
	category: string;
	type: string;
	name: string;
	whatHelps: string;
	activeIngredients: string;
	effects: string;
	forWhom: string;
	methodOfUse: string;
	starsNumber: number;
	price: number;
	higherPrice: string;
	additional: string;
	imageDetailsUrl: string;
	amount: string
	available: boolean;
}

export const products = [
	{
		id: 1,
		color: '#F4B1D2',
		colorDarker: '#F4B1D2',
		imageUrl: `assets/img/beauty-products/white-background-all/white-peeling-pink.JPG`,
		category: `Linia do cery tłustej/mieszanej/trądzikowej`,
		type: `tonic`,
		name: `Tonik peelingujący z kwasem glikolowym`,
		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 5,
		price: 100,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/white-background-all/white-peeling-pink.JPG`,
		amount: `30ml`,
		available: true,
	},
	{
		id: 2,
		color: '#F4B1D2',
		colorDarker: '#D185AA',
		imageUrl: `assets/img/beauty-products/white-background-all/white-serum-pink.JPG`,
		category: `Linia do cery tłustej/mieszanej/trądzikowej`,
		type: `peeling`,
		name: `Peeling kwasowy AHA+BHA (30%)`,

		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 5,
		price: 200,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/beauty/details/white-mix-serum-pink.png`,
		amount: `30ml`,
		available: true,
	},
	{
		id: 3,
		color: '#f4d6e8',
		colorDarker: '#F4B1D2',
		imageUrl: `assets/img/beauty-products/white-background-all/white-tonic-pink.JPG`,
		category: `Linia do cery tłustej/mieszanej/trądzikowej`,
		type: `serum`,
		name: `Serum z witaminą B3 i cynkiem`,
		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 5,
		price: 300,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/beauty-details/white-mix-serum-pink.png`,
		amount: `30ml`,
		available: true,
	},

	{
		id: 4,
		color: '#ccdbf2',
		colorDarker: '#7192bb',
		imageUrl: `assets/img/beauty-products/white-background-all/white-tonic-blue.JPG`,
		category: `Linia do cery wrażliwej/dojrzałej`,
		type: `tonik`,
		name: `Tonik z kofeiną`,
		whatHelps: `Unikalna formuła toniku wpływa na poprawę mikrokrążenia w skórze, rozjaśnia
		cienie i plamy posłoneczne lub potrądzikowe. Nawadnia i dodaje twojej skórze
		zdrowego blasku, spowalniając naturalny proces starzenia się skóry.`,
		activeIngredients: `Kofeina – pobudza mikrokrążenie w skórze, obkurcza naczynia krwionośne,
		poprawia wygląd skóry, rozjaśniając cienie i przebarwienia, przyspiesza proces
		6
		odżywienia skóry
		Ekstrakt z aloesu – nawilża i łagodzi podrażnienia
		Ekstrakt z ogórka – odświeża, uspokaja
		Kompleks nawilżający prodew 500 – kompleks aminokwasów, który
		wspiera regenerację i odmłodzenie skóry`,
		effects: `Tonik działa jak odżywczy nektar dla twojej skóry. Dodaje energii, zapewniając
		wsparcie w odnowie twojej skóry. Nadaje skórze młody, świeży i zadbany wygląd.
		Przygotuj się na słowa pochwały i nutkę zazdrości.`,
		forWhom: `Tonik polecany jest dla każdego rodzaju skóry, zwłaszcza dojrzałej, suchej, na
		której są widoczne ślady zmęczenia. Dla osób, które chcą przedłużyć młodość
		swojej skóry, ale nie chcą korzystać z drogich i ryzykownych zabiegów medycyny
		estetycznej. Jest to zatem doskonała alternatywa.
		Produkt jest wegański. Nie zawiera substancji pochodzenia zwierzęcego.`,
		methodOfUse: `Nasącz płatek kosmetyczny tonikiem i rozprowadź go na skórze twarzy, szyi i
		dekoltu. Dla uzyskania najlepszych efektów, stosuj dwa razy dziennie, rano i
		wieczorem, po oczyszczeniu skóry. Następnie, w razie potrzeby, nałóż serum
		lub krem z filtrem przeciwsłonecznym lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 5,
		price: 300,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/white-background-all/white-peeling-pink.JPG`,
		amount: `30ml`,
		available: true,
	},
	{
		id: 5,
		color: '#CCDBF2',
		colorDarker: '#7192bb',
		imageUrl: `assets/img/beauty-products/white-background-all/white-tonic-blue.JPG`,
		category: `Linia do cery wrażliwej/dojrzałej`,
		type: `peeling`,
		name: `Peeling z kwasem mlekowym i kwasem hialuronowym`,
		whatHelps: `Dzięki regularnemu stosowaniu peelingu, skóra odzyskuje swoją gładkość i
		sprężystość. Przebarwienia i nierówności są zlikwidowane. Działa lekko
		antybakteryjnie, przez co ogranicza rozwój drobnych zmian trądzikowych. Możesz
		na nowo, cieszyć się zdrową, młodą i promienną cerą.`,
		activeIngredients: `Kwas mlekowy – jeden z alfa-hydrokwasów, działa nawilżająco, antybakteryjnie,
		przeciwstarzeniowo, reguluje pracę gruczołów łojowych, oczyszcza skórę z
		martwego naskórka
		Kwas hialuronowy – utrzymuje odpowiednie nawilżenie, poprawia
		elastyczność skóry`,
		effects: `Delikatne złuszczenie oraz intensywne nawilżanie dzięki unikalnemu połączeniu
		substancji aktywnych. Peeling z kwasem mlekowym i hialuronowym, dzięki
		swojej wielozadaniowej formule zapewnia oczyszczenie, rozjaśnienie i
		nawodnienie twojej skóry.`,
		forWhom: `Odpowiedni dla każdego rodzaju cery, a zwłaszcza do skóry suchej, mieszanej,
		odwodnionej, dojrzałej. Dla wszystkich, którym zależy na odnowie swojej skóry,
		bez korzystania z drogich zabiegów medycyny estetycznej, dodaniu jej
		młodzieńczego wigoru i rozświetlenia.
		Kosmetyk jest wegański, nie zawiera substancji pochodzenia zwierzęcego.`,
		methodOfUse: `Nałóż niewielką ilość peelingu na oczyszczoną skórę twarzy, szyi i dekoltu. Po
		5-10 minutach dokładnie spłucz letnią wodą. Upewnij się, że resztki kosmetyku
		zostały dokładnie zmyte. Do osuszenia skóry, użyj świeżego i delikatnego
		ręcznika. Przyłóż go do skóry, by wchłonął nadmiar wody. Pamietaj, aby nie
		trzeć skóry. Kosmetyk stosuj maksymalnie 2-3 razy w tygodniu i nie łącz go z
		innymi zawierającymi kwasy.`,
		additional: `Zbyt duża ich ilość kwasów w pielęgnacji skóry może przyczynić się do
		powstania podrażnień. Nie łącz kilku produktów na raz. Najlepiej stosuj peeling
		jednej firmy. Zastosuj się do sposobów i częstotliwości użycia, by twoja skóra
		odniosła najwięcej korzyści.`,
		starsNumber: 5,
		price: 500,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/beauty-details/white-mix-peeling-blue.png`,
		amount: `30ml`,
		available: true,
	},
	{
		id: 6,
		color: '#CCDBF2',
		colorDarker: '#7192bb',
		imageUrl: `assets/img/beauty-products/white-background-all/white-tonic-blue.JPG`,
		category: `Linia do cery wrażliwej/dojrzałej`,
		type: `serum`,
		name: `Serum nawilżające z kwasem hialuronowym i prowitaminą B5`,
		whatHelps: `Jeśli poszukujesz kosmetyku, który działa kompleksowo, jednocześnie nawadnia,
		wzmacnia i uspokaja skórę. Serum szybko się wchłania, nie pozostawiając tłustego
		filmu. Jeśli nie byłaś wcześniej przekonana do tego rodzaju kosmetyku, koniecznie
		podaruj swojej skórze ten luksus. Twoja skóra będzie ci za to wdzięczna`,
		activeIngredients: `Kwas hialuronowy – dba o prawidłowe nawilżenie skóry w głębszych
		warstwach skóry, zapewnia cerze sprężystość i blask
		Prowitamina B5 (D-pantenol) – nawilża, wygładza i łagodzi podrażnienia`,
		effects: `Magiczne kropelki serum sprawią, że twoja skóra będzie odpowiednio nawilżona ,
		jędrna, gładka, bez śladów zmęczenia i przesuszenia. Będziesz zachwycona swoją
		zdrową, młodą i rozpromienioną cerą. Dzięki temu poprawi się twoje
		samopoczucie.`,
		forWhom: `Serum mogą używać osoby, o każdym rodzaju cery, a zwłaszcza dojrzałej, suchej,
		wrażliwej. Produkt jest wegański, co oznacza, że nie zawiera żadnych substancji
		pochodzenia zwierzęcego.`,
		methodOfUse: `Niewielką ilość serum (kilka kropel) rozprowadź opuszkami palców na
		oczyszczonej skórze twarzy, szyi i dekoltu. Pamiętaj, o właściwej kolejności:
		najpierw użyj toniku, a następnie nałóż serum. W razie potrzeby możesz
		zastosować krem dopasowany do twojego rodzaju skóry lub filtr
		przeciwsłoneczny.`,
		additional: ` `,
		starsNumber: 5,
		price: 600,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/white-background-all/white-peeling-pink.JPG`,
		amount: `30ml`,
		available: false,
	},

	{
		id: 7,
		color: '#CDDF29',
		colorDarker: '#cddf29c0',
		imageUrl: `assets/img/beauty-products/white-background-all/white-touchland-green.JPG`,
		category: `Aleo Line`,
		type: ``,
		name: `Touchland`,
		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 5,
		price: 700,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/beauty-products/white-background-all/white-touchland-green.JPG`,
		amount: `30ml`,
		available: false,
	},
	{
		id: 8,
		color: '#E7C9F5',
		colorDarker: 'rgb(231, 201, 245, 0.75)',
		imageUrl: `assets/img/accessories/cotton-leafs.JPG`,
		category: `Accessories`,
		type: `Accessories`,
		name: `Cotton leafs`,
		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 4,
		price: 50,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/accessories/cotton-leafs.JPG`,
		amount: `30ml`,
		available: true,
	},
	{
		id: 9,
		color: '#E7C9F5',
		colorDarker: 'rgb(231, 201, 245, 0.75)',
		imageUrl: `assets/img/accessories/sth-pinkish.JPG`,
		category: `Accessories`,
		type: `Accessories`,
		name: `Sth pink-ish`,
		whatHelps: `Działa seboregulująco, czyli wpływa na uregulowanie nadmiernej pracy gruczołów
				łojowych w skórze. Dzięki temu, skóra przestanie się nadmiernie przetłuszczać.
				Rozjaśnia przebarwienia poprzez skuteczne, a zarazem delikatne złuszczanie skóry.
				Dodatek substancji łagodzących uspokaja wymagającą cerę, ograniczając do
				minimum możliwość powstawania podrażnień.`,
		activeIngredients: `Kwas glikolowy (7%) – złuszcza naskórek, reguluje wydzielanie sebum
				Ekstrakt z liści pieprzu tasmańskiego – działa dwukierunkowo:
				przeciwzapalnie i łagodząco
				Wyciąg z aloesu – nawilża skórę i zapobiega podrażnieniom`,
		effects: `Skuteczne działanie na wszystkie problemy cery mieszanej/ tłustej/ trądzikowej.
				Zlikwidowane przebarwienia posłoneczne, potrądzikowe, Rozjaśniona, świeża i
				czysta cera, bez śladów podrażnień. Twoja skóra odzyskuje naturalne piękno.`,
		forWhom: `Dla każdej kobiety, która boryka się z nierównomiernym kolorytem cery. Tonik w
				sposób szybki i bezpieczny podtrzymuje efekty na co dzień. Blask twojej skóry
				może trwać w nieskończoność. Podaruj sobie ten luksus. Zachwycaj swoją skórą,
				codziennie.`,
		methodOfUse: `Tonik stosuj raz dziennie, najlepiej wieczorem, po dokładnym oczyszczeniu i
				osuszeniu skóry. Nanieść odrobinę kosmetyku na płatek kosmetyczny i przykładaj
				go do skóry twarzy, szyi i dekoltu, omijając okolice oczu, ust, skrzydełek nosa i
				błon śluzowych. Staraj się nie trzeć i nie rozciągać delikatnej skóry. Nie spłukuj.
				Jeśli potrzebujesz, możesz użyć serum lub krem na noc.`,
		additional: `Produkt jest wegański. Kolor kosmetyku w poszczególnych partiach może się
				nieco różnić, ponieważ w zależności od momentu zbioru liści pieprzu
				tasmańskiego, jego ekstrakt może mieć inną barwę.`,
		starsNumber: 4,
		price: 50,
		higherPrice: `90,60 zł / 100ml, zawiera VAT`,
		imageDetailsUrl: `assets/img/accessories/sth-pinkish.JPG`,
		amount: `30ml`,
		available: true,
	},
	// {
	// 	id: 00,
	// 	color: '',
	// 	colorDarker: '',
	// 	imageUrl: `assets/img/`,
	// 	category: ``,
	// 	type: ``,
	// 	name: ``,
	// 	whatHelps: ``,
	// 	activeIngredients: ``,
	// 	effects: ``,
	// 	forWhom: ``,
	// 	methodOfUse: ``,
	// 	additional: ``,
	// 	starsNumber: 5,
	// 	price: 700,
	// 	imageDetailsUrl: `assets/img/`,
	// 	amount: `30ml`,
	// 	available: true,
	// }
]

// export class Product {
// 	id: string;
// 	sku: string;
// 	name: string;
// 	description: string;
// 	unitPrice: number;
// 	imageUrl: string;
// 	active: boolean;
// 	unitsInStock: number;
// 	dateCreated: Date;
// 	lastUpdated: Date;
// }
