let myFavouriteCountry = {
    "name": {
        "common": "Cyprus",
        "official": "Republic of Cyprus",
        "nativeName": {
            "ell": {
                "official": "Δημοκρατία της Κύπρος",
                "common": "Κύπρος"
            },
            "tur": {
                "official": "Kıbrıs Cumhuriyeti",
                "common": "Kıbrıs"
            }
        }
    },
    "tld": [
        ".cy"
    ],
    "cca2": "CY",
    "ccn3": "196",
    "cca3": "CYP",
    "cioc": "CYP",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "EUR": {
            "name": "Euro",
            "symbol": "€"
        }
    },
    "idd": {
        "root": "+3",
        "suffixes": [
            "57"
        ]
    },
    "capital": [
        "Nicosia"
    ],
    "altSpellings": [
        "CY",
        "Kýpros",
        "Kıbrıs",
        "Republic of Cyprus",
        "Κυπριακή Δημοκρατία",
        "Kıbrıs Cumhuriyeti"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "languages": {
        "ell": "Greek",
        "tur": "Turkish"
    },
    "translations": {
        "ara": {
            "official": "جمهورية قبرص",
            "common": "قبرص"
        },
        "ces": {
            "official": "Kyperská republika",
            "common": "Kypr"
        },
        "cym": {
            "official": "Gweriniaeth Cyprus",
            "common": "Cyprus"
        },
        "deu": {
            "official": "Republik Zypern",
            "common": "Zypern"
        },
        "est": {
            "official": "Küprose Vabariik",
            "common": "Küpros"
        },
        "fin": {
            "official": "Kyproksen tasavalta",
            "common": "Kypros"
        },
        "fra": {
            "official": "République de Chypre",
            "common": "Chypre"
        },
        "hrv": {
            "official": "Republika Cipar",
            "common": "Cipar"
        },
        "hun": {
            "official": "Ciprusi Köztársaság",
            "common": "Ciprus"
        },
        "ita": {
            "official": "Repubblica di Cipro",
            "common": "Cipro"
        },
        "jpn": {
            "official": "キプロス共和国",
            "common": "キプロス"
        },
        "kor": {
            "official": "키프로스 공화국",
            "common": "키프로스"
        },
        "nld": {
            "official": "Republiek Cyprus",
            "common": "Cyprus"
        },
        "per": {
            "official": "جمهوری قبرس",
            "common": "قِبرِس"
        },
        "pol": {
            "official": "Republika Cypryjska",
            "common": "Cypr"
        },
        "por": {
            "official": "República de Chipre",
            "common": "Chipre"
        },
        "rus": {
            "official": "Республика Кипр",
            "common": "Кипр"
        },
        "slk": {
            "official": "Cyperská republika",
            "common": "Cyprus"
        },
        "spa": {
            "official": "República de Chipre",
            "common": "Chipre"
        },
        "swe": {
            "official": "Republiken Cypern",
            "common": "Cypern"
        },
        "urd": {
            "official": "جمہوریہ قبرص",
            "common": "قبرص"
        },
        "zho": {
            "official": "塞浦路斯共和国",
            "common": "塞浦路斯"
        }
    },
    "latlng": [
        35,
        33
    ],
    "landlocked": false,
    "area": 9251,
    "demonyms": {
        "eng": {
            "f": "Cypriot",
            "m": "Cypriot"
        },
        "fra": {
            "f": "Chypriote",
            "m": "Chypriote"
        }
    },
    "flag": "🇨🇾",
    "maps": {
        "googleMaps": "https://goo.gl/maps/77hPBRdLid8yD5Bm7",
        "openStreetMaps": "https://www.openstreetmap.org/relation/307787"
    },
    "population": 1207361,
    "gini": {
        "2018": 32.7
    },
    "fifa": "CYP",
    "car": {
        "signs": [
            "CY"
        ],
        "side": "left"
    },
    "timezones": [
        "UTC+02:00"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/cy.png",
        "svg": "https://flagcdn.com/cy.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/cy.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/cy.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            35.17,
            33.37
        ]
    },
    "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
    }
}

let v1 = myFavouriteCountry.name.nativeName.ell.official
console.log(v1)

let v2 = myFavouriteCountry.idd.suffixes[0]
console.log(v2)

let v3 = myFavouriteCountry.tld[0]
console.log(v3)