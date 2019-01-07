const initialState = {
    authenticated: false,
    korq: true,
    candidates: {
        king: [{
            id: "khant_zayar_one",
            name: "Khant Zayar One",
            major: "Architectural Engineering",
            contestantno: 1,
            img_source: "/asset/2018/boys/archi-khant_zayar-one.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "min_thiha_kyaw",
            name: "Min Thiha Kyaw",
            major: "Architectural Engineering",
            contestantno: 2,
            img_source: "/asset/2018/boys/archi-min_thiha_kyaw.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "khant_zin_ko",
            name: "Khant Zin Ko",
            major: "Computer Enginnering & Information Technology",
            contestantno: 3,
            img_source: "/asset/2018/boys/ceit-khant_zin_ko.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "saw_yan_naing",
            name: "Saw Yan Naing",
            major: "Computer Enginnering & Information Technology",
            contestantno: 4,
            img_source: "/asset/2018/boys/ceit-saw_yan_naing.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "kyaw_zin_lin",
            name: "Kyaw Zin Lin",
            major: "Chemical Engineering",
            contestantno: 5,
            img_source: "/asset/2018/boys/chem-kyaw_zin_lin.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "phyo_sithu_aung",
            name: "Phyo Sithu Aung",
            major: "Chemical Engineering",
            contestantno: 6,
            img_source: "/asset/2018/boys/chem-phyo_sithu_aung.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "sai_swam_khan",
            name: "Sai Swam Khan",
            major: "Civil Enginnering",
            contestantno: 7,
            img_source: "/asset/2018/boys/civil-sai_swam_khan.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "ye_htut_thet_hnin",
            name: "Ye Htut Thet hnin",
            major: "Civil",
            contestantno: 8,
            img_source: "/asset/2018/boys/civil-ye_htut_thet_hnin.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "hein_htet_aung",
            name: "Hein Htet Aung",
            major: "Electronics",
            contestantno: 9,
            img_source: "/asset/2018/boys/ec-hein_htet_aung.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "lwin_moe_htet",
            name: "Lwin Moe Htet",
            major: "Electronics",
            contestantno: 10,
            img_source: "/asset/2018/boys/ec-lwin_moe_htet.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "aung_nyein_chan",
            name: "Aung Nyein Chan",
            major: "Electrical Power Engineering",
            contestantno: 11,
            img_source: "/asset/2018/boys/ep-aung_nyein_chan.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "kaung_min_khant",
            name: "Kaung Min Khant",
            major: "Electrical Power Engineering",
            contestantno: 12,
            img_source: "/asset/2018/boys/ep-kaung_min_khant.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "nyi_kaung_san",
            name: "Nyi Kaung San",
            major: "Mechanical Engineering",
            contestantno: 13,
            img_source: "/asset/2018/boys/mech-nyi_kaung_san.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "thant_thuta",
            name: "Thant Thuta",
            major: "Mechanical Engineering",
            contestantno: 14,
            img_source: "/asset/2018/boys/mech-thant_thuta.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "kaung_khant_zaw",
            name: "Kaung Khant Zaw",
            major: "Mechatronics",
            contestantno: 15,
            img_source: "/asset/2018/boys/mecha-kaung_khant_zaw.jpg",
            disabled: false,
            kingqueen: "king"
        }, {
            id: "thurein_htet",
            name: "Thurain Htet",
            major: "Mechatronics",
            contestantno: 16,
            img_source: "/asset/2018/boys/mecha-thurein_htet.jpg",
            disabled: false,
            kingqueen: "king"
        }],
        queen: [{
            id: "nan_aye_chan_phyu",
            name: "Nan Aye Chan Phyu",
            major: "Architecture",
            contestantno: 1,
            img_source: "/asset/2018/girls/achi-nan_aye_chan_phyu.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "khine_nyein_san",
            name: "Khine Nyein San",
            major: "Architecture",
            contestantno: 2,
            img_source: "/asset/2018/girls/archi-khine_nyein_san.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "khin_myat_lay_phyu",
            name: "Khin Myat Lay Phyu",
            major: "Computer Engineering & Information Technology",
            contestantno: 3,
            img_source: "/asset/2018/girls/ceit-khin_myat_lay_phyu.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "theint_thanzin_oo",
            name: "Theint Thanzin Oo",
            major: "Computer Engineering & Information Technology",
            contestantno: 4,
            img_source: "/asset/2018/girls/ceit-theint_thanzin_oo.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "htake_htar_san",
            name: "Htake Htar San",
            major: "Chemical Engineering",
            contestantno: 5,
            img_source: "/asset/2018/girls/chem-htake_htar_san.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "phuu_pwint_thawdar_khaing",
            name: "Phuu Pwint Thawdar Khaing",
            major: "Chemical Engineering",
            contestantno: 6,
            img_source: "/asset/2018/girls/chem-phuu_pwint_thawdar_khaing.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "eaindray_chit_su",
            name: "Eaindray Chit Su",
            major: "Civil Engineering",
            contestantno: 7,
            img_source: "/asset/2018/girls/civil-eaindray_chit_su.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "thandar",
            name: "Thandar",
            major: "Civil Engineering",
            contestantno: 8,
            img_source: "/asset/2018/girls/civil-thandar.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "eaint_khet_wai",
            name: "Eaint Khet Wai",
            major: "Electronic Engineering",
            contestantno: 9,
            img_source: "/asset/2018/girls/ec-eaint_khet_wai.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "nay_chi_soe",
            name: "Nay Chi Soe",
            major: "Electronics Engineering",
            contestantno: 10,
            img_source: "/asset/2018/girls/ec-nay_chi_soe.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "hnin_wityee_hein",
            name: "hnin Wityee Hein",
            major: "Electrical Power Engineering",
            contestantno: 11,
            img_source: "/asset/2018/girls/ep-hnin_wityee_hein.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "su_su_yee",
            name: "Su Su Yee",
            major: "Electrical Power Engineering",
            contestantno: 12,
            img_source: "/asset/2018/girls/ep-su_su_yee.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "hnin_htet_htet",
            name: "Hnin Htet Htet",
            major: "Mechanical Engineering",
            contestantno: 13,
            img_source: "/asset/2018/girls/mech-hnin_htet_htet.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "thoon_shwe_sin",
            name: "Thoon Shwe Sin",
            major: "Mechanical Engineering",
            contestantno: 14,
            img_source: "/asset/2018/girls/mech-thoon_shwe_sin.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "chaw_claire",
            name: "Chaw Kalayar",
            major: "Mechatronic Engineering",
            contestantno: 15,
            img_source: "/asset/2018/girls/mecha-chaw_claire.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "hnin_oo_wityee",
            name: "Hnin oo Wityee",
            major: "Mehcatronic Engineering",
            contestantno: 16,
            img_source: "/asset/2018/girls/mecha-hnin_oo_wityee.jpg",
            disabled: false,
            kingqueen: "queen"
        }, {
            id: "may_thu_thu_kyaw",
            name: "May Thu Thu Kyaw",
            major: "Mining",
            contestantno: 16,
            img_source: "/asset/2018/girls/mining-may_thu_thu_kyaw.jpg",
            disabled: false,
            kingqueen: "queen"
        }]
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                authenticated: true
            }

        case "KORQ_TOGGLE":
            return {
                ...state,
                korq: action.kingorqueen
            }

        case "VOTED_ARRAY_CREATE":
            if (action.kingOrQueen === "king")
                state.candidates.king.forEach((element) => { element.disabled = true });
            if (action.kingOrQueen === "queen")
                state.candidates.queen.forEach((element) => { element.disabled = true });
            return {
                ...state,
                candidates: {
                    king: state.candidates.king,
                    queen: state.candidates.queen
                }
            }


        case "ON_CLICK_VOTE_STATE_CHANGE":
            if(action.voting){
                if (action.kingOrQueen === "king")
                    state.candidates.king.forEach((element) => { element.loading = true });
                if (action.kingOrQueen === "queen")
                    state.candidates.queen.forEach((element) => { element.loading = true });
            }
            else{
                if (action.kingOrQueen === "king")
                    state.candidates.king.forEach((element) => { element.loading = false });
                if (action.kingOrQueen === "queen")
                    state.candidates.queen.forEach((element) => { element.loading = false });
            }
            return {
                ...state,
                candidates: {
                    king: state.candidates.king,
                    queen: state.candidates.queen
                }
            }

        default:
            return state;
    }
}