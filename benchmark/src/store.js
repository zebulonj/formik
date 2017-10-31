import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  giganticReducer,
  form: reduxFormReducer, // mounted under "form"
});
const store = createStore(reducer);

export default store;

function giganticReducer(state = 0, action) {
  switch (action.type) {
    case 'DUMMY_ACTION_1':
      return state + 1;
    case 'DUMMY_ACTION_2':
      return state + 2;
    case 'DUMMY_ACTION_3':
      return state + 3;
    case 'DUMMY_ACTION_4':
      return state + 4;
    case 'DUMMY_ACTION_5':
      return state + 5;
    case 'DUMMY_ACTION_6':
      return state + 6;
    case 'DUMMY_ACTION_7':
      return state + 7;
    case 'DUMMY_ACTION_8':
      return state + 8;
    case 'DUMMY_ACTION_9':
      return state + 9;
    case 'DUMMY_ACTION_10':
      return state + 0;
    case 'DUMMY_ACTION_11':
      return state + 1;
    case 'DUMMY_ACTION_12':
      return state + 2;
    case 'DUMMY_ACTION_13':
      return state + 3;
    case 'DUMMY_ACTION_14':
      return state + 4;
    case 'DUMMY_ACTION_15':
      return state + 5;
    case 'DUMMY_ACTION_16':
      return state + 6;
    case 'DUMMY_ACTION_17':
      return state + 7;
    case 'DUMMY_ACTION_18':
      return state + 8;
    case 'DUMMY_ACTION_19':
      return state + 9;
    case 'DUMMY_ACTION_20':
      return state + 0;
    case 'DUMMY_ACTION_21':
      return state + 1;
    case 'DUMMY_ACTION_22':
      return state + 2;
    case 'DUMMY_ACTION_23':
      return state + 3;
    case 'DUMMY_ACTION_24':
      return state + 4;
    case 'DUMMY_ACTION_25':
      return state + 5;
    case 'DUMMY_ACTION_26':
      return state + 6;
    case 'DUMMY_ACTION_27':
      return state + 7;
    case 'DUMMY_ACTION_28':
      return state + 8;
    case 'DUMMY_ACTION_29':
      return state + 9;
    case 'DUMMY_ACTION_30':
      return state + 0;
    case 'DUMMY_ACTION_31':
      return state + 1;
    case 'DUMMY_ACTION_32':
      return state + 2;
    case 'DUMMY_ACTION_33':
      return state + 3;
    case 'DUMMY_ACTION_34':
      return state + 4;
    case 'DUMMY_ACTION_35':
      return state + 5;
    case 'DUMMY_ACTION_36':
      return state + 6;
    case 'DUMMY_ACTION_37':
      return state + 7;
    case 'DUMMY_ACTION_38':
      return state + 8;
    case 'DUMMY_ACTION_39':
      return state + 9;
    case 'DUMMY_ACTION_40':
      return state + 0;
    case 'DUMMY_ACTION_41':
      return state + 1;
    case 'DUMMY_ACTION_42':
      return state + 2;
    case 'DUMMY_ACTION_43':
      return state + 3;
    case 'DUMMY_ACTION_44':
      return state + 4;
    case 'DUMMY_ACTION_45':
      return state + 5;
    case 'DUMMY_ACTION_46':
      return state + 6;
    case 'DUMMY_ACTION_47':
      return state + 7;
    case 'DUMMY_ACTION_48':
      return state + 8;
    case 'DUMMY_ACTION_49':
      return state + 9;
    case 'DUMMY_ACTION_50':
      return state + 0;
    case 'DUMMY_ACTION_51':
      return state + 1;
    case 'DUMMY_ACTION_52':
      return state + 2;
    case 'DUMMY_ACTION_53':
      return state + 3;
    case 'DUMMY_ACTION_54':
      return state + 4;
    case 'DUMMY_ACTION_55':
      return state + 5;
    case 'DUMMY_ACTION_56':
      return state + 6;
    case 'DUMMY_ACTION_57':
      return state + 7;
    case 'DUMMY_ACTION_58':
      return state + 8;
    case 'DUMMY_ACTION_59':
      return state + 9;
    case 'DUMMY_ACTION_60':
      return state + 0;
    case 'DUMMY_ACTION_61':
      return state + 1;
    case 'DUMMY_ACTION_62':
      return state + 2;
    case 'DUMMY_ACTION_63':
      return state + 3;
    case 'DUMMY_ACTION_64':
      return state + 4;
    case 'DUMMY_ACTION_65':
      return state + 5;
    case 'DUMMY_ACTION_66':
      return state + 6;
    case 'DUMMY_ACTION_67':
      return state + 7;
    case 'DUMMY_ACTION_68':
      return state + 8;
    case 'DUMMY_ACTION_69':
      return state + 9;
    case 'DUMMY_ACTION_70':
      return state + 0;
    case 'DUMMY_ACTION_71':
      return state + 1;
    case 'DUMMY_ACTION_72':
      return state + 2;
    case 'DUMMY_ACTION_73':
      return state + 3;
    case 'DUMMY_ACTION_74':
      return state + 4;
    case 'DUMMY_ACTION_75':
      return state + 5;
    case 'DUMMY_ACTION_76':
      return state + 6;
    case 'DUMMY_ACTION_77':
      return state + 7;
    case 'DUMMY_ACTION_78':
      return state + 8;
    case 'DUMMY_ACTION_79':
      return state + 9;
    case 'DUMMY_ACTION_80':
      return state + 0;
    case 'DUMMY_ACTION_81':
      return state + 1;
    case 'DUMMY_ACTION_82':
      return state + 2;
    case 'DUMMY_ACTION_83':
      return state + 3;
    case 'DUMMY_ACTION_84':
      return state + 4;
    case 'DUMMY_ACTION_85':
      return state + 5;
    case 'DUMMY_ACTION_86':
      return state + 6;
    case 'DUMMY_ACTION_87':
      return state + 7;
    case 'DUMMY_ACTION_88':
      return state + 8;
    case 'DUMMY_ACTION_89':
      return state + 9;
    case 'DUMMY_ACTION_90':
      return state + 0;
    case 'DUMMY_ACTION_91':
      return state + 1;
    case 'DUMMY_ACTION_92':
      return state + 2;
    case 'DUMMY_ACTION_93':
      return state + 3;
    case 'DUMMY_ACTION_94':
      return state + 4;
    case 'DUMMY_ACTION_95':
      return state + 5;
    case 'DUMMY_ACTION_96':
      return state + 6;
    case 'DUMMY_ACTION_97':
      return state + 7;
    case 'DUMMY_ACTION_98':
      return state + 8;
    case 'DUMMY_ACTION_99':
      return state + 9;
    case 'DUMMY_ACTION_100':
      return state + 0;
    case 'DUMMY_ACTION_101':
      return state + 1;
    case 'DUMMY_ACTION_102':
      return state + 2;
    case 'DUMMY_ACTION_103':
      return state + 3;
    case 'DUMMY_ACTION_104':
      return state + 4;
    case 'DUMMY_ACTION_105':
      return state + 5;
    case 'DUMMY_ACTION_106':
      return state + 6;
    case 'DUMMY_ACTION_107':
      return state + 7;
    case 'DUMMY_ACTION_108':
      return state + 8;
    case 'DUMMY_ACTION_109':
      return state + 9;
    case 'DUMMY_ACTION_110':
      return state + 0;
    case 'DUMMY_ACTION_111':
      return state + 1;
    case 'DUMMY_ACTION_112':
      return state + 2;
    case 'DUMMY_ACTION_113':
      return state + 3;
    case 'DUMMY_ACTION_114':
      return state + 4;
    case 'DUMMY_ACTION_115':
      return state + 5;
    case 'DUMMY_ACTION_116':
      return state + 6;
    case 'DUMMY_ACTION_117':
      return state + 7;
    case 'DUMMY_ACTION_118':
      return state + 8;
    case 'DUMMY_ACTION_119':
      return state + 9;
    case 'DUMMY_ACTION_120':
      return state + 0;
    case 'DUMMY_ACTION_121':
      return state + 1;
    case 'DUMMY_ACTION_122':
      return state + 2;
    case 'DUMMY_ACTION_123':
      return state + 3;
    case 'DUMMY_ACTION_124':
      return state + 4;
    case 'DUMMY_ACTION_125':
      return state + 5;
    case 'DUMMY_ACTION_126':
      return state + 6;
    case 'DUMMY_ACTION_127':
      return state + 7;
    case 'DUMMY_ACTION_128':
      return state + 8;
    case 'DUMMY_ACTION_129':
      return state + 9;
    case 'DUMMY_ACTION_130':
      return state + 0;
    case 'DUMMY_ACTION_131':
      return state + 1;
    case 'DUMMY_ACTION_132':
      return state + 2;
    case 'DUMMY_ACTION_133':
      return state + 3;
    case 'DUMMY_ACTION_134':
      return state + 4;
    case 'DUMMY_ACTION_135':
      return state + 5;
    case 'DUMMY_ACTION_136':
      return state + 6;
    case 'DUMMY_ACTION_137':
      return state + 7;
    case 'DUMMY_ACTION_138':
      return state + 8;
    case 'DUMMY_ACTION_139':
      return state + 9;
    case 'DUMMY_ACTION_140':
      return state + 0;
    case 'DUMMY_ACTION_141':
      return state + 1;
    case 'DUMMY_ACTION_142':
      return state + 2;
    case 'DUMMY_ACTION_143':
      return state + 3;
    case 'DUMMY_ACTION_144':
      return state + 4;
    case 'DUMMY_ACTION_145':
      return state + 5;
    case 'DUMMY_ACTION_146':
      return state + 6;
    case 'DUMMY_ACTION_147':
      return state + 7;
    case 'DUMMY_ACTION_148':
      return state + 8;
    case 'DUMMY_ACTION_149':
      return state + 9;
    case 'DUMMY_ACTION_150':
      return state + 0;
    case 'DUMMY_ACTION_151':
      return state + 1;
    case 'DUMMY_ACTION_152':
      return state + 2;
    case 'DUMMY_ACTION_153':
      return state + 3;
    case 'DUMMY_ACTION_154':
      return state + 4;
    case 'DUMMY_ACTION_155':
      return state + 5;
    case 'DUMMY_ACTION_156':
      return state + 6;
    case 'DUMMY_ACTION_157':
      return state + 7;
    case 'DUMMY_ACTION_158':
      return state + 8;
    case 'DUMMY_ACTION_159':
      return state + 9;
    case 'DUMMY_ACTION_160':
      return state + 0;
    case 'DUMMY_ACTION_161':
      return state + 1;
    case 'DUMMY_ACTION_162':
      return state + 2;
    case 'DUMMY_ACTION_163':
      return state + 3;
    case 'DUMMY_ACTION_164':
      return state + 4;
    case 'DUMMY_ACTION_165':
      return state + 5;
    case 'DUMMY_ACTION_166':
      return state + 6;
    case 'DUMMY_ACTION_167':
      return state + 7;
    case 'DUMMY_ACTION_168':
      return state + 8;
    case 'DUMMY_ACTION_169':
      return state + 9;
    case 'DUMMY_ACTION_170':
      return state + 0;
    case 'DUMMY_ACTION_171':
      return state + 1;
    case 'DUMMY_ACTION_172':
      return state + 2;
    case 'DUMMY_ACTION_173':
      return state + 3;
    case 'DUMMY_ACTION_174':
      return state + 4;
    case 'DUMMY_ACTION_175':
      return state + 5;
    case 'DUMMY_ACTION_176':
      return state + 6;
    case 'DUMMY_ACTION_177':
      return state + 7;
    case 'DUMMY_ACTION_178':
      return state + 8;
    case 'DUMMY_ACTION_179':
      return state + 9;
    case 'DUMMY_ACTION_180':
      return state + 0;
    case 'DUMMY_ACTION_181':
      return state + 1;
    case 'DUMMY_ACTION_182':
      return state + 2;
    case 'DUMMY_ACTION_183':
      return state + 3;
    case 'DUMMY_ACTION_184':
      return state + 4;
    case 'DUMMY_ACTION_185':
      return state + 5;
    case 'DUMMY_ACTION_186':
      return state + 6;
    case 'DUMMY_ACTION_187':
      return state + 7;
    case 'DUMMY_ACTION_188':
      return state + 8;
    case 'DUMMY_ACTION_189':
      return state + 9;
    case 'DUMMY_ACTION_190':
      return state + 0;
    case 'DUMMY_ACTION_191':
      return state + 1;
    case 'DUMMY_ACTION_192':
      return state + 2;
    case 'DUMMY_ACTION_193':
      return state + 3;
    case 'DUMMY_ACTION_194':
      return state + 4;
    case 'DUMMY_ACTION_195':
      return state + 5;
    case 'DUMMY_ACTION_196':
      return state + 6;
    case 'DUMMY_ACTION_197':
      return state + 7;
    case 'DUMMY_ACTION_198':
      return state + 8;
    case 'DUMMY_ACTION_199':
      return state + 9;
    case 'DUMMY_ACTION_200':
      return state + 0;
    case 'DUMMY_ACTION_201':
      return state + 1;
    case 'DUMMY_ACTION_202':
      return state + 2;
    case 'DUMMY_ACTION_203':
      return state + 3;
    case 'DUMMY_ACTION_204':
      return state + 4;
    case 'DUMMY_ACTION_205':
      return state + 5;
    case 'DUMMY_ACTION_206':
      return state + 6;
    case 'DUMMY_ACTION_207':
      return state + 7;
    case 'DUMMY_ACTION_208':
      return state + 8;
    case 'DUMMY_ACTION_209':
      return state + 9;
    case 'DUMMY_ACTION_210':
      return state + 0;
    case 'DUMMY_ACTION_211':
      return state + 1;
    case 'DUMMY_ACTION_212':
      return state + 2;
    case 'DUMMY_ACTION_213':
      return state + 3;
    case 'DUMMY_ACTION_214':
      return state + 4;
    case 'DUMMY_ACTION_215':
      return state + 5;
    case 'DUMMY_ACTION_216':
      return state + 6;
    case 'DUMMY_ACTION_217':
      return state + 7;
    case 'DUMMY_ACTION_218':
      return state + 8;
    case 'DUMMY_ACTION_219':
      return state + 9;
    case 'DUMMY_ACTION_220':
      return state + 0;
    case 'DUMMY_ACTION_221':
      return state + 1;
    case 'DUMMY_ACTION_222':
      return state + 2;
    case 'DUMMY_ACTION_223':
      return state + 3;
    case 'DUMMY_ACTION_224':
      return state + 4;
    case 'DUMMY_ACTION_225':
      return state + 5;
    case 'DUMMY_ACTION_226':
      return state + 6;
    case 'DUMMY_ACTION_227':
      return state + 7;
    case 'DUMMY_ACTION_228':
      return state + 8;
    case 'DUMMY_ACTION_229':
      return state + 9;
    case 'DUMMY_ACTION_230':
      return state + 0;
    case 'DUMMY_ACTION_231':
      return state + 1;
    case 'DUMMY_ACTION_232':
      return state + 2;
    case 'DUMMY_ACTION_233':
      return state + 3;
    case 'DUMMY_ACTION_234':
      return state + 4;
    case 'DUMMY_ACTION_235':
      return state + 5;
    case 'DUMMY_ACTION_236':
      return state + 6;
    case 'DUMMY_ACTION_237':
      return state + 7;
    case 'DUMMY_ACTION_238':
      return state + 8;
    case 'DUMMY_ACTION_239':
      return state + 9;
    case 'DUMMY_ACTION_240':
      return state + 0;
    case 'DUMMY_ACTION_241':
      return state + 1;
    case 'DUMMY_ACTION_242':
      return state + 2;
    case 'DUMMY_ACTION_243':
      return state + 3;
    case 'DUMMY_ACTION_244':
      return state + 4;
    case 'DUMMY_ACTION_245':
      return state + 5;
    case 'DUMMY_ACTION_246':
      return state + 6;
    case 'DUMMY_ACTION_247':
      return state + 7;
    case 'DUMMY_ACTION_248':
      return state + 8;
    case 'DUMMY_ACTION_249':
      return state + 9;
    case 'DUMMY_ACTION_250':
      return state + 0;
    case 'DUMMY_ACTION_251':
      return state + 1;
    case 'DUMMY_ACTION_252':
      return state + 2;
    case 'DUMMY_ACTION_253':
      return state + 3;
    case 'DUMMY_ACTION_254':
      return state + 4;
    case 'DUMMY_ACTION_255':
      return state + 5;
    case 'DUMMY_ACTION_256':
      return state + 6;
    case 'DUMMY_ACTION_257':
      return state + 7;
    case 'DUMMY_ACTION_258':
      return state + 8;
    case 'DUMMY_ACTION_259':
      return state + 9;
    case 'DUMMY_ACTION_260':
      return state + 0;
    case 'DUMMY_ACTION_261':
      return state + 1;
    case 'DUMMY_ACTION_262':
      return state + 2;
    case 'DUMMY_ACTION_263':
      return state + 3;
    case 'DUMMY_ACTION_264':
      return state + 4;
    case 'DUMMY_ACTION_265':
      return state + 5;
    case 'DUMMY_ACTION_266':
      return state + 6;
    case 'DUMMY_ACTION_267':
      return state + 7;
    case 'DUMMY_ACTION_268':
      return state + 8;
    case 'DUMMY_ACTION_269':
      return state + 9;
    case 'DUMMY_ACTION_270':
      return state + 0;
    case 'DUMMY_ACTION_271':
      return state + 1;
    case 'DUMMY_ACTION_272':
      return state + 2;
    case 'DUMMY_ACTION_273':
      return state + 3;
    case 'DUMMY_ACTION_274':
      return state + 4;
    case 'DUMMY_ACTION_275':
      return state + 5;
    case 'DUMMY_ACTION_276':
      return state + 6;
    case 'DUMMY_ACTION_277':
      return state + 7;
    case 'DUMMY_ACTION_278':
      return state + 8;
    case 'DUMMY_ACTION_279':
      return state + 9;
    case 'DUMMY_ACTION_280':
      return state + 0;
    case 'DUMMY_ACTION_281':
      return state + 1;
    case 'DUMMY_ACTION_282':
      return state + 2;
    case 'DUMMY_ACTION_283':
      return state + 3;
    case 'DUMMY_ACTION_284':
      return state + 4;
    case 'DUMMY_ACTION_285':
      return state + 5;
    case 'DUMMY_ACTION_286':
      return state + 6;
    case 'DUMMY_ACTION_287':
      return state + 7;
    case 'DUMMY_ACTION_288':
      return state + 8;
    case 'DUMMY_ACTION_289':
      return state + 9;
    case 'DUMMY_ACTION_290':
      return state + 0;
    case 'DUMMY_ACTION_291':
      return state + 1;
    case 'DUMMY_ACTION_292':
      return state + 2;
    case 'DUMMY_ACTION_293':
      return state + 3;
    case 'DUMMY_ACTION_294':
      return state + 4;
    case 'DUMMY_ACTION_295':
      return state + 5;
    case 'DUMMY_ACTION_296':
      return state + 6;
    case 'DUMMY_ACTION_297':
      return state + 7;
    case 'DUMMY_ACTION_298':
      return state + 8;
    case 'DUMMY_ACTION_299':
      return state + 9;
    case 'DUMMY_ACTION_300':
      return state + 0;
    case 'DUMMY_ACTION_301':
      return state + 1;
    case 'DUMMY_ACTION_302':
      return state + 2;
    case 'DUMMY_ACTION_303':
      return state + 3;
    case 'DUMMY_ACTION_304':
      return state + 4;
    case 'DUMMY_ACTION_305':
      return state + 5;
    case 'DUMMY_ACTION_306':
      return state + 6;
    case 'DUMMY_ACTION_307':
      return state + 7;
    case 'DUMMY_ACTION_308':
      return state + 8;
    case 'DUMMY_ACTION_309':
      return state + 9;
    case 'DUMMY_ACTION_310':
      return state + 0;
    case 'DUMMY_ACTION_311':
      return state + 1;
    case 'DUMMY_ACTION_312':
      return state + 2;
    case 'DUMMY_ACTION_313':
      return state + 3;
    case 'DUMMY_ACTION_314':
      return state + 4;
    case 'DUMMY_ACTION_315':
      return state + 5;
    case 'DUMMY_ACTION_316':
      return state + 6;
    case 'DUMMY_ACTION_317':
      return state + 7;
    case 'DUMMY_ACTION_318':
      return state + 8;
    case 'DUMMY_ACTION_319':
      return state + 9;
    case 'DUMMY_ACTION_320':
      return state + 0;
    case 'DUMMY_ACTION_321':
      return state + 1;
    case 'DUMMY_ACTION_322':
      return state + 2;
    case 'DUMMY_ACTION_323':
      return state + 3;
    case 'DUMMY_ACTION_324':
      return state + 4;
    case 'DUMMY_ACTION_325':
      return state + 5;
    case 'DUMMY_ACTION_326':
      return state + 6;
    case 'DUMMY_ACTION_327':
      return state + 7;
    case 'DUMMY_ACTION_328':
      return state + 8;
    case 'DUMMY_ACTION_329':
      return state + 9;
    case 'DUMMY_ACTION_330':
      return state + 0;
    case 'DUMMY_ACTION_331':
      return state + 1;
    case 'DUMMY_ACTION_332':
      return state + 2;
    case 'DUMMY_ACTION_333':
      return state + 3;
    case 'DUMMY_ACTION_334':
      return state + 4;
    case 'DUMMY_ACTION_335':
      return state + 5;
    case 'DUMMY_ACTION_336':
      return state + 6;
    case 'DUMMY_ACTION_337':
      return state + 7;
    case 'DUMMY_ACTION_338':
      return state + 8;
    case 'DUMMY_ACTION_339':
      return state + 9;
    case 'DUMMY_ACTION_340':
      return state + 0;
    case 'DUMMY_ACTION_341':
      return state + 1;
    case 'DUMMY_ACTION_342':
      return state + 2;
    case 'DUMMY_ACTION_343':
      return state + 3;
    case 'DUMMY_ACTION_344':
      return state + 4;
    case 'DUMMY_ACTION_345':
      return state + 5;
    case 'DUMMY_ACTION_346':
      return state + 6;
    case 'DUMMY_ACTION_347':
      return state + 7;
    case 'DUMMY_ACTION_348':
      return state + 8;
    case 'DUMMY_ACTION_349':
      return state + 9;
    case 'DUMMY_ACTION_350':
      return state + 0;
    case 'DUMMY_ACTION_351':
      return state + 1;
    case 'DUMMY_ACTION_352':
      return state + 2;
    case 'DUMMY_ACTION_353':
      return state + 3;
    case 'DUMMY_ACTION_354':
      return state + 4;
    case 'DUMMY_ACTION_355':
      return state + 5;
    case 'DUMMY_ACTION_356':
      return state + 6;
    case 'DUMMY_ACTION_357':
      return state + 7;
    case 'DUMMY_ACTION_358':
      return state + 8;
    case 'DUMMY_ACTION_359':
      return state + 9;
    case 'DUMMY_ACTION_360':
      return state + 0;
    case 'DUMMY_ACTION_361':
      return state + 1;
    case 'DUMMY_ACTION_362':
      return state + 2;
    case 'DUMMY_ACTION_363':
      return state + 3;
    case 'DUMMY_ACTION_364':
      return state + 4;
    case 'DUMMY_ACTION_365':
      return state + 5;
    case 'DUMMY_ACTION_366':
      return state + 6;
    case 'DUMMY_ACTION_367':
      return state + 7;
    case 'DUMMY_ACTION_368':
      return state + 8;
    case 'DUMMY_ACTION_369':
      return state + 9;
    case 'DUMMY_ACTION_370':
      return state + 0;
    case 'DUMMY_ACTION_371':
      return state + 1;
    case 'DUMMY_ACTION_372':
      return state + 2;
    case 'DUMMY_ACTION_373':
      return state + 3;
    case 'DUMMY_ACTION_374':
      return state + 4;
    case 'DUMMY_ACTION_375':
      return state + 5;
    case 'DUMMY_ACTION_376':
      return state + 6;
    case 'DUMMY_ACTION_377':
      return state + 7;
    case 'DUMMY_ACTION_378':
      return state + 8;
    case 'DUMMY_ACTION_379':
      return state + 9;
    case 'DUMMY_ACTION_380':
      return state + 0;
    case 'DUMMY_ACTION_381':
      return state + 1;
    case 'DUMMY_ACTION_382':
      return state + 2;
    case 'DUMMY_ACTION_383':
      return state + 3;
    case 'DUMMY_ACTION_384':
      return state + 4;
    case 'DUMMY_ACTION_385':
      return state + 5;
    case 'DUMMY_ACTION_386':
      return state + 6;
    case 'DUMMY_ACTION_387':
      return state + 7;
    case 'DUMMY_ACTION_388':
      return state + 8;
    case 'DUMMY_ACTION_389':
      return state + 9;
    case 'DUMMY_ACTION_390':
      return state + 0;
    case 'DUMMY_ACTION_391':
      return state + 1;
    case 'DUMMY_ACTION_392':
      return state + 2;
    case 'DUMMY_ACTION_393':
      return state + 3;
    case 'DUMMY_ACTION_394':
      return state + 4;
    case 'DUMMY_ACTION_395':
      return state + 5;
    case 'DUMMY_ACTION_396':
      return state + 6;
    case 'DUMMY_ACTION_397':
      return state + 7;
    case 'DUMMY_ACTION_398':
      return state + 8;
    case 'DUMMY_ACTION_399':
      return state + 9;
    case 'DUMMY_ACTION_400':
      return state + 0;
    case 'DUMMY_ACTION_401':
      return state + 1;
    case 'DUMMY_ACTION_402':
      return state + 2;
    case 'DUMMY_ACTION_403':
      return state + 3;
    case 'DUMMY_ACTION_404':
      return state + 4;
    case 'DUMMY_ACTION_405':
      return state + 5;
    case 'DUMMY_ACTION_406':
      return state + 6;
    case 'DUMMY_ACTION_407':
      return state + 7;
    case 'DUMMY_ACTION_408':
      return state + 8;
    case 'DUMMY_ACTION_409':
      return state + 9;
    case 'DUMMY_ACTION_410':
      return state + 0;
    case 'DUMMY_ACTION_411':
      return state + 1;
    case 'DUMMY_ACTION_412':
      return state + 2;
    case 'DUMMY_ACTION_413':
      return state + 3;
    case 'DUMMY_ACTION_414':
      return state + 4;
    case 'DUMMY_ACTION_415':
      return state + 5;
    case 'DUMMY_ACTION_416':
      return state + 6;
    case 'DUMMY_ACTION_417':
      return state + 7;
    case 'DUMMY_ACTION_418':
      return state + 8;
    case 'DUMMY_ACTION_419':
      return state + 9;
    case 'DUMMY_ACTION_420':
      return state + 0;
    case 'DUMMY_ACTION_421':
      return state + 1;
    case 'DUMMY_ACTION_422':
      return state + 2;
    case 'DUMMY_ACTION_423':
      return state + 3;
    case 'DUMMY_ACTION_424':
      return state + 4;
    case 'DUMMY_ACTION_425':
      return state + 5;
    case 'DUMMY_ACTION_426':
      return state + 6;
    case 'DUMMY_ACTION_427':
      return state + 7;
    case 'DUMMY_ACTION_428':
      return state + 8;
    case 'DUMMY_ACTION_429':
      return state + 9;
    case 'DUMMY_ACTION_430':
      return state + 0;
    case 'DUMMY_ACTION_431':
      return state + 1;
    case 'DUMMY_ACTION_432':
      return state + 2;
    case 'DUMMY_ACTION_433':
      return state + 3;
    case 'DUMMY_ACTION_434':
      return state + 4;
    case 'DUMMY_ACTION_435':
      return state + 5;
    case 'DUMMY_ACTION_436':
      return state + 6;
    case 'DUMMY_ACTION_437':
      return state + 7;
    case 'DUMMY_ACTION_438':
      return state + 8;
    case 'DUMMY_ACTION_439':
      return state + 9;
    case 'DUMMY_ACTION_440':
      return state + 0;
    case 'DUMMY_ACTION_441':
      return state + 1;
    case 'DUMMY_ACTION_442':
      return state + 2;
    case 'DUMMY_ACTION_443':
      return state + 3;
    case 'DUMMY_ACTION_444':
      return state + 4;
    case 'DUMMY_ACTION_445':
      return state + 5;
    case 'DUMMY_ACTION_446':
      return state + 6;
    case 'DUMMY_ACTION_447':
      return state + 7;
    case 'DUMMY_ACTION_448':
      return state + 8;
    case 'DUMMY_ACTION_449':
      return state + 9;
    case 'DUMMY_ACTION_450':
      return state + 0;
    case 'DUMMY_ACTION_451':
      return state + 1;
    case 'DUMMY_ACTION_452':
      return state + 2;
    case 'DUMMY_ACTION_453':
      return state + 3;
    case 'DUMMY_ACTION_454':
      return state + 4;
    case 'DUMMY_ACTION_455':
      return state + 5;
    case 'DUMMY_ACTION_456':
      return state + 6;
    case 'DUMMY_ACTION_457':
      return state + 7;
    case 'DUMMY_ACTION_458':
      return state + 8;
    case 'DUMMY_ACTION_459':
      return state + 9;
    case 'DUMMY_ACTION_460':
      return state + 0;
    case 'DUMMY_ACTION_461':
      return state + 1;
    case 'DUMMY_ACTION_462':
      return state + 2;
    case 'DUMMY_ACTION_463':
      return state + 3;
    case 'DUMMY_ACTION_464':
      return state + 4;
    case 'DUMMY_ACTION_465':
      return state + 5;
    case 'DUMMY_ACTION_466':
      return state + 6;
    case 'DUMMY_ACTION_467':
      return state + 7;
    case 'DUMMY_ACTION_468':
      return state + 8;
    case 'DUMMY_ACTION_469':
      return state + 9;
    case 'DUMMY_ACTION_470':
      return state + 0;
    case 'DUMMY_ACTION_471':
      return state + 1;
    case 'DUMMY_ACTION_472':
      return state + 2;
    case 'DUMMY_ACTION_473':
      return state + 3;
    case 'DUMMY_ACTION_474':
      return state + 4;
    case 'DUMMY_ACTION_475':
      return state + 5;
    case 'DUMMY_ACTION_476':
      return state + 6;
    case 'DUMMY_ACTION_477':
      return state + 7;
    case 'DUMMY_ACTION_478':
      return state + 8;
    case 'DUMMY_ACTION_479':
      return state + 9;
    case 'DUMMY_ACTION_480':
      return state + 0;
    case 'DUMMY_ACTION_481':
      return state + 1;
    case 'DUMMY_ACTION_482':
      return state + 2;
    case 'DUMMY_ACTION_483':
      return state + 3;
    case 'DUMMY_ACTION_484':
      return state + 4;
    case 'DUMMY_ACTION_485':
      return state + 5;
    case 'DUMMY_ACTION_486':
      return state + 6;
    case 'DUMMY_ACTION_487':
      return state + 7;
    case 'DUMMY_ACTION_488':
      return state + 8;
    case 'DUMMY_ACTION_489':
      return state + 9;
    case 'DUMMY_ACTION_490':
      return state + 0;
    case 'DUMMY_ACTION_491':
      return state + 1;
    case 'DUMMY_ACTION_492':
      return state + 2;
    case 'DUMMY_ACTION_493':
      return state + 3;
    case 'DUMMY_ACTION_494':
      return state + 4;
    case 'DUMMY_ACTION_495':
      return state + 5;
    case 'DUMMY_ACTION_496':
      return state + 6;
    case 'DUMMY_ACTION_497':
      return state + 7;
    case 'DUMMY_ACTION_498':
      return state + 8;
    case 'DUMMY_ACTION_499':
      return state + 9;
    case 'DUMMY_ACTION_500':
      return state + 0;
    default:
      return state;
  }
}
