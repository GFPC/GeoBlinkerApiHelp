import {test_loginByEmailAndPassword, test_loginByEmailCode} from "./scripts/login";
import {test_registerByPhone, test_registerByTelegram} from "./scripts/register";
import {test_edit_me, test_get_my_profile, test_get_users_profiles} from "./scripts/user";

// LOGIN
//test_loginByPhoneCode("79135550015")
//test_loginByTelegramCode('79135550015')
//test_loginByWhatsapp('79135550015')
//test_loginByEmailAndPassword('doctor@doctor.ru', '093588059')
//test_loginByEmailCode('fgrgi@ya.ru')

// REGISTER
//test_registerByPhone('7913555001512', '5')

// USER
async function test_script_get_users_profiles() {
    const {token, u_hash} = await test_loginByEmailAndPassword('doctor@doctor.ru', '093588059')
    const id_list = ['829']
    const auth = {token, u_hash}
    const users = await test_get_users_profiles(id_list, auth)
    console.log('users: ', users.data)
}
//test_script_get_users_profiles()
async function test_script_edit_me() {
    const {token, u_hash} = await test_loginByEmailAndPassword('doctor@doctor.ru', '093588059')

    //Параметр u_details должены быть массивом:
    //    [
    //        ["=",["ключ1","ключ2","ключ3","ключ4",...],архив|строка|число|NULL],
    //        ["+",["ключ1","ключ2","ключ3","ключ4",...],архив|строка|число|NULL],
    //        ["-",["ключ1","ключ2","ключ3","ключ4",...]]
    //    ]
    // Последовательность ключей
    //     ["ключ1","ключ2","ключ3","ключ4"]
    // определяет элемент
    // u_details["ключ1"]["ключ2"]["ключ3"]["ключ4"]
    const data = {
        u_name: 'a',
        u_middle: 'b',
        u_family: 'c',
        u_details: [
            ['=', ['clinic_name'], 'Ranordo'],  // здесь для примера названия полей взял
            ['=', ['clinic_address'], 'F-street 23']
        ]
    }
    const auth = {token, u_hash}
    const users = await test_edit_me(data, auth)
    console.log('edit me response: ', users.data)
    // при успешно редактировании status=success и data = {affected_fields: [...], forbidden_fields: [...]}, названия полей в forbidden_fields - те, что не удалось записать/обновить, на это забивать не стоит
}
//test_script_edit_me()
async function test_script_get_me() {
    const {token, u_hash} = await test_loginByEmailAndPassword('doctor@doctor.ru', '093588059')
    const auth = {token, u_hash}
    const users = await test_get_my_profile(auth)
    console.log('get me response: ', users.data)
}
//test_script_get_me()