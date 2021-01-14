require('dotenv').config();


// Setup and initialize the translator block
const getLanguageTranslator = () => {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;
    
    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');
    
    const languageTranslator = new LanguageTranslatorV3({
      version: '2018-05-01',
      authenticator: new IamAuthenticator({
        apikey: api_key,
      }),
      serviceUrl: api_url,
    });
    return languageTranslator;
}

// Declare translate function with text-to-translate and
// Model ID (language pair to work with) as parameters 
const translate = (textToTranslate, modelId, res) => {
    let languageTranslator = getLanguageTranslator();
    const translateParams = {
      text: textToTranslate,
      modelId
    };
        
    languageTranslator.translate(translateParams)
        .then(translationResult => {
            res.send(translationResult.result.translations[0].translation);
        })
        .catch(err => {
            res.send(err.toString());
        });
}
  
// Declare language pair producing function 
// NOTE: NOT ESSENTIAL FOR THIS PROGRAM TO RUN
// COULD BE USED TO LIST ALL AVAILABLE LANGUAGE PAIRS 
const getLanguages = (res) => {
    let languageTranslator = getLanguageTranslator();
    languageTranslator.listModels()
        .then(translationModels => {
            let models = translationModels.result.models;
            let modelNames = models.map((model)=>{
            return model.name
        });
        res.send(modelNames);
        })
        .catch(err => {
        res.send(err.toString());
        });
}
  


// List all "workable" available language pairs 
exports.language_pairs = (req,res) => {
    getLanguages(res);
  }


// Perform translation
exports.translator = (req,res) => {
    let textToTranslate = req.query.textToTranslate;
    let modelId = req.query.modelId 
    translate(textToTranslate, modelId, res); 
  }