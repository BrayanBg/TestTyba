const swaggerOptions = {
    definition:{
        openapi: '3.0.1',
        info: {
          title: 'Prueba Tyba - BBg',
          description: 'Test for Tyba by Brayan Bohorquez Gonzalez (BBg) ',
          version: '1.0.0'
        },
        servers: [
          {
            url: 'http://localhost:3000/',
            description: '*'
          }
        ],
        tags: [
            {
              name: 'User',
              description: 'Everything about User'
            },
            {
                name: 'Requirements',
                description: 'Requirements for Test'
            }
          ],
          paths:{
            '/account/log': {
                post: {
                  tags: ['User'],
                  summary: 'Login',
                  requestBody: {
                    description: 'Login object that needs to be Login',
                    content: {
                      'application/json': {
                        schema: {
                          '$ref': '#/components/schemas/log'
                        }
                      }
                    },
                    required: true
                  },
                  responses: {
                    '200': {
                      description: 'JWT - Json Web Token',
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdCIsIlRFU1QiOiJKV1QifQ.CMkzxUAa9NPvOKaRsDty5G1AzZqIAeg2Es_4Wgu8Rbk'
                          }
                        }
                      }
                    },
                    '400':{
                      description: 'INVALID CREDENTIALS',
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            example: 'INVALID CREDENTIALS'
                          }
                        }
                      }
                    },
                    '404':{
                      description: 'NOT FOUND',
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            example: 'User NOT FOUND'
                          }
                        }
                      }
                    }
                  }
                }
              },
              '/account/add':{
                post:{
                  tags: ['User'],
                  summary: 'Register User',
                  requestBody: {
                    description: 'Json object that needs to be Register',
                    content: {
                      'application/json': {
                        schema: {
                          '$ref': '#/components/schemas/user'
                        }
                      }
                    },
                    required: true
                  },
                  responses: {
                    '201': {
                      description: 'User register successfully',
                      content: {
                        'application/json': {
                          schema: {
                            '$ref': '#/components/schemas/user'
                          }
                        }
                      }
                    },
                    '400': {
                      description: 'Email Existing',
                      content: {
                        'application/json': {
                          schema: {
                            type: 'object',
                            example: 'Email Existing'
                          }
                        }
                      }
                    }
                  },
                }
              },
              '/action/transaction':{
                get:{
                    tags: ['Requirements'],
                    summary: 'Get list of transaction',
                    responses: {
                        '200': {
                            description: 'List of tranasaction',
                            content: {
                                'application/json': {
                                    schema: {
                                        '$ref': '#/components/schemas/transactions'
                                    }
                                }
                            }
                        }
                    },
                    security: [
                        {
                          'bearerAuth': []
                        }
                    ]
                }
              },
              '/action/restaurants':{
                get:{
                    tags: ['Requirements'],
                    summary: 'Get list of restaurants in a city',
                    parameters:[
                        {
                            name: 'city',
                            description: 'City for restaurants search',
                            required: true,
                            example: 'cartagena',
                            type: 'string',
                            in: 'query'
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'List of tranasaction',
                            content: {
                                'application/json': {
                                    example: {
                                        "html_attributions" : [],
                                        "next_page_token" : "Aap_uED1TyCKCFb4HEgguX6zPFnpQtBDfUsw1BuskmHkdj6u947dfBF-XWWoYvQ7Zw4rStnllK5B92XlrY6tF6h5PiiwYgSnKwEDBtzyfraOy5nGDo_g-MJqLTF4nMDbDurCjLNw5_J8pG9zy5FHFb5uxTonRrEJEzXVC-w8LRc3tPKUcWXcc-SmtzunTiL6_EmH8zkQvAgiTqzO6qa1WxiGKJ5VP-Dp4tPpEOIzO22rrBHiswuvdxsk5HZOtqM_xUZeVsmwnc0Twni6vxTqNESRoqWmHmRXFZRg9uKHivPiLnh4hFKuLixp_g2xBZmR79Qp4UE9sWKA3FwUtMe0uV6KSWvloMV_Ih4dWWmUsHZd6dIQXXsTJI556hVZs1na-iuPgI_LfSOSCSUbp_H1_rDUxgA2nQ",
                                        "results" : [
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cartagena, Cartagena Province, Bolivar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3836373,
                                                    "lng" : -75.4839492
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38498892989272,
                                                       "lng" : -75.48260027010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38228927010728,
                                                       "lng" : -75.48529992989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "OISHÍ FOOD",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 3096,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/105533991965347283954\"\u003eNilson Alexander\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uECfDRBngyjEgpND0HgWMUX86KvMFAZaxsatVHNwMnFB9X_Zv05lHtyahsIz8quwJ7BWEOSKJaWbiiDwBS6klBgfmmz-bXqq46Ng5kdOPQunPTtXJOAproH3hLAh1oPO0zkYmqvc6kVTPotGLk69uWWBWGSfM_gwB6YyKq7qrDdz1fDa",
                                                    "width" : 4128
                                                 }
                                              ],
                                              "place_id" : "ChIJVVVVVdIl9o4RHCzwSMCsC3M",
                                              "plus_code" : {
                                                 "compound_code" : "9GM8+FC Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM8+FC"
                                              },
                                              "rating" : 4,
                                              "reference" : "ChIJVVVVVdIl9o4RHCzwSMCsC3M",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 1
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Barrio el carmen, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3836333,
                                                    "lng" : -75.4836509
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38487802989272,
                                                       "lng" : -75.48233427010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38217837010728,
                                                       "lng" : -75.48503392989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "El Tizón Cartagenero",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 1840,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/110609459008785480495\"\u003eHendry Fernandez\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEB7eBZUqcKk42Jtupi-zLdn135lmqxJK7M7M6-UjWYoBkmrHEeDH_QMBNen2kovlvBzPPF7yS0W7gBaPvIN2ca_K26V-Nu6OYIRB443HSrWfKkKXnbUwKKSofhkWQ-dwL3gfVJvi5EMeJrslfvEGmdmF6GNJuq2qepR3tfgEO6LrhG9",
                                                    "width" : 3264
                                                 }
                                              ],
                                              "place_id" : "ChIJleGU8i0l9o4RHG2PwMtVpPQ",
                                              "plus_code" : {
                                                 "compound_code" : "9GM8+FG Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM8+FG"
                                              },
                                              "rating" : 5,
                                              "reference" : "ChIJleGU8i0l9o4RHG2PwMtVpPQ",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 2
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Mz. 41 Lt. 27 Carrera 68, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3846307,
                                                    "lng" : -75.48598369999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38597277989272,
                                                       "lng" : -75.48460382010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38327312010728,
                                                       "lng" : -75.48730347989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Toscana del Mar Restaurante",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 960,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/107051181863900815809\"\u003eA Google User\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uECKB3WQBkrWpRM7uGAfhTOlos4y2q3QsUFhJBI53szudGFVXtXecNa7nduDq5ntW_pjzMOPZrqztT6Urdc4OEX2YrBXB3JY3Bhw1t4I4zrfAhBKSNaepBe__szt8E-vc-oEICBrG_yJ-hgBbTAqspmhKKMSC0UhcP9isekkpTD5fBhh",
                                                    "width" : 642
                                                 }
                                              ],
                                              "place_id" : "ChIJ142yO9Il9o4R1qfGw1R9V6c",
                                              "plus_code" : {
                                                 "compound_code" : "9GM7+VJ Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM7+VJ"
                                              },
                                              "price_level" : 2,
                                              "rating" : 4.4,
                                              "reference" : "ChIJ142yO9Il9o4R1qfGw1R9V6c",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 405
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "13002, Cartagena de Indias, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.386898,
                                                    "lng" : -75.4858175
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38824947989272,
                                                       "lng" : -75.48441727010729
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38554982010728,
                                                       "lng" : -75.48711692989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "María Barilla - cocina autóctona",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 3840,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/110849447691325302890\"\u003eA Google User\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uED7hVVxL9Fd9I5Fb-9E81MV9UESQQzXe8c7YzKR4QPXUcUDrTc9CTUjfuuVirMFGGG7d2SDKC1CoB_GF4JTdHvIw966KsONd2HNRY94AmJ0Pnjub5CteAvd1wVyJacwGHQCJ2KhbVK4FKbGDo-FRorfqHrHm-c2t0gpuNUl0rOGykeo",
                                                    "width" : 5760
                                                 }
                                              ],
                                              "place_id" : "ChIJ9yqvRBAl9o4R6qVjdZhSyrU",
                                              "plus_code" : {
                                                 "compound_code" : "9GP7+QM Cartagena Province, Bolivar",
                                                 "global_code" : "77269GP7+QM"
                                              },
                                              "rating" : 4.5,
                                              "reference" : "ChIJ9yqvRBAl9o4R6qVjdZhSyrU",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 195
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Socorro MZ 117 Lote 7, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3834872,
                                                    "lng" : -75.4830437
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38485357989272,
                                                       "lng" : -75.48173827010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38215392010728,
                                                       "lng" : -75.48443792989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Wok Paisa Cartagena",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 608,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/115360875716423860382\"\u003eA Google User\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEDb6uFsNgzIBADvy6C6-gQ5CHw3T_pgJqf8swdQOOyJovlVkGD-STycvLvnC5AJO3G-rCQOBD0ip7tPaYgdI-mBPCoFnRgSSBsIGUA86M_ppZoZ-xMwRJgKLwFOQbuIV9bvoVKzBgzIWANqaGRC_xU9ibjKE2QgEScAAhxbAYjjJldj",
                                                    "width" : 1080
                                                 }
                                              ],
                                              "place_id" : "ChIJrSOR2Uwl9o4RZsD60kfhUn8",
                                              "plus_code" : {
                                                 "compound_code" : "9GM8+9Q Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM8+9Q"
                                              },
                                              "rating" : 4.2,
                                              "reference" : "ChIJrSOR2Uwl9o4RZsD60kfhUn8",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 41
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Troncal del Caribe #71-435 a 71-375, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3909327,
                                                    "lng" : -75.4793502
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.39227227989272,
                                                       "lng" : -75.47800682010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38957262010728,
                                                       "lng" : -75.48070647989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "CARMEN RESTAURANTE",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 4032,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/106158645242114367912\"\u003eEsteban Guevara\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEBhAJgKaRQZGwzRYGQ1YhFPgh5Sv_I_aru5SkLIWtB8jLqy6WaVP6rEfrTzycmmpCBnpphfjVpL3UNi4jTBPriYbWictnwAKstE160FW_qrmDk3h52wtDmWTYTwoFn4LljsGAz39EWOqjEY91-Ba6BogftmG0t84hkkHt0RLCxbVUIz",
                                                    "width" : 3024
                                                 }
                                              ],
                                              "place_id" : "ChIJwW9KZjMk9o4Rc67jlAIaO3o",
                                              "plus_code" : {
                                                 "compound_code" : "9GRC+97 Cartagena Province, Bolivar",
                                                 "global_code" : "77269GRC+97"
                                              },
                                              "rating" : 3.9,
                                              "reference" : "ChIJwW9KZjMk9o4Rc67jlAIaO3o",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 8
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cra. 57a, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3867665,
                                                    "lng" : -75.4854016
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38811707989272,
                                                       "lng" : -75.48411627010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38541742010728,
                                                       "lng" : -75.48681592989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Primitivo Restaurante Bar",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 3024,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/113029961507770873140\"\u003ewilliam de la espriella guardo\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEDd8rirkLoIFTJmEbaT6_aHbIRXBCxo9jE9qQDWapNd3tcHs2Gzn-BjZDqsBt9XzlnRKSTkDHSsircnNpewO_vl8mLP2h368FwOoyqJ3iyLO19suzjrSccFfO5Pnq9W2hiYDGA2tZvj7WqZfdYWaj4otNNV8Rk-H1QoTwCfxtAKlBfk",
                                                    "width" : 4032
                                                 }
                                              ],
                                              "place_id" : "ChIJlXNtpH0l9o4R9G1FUr1fKpk",
                                              "plus_code" : {
                                                 "compound_code" : "9GP7+PR Cartagena Province, Bolivar",
                                                 "global_code" : "77269GP7+PR"
                                              },
                                              "rating" : 4,
                                              "reference" : "ChIJlXNtpH0l9o4R9G1FUr1fKpk",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 77
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cartagena, Cartagena Province, Bolivar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3849285,
                                                    "lng" : -75.48267079999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38627177989272,
                                                       "lng" : -75.48130217010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38357212010728,
                                                       "lng" : -75.48400182989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Mia De La Mar",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 1386,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/114264447641397872885\"\u003eMarlin Iliana Thorrens Arias\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEASo6SwplXkiB59WIEUA4tk2giXiVXlha1ChkT-_t2M-ITWGPtzG924cIM-_YVsB2XFbjED1FTi-xwBiDI8nofm7HSMGxriJl_S5TzJvvPwspqjdZ4pSQDoJjalSVmaSxnHK7h0mBKT1cD325yNxASIgZc4_UeCxnU2GsRl9UScd4t2",
                                                    "width" : 1386
                                                 }
                                              ],
                                              "place_id" : "ChIJLSu46tIl9o4RdSk0z63Vl9Q",
                                              "plus_code" : {
                                                 "compound_code" : "9GM8+XW Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM8+XW"
                                              },
                                              "rating" : 5,
                                              "reference" : "ChIJLSu46tIl9o4RdSk0z63Vl9Q",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 4
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cl. 19, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.381756,
                                                    "lng" : -75.48542429999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38308512989272,
                                                       "lng" : -75.48408252010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38038547010728,
                                                       "lng" : -75.48678217989271
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "La Picada Parrilla Express",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 960,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/108013692291407457643\"\u003eGisseth&#39; Diaz\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEDK2brsPCkoqQTqKappAT0Wy36zYRAkpOxGPHjLy1NpL0DDj_5OeNeKWucuDhe9U-Lvegv7mYDTBQT1Top71nlBYhEgLWNrt-AkhHWfCdRvsBG71pinfQuZ0xjs2OxgUD4nLTs-suf_5u_m-bBfMTlLUeuCA3N5umwS_EyqGEHrpgE",
                                                    "width" : 1280
                                                 }
                                              ],
                                              "place_id" : "ChIJLwyGr60l9o4RybYd2GRccxk",
                                              "plus_code" : {
                                                 "compound_code" : "9GJ7+PR Cartagena Province, Bolivar",
                                                 "global_code" : "77269GJ7+PR"
                                              },
                                              "rating" : 4.5,
                                              "reference" : "ChIJLwyGr60l9o4RybYd2GRccxk",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 60
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "a 25-57, Cra. 70 #25-1, Cartagena de Indias, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3867984,
                                                    "lng" : -75.4827133
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38812647989272,
                                                       "lng" : -75.48131737010729
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38542682010728,
                                                       "lng" : -75.48401702989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Restaurante La Esquina Del Salvaje",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 2976,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/118125807707244457231\"\u003eHugo Miguel Narvaez Fuentes\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uECS0-tTKEYGxZ0s93twytXPx2jgfRJiyRICZ7DQ2055SJsARJr68do4ez0aaiydAyFx-a12DOvefabYOy-BwfgJUVwsskFKWG80KXPSP5Uey4jPxY-qD1dtXnE581Y5yPqe7Hc_5-I1V3F1wdUTUUdjmlW6vcOWxAtqM6CEkoJ5eoHD",
                                                    "width" : 3968
                                                 }
                                              ],
                                              "place_id" : "ChIJ6RYdZ80l9o4Rd73Duq7m6b4",
                                              "plus_code" : {
                                                 "compound_code" : "9GP8+PW Cartagena Province, Bolivar",
                                                 "global_code" : "77269GP8+PW"
                                              },
                                              "rating" : 2,
                                              "reference" : "ChIJ6RYdZ80l9o4Rd73Duq7m6b4",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 1
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cl. de la Sierpe ## 29 -09, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4213029,
                                                    "lng" : -75.54655509999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42265132989272,
                                                       "lng" : -75.54516827010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.41995167010728,
                                                       "lng" : -75.54786792989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Sierpe Cocina Caribe",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 2795,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/108757385286857485673\"\u003eA Google User\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uECISNPRECz5XeYTi_N03coiqW_-sbysiniosZU3u2HTnDIoU3H7pGIzExcZWMC3oDCIDH_Y0M-N-o7b02MV1_X_agb_ZSpMjR0jssWsjEIsG64L8dZur9hkCwCQdaZkV8OvWGkGziUhg0OQHc2G7b4QPlyXPyJoVIBqGmcaws44PG6M",
                                                    "width" : 4192
                                                 }
                                              ],
                                              "place_id" : "ChIJgeZb85kv9o4RGOR9amYFTCI",
                                              "plus_code" : {
                                                 "compound_code" : "CFC3+G9 Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFC3+G9"
                                              },
                                              "price_level" : 2,
                                              "rating" : 4.7,
                                              "reference" : "ChIJgeZb85kv9o4RGOR9amYFTCI",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 306
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cl. del Quero #9 58, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4262482,
                                                    "lng" : -75.54676309999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42763442989272,
                                                       "lng" : -75.54542197010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.42493477010728,
                                                       "lng" : -75.54812162989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "La Mulata",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 4608,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/118422320360439637918\"\u003eKatherin Macias\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEA0N77uoRarMaVHyQwO1GY4bhdGPh3xqX6WZ-9J8mvVPpSNLi-tVQEMa9NXbM9NjzXCcEnjCSNpDPr0Cc5UjtVCWKZArv91isbDIjIHCkpIYXEOesn5lyL-sNuR5qfeWGb1LBD4lviP6X5KkOyhswd8y6Xdr9AREbAYYce_RR5noHhM",
                                                    "width" : 3456
                                                 }
                                              ],
                                              "place_id" : "ChIJFQCEwJ4v9o4R1aXbcGakt0w",
                                              "plus_code" : {
                                                 "compound_code" : "CFG3+F7 Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFG3+F7"
                                              },
                                              "price_level" : 2,
                                              "rating" : 4.6,
                                              "reference" : "ChIJFQCEwJ4v9o4R1aXbcGakt0w",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 3807
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Calle Stuart por el hotel Santa Clara Calle 39 #7 14, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4279986,
                                                    "lng" : -75.5481858
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42934182989272,
                                                       "lng" : -75.54683672010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.42664217010728,
                                                       "lng" : -75.54953637989271
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "La Cevichería",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 2976,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/115316972287435534605\"\u003eאנוור מנס\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uED2Md5WQ3mJHAfnlIdBSlVo9uLd9tABuBhmfZDVt9Xk1fmU6UEEc8hieggvsM4NhvpeQbCYlJyrFWrJLi_tJumjigFfDzI4x3I0PvO_RKdqt67t543Zzj53CuUijbOIhF5SNxBNotzVMPuHsXhdsPr1aAz43rMtwmRL7sCAuzP4CXDy",
                                                    "width" : 2976
                                                 }
                                              ],
                                              "place_id" : "ChIJAaTc1Zgv9o4R1Z7jNKRy52Q",
                                              "plus_code" : {
                                                 "compound_code" : "CFH2+5P Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFH2+5P"
                                              },
                                              "price_level" : 3,
                                              "rating" : 4.3,
                                              "reference" : "ChIJAaTc1Zgv9o4R1Z7jNKRy52Q",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 1982
                                           },
                                           {
                                              "business_status" : "CLOSED_TEMPORARILY",
                                              "formatted_address" : "Cra. 71 #21-1, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3835454,
                                                    "lng" : -75.4831635
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38489207989272,
                                                       "lng" : -75.48180842010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38219242010728,
                                                       "lng" : -75.48450807989272
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Asado y Comidas Rapida De Farra",
                                              "permanently_closed" : true,
                                              "place_id" : "ChIJRayhdtMl9o4R1_Qun3pK3-s",
                                              "plus_code" : {
                                                 "compound_code" : "9GM8+CP Cartagena Province, Bolivar",
                                                 "global_code" : "77269GM8+CP"
                                              },
                                              "rating" : 0,
                                              "reference" : "ChIJRayhdtMl9o4R1_Qun3pK3-s",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 0
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Distrito Turístico Y Cultural, Cl. 30 #30-01, Cartagena de Indias, Cartagena, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3894092,
                                                    "lng" : -75.48148999999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.39077892989272,
                                                       "lng" : -75.48013277010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38807927010728,
                                                       "lng" : -75.48283242989271
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Parrilla Express La Llamita",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 4608,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/111087865410910936167\"\u003eNestor Rafael Baleta Iriarte\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEBefFKhZ-vwmMOqsEh34l7ivX1YB51gCAJAiH6rO2R9t6DqduBcvBSwS3a-196cESiqOBH_rmynkn4b-BzebMZoiUQ0FR_HsQOqSrdDV6U3U7XO5w-lndfUc-JHZabZ5HzM87y_lgcKUyFZ53xm2zyLA9yd1uLu5YWxyRx8m5z3YPXm",
                                                    "width" : 3456
                                                 }
                                              ],
                                              "place_id" : "ChIJpZNO0cwl9o4RTI04LjHqAKA",
                                              "plus_code" : {
                                                 "compound_code" : "9GQ9+P9 Cartagena Province, Bolivar",
                                                 "global_code" : "77269GQ9+P9"
                                              },
                                              "price_level" : 2,
                                              "rating" : 4.4,
                                              "reference" : "ChIJpZNO0cwl9o4RTI04LjHqAKA",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 350
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cra. 68 #22b55, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3856888,
                                                    "lng" : -75.48586109999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38703242989272,
                                                       "lng" : -75.48446852010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38433277010728,
                                                       "lng" : -75.48716817989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "La Cocina de Oma",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 1200,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/113538705405929946716\"\u003eKaren Sofia Morales Garcia\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEADdJ2KilwxPx9V_OTuhGPgAvMY4V7X_4zgCm8A3ysm0x5Cm_SS435LyHnMEy2ICNxK6I0jd3Ri6E0Wqm74-XSOMj_J0JkSI7L4FovpyW7VmPZ1pceuKHwYEgBlmpS9abcfIZy1nWlPPj8GozMz4nDX93OPG-L4fi_TWa-WWP83XJQu",
                                                    "width" : 1200
                                                 }
                                              ],
                                              "place_id" : "ChIJrYusIC0l9o4RCIn0fO0TzJA",
                                              "plus_code" : {
                                                 "compound_code" : "9GP7+7M Cartagena Province, Bolivar",
                                                 "global_code" : "77269GP7+7M"
                                              },
                                              "rating" : 5,
                                              "reference" : "ChIJrYusIC0l9o4RCIn0fO0TzJA",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 1
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Calle de Las Carretas No. 34 - 10 Plaza de Los Coches, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4232096,
                                                    "lng" : -75.54928749999999
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42457597989272,
                                                       "lng" : -75.54802772010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.42187632010728,
                                                       "lng" : -75.55072737989271
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "DKP Restaurante Bar",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 3000,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/106497819929156995054\"\u003eIvan Torregroza\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEA8grmwdzPX2QOHRkQCu2tXB0puGT51kj0oJZoa1pj0fS9dchTTevdCjj7LTtU5AMpL510tdW9YhaWxqoYGQLJ6T09TGDOvx8037RPADcspqRpWfRwRJuviWRiV07w9MiKxEMjJwcjl_2hoACeH6TprU_gkHu7bdk2pm0aG-qOBtpEt",
                                                    "width" : 4000
                                                 }
                                              ],
                                              "place_id" : "ChIJd8Tnr3Uv9o4RdIzlOYVs1u4",
                                              "plus_code" : {
                                                 "compound_code" : "CFF2+77 Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFF2+77"
                                              },
                                              "rating" : 4.5,
                                              "reference" : "ChIJd8Tnr3Uv9o4RdIzlOYVs1u4",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 251
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cra. 71 #23-175 #23- a, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.3863756,
                                                    "lng" : -75.4822623
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.38770742989272,
                                                       "lng" : -75.48085992010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.38500777010728,
                                                       "lng" : -75.48355957989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "RESTAURANTE HUAYANG CHINA",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 2976,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/118125807707244457231\"\u003eHugo Miguel Narvaez Fuentes\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEAYEA55hr-vbIHZlbkuhZJT4sheUK1YUnBvoXJ6MglKd8ovX3UFpL-qVOhhKMAlqe7rnfVyAbKF_Idn8J5oM43GBwzRD1RrSnkgakl5o0s6Hy7S8fw0xfr3EnxTc8p-LGhZcyKIxt_jv0Z2QPs50b_ikyPKN_GdN54HlV8nkoKR-bD_",
                                                    "width" : 3968
                                                 }
                                              ],
                                              "place_id" : "ChIJr3VqX80l9o4RBXw8cfeZXMs",
                                              "plus_code" : {
                                                 "compound_code" : "9GP9+H3 Cartagena Province, Bolivar",
                                                 "global_code" : "77269GP9+H3"
                                              },
                                              "rating" : 4.5,
                                              "reference" : "ChIJr3VqX80l9o4RBXw8cfeZXMs",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 39
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "hotel casa lola, calle del guerrrero 29-118, Cartagena de Indias, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4217482,
                                                    "lng" : -75.545292
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42309282989272,
                                                       "lng" : -75.54399657010728
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.42039317010728,
                                                       "lng" : -75.54669622989273
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "DOÑA LOLA comida del caribe",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 1364,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/104533459201385391494\"\u003eKathryn Anderson\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uEAQW1-PvSyYFyc7RvFmL2sDLmhXCQmzZMEVKi1siNHxy5uUUeTLfYe6LTpmSZ-C7i1YZZVr1p46ur8YKiKHn1CeW8CvQBRPzYSVKudx_3ZTIzZTn2vr_oh7JLHiaxd-pqcTty6DGOmJk-MN2InCaxxC65ovsLkxHm_ZAUmalZrPGhaU",
                                                    "width" : 2038
                                                 }
                                              ],
                                              "place_id" : "ChIJW7yH4Gov9o4RSEZ-TuAeT2o",
                                              "plus_code" : {
                                                 "compound_code" : "CFC3+MV Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFC3+MV"
                                              },
                                              "rating" : 4.5,
                                              "reference" : "ChIJW7yH4Gov9o4RSEZ-TuAeT2o",
                                              "types" : [ "restaurant", "bar", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 565
                                           },
                                           {
                                              "business_status" : "OPERATIONAL",
                                              "formatted_address" : "Cra. 7 ##36-19, Cartagena de Indias, Provincia de Cartagena, Bolívar, Colombia",
                                              "geometry" : {
                                                 "location" : {
                                                    "lat" : 10.4254758,
                                                    "lng" : -75.54867620000002
                                                 },
                                                 "viewport" : {
                                                    "northeast" : {
                                                       "lat" : 10.42681787989272,
                                                       "lng" : -75.54729942010727
                                                    },
                                                    "southwest" : {
                                                       "lat" : 10.42411822010728,
                                                       "lng" : -75.54999907989271
                                                    }
                                                 }
                                              },
                                              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
                                              "icon_background_color" : "#FF9E67",
                                              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
                                              "name" : "Pezetarian Cartagena",
                                              "opening_hours" : {
                                                 "open_now" : true
                                              },
                                              "photos" : [
                                                 {
                                                    "height" : 3024,
                                                    "html_attributions" : [
                                                       "\u003ca href=\"https://maps.google.com/maps/contrib/111493255642827507845\"\u003eTsun Ho\u003c/a\u003e"
                                                    ],
                                                    "photo_reference" : "Aap_uECC6ilJ-xGaUnM1-HUADfdc6Ufa-06q9cV-S693feI6htZK1KIfksE1a23nJcX2LBXI4hbUMhOFdJUWy5DVkdiXds3h22KeYqyiNaeRRUAQB0Y7xpaU-OgD7tXreNvU1Mo6kfg2DJvtVeLqrvXYjpBBshQyUemx2PxAlbLhYBkWS-E7",
                                                    "width" : 4032
                                                 }
                                              ],
                                              "place_id" : "ChIJo3J4BZ8v9o4RzVJNu4UpCfQ",
                                              "plus_code" : {
                                                 "compound_code" : "CFG2+5G Cartagena Province, Bolivar",
                                                 "global_code" : "7726CFG2+5G"
                                              },
                                              "price_level" : 2,
                                              "rating" : 4.6,
                                              "reference" : "ChIJo3J4BZ8v9o4RzVJNu4UpCfQ",
                                              "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
                                              "user_ratings_total" : 1127
                                           }
                                        ],
                                        "status" : "OK"
                                     }
                                }
                            }
                        }
                    },
                    security: [
                        {
                          'bearerAuth': []
                        }
                    ]
                }
              }
          },
          components:{
            schemas: {
                log: {
                    type: 'object',
                    properties: {
                      email: {
                        type: 'string',
                        example: 'example@correo.com',
                        description: 'User email'
                      },
                      pass: {
                        type: 'string',
                        example: 'pass',
                        description: 'User password'
                      }
                    }
                },
                user: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'example@correo.com',
                            description: 'User email'
                        },
                        password:{
                            type: 'string',
                            example: 'pass',
                            description: 'User passworsd'
                        },
                        name: {
                            type: 'string',
                            example: 'User',
                            description: 'User name'
                        },
                        lastname: {
                            type: 'string',
                            example: 'Test',
                            description: 'User lastname'
                        },
                        direction: {
                            type: 'string',
                            example: 'Calle x Cra y N° z',
                            description: 'User directions list'
                        }
                    }
                },
                transaction: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'example@correo.com',
                            description: 'Any user email'
                        },
                        date:{
                            type: 'string',
                            example: '11/6/2022, 5:05:49 p. m.',
                            description: 'date of transaction'
                        },
                        description:{
                            type: 'string',
                            example: '/account/log',
                            description: 'endpoint of transaction'
                        }
                    }
                },
                transactions: {
                    type: 'array',
                    items:{
                        type: 'object'
                    },
                    example: [
                        {
                            email: 'example@correo.com',
                            date: '11/6/2022, 5:05:49 p. m.',
                            description: '/account/log'
                        }
                    ]
                }
            },
            securitySchemes: {
                bearerAuth: {
                  type: 'http',
                  scheme: 'bearer',
                  bearerFormat: 'jwt'
                }
              }
          }
    },
    apis: ['./src/routes/*.js']
};

module.exports = swaggerOptions
