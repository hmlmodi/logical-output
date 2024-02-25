# installation
npm i 

# start
npm start

# logical-output
<!-- use this json input data  -->
{
    "inputdata": [
        {
            "id": 2167,
            "reach": 1,
            "date": "2022-09-13T10:12:49.000Z",
            "dateDetails": {
                "id": 22,
                "id_supplier": 1078,
                "supplier": {
                    "id": 1078,
                    "name": "mollimolli"
                }
            }
        },
        {
            "id": 2167,
            "reach": 233,
            "date": "2022-01-3T10:12:49.000Z",
            "dateDetails": {
                "id": 22,
                "id_supplier": 1078,
                "supplier": {
                    "id": 1078,
                    "name": "mollimolli"
                }
            }
        },
        {
            "id": 2168,
            "reach": 12,
            "date": "2022-09-13T10:14:03.000Z",
            "dateDetails": {
                "id": 22,
                "id_supplier": 1078,
                "supplier": {
                    "id": 1078,
                    "name": "mollimolli"
                }
            }
        },
        {
            "id": 2182,
            "reach": 412,
            "date": "2022-02-19T17:01:08.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        },
        {
            "id": 2183,
            "reach": 1,
            "date": "2022-11-19T17:01:08.000Z",
            "dateDetails": {
                "id": 17,
                "id_supplier": 1073,
                "supplier": {
                    "id": 1073,
                    "name": "MaxWin"
                }
            }
        },
        {
            "id": 2184,
            "reach": 5,
            "date": "2022-02-19T17:01:08.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        },
        {
            "id": 2185,
            "reach": 6,
            "date": "2022-09-21T11:28:02.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        },
        {
            "id": 2186,
            "reach": 55,
            "date": "2022-09-19T17:01:08.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        },
        {
            "id": 2187,
            "reach": 20,
            "date": "2022-07-22T09:43:27.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        },
        {
            "id": 2188,
            "reach": 7,
            "date": "2022-07-22T12:52:41.000Z",
            "dateDetails": {
                "id": 2793,
                "id_supplier": 1082,
                "supplier": {
                    "id": 1082,
                    "name": "ilariadilecce"
                }
            }
        }
    ]
}



<!-- to get output data -->
{
    "monthLabels": [
        "sept",
        null,
        "feb",
        "jul",
        "nov"
    ],
    "datasets": [
        {
            "totalReach": {
                "name": "mollimolli",
                "totalReach": 246
            },
            "label": "mollimolli",
            "monthReach": [
                {
                    "sept": 13
                },
                {
                    "undefined": 233
                },
                {
                    "feb": 0
                },
                {
                    "jul": 0
                },
                {
                    "nov": 0
                }
            ]
        },
        {
            "totalReach": {
                "name": "ilariadilecce",
                "totalReach": 505
            },
            "label": "ilariadilecce",
            "monthReach": [
                {
                    "sept": 61
                },
                {
                    "undefined": 0
                },
                {
                    "feb": 417
                },
                {
                    "jul": 27
                },
                {
                    "nov": 0
                }
            ]
        },
        {
            "totalReach": {
                "name": "MaxWin",
                "totalReach": 1
            },
            "label": "MaxWin",
            "monthReach": [
                {
                    "sept": 0
                },
                {
                    "undefined": 0
                },
                {
                    "feb": 0
                },
                {
                    "jul": 0
                },
                {
                    "nov": 1
                }
            ]
        }
    ]
}