import type { EntityObject } from '../types/class/entity'
import type { Scope } from '../types/entry'

type Blocks = {
  name: string
  template?: string
  color: {
    default: string
    darken?: string
  }
  params?: unknown[]
  def?: unknown
  map?: Record<string, number>
  class?: string
  func?(sprite: EntityObject, script: Scope): unknown
  skeleton?: string
}[]

declare global {
  var useWebGL: unknown
}

export const blockMenuBlocks = [
  'firsttext',
  'SearchGoogle',
  'SearchNaver',
  'SearchDaum',
  'oepnlink',
  'oepnent2.ml',
  'OpenUserPage',
  'OpenStaffselection',
  'texttwotext',
  'boostMode',
  'textthreetext',
  'get',
  'textonetext',
]

export const getStrongBlocks = (): Blocks => [
//////////////////////////////////////
      
//////////////////////////////////////
    {
      name: 'firsttext', // 이름 지정
      template: '%1', // 표시할 내용
      skeleton: 'basic_text', // 형식(기본 텍스트)
      color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
      },
      params: [ // %n의 형식 지정
        { // %1의 형식 정의
          type: 'Text', // 텍스트 형식
          text: '웹', // 표시 내용
          color: EntryStatic.colorSet.common.TEXT, // 검은색
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: 'text'
    },
//////////////////////////////////////

//////////////////////////////////////
    {
      name: 'SearchGoogle', // 블럭 이름 지정
      template: '%1 를(을) 구글에 검색하기', // 표시할 내용
      skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
      color: { // 색깔
        default: '#990033', //RGB 색깔
        darken: '#750028' //RGB 색깔
      },
      params: [ // %n 정의
        { // %1 정의
          type: 'Block', // 형식 지정(입력값)
          accept: 'string'
        }
      ],
      def: [ // %n 기본값
        { // %1 정의
          type: 'text',
          params: ['entry'] // 기본으로 입력된 값
        },
        null // %2 정의(이미지 형식이므로 null로 설정)
      ],
      map: {
        SEARCHRESULT: 0 // %1의 입력값을 불러올 변수 이름(대문자)
      },
      class: 'text',
      func: async (sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        open('https://google.com/search?q=' + script.getValue('SEARCHRESULT', script));
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
      },
    },
//////////////////////////////////////

//////////////////////////////////////
    {
      name: 'SearchNaver', // 블럭 이름 지정
      template: '%1 를(을) 네이버에 검색하기', // 표시할 내용
      skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
      color: { // 색깔
        default: '#00ff00', //RGB 색깔
        darken: '#1DDB16' //RGB 색깔
      },
      params: [ // %n 정의
        { // %1 정의
          type: 'Block', // 형식 지정(입력값)
          accept: 'string'
        }
      ],
      def: [ // %n 기본값
        { // %1 정의
          type: 'text',
          params: ['entry'] // 기본으로 입력된 값
        },
        null // %2 정의(이미지 형식이므로 null로 설정)
      ],
      map: {
        SEARCHRESULT: 0 // %1의 입력값을 불러올 변수 이름(대문자)
      },
      class: 'text',
      func: async (sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + script.getValue('SEARCHRESULT', script));
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
      },
    },
//////////////////////////////////////

//////////////////////////////////////
    {
      name: 'SearchDaum', // 블럭 이름 지정
      template: '%1 를(을) 다음에 검색하기', // 표시할 내용
      skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
      color: { // 색깔
        default: '#ff69b4', //RGB 색깔
        darken: '#ff69b4' //RGB 색깔
      },
      params: [ // %n 정의
        { // %1 정의
          type: 'Block', // 형식 지정(입력값)
          accept: 'string'
        }
      ],
      def: [ // %n 기본값
        { // %1 정의
          type: 'text',
          params: ['entry'] // 기본으로 입력된 값
        },
        null // %2 정의(이미지 형식이므로 null로 설정)
      ],
      map: {
        SEARCHRESULT: 0 // %1의 입력값을 불러올 변수 이름(대문자)
      },
      class: 'text',
      func: async (sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        open('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + script.getValue('SEARCHRESULT', script));
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
      },
    },
//////////////////////////////////////

//////////////////////////////////////
    {
      name: 'oepnlink', // 블럭 이름 지정
      template: '%1 URL열기(URL을 입력하세요)%2', // 표시할 내용
      skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
      color: { // 색깔
        default: '#5cd1e5', //RGB 색깔
        darken: '#4abfd3' //RGB 색깔
      },
      params: [ // %n 정의
        { // %1 정의
          type: 'Block', // 형식 지정(입력값)
          accept: 'string'
        },
        { // %2 정의
          type: 'Indicator', // 형식 지정(이미지)
          img: 'beta_tag.svg', // 이미지 링크
          size: 11, // 크기
        }
      ],
      def: [ // %n 기본값
        { // %1 정의
          type: 'text',
          params: ['https://playentry.org'] // 기본으로 입력된 값
        },
        null // %2 정의(이미지 형식이므로 null로 설정)
      ],
      map: {
        SEARCHRESULT: 0 // %1의 입력값을 불러올 변수 이름(대문자)
      },
      class: 'text',
      func: async (sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        open(script.getValue('SEARCHRESULT', script));
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
      },
    },
//////////////////////////////////////

//////////////////////////////////////
      {
      name: 'oepnent2.ml', // 블럭 이름 지정
      template: '%1 ent2.ml 업데이트중이라서 사용 불가', // 표시할 내용
      skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
      color: { // 색깔
        default: '#FF8224', //RGB 색깔
        darken: '#FF8224' //RGB 색깔
      },
      params: [ // %n 정의
        { // %1 정의
          type: 'Block', // 형식 지정(입력값)
          accept: 'string'
        }
      ],
      def: [ // %n 기본값
        { // %1 정의
          type: 'text',
          params: [''] // 기본으로 입력된 값
        }
      ],
      map: {
        SEARCHRESULT: 0 // %1의 입력값을 불러올 변수 이름(대문자)
      },
      class: 'text',
      func: async (sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        open('https://ent2.ml/' + script.getValue('SEARCHRESULT', script));
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
      },
    },
//////////////////////////////////////

//////////////////////////////////////
    {
    name: 'OpenUserPage',
    template: '%1 아이디를 가진 유저의 마이페이지 열기',
    skeleton: 'basic',
    color: {
      default: '#8c8c8c',
      darken: '#8c8c8c'
    },
    params: [
      {
        type: 'Block',
        accept: 'string'
      }
    ],
    def: [
      {
        type: 'text',
        params: ['5e5259eadf7dfa00496c63b1']
      },
      null
    ],
    map: {
      USERNAME: 0
    },
    class: 'text',
    func: async (sprite, script) => {
      open('https://playentry.org/' + script.getValue('USERNAME', script));
      return script.callReturn();
    },
    },
//////////////////////////////////////

//////////////////////////////////////
{
    name: 'OpenStaffselection',
    template: '스태프선정 구경하기',
    skeleton: 'basic',
    color: {
      default: '#000000',
      darken: '#000000'
    },
    map: {
      USERNAME: 0
    },
    class: 'text',
    func: async (sprite, script) => {
      open('https://playentry.org/project/list/staffpick');
      return script.callReturn();
    },
    },
//////////////////////////////////////

//////////////////////////////////////
      {
      name: 'texttwotext', // 이름 지정
      template: '%1', // 표시할 내용
      skeleton: 'basic_text', // 형식(기본 텍스트)
      color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
      },
      params: [ // %n의 형식 지정
        { // %1의 형식 정의
          type: 'Text', // 텍스트 형식
          text: '판단', // 표시 내용
          color: EntryStatic.colorSet.common.TEXT, // 검은색
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: 'text'
    },
//////////////////////////////////////

//////////////////////////////////////
    {
    name: 'boostMode',
    template: '부스트 모드가 켜져 있는가?',
    skeleton: 'basic_boolean_field',
    color: {
      default: '#66cdaa',
      darken: '#59B395'
    },
    params: [],
    def: [],
    map: {},
    class: 'text',
    func: async (sprite, script) => {
      (typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false;
    },
    },
//////////////////////////////////////

//////////////////////////////////////
      {
      name: 'textthreetext', // 이름 지정
      template: '%1', // 표시할 내용
      skeleton: 'basic_text', // 형식(기본 텍스트)
      color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
      },
      params: [ // %n의 형식 지정
        { // %1의 형식 정의
          type: 'Text', // 텍스트 형식
          text: '데이터', // 표시 내용
          color: EntryStatic.colorSet.common.TEXT, // 검은색
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: 'text'
    },
//////////////////////////////////////

//////////////////////////////////////
      {
name: 'get', // 블럭 이름
template: '%1 가져오기 (GET)', // %n으로 입력값 설정 가능
skeleton: 'basic_string_field', // 대입 가능한 블럭 형식 지정
color: {
default: '#383838', // 색깔
darken: '#383838' // 색깔
},
params: [
{ // %1 정의(입력값)
type: 'Block',
accept: 'string'
}
],
def: [
{ // %1의 기본
type: 'text',
params: ['https://playentry.org/api/discuss/findNotice'] // 기본값 내용
}
],
map: {
APIURL: 0 // %1에서 입력받은 값 받을 변수 이름 지정
},
class: 'text',
func: async (sprite, script) => { // 코드
let res = await fetch(script.getValue('APIURL', script)); // 불러오기
let data = await res.json(); // json 변환
return data; // 반환
},
},
//////////////////////////////////////

//////////////////////////////////////
    {
        name: 'textonetext', // 이름 지정
        template: '%1', // 표시할 내용
        skeleton: 'basic_text', // 형식(기본 텍스트)
        color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
        },
        params: [ // %n의 형식 지정
            { // %1의 형식 정의
                type: 'Text', // 텍스트 형식
                text: 'Made by simonj, v1.0.1', // 표시 내용
                color: EntryStatic.colorSet.common.TEXT, // 검은색
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    }
//////////////////////////////////////
]
