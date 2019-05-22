const json = {
    "identifier": "System",
    "subviews": [
      {
        "class": "StackView",
        "classNames": [
          "container"
        ],
        "subviews": [
          {
            "class": "StackView",
            "classNames": [
              "columns",
              "container"
            ],
            "subviews": [
              {
                "class": "StackView",
                "classNames": [
                  "column",
                  "container"
                ],
                "subviews": [
                  {
                    "class": "Box",
                    "label": {
                      "text": {
                        "text": "Display"
                      }
                    },
                    "contentView": {
                      "subviews": [
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Video mode"
                            }
                          },
                          "control": {
                            "class": "VideoModeSelect",
                            "identifier": "videoMode"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "High DPI (4K)"
                            }
                          },
                          "control": {
                            "class": "CvarCheckbox",
                            "var": "r_allow_high_dpi"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Window mode"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "windowMode",
                            "var": "r_fullscreen"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Vertical sync"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "verticalSync",
                            "var": "r_swap_interval"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Frame limiter"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0,
                            "max": 250,
                            "step": 5,
                            "var": "cl_max_fps"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "class": "Box",
                    "label": {
                      "text": {
                        "text": "Rendering"
                      }
                    },
                    "contentView": {
                      "subviews": [
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Texture mode"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "textureMode",
                            "expectsStringValue": true,
                            "var": "r_texture_mode"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Anisotropy"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "anisotropy",
                            "var": "r_anisotropy"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Multisample"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "multisample",
                            "var": "r_multisample"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Supersample"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "supersample",
                            "var": "r_supersample"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "class": "StackView",
                "classNames": [
                  "column",
                  "container"
                ],
                "subviews": [
                  {
                    "class": "Box",
                    "label": {
                      "text": {
                        "text": "Picture"
                      }
                    },
                    "contentView": {
                      "subviews": [
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Brightness"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_brightness"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Contrast"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_contrast"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Gamma"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_gamma"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Modulate"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 1,
                            "max": 5,
                            "var": "r_modulate"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Bumpmapping"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_bumpmap"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Hardness"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_hardness"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Specular"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_specular"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Parallax"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0.1,
                            "max": 2,
                            "var": "r_parallax"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "class": "StackView",
                "classNames": [
                  "column",
                  "container"
                ],
                "subviews": [
                  {
                    "class": "Box",
                    "label": {
                      "text": {
                        "text": "Sound"
                      }
                    },
                    "contentView": {
                      "subviews": [
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Master"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0,
                            "max": 1,
                            "var": "s_volume"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Effects"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0,
                            "max": 1,
                            "var": "s_effects_volume"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Ambient"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0,
                            "max": 1,
                            "var": "s_ambient_volume"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Music"
                            }
                          },
                          "control": {
                            "class": "CvarSlider",
                            "min": 0,
                            "max": 1,
                            "var": "s_music_volume"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Reverse stereo"
                            }
                          },
                          "control": {
                            "class": "CvarCheckbox",
                            "var": "s_reverse"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "class": "Box",
                    "label": {
                      "text": {
                        "text": "Network"
                      }
                    },
                    "contentView": {
                      "subviews": [
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Connection speed"
                            }
                          },
                          "control": {
                            "class": "CvarSelect",
                            "identifier": "rate",
                            "var": "rate"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Download maps"
                            }
                          },
                          "control": {
                            "class": "CvarCheckbox",
                            "var": "cl_download_maps"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Download models"
                            }
                          },
                          "control": {
                            "class": "CvarCheckbox",
                            "var": "cl_download_models"
                          }
                        },
                        {
                          "class": "Input",
                          "label": {
                            "text": {
                              "text": "Network graph"
                            }
                          },
                          "control": {
                            "class": "CvarCheckbox",
                            "var": "cl_draw_net_graph"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          {
            "class": "StackView",
            "classNames": [
              "accessoryView",
              "container"
            ],
            "subviews": [
              {
                "class": "Button",
                "identifier": "apply",
                "title": {
                  "text": "Apply"
                }
              }
            ]
          }
        ]
      }
    ]
  }

  
  // interface.setPrompt(`Welcome to the CLI Selector, please type in your selector. (Only supports class, classNames, and ids.)\nType in Q to Quit!\n`);
  // interface.prompt();
  // interface.on('resume', () => {
      //     console.log("Selector: ");
      // })
      
    //   const interface = require('readline').createInterface({input: process.stdin,
    //     output: process.stdout
    //   })
    //   interface.question(`Welcome to the CLI Selector, please type in your selector. (Only supports class, classNames, and ids.)\n`, (selector) => {
    //           console.log(searchFunction(selector, json).length)
    //           interface.close();
    // })

const inquirer = require('inquirer') // CLI prompts using inquirer

var questions = [{
  type: 'input',
  name: 'selector',
  message: "Welcome to the CLI Selector, please type in your selector.(Only supports class, classNames, and ids.)\n",
}]

inquirer.prompt(questions).then(answers => {
  console.log(searchFunction(answers['selector'], json))
  // console.log("\nNumber of Results - "+searchFunction(answers['selector'], json).length)
})
    
  
    const searchFunction = (searchString, view) => {
      let viewsThatMatchCondition = [] // result will be an array of all the matching view objects
      if (checkIfMatchesCondition(searchString, view)) { // turn view if matching
        return [view]
      } else { // else move into either subview or contentview
        let subviews = []
        if (view.subviews !== undefined)
          subviews = view.subviews
        else if (view.contentView !== undefined && view.contentView.subviews !== undefined)
          subviews = view.contentView.subviews
    
        subviews.forEach(subView => {
          viewsThatMatchCondition = viewsThatMatchCondition.concat(searchFunction(searchString, subView))
        }) // go through every subview or contentview and concat the resulting array
      }
      return viewsThatMatchCondition;
    }
    
    const checkIfMatchesCondition = (searchString, view) => {
      if(searchString[0] === '.' && view.classNames){ // className condition
            let className = searchString.substr(1,searchString.length);
            return view.classNames.includes(className);
      } else if (searchString[0] === '#' && (view.identifier || view.control)){ // id condition
          let id = searchString.substr(1,searchString.length);
          // if(view.control && view.control.identifier){
          //     return id === view.control.identifier
          // } else {
          //     return id === view.identifier
          // }
          if (view.identifier && (id === view.identifier)) {
            return true
          }
          else if(view.control && view.control.identifier){
              return id === (view.control.identifier)
           }  
      } 
        else if(searchString[0] !== '.' && searchString[0] !== '#' && (view.class || view.control)){ // class condition 
          if (view.class && (searchString === view.class)) {
            return true
          }
          else if(view.control && view.control.class){
              return searchString === (view.control.class)
           }  
        }
 }